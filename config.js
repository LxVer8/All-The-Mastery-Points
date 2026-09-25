const PROXY_BASE = 'https://atmp-api.onrender.com';
const ACCOUNT_COUNT = 1;
const MAX_ACCOUNTS  = 50;

const REGIONS = [
    { value: 'br1',  label: 'BR' },
    { value: 'eun1', label: 'EUNE' },
    { value: 'euw1', label: 'EUW' },
    { value: 'jp1',  label: 'JP' },
    { value: 'kr',   label: 'KR' },
    { value: 'la1',  label: 'LAN' },
    { value: 'la2',  label: 'LAS' },
    { value: 'na1',  label: 'NA' },
    { value: 'oc1',  label: 'OCE' },
    { value: 'pbe1', label: 'PBE' },
    { value: 'ru',   label: 'RU' },
    { value: 'tr1',  label: 'TR' }
];

const REGION_LABEL = Object.fromEntries(REGIONS.map(r => [r.value, r.label]));

const ALL_COUNTRIES = [
    'ad','ae','af','ag','ai','al','am','ao','aq','ar','as','at','au','aw','ax','az',
    'ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz',
    'ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz',
    'de','dj','dk','dm','do','dz',
    'ec','ee','eg','eh','er','es','et',
    'fi','fj','fk','fm','fo','fr',
    'ga','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy',
    'hk','hm','hn','hr','ht','hu',
    'id','ie','il','im','in','io','iq','ir','is','it',
    'je','jm','jo','jp',
    'ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz',
    'la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly',
    'ma','mc','md','me','mf','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz',
    'na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz',
    'om',
    'pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py',
    'qa',
    're','ro','rs','ru','rw',
    'sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz',
    'tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','tz',
    'ua','ug','um','us','uy','uz',
    'va','vc','ve','vg','vi','vn','vu',
    'wf','ws',
    'ye','yt',
    'za','zm','zw'
];

let _regionDisplayNames = null;
function regionDisplayName(code) {
    if (!code) return '';
    if (typeof Intl === 'undefined' || !Intl.DisplayNames) return code.toUpperCase();
    if (!_regionDisplayNames) {
        try { _regionDisplayNames = new Intl.DisplayNames(['en'], { type: 'region' }); }
        catch (e) { _regionDisplayNames = null; return code.toUpperCase(); }
    }
    try { return _regionDisplayNames.of(code.toUpperCase()) || code.toUpperCase(); }
    catch (e) { return code.toUpperCase(); }
}

const LS = {
    player:       id => 'player-cache-' + id,
    tooltips:     'tooltips-enabled',
    classic:      'classic-only',
    topchamp:     'topchamp-mode',
    theme:        'theme',
    accent:       'accent',
    rainbow:      'accent-rainbow',
    rainbowSpeed: 'accent-rainbow-speed',
    favorites:    'favorite-searches'
};

const $      = id => document.getElementById(id);
const num    = n => (n || 0).toLocaleString();
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

function fillSelect(select, options) {
    options.forEach(({ value, label }) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        select.appendChild(opt);
    });
}

function savedFlag(key, fallback) {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value === '1';
}

function parseRiotId(value) {
    const [gameName, tagLine] = String(value || '').split('#');
    return gameName && tagLine ? { gameName, tagLine } : null;
}

function formatLastUpdated(value) {
    if (!value) return 'Never updated';

    const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
    const d = dateOnly ? new Date(value + 'T00:00:00') : new Date(value);
    if (isNaN(d.getTime())) return value;

    const pad = n => String(n).padStart(2, '0');
    const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;

    return `${date} - ${time}`;
}

function timeAgo(iso) {
    if (!iso) return 'never';
    const t = new Date(iso).getTime();
    if (!Number.isFinite(t)) return 'never';

    const s = Math.floor((Date.now() - t) / 1000);
    if (s < 60) return 'just now';

    const m = Math.floor(s / 60);
    if (m < 60) return m + 'm ago';

    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';

    return Math.floor(h / 24) + 'd ago';
}

function loadPlayerCache() {
    PLAYERS.forEach(p => {
        const saved = localStorage.getItem(LS.player(p.id));
        if (!saved) return;
        try {
            const data = JSON.parse(saved);
            if (typeof data.totalPoints === 'number') p.totalPoints = data.totalPoints;
            if (data.lastUpdated) p.lastUpdated = data.lastUpdated;
        } catch (e) {  }
    });
}

function savePlayerCacheLocal(player) {
    localStorage.setItem(LS.player(player.id), JSON.stringify({
        totalPoints: player.totalPoints,
        lastUpdated: player.lastUpdated
    }));
}

(function validateRegions() {
    const problems = [];
    PLAYERS.forEach(p => p.accounts.forEach(a => {
        if (!REGION_LABEL[a.region]) problems.push(`${p.name}: ${a.riotId} → '${a.region}'`);
    }));
    if (problems.length) {
        console.warn('Unknown region codes in players.js:\n' + problems.join('\n'));
    }
})();