require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const axios   = require('axios');
const fs      = require('fs');
const path    = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use((req, res, next) => {
    if (req.path === '/history.json') return res.status(403).end();
    if (req.path === '/player-cache.json') return res.status(403).end();
    next();
});

app.use(express.static('.'));

const PORT = process.env.PORT || 3000;
const RIOT_API_KEY = process.env.RIOT_API_KEY;

const REGIONAL_ROUTE = {
    na1: 'americas', br1: 'americas', la1: 'americas', la2: 'americas', pbe1: 'americas',
    euw1: 'europe', eun1: 'europe', tr1: 'europe', ru: 'europe',
    kr: 'asia', jp1: 'asia',
    oc1: 'americas'
};

const LOG_VERBOSE = true;

let requestSeq = 0;
const nextId = () => 'r' + String(++requestSeq).padStart(3, '0');

function stamp() {
    const d   = new Date();
    const pad = (n, w = 2) => String(n).padStart(w, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`;
}

function log(id, step, msg) {
    if (!LOG_VERBOSE) return;
    console.log(`[${stamp()}] ${id} ${step.padEnd(6)} ${msg}`);
}

function logErr(id, step, msg) {
    console.error(`[${stamp()}] ${id} ${step.padEnd(6)} ${msg}`);
}

const RATE_PER_SECOND  = 20;
const RATE_PER_TWO_MIN = 100;

const TTL = {
    account:  24 * 60 * 60 * 1000,
    summoner: 60 * 60 * 1000,
    mastery:  15 * 60 * 1000
};

const responseCache = new Map();
const requestTimes  = [];
let   pipeline      = Promise.resolve();

function cacheGet(url) {
    const hit = responseCache.get(url);
    if (!hit) return null;
    if (hit.expires < Date.now()) { responseCache.delete(url); return null; }
    return hit.data;
}

function cacheSet(url, data, ttl) {
    responseCache.set(url, { data, expires: Date.now() + ttl });
}

function throughPipeline(id, fn) {
    const run = pipeline.then(async () => {
        let waited = 0;

        while (true) {
            const now = Date.now();
            while (requestTimes.length && requestTimes[0] < now - 120000) requestTimes.shift();
            const lastSecond = requestTimes.filter(t => t > now - 1000).length;

            if (requestTimes.length < RATE_PER_TWO_MIN && lastSecond < RATE_PER_SECOND) {
                requestTimes.push(now);
                if (waited > 500) {
                    log(id, 'slot', `granted after ${waited}ms in queue`);
                }
                return fn();
            }

            if (waited === 0) {
                log(id, 'queue',
                    `waiting - ${requestTimes.length}/${RATE_PER_TWO_MIN} in 2min, ` +
                    `${lastSecond}/${RATE_PER_SECOND} in last sec`);
            }
            await new Promise(r => setTimeout(r, 100));
            waited += 100;
        }
    });
    pipeline = run.catch(() => {});
    return run;
}

function getRateStatus() {
    const now = Date.now();
    while (requestTimes.length && requestTimes[0] < now - 120000) requestTimes.shift();

    const recentSecond = requestTimes.filter(t => t > now - 1000).length;

    let resetIn2min = 0;
    if (requestTimes.length >= RATE_PER_TWO_MIN) {
        resetIn2min = Math.ceil((requestTimes[0] + 120000 - now) / 1000);
    }

    return {
        used2min:       requestTimes.length,
        usedLastSecond: recentSecond,
        resetIn2min,
        limits: {
            perSecond: RATE_PER_SECOND,
            perTwoMin: RATE_PER_TWO_MIN
        }
    };
}

async function riotGet(url, ttl, label) {
    const id      = nextId();
    const started = Date.now();
    const tag     = label || url;

    const cached = cacheGet(url);
    if (cached !== null) {
        log(id, 'cache', `hit ${tag}`);
        return cached;
    }

    log(id, 'start', tag);

    try {
        return await throughPipeline(id, async () => {

            const cachedNow = cacheGet(url);
            if (cachedNow !== null) {
                log(id, 'cache', `hit after queue ${tag}`);
                return cachedNow;
            }

            log(id, 'send', url);

            const response = await axios.get(url, {
                headers: { 'X-Riot-Token': RIOT_API_KEY },
                timeout: 15000
            });
            cacheSet(url, response.data, ttl);

            log(id, 'ok', `${Date.now() - started}ms ${tag}`);
            return response.data;
        });
    } catch (err) {
        const status = err.response ? err.response.status : 0;

        if (status === 429) {


            const retryAfter = err.response.headers['retry-after'] || '?';
            logErr(id, '429', `${Date.now() - started}ms ${tag} | retry-after ${retryAfter}s`);
        } else {
            const detail = err.response
                ? `HTTP ${status} ${JSON.stringify(err.response.data)}`
                : `${err.code || 'ERROR'} ${err.message}`;
            logErr(id, 'FAIL', `${Date.now() - started}ms ${tag} | ${detail}`);
        }
        throw err;
    }
}

async function proxyRiot(res, url, ttl, label) {
    try {
        res.json(await riotGet(url, ttl, label));
    } catch (err) {
        const status  = err.response ? err.response.status : 500;
        const message = err.response ? JSON.stringify(err.response.data) : err.message;

        if (err.response && err.response.headers['retry-after']) {
            res.set('Retry-After', err.response.headers['retry-after']);
        }
        res.status(status).send(message);
    }
}

app.get('/account/:region/:gameName/:tagLine', (req, res) => {
    const { region, gameName, tagLine } = req.params;
    const route = REGIONAL_ROUTE[region] || 'americas';

    proxyRiot(
        res,
        `https://${route}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/` +
            `${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`,
        TTL.account,
        `/account [${region}] ${gameName}#${tagLine}`
    );
});

