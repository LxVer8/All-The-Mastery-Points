let championMap    = {};
let ddragonVersion = '';

async function loadChampionData() {
    try {
        const versions  = await (await fetch('https://ddragon.leagueoflegends.com/api/versions.json')).json();
        ddragonVersion  = versions[0];

        const champData = await (await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion.json`
        )).json();

        for (const key in champData.data) {
            const c = champData.data[key];
            championMap[c.key] = { name: c.name, image: c.image.full.replace('.png', '') };
        }
        console.log(`Loaded ${Object.keys(championMap).length} champions (patch ${ddragonVersion}).`);
    } catch (err) {
        console.error('Failed to load champion data:', err);
    }
}

const BLANK_ICON = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const championName = id => (championMap[String(id)] || {}).name || `Champion ${id}`;

function championIconUrl(id) {
    const champ = championMap[String(id)];
    return champ
        ? `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/champion/${champ.image}.png`
        : BLANK_ICON;
}

async function proxyGet(path) {
    const res = await fetch(`${PROXY_BASE}/${path}`);
    if (!res.ok) {
        const err = await toApiError(res);
        const ra  = Number(res.headers.get('Retry-After'));
        if (Number.isFinite(ra) && ra > 0) err.retryAfter = ra;
        throw err;
    }
    return res.json();
}

const ERROR_MESSAGES = {
    400: 'Bad request',
    401: 'Riot API key is missing',
    403: 'Riot API key rejected (expired or wrong key)',
    404: 'Account not found',
    415: 'Unsupported request',
    429: 'Rate limited - try again in a moment',
    500: 'Riot API server error',
    502: 'Riot API bad gateway',
    503: 'Riot API unavailable',
    504: 'Riot API timed out'
};

async function toApiError(res) {
    const raw = await res.text();

    let riotMessage = '';
    try {
        const parsed = JSON.parse(raw);
        riotMessage = (parsed && parsed.status && parsed.status.message) || '';
    } catch (e) {  }

    const err = new Error(
        ERROR_MESSAGES[res.status] || riotMessage || `Request failed (HTTP ${res.status})`
    );
    err.status = res.status;
    return err;
}

const puuidCache = new Map();

function lookupPuuid({ region, gameName, tagLine }) {
    const key = `${region}/${gameName}#${tagLine}`;
    if (puuidCache.has(key)) return puuidCache.get(key);

    const request = proxyGet(
        `account/${region}/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`
    )
        .then(data => {
            if (!data.puuid) throw new Error('No PUUID returned.');
            return data.puuid;
        })
        .catch(err => {
            puuidCache.delete(key);
            throw err;
        });

    puuidCache.set(key, request);
    return request;
}

let rateLimitedUntil = 0;

function isRateLimited() {
    return Date.now() < rateLimitedUntil;
}

function markRateLimited(retryAfterSeconds) {
    const until = Date.now() + (retryAfterSeconds || 60) * 1000;
    if (until > rateLimitedUntil) rateLimitedUntil = until;
}

const fetchMasteries = (region, puuid) => proxyGet(`mastery/${region}/${puuid}`);
const fetchSummoner  = (region, puuid) => proxyGet(`summoner/${region}/${puuid}`);

async function computeCombined(accounts, onProgress) {
    const combined    = {};
    const perAccount  = {};
    const failures    = [];
    let   rateLimited = null;
    const started     = performance.now();

    console.log(`[computeCombined] start - ${plural(accounts.length, 'account')}`);

    for (let i = 0; i < accounts.length; i++) {
        const acc    = accounts[i];
        const accKey = `${acc.gameName}#${acc.tagLine}`;


        if (rateLimited) {
            failures.push({
                key: accKey,
                region: acc.region,
                message: 'Skipped - rate limited'
            });
            continue;
        }

        perAccount[accKey] = { label: accKey, region: acc.region, points: 0 };

        if (onProgress) onProgress(`Loading ${accKey} (${i + 1}/${accounts.length})...`);
        console.log(`[computeCombined] (${i + 1}/${accounts.length}) ${acc.region} ${accKey}`);

        try {
            const puuid     = await lookupPuuid(acc);
            const masteries = await fetchMasteries(acc.region, puuid);

            masteries.forEach(m => {
                const key = String(m.championId);
                const entry = combined[key] || (combined[key] = {
                    championId: m.championId,
                    points: 0,
                    level: 0,
                    accounts: 0,
                    breakdown: []
                });

                entry.points  += m.championPoints;
                entry.level    = Math.max(entry.level, m.championLevel);
                entry.accounts += 1;
                entry.breakdown.push({ label: accKey, region: acc.region, points: m.championPoints });
                perAccount[accKey].points += m.championPoints;
            });
        } catch (err) {
            delete perAccount[accKey];
            failures.push({ key: accKey, region: acc.region, message: err.message });

            if (err.status === 429) {
                rateLimited = { retryAfter: err.retryAfter || 60 };
                markRateLimited(err.retryAfter || 60);
                console.warn(
                    `[computeCombined] RATE LIMITED (retry-after ${rateLimited.retryAfter}s). ` +
                    `Aborting ${accounts.length - i - 1} remaining account(s).`
                );
            }
        }
    }

    const byPoints = (a, b) => b.points - a.points;
    const list     = Object.values(combined).sort(byPoints);
    const ms       = Math.round(performance.now() - started);

    console.log(
        `[computeCombined] done in ${ms}ms - ` +
        `${list.length} champions, ${failures.length} failure(s)` +
        (rateLimited ? ', RATE LIMITED' : '')
    );

    return {
        list,
        failures,
        rateLimited,
        totalPoints: list.reduce((sum, m) => sum + m.points, 0),
        perAccount:  Object.values(perAccount).sort(byPoints)
    };
}

async function computeTimePlayed(accounts) {
    let totalLevel = 0;
    let fetched    = 0;

    for (const acc of accounts) {
        if (isRateLimited()) {
            console.warn(`Time played: skipping remaining accounts - rate limited`);
            break;
        }
        try {
            const puuid    = await lookupPuuid(acc);
            const summoner = await fetchSummoner(acc.region, puuid);
            if (typeof summoner.summonerLevel === 'number') {
                totalLevel += summoner.summonerLevel;
                fetched++;
            }
        } catch (e) {
            if (e.status === 429) {
                markRateLimited(e.retryAfter || 60);
                console.warn(`Time played: rate limited, stopping.`);
                break;
            }
            console.warn(`Time played skip for ${acc.gameName}#${acc.tagLine}: ${e.message}`);
        }
    }

    if (fetched === 0) return null;

    const totalHours = totalLevel * 9;
    const days       = Math.floor(totalHours / 24);
    const hours      = totalHours % 24;
    const avgGames   = Math.round((totalHours * 60) / 25);

    return {
        hours: totalHours,
        tooltip: `${days}d ${hours}h - ~${num(avgGames)} average games`,
        accountsUsed: fetched,
        totalAccounts: accounts.length
    };
}

async function historyRequest(path, options) {
    const res = await fetch(`${PROXY_BASE}${path}`, options);

    if (!res.ok) {
        let message = `History request failed (HTTP ${res.status})`;
        try {
            const body = await res.json();
            if (body && body.error) message = body.error;
        } catch (e) {  }
        throw new Error(message);
    }
    return res.json();
}

const fetchHistory = playerId =>
    historyRequest(`/history/${encodeURIComponent(playerId)}`);

const recordHistory = (playerId, name, points) =>
    historyRequest(`/history/${encodeURIComponent(playerId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, points })
    });

const fetchPlayerCache = playerId =>
    historyRequest(`/player-cache/${encodeURIComponent(playerId)}`);

const savePlayerCache = (playerId, data) =>
    historyRequest(`/player-cache/${encodeURIComponent(playerId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });



let _ratePollTimer = null;

async function fetchRateStatus() {
    try {
        const res = await fetch(`${PROXY_BASE}/rate-status`);
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

function startRateStatusPolling(callback) {
    stopRateStatusPolling();
    const tick = async () => {
        const status = await fetchRateStatus();
        if (status) callback(status);
    };
    tick();
    _ratePollTimer = setInterval(tick, 2000);
}

function stopRateStatusPolling() {
    if (_ratePollTimer) {
        clearInterval(_ratePollTimer);
        _ratePollTimer = null;
    }
}