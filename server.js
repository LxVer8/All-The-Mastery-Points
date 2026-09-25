require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const axios   = require('axios');
const path    = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use(express.static('.'));

const PORT = process.env.PORT || 3000;
const RIOT_API_KEY = process.env.RIOT_API_KEY;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

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

const isSafeId = id => /^[A-Za-z0-9_-]{1,64}$/.test(id);

const HISTORY_LIMIT = 500;

app.get('/history/:playerId', async (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const { data, error } = await supabase
        .from('mastery_history')
        .select('points, recorded_at')
        .eq('player_id', playerId)
        .order('recorded_at', { ascending: true })
        .limit(HISTORY_LIMIT);

    if (error) {
        console.error('Supabase history read failed:', error.message);
        return res.status(500).json({ error: error.message });
    }

    res.json((data || []).map(r => ({ date: r.recorded_at, points: r.points })));
});

app.post('/history/:playerId', async (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const body   = req.body || {};
    const points = Number(body.points);
    if (!Number.isFinite(points) || points < 0) {
        return res.status(400).json({ error: 'points must be a non-negative number.' });
    }

    const name = typeof body.name === 'string' ? body.name.slice(0, 64) : null;

    const { error: readErr, data: lastRows } = await supabase
        .from('mastery_history')
        .select('id, points')
        .eq('player_id', playerId)
        .order('recorded_at', { ascending: false })
        .limit(1);

    if (readErr) {
        console.error('Supabase history read-before-write failed:', readErr.message);
        return res.status(500).json({ error: readErr.message });
    }

    const last = lastRows && lastRows[0];

    if (last && last.points === points) {
        const { error: updateErr } = await supabase
            .from('mastery_history')
            .update({ recorded_at: new Date().toISOString() })
            .eq('id', last.id);

        if (updateErr) {
            console.error('Supabase history update failed:', updateErr.message);
            return res.status(500).json({ error: updateErr.message });
        }
    } else {
        const { error: insertErr } = await supabase
            .from('mastery_history')
            .insert({ player_id: playerId, player_name: name, points });

        if (insertErr) {
            console.error('Supabase history insert failed:', insertErr.message);
            return res.status(500).json({ error: insertErr.message });
        }

        const { data: excess } = await supabase
            .from('mastery_history')
            .select('id')
            .eq('player_id', playerId)
            .order('recorded_at', { ascending: false })
            .range(HISTORY_LIMIT, HISTORY_LIMIT + 500);

        if (excess && excess.length > 0) {
            const { error: pruneErr } = await supabase
                .from('mastery_history')
                .delete()
                .in('id', excess.map(r => r.id));

            if (pruneErr) console.warn('Could not prune old history:', pruneErr.message);
        }
    }

    const { data: all, error: fetchErr } = await supabase
        .from('mastery_history')
        .select('points, recorded_at')
        .eq('player_id', playerId)
        .order('recorded_at', { ascending: true })
        .limit(HISTORY_LIMIT);

    if (fetchErr) {
        console.error('Supabase history re-read failed:', fetchErr.message);
        return res.status(500).json({ error: fetchErr.message });
    }

    res.json((all || []).map(r => ({ date: r.recorded_at, points: r.points })));
});

app.get('/player-cache/:playerId', async (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const { data, error } = await supabase
        .from('player_cache')
        .select('data, account_count, name, updated_at, total_points')
        .eq('player_id', playerId)
        .maybeSingle();

    if (error) {
        console.error('Supabase cache read failed:', error.message);
        return res.status(500).json({ error: error.message });
    }

    if (!data) return res.json(null);

    res.json({
        name:         data.name,
        updated:      data.updated_at,
        accountCount: data.account_count,
        totalPoints:  data.total_points,
        ...data.data
    });
});

app.post('/player-cache/:playerId', async (req, res) => {
    const { playerId } = req.params;
    if (!isSafeId(playerId)) return res.status(400).json({ error: 'Invalid player id.' });

    const body = req.body;
    if (!body || typeof body !== 'object' || !Array.isArray(body.list)) {
        return res.status(400).json({ error: 'Body must be an object with a `list` array.' });
    }

    const data = {
        list:       body.list,
        perAccount: Array.isArray(body.perAccount) ? body.perAccount : [],
        failures:   Array.isArray(body.failures) ? body.failures : [],
        timePlayed: body.timePlayed || null
    };

    const record = {
        player_id:     playerId,
        name:          typeof body.name === 'string' ? body.name.slice(0, 64) : null,
        updated_at:    new Date().toISOString(),
        account_count: Number(body.accountCount) || 0,
        total_points:  Number(body.totalPoints) || 0,
        data
    };

    const { error } = await supabase
        .from('player_cache')
        .upsert(record, { onConflict: 'player_id' });

    if (error) {
        console.error('Supabase cache write failed:', error.message);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

app.get('/rate-status', (req, res) => {
    res.json(getRateStatus());
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
    console.log(`Verbose logging is ${LOG_VERBOSE ? 'ON' : 'OFF'} (LOG_VERBOSE in server.js).`);
    console.log(`Supabase URL: ${process.env.SUPABASE_URL ? 'configured' : 'MISSING'}`);
    console.log(`Riot API key: ${process.env.RIOT_API_KEY ? 'configured' : 'MISSING'}`);
});