app.get('/mastery/:region/:puuid', (req, res) => {
    const { region, puuid } = req.params;

    const host = region;

    proxyRiot(
        res,
        `https://${host}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`,
        TTL.mastery,
        `/mastery [${region}] ${puuid.slice(0, 8)}…`
    );
});

app.get('/summoner/:region/:puuid', (req, res) => {
    const { region, puuid } = req.params;
    const host = region;

    proxyRiot(
        res,
        `https://${host}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
        TTL.summoner,
        `/summoner [${region}] ${puuid.slice(0, 8)}…`
    );
});

const HISTORY_FILE  = path.join(__dirname, 'history.json');
const HISTORY_LIMIT = 500;

const isSafeId = id => /^[A-Za-z0-9_-]{1,64}$/.test(id);

function loadHistory() {
    let raw;
    try {
        raw = fs.readFileSync(HISTORY_FILE, 'utf8');
    } catch (err) {
        if (err.code !== 'ENOENT') console.warn('history.json unreadable:', err.message);
        return {};
    }
    if (!raw.trim()) return {};

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (err) {
        console.warn('history.json is corrupt, starting fresh:', err.message);
        return {};
    }
    if (!parsed || typeof parsed !== 'object') return {};

    const out = {};
    for (const [id, value] of Object.entries(parsed)) {
        if (Array.isArray(value)) {
            out[id] = { name: null, history: value };
        } else if (value && Array.isArray(value.history)) {
            out[id] = { name: value.name || null, history: value.history };
        }
    }
    return out;
}

function serializeHistory(data) {
    const blocks = Object.keys(data).map(id => {
        const record  = data[id] || { name: null, history: [] };
        const entries = record.history || [];

        const lines = [`  ${JSON.stringify(id)}: {`];
        if (record.name) lines.push(`    "name": ${JSON.stringify(record.name)},`);

        if (entries.length === 0) {
            lines.push(`    "history": []`);
        } else {
            lines.push(`    "history": [`);
            entries.forEach((e, i) => {
                const comma = i < entries.length - 1 ? ',' : '';
                lines.push(
                    `      { "date": ${JSON.stringify(e.date)}, "points": ${e.points} }${comma}`
                );
            });
            lines.push(`    ]`);
        }

        lines.push(`  }`);
        return lines.join('\n');
    });

    return '{\n' + blocks.join(',\n') + '\n}\n';
}

function saveHistory() {
    const tmp = HISTORY_FILE + '.tmp';
    fs.writeFileSync(tmp, serializeHistory(history));
    fs.renameSync(tmp, HISTORY_FILE);
}

let history = loadHistory();

app.get('/history/:playerId', (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const record = history[playerId];
    res.json(record ? record.history : []);
});

app.post('/history/:playerId', (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const body   = req.body || {};
    const points = Number(body.points);
    if (!Number.isFinite(points) || points < 0) {
        return res.status(400).json({ error: 'points must be a non-negative number.' });
    }

    const name = typeof body.name === 'string' ? body.name.slice(0, 64) : null;

    const record = history[playerId] || (history[playerId] = { name: null, history: [] });
    if (name) record.name = name;

    const entries = record.history;
    const last    = entries[entries.length - 1];

    if (last && last.points === points) {
        last.date = new Date().toISOString();
    } else {
        entries.push({ date: new Date().toISOString(), points });
        if (entries.length > HISTORY_LIMIT) entries.splice(0, entries.length - HISTORY_LIMIT);
    }

    try {
        saveHistory();
    } catch (err) {
        console.error('Could not write history.json:', err.message);
        return res.status(500).json({ error: 'Could not save history.' });
    }

    res.json(entries);
});

const CACHE_FILE = path.join(__dirname, 'player-cache.json');

function loadPlayerCache() {
    try {
        const raw = fs.readFileSync(CACHE_FILE, 'utf8');
        if (!raw.trim()) return {};
        const parsed = JSON.parse(raw);
        return (parsed && typeof parsed === 'object') ? parsed : {};
    } catch (err) {
        if (err.code !== 'ENOENT') console.warn('player-cache.json unreadable:', err.message);
        return {};
    }
}

function savePlayerCache() {
    const tmp = CACHE_FILE + '.tmp';

    const lines = Object.keys(playerCache).map(id =>
        `  ${JSON.stringify(id)}: ${JSON.stringify(playerCache[id])}`
    );
    fs.writeFileSync(tmp, '{\n' + lines.join(',\n') + '\n}\n');
    fs.renameSync(tmp, CACHE_FILE);
}

let playerCache = loadPlayerCache();

app.get('/player-cache/:playerId', (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });
    res.json(playerCache[playerId] || null);
});

app.post('/player-cache/:playerId', (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const body = req.body;
    if (!body || typeof body !== 'object' || !Array.isArray(body.list)) {
        return res.status(400).json({ error: 'Body must be an object with a `list` array.' });
    }

    playerCache[playerId] = {
        name:         typeof body.name === 'string' ? body.name.slice(0, 64) : null,
        updated:      new Date().toISOString(),
        accountCount: Number(body.accountCount) || 0,
        totalPoints:  Number(body.totalPoints) || 0,
        list:         body.list,
        perAccount:   Array.isArray(body.perAccount) ? body.perAccount : [],
        failures:     Array.isArray(body.failures) ? body.failures : [],
        timePlayed:   body.timePlayed || null
    };

    try {
        savePlayerCache();
    } catch (err) {
        console.error('Could not write player-cache.json:', err.message);
        return res.status(500).json({ error: 'Could not save cache.' });
    }

    res.json(playerCache[playerId]);
});

app.get('/rate-status', (req, res) => {
    res.json(getRateStatus());
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
    console.log(`Verbose logging is ${LOG_VERBOSE ? 'ON' : 'OFF'} (LOG_VERBOSE in server.js).`);
});