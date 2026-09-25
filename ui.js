const dom = {
    gallery:       $('gallery'),
    playerSearch:  $('player-search'),
    countryFilter: $('country-filter'),
    regionFilter:  $('region-filter'),

    playerCountBadge:  $('player-count-badge'),
    accountCountBadge: $('account-count-badge'),
    panelTitleText:    $('panel-title-text'),

    searchView:    $('search-view'),
    accounts:      $('accounts'),
    addAccountBtn: $('add-account-btn'),
    searchBtn:     $('search-btn'),
    timePlayed:    $('lookup-time-played'),
    errorMsg:      $('error-msg'),
    masteryList:   $('mastery-list'),

    saveFavoriteBtn: $('save-favorite-btn'),

    playerView:      $('player-view'),
    backBtn:         $('back-btn'),
    historyBtn:      $('history-btn'),
    refreshBtn:      $('refresh-btn'),
    playerName:      $('player-view-name'),
    playerSub:       $('player-view-sub'),
    playerError:     $('player-error-msg'),
    playerMastery:   $('player-mastery-list'),

    tooltip:        $('mastery-tooltip'),
    tooltipToggle:  $('tooltip-toggle'),
    classicToggle:  $('classic-toggle'),
    topChampToggle: $('topchamp-toggle'),
    infoOverlay:    $('info-overlay'),
    infoBtn:        $('info-btn'),
    infoClose:      $('info-close'),
    historyOverlay: $('history-overlay'),
    historyTitle:   $('history-title'),
    historyBody:    $('history-body'),
    historyClose:   $('history-close'),

    favoritesToggle: $('favorites-toggle'),

    favoriteOverlay:      $('favorite-overlay'),
    favoriteTitle:        $('favorite-title'),
    favoriteClose:        $('favorite-close'),
    favoriteNameInput:    $('favorite-name-input'),
    favoriteCountryInput: $('favorite-country-input'),
    favoriteImageInput:   $('favorite-image-input'),
    favoriteImagePreview: $('favorite-image-preview'),
    favoriteAccounts:     $('favorite-accounts'),
    favoriteAddAccount:   $('favorite-add-account'),
    favoriteSaveBtn:      $('favorite-save-btn'),
    favoriteError:        $('favorite-error'),

    themeToggle:        $('theme-toggle'),
    accentToggle:       $('accent-toggle'),
    accentMenu:         $('accent-menu'),
    accentSwatch:       $('accent-swatch'),
    accentColorInput:   $('accent-color-input'),
    accentHexInput:     $('accent-hex-input'),
    accentReset:        $('accent-reset'),
    accentRainbow:      $('accent-rainbow'),
    accentSlider:       $('accent-slider'),
    accentSliderTrack:  $('accent-slider-track'),
    accentSliderHandle: $('accent-slider-handle'),

    accentSpeed:        $('accent-speed'),
    accentSpeedValue:   $('accent-speed-value'),
    accentSpeedSlider:  $('accent-speed-slider'),
    accentSpeedTrack:   $('accent-speed-track'),
    accentSpeedHandle:  $('accent-speed-handle')
};

function createCustomSelect(container, opts = {}) {
    const state = {
        items:       opts.items || [],
        value:       opts.value || '',
        placeholder: opts.placeholder || 'Select...',
        onChange:    opts.onChange || (() => {})
    };

    container.innerHTML = '';
    container.classList.add('custom-select');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'custom-select-toggle';
    toggle.setAttribute('aria-haspopup', 'listbox');

    const display = document.createElement('span');
    display.className = 'custom-select-display';

    const flagEl = document.createElement('span');
    flagEl.className = 'custom-select-flag';
    flagEl.hidden = true;

    const labelEl = document.createElement('span');
    labelEl.className = 'custom-select-label';

    display.append(flagEl, labelEl);

const arrow = document.createElement('span');
arrow.className = 'custom-select-arrow';
arrow.setAttribute('aria-hidden', 'true');

    toggle.append(display, arrow);

    const menu = document.createElement('div');
    menu.className = 'custom-select-menu';
    menu.hidden = true;

    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'custom-select-search';
    search.placeholder = 'Search...';
    search.autocomplete = 'off';
    search.spellcheck = false;

    const list = document.createElement('ul');
    list.className = 'custom-select-list';

    menu.append(search, list);
    container.append(toggle, menu);

    function renderDisplay() {
        const item = state.items.find(i => i.value === state.value);
        if (item) {
            labelEl.textContent = item.label;
            if (item.value) {
                flagEl.className = 'fi fi-' + item.value + ' custom-select-flag';
                flagEl.hidden = false;
            } else {
                flagEl.className = 'custom-select-flag';
                flagEl.hidden = true;
            }
        } else {
            labelEl.textContent = state.placeholder;
            flagEl.hidden = true;
        }
    }

    function renderList(filter) {
        list.innerHTML = '';
        const q = (filter || '').trim().toLowerCase();
        let shown = 0;

        state.items.forEach(item => {
            if (q &&
                !item.label.toLowerCase().includes(q) &&
                !item.value.toLowerCase().includes(q)) return;

            shown++;
            const li = document.createElement('li');
            li.className = 'custom-select-item';
            if (item.value === state.value) li.classList.add('selected');
            li.dataset.value = item.value;
            li.setAttribute('role', 'option');
            if (item.value === state.value) li.setAttribute('aria-selected', 'true');

            if (item.value) {
                const flag = document.createElement('span');
                flag.className = 'fi fi-' + item.value;
                flag.setAttribute('aria-hidden', 'true');
                li.appendChild(flag);
            }

            const label = document.createElement('span');
            label.className = 'custom-select-item-label';
            label.textContent = item.label;
            li.appendChild(label);

            li.addEventListener('click', () => {
                state.value = item.value;
                renderDisplay();
                close();
                state.onChange(item.value);
            });

            list.appendChild(li);
        });

        if (shown === 0) {
            const empty = document.createElement('li');
            empty.className = 'custom-select-empty';
            empty.textContent = 'No matches';
            list.appendChild(empty);
        }
    }

    function open() {
        menu.hidden = false;
        toggle.classList.add('open');
        search.value = '';
        renderList('');
        const sel = list.querySelector('.selected');
        if (sel) sel.scrollIntoView({ block: 'nearest' });
        search.focus();
    }

    function close() {
        menu.hidden = true;
        toggle.classList.remove('open');
    }

    toggle.addEventListener('click', e => {
        e.stopPropagation();
        if (menu.hidden) open(); else close();
    });
    search.addEventListener('click', e => e.stopPropagation());
    search.addEventListener('input', () => renderList(search.value));
    menu.addEventListener('click', e => e.stopPropagation());

    document.addEventListener('click', () => { if (!menu.hidden) close(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !menu.hidden) close();
    });

    renderDisplay();

    return {
        getValue: () => state.value,
        setValue: v => { state.value = v; renderDisplay(); },
        setItems: items => { state.items = items; renderDisplay(); }
    };
}

let favorites            = [];
let favoritesMode        = false;
let lastSearchAccounts   = [];
let lastSearchList       = [];
let pendingFavoriteImage = null;
let editingFavoriteId    = null;

const countryFilterSelect = createCustomSelect(dom.countryFilter, {
    placeholder: 'All countries',
    onChange: () => buildPlayerGallery()
});
const favoriteCountrySelect = createCustomSelect(dom.favoriteCountryInput, {
    placeholder: 'None'
});

function loadFavorites() {
    favorites.length = 0;
    try {
        const raw = localStorage.getItem(LS.favorites);
        if (!raw) return;
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) favorites.push(...arr);
    } catch (e) {  }
}

function saveFavorites() {
    try {
        localStorage.setItem(LS.favorites, JSON.stringify(favorites));
    } catch (e) {
        console.warn('Could not save favorites:', e.message);
    }
}

function activePlayers() {
    return favoritesMode ? favorites : PLAYERS;
}

function searchAccountsKey(accounts) {
    return (accounts || [])
        .map(a => `${a.region}:${a.riotId}`)
        .sort()
        .join('|');
}

function setFavoritesMode(enabled) {
    favoritesMode = enabled;
    dom.favoritesToggle.classList.toggle('active', enabled);
    dom.favoritesToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    dom.favoritesToggle.title = enabled ? 'Show high profile players' : 'Show favorites';
    dom.panelTitleText.textContent = enabled ? 'Favorites' : 'High Profile Players';

    buildPlayerGallery();
    updateGalleryStats();

    if (enabled) loadAllPlayerCaches().then(() => {
        if (favoritesMode) buildPlayerGallery();
    });
}

function removeFavorite(id) {
    const idx = favorites.findIndex(f => f.id === id);
    if (idx === -1) return;

    favorites.splice(idx, 1);
    saveFavorites();

    if (favoritesMode) {
        buildPlayerGallery();
        updateGalleryStats();
    }

    if (currentPlayer && currentPlayer.id === id) backToSearch();
}

function showFavoriteImagePreview(src) {
    dom.favoriteImagePreview.innerHTML = '';
    if (!src) return;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Preview';
    dom.favoriteImagePreview.appendChild(img);
}

function addModalAccountRow(account = {}) {
    const region = typeof account.region === 'string' ? account.region : 'euw1';
    const riotId = typeof account.riotId === 'string' ? account.riotId : '';

    const row = document.createElement('div');
    row.className = 'account-row';

    const select = document.createElement('select');
    select.className = 'region-select';
    fillSelect(select, REGIONS);


    if (REGIONS.some(r => r.value === region)) select.value = region;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'account-input';
    input.value = riotId;
    input.placeholder = 'Name#Tag';
    input.spellcheck = false;
    input.autocomplete = 'off';

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'account-remove';
    remove.textContent = '×';
    remove.title = 'Remove account';
    remove.setAttribute('aria-label', 'Remove account');
    remove.addEventListener('click', () => {
        row.remove();
        updateModalAddButton();
    });

    row.append(select, input, remove);
    dom.favoriteAccounts.appendChild(row);
    updateModalAddButton();
}

function renderModalAccounts(accounts) {
    dom.favoriteAccounts.innerHTML = '';

    if (Array.isArray(accounts)) {
        accounts.forEach(a => {
            if (a && typeof a === 'object') addModalAccountRow(a);
        });
    }

    updateModalAddButton();
}

function updateModalAddButton() {
    const count = dom.favoriteAccounts.querySelectorAll('.account-row').length;
    dom.favoriteAddAccount.disabled = count >= MAX_ACCOUNTS;
}

function readModalAccounts() {
    const accounts = [];
    const errors   = [];

    dom.favoriteAccounts.querySelectorAll('.account-row').forEach(row => {
        const region = row.querySelector('.region-select').value;
        const value  = row.querySelector('.account-input').value.trim();
        if (!value) return;
        if (!value.includes('#')) { errors.push(value); return; }
        accounts.push({ region, riotId: value });
    });

    return { accounts, errors };
}

function openFavoriteModal() {
    if (lastSearchAccounts.length === 0) return;

    editingFavoriteId = null;
    dom.favoriteTitle.textContent  = 'Save to Favorites';
    dom.favoriteSaveBtn.textContent = 'Save Favorite';

    dom.favoriteNameInput.value = '';
    favoriteCountrySelect.setValue('');
    dom.favoriteImageInput.value = '';
    dom.favoriteError.textContent = '';
    showFavoriteImagePreview(null);
    pendingFavoriteImage = null;

    renderModalAccounts(lastSearchAccounts);

    const first = lastSearchAccounts[0].riotId.split('#')[0];
    dom.favoriteNameInput.placeholder = first || 'My favorite search';

    dom.favoriteOverlay.hidden = false;
    dom.favoriteNameInput.focus();
}

function openEditFavoriteModal(favorite) {
    editingFavoriteId = favorite.id;
    dom.favoriteTitle.textContent  = 'Edit Favorite';
    dom.favoriteSaveBtn.textContent = 'Save Changes';

    dom.favoriteNameInput.value = favorite.name || '';
    favoriteCountrySelect.setValue(favorite.country || '');
    dom.favoriteImageInput.value = '';
    dom.favoriteError.textContent = '';

    pendingFavoriteImage = favorite.image || null;
    showFavoriteImagePreview(pendingFavoriteImage);

    renderModalAccounts(favorite.accounts || []);

    dom.favoriteOverlay.hidden = false;
    dom.favoriteNameInput.focus();
}

function closeFavoriteModal() {
    dom.favoriteOverlay.hidden = true;
    pendingFavoriteImage = null;
    editingFavoriteId    = null;
}

function handleFavoriteImageSelect(e) {
    dom.favoriteError.textContent = '';
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type || !file.type.startsWith('image/')) {
        dom.favoriteError.textContent = 'Please choose an image file.';
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = ev => {
        const img = new Image();
        img.onload = () => {
            const MAX = 200;
            let w = img.width, h = img.height;
            if (w > h) { if (w > MAX) { h = h * MAX / w; w = MAX; } }
            else       { if (h > MAX) { w = w * MAX / h; h = MAX; } }

            const canvas = document.createElement('canvas');
            canvas.width  = Math.max(1, Math.round(w));
            canvas.height = Math.max(1, Math.round(h));
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

            try {
                pendingFavoriteImage = canvas.toDataURL('image/jpeg', 0.85);
            } catch (err) {
                pendingFavoriteImage = ev.target.result;
            }
            showFavoriteImagePreview(pendingFavoriteImage);
        };
        img.onerror = () => {
            dom.favoriteError.textContent = "That image couldn't be read.";
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
}

function saveFavoriteFromSearch() {
    const name = dom.favoriteNameInput.value.trim();
    if (!name) {
        dom.favoriteError.textContent = 'Please enter a name.';
        dom.favoriteNameInput.focus();
        return;
    }

    const { accounts, errors } = readModalAccounts();
    if (errors.length > 0) {
        dom.favoriteError.textContent =
            `Missing #tagline on: ${errors.join(', ')}. Use Name#Tag.`;
        return;
    }
    if (accounts.length === 0) {
        dom.favoriteError.textContent = 'At least one account is required.';
        return;
    }

    const country = favoriteCountrySelect.getValue() || '';


    if (editingFavoriteId) {
        const fav = favorites.find(f => f.id === editingFavoriteId);
        if (!fav) {
            dom.favoriteError.textContent = 'This favorite no longer exists.';
            return;
        }

        fav.name     = name;
        fav.country  = country;
        fav.image    = pendingFavoriteImage || '';
        fav.accounts = accounts;

        saveFavorites();
        closeFavoriteModal();

        if (favoritesMode) {
            buildPlayerGallery();
            updateGalleryStats();
        }
        return;
    }


    const key = searchAccountsKey(accounts);
    if (favorites.some(f => searchAccountsKey(f.accounts) === key)) {
        dom.favoriteError.textContent = 'You already saved this exact search.';
        return;
    }

    let totalPoints = 0;
    if (Array.isArray(lastSearchList) && key === searchAccountsKey(lastSearchAccounts)) {
        totalPoints = lastSearchList.reduce((sum, m) => sum + (m.points || 0), 0);
    }

    const favorite = {
        id:          'fav-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        name:        name,
        country:     country,
        image:       pendingFavoriteImage || '',
        verified:    'no',
        accounts:    accounts,
        totalPoints: totalPoints,
        lastUpdated: new Date().toISOString(),
        isFavorite:  true
    };

    favorites.push(favorite);
    saveFavorites();

    dom.saveFavoriteBtn.classList.add('saved');
    dom.saveFavoriteBtn.title = 'This search is already in your favorites';

    closeFavoriteModal();

    if (favoritesMode) {
        buildPlayerGallery();
        updateGalleryStats();
    }
}

function setLoading(listEl, text) {
    listEl.innerHTML = '';
    const li = document.createElement('li');
    li.className = 'loading';
    li.textContent = text;
    listEl.appendChild(li);
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function renderFailures(el, failures) {
    if (!failures || failures.length === 0) {
        el.textContent = '';
        return;
    }

    const rows = failures.map(f =>
        `<li>` +
            `<span class="failure-account">${escapeHtml(f.key)}</span>` +
            `<span class="failure-region">${escapeHtml(REGION_LABEL[f.region] || f.region)}</span>` +
            `<span class="failure-reason">${escapeHtml(f.message)}</span>` +
        `</li>`
    ).join('');

    el.innerHTML =
        `<div class="failure-title">${plural(failures.length, 'account')} couldn't be loaded:</div>` +
        `<ul class="failure-list">${rows}</ul>`;
}

let _rateLimitCountdown = null;

function renderRateLimit(el, rateLimited) {
    const oldWarning = el.querySelector('.rate-warning');
    if (oldWarning) oldWarning.remove();
    const oldBanner = el.querySelector('.rate-limit');
    if (oldBanner) oldBanner.remove();
    if (_rateLimitCountdown) {
        clearInterval(_rateLimitCountdown);
        _rateLimitCountdown = null;
    }
    if (!rateLimited) return;

    const p = document.createElement('p');
    p.className = 'rate-limit';
    el.prepend(p);

    const endsAt = Date.now() + (rateLimited.retryAfter || 60) * 1000;

    const update = () => {
        const secs = Math.max(0, Math.ceil((endsAt - Date.now()) / 1000));
        if (secs <= 0) {
            p.textContent = `Riot rate limit cleared. Click Refresh to try again.`;
            if (_rateLimitCountdown) {
                clearInterval(_rateLimitCountdown);
                _rateLimitCountdown = null;
            }
            return;
        }
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        const timeStr = m > 0 ? `${m}m ${s}s` : `${s}s`;
        p.textContent =
            `Riot is rate limiting this app right now. Partial results shown below. ` +
            `Try again in ${timeStr}.`;
    };

    update();
    _rateLimitCountdown = setInterval(update, 1000);
}

function renderRateWarning(el, status) {
    const existing = el.querySelector('.rate-warning');
    if (existing) existing.remove();

    if (!status || el.querySelector('.rate-limit')) return;

    const used  = status.used2min || 0;
    const limit = (status.limits && status.limits.perTwoMin) || 100;
    const ratio = used / limit;

    if (ratio < 0.8) return;

    const p = document.createElement('p');
    p.className = 'rate-warning';
    p.textContent = ratio >= 1
        ? `Riot rate limit reached (${used}/${limit} in the last 2 minutes). ` +
          `New requests are being queued, so the fetch will be slow.`
        : `Approaching Riot rate limit (${used}/${limit} in the last 2 minutes). ` +
          `Fetches may take longer than usual.`;
    el.prepend(p);
}

let tooltipsEnabled = true;

function showTooltip(e, content) {
    if (!tooltipsEnabled) return;
    dom.tooltip.innerHTML = '';

    if (Array.isArray(content)) {
        dom.tooltip.classList.remove('text-only');

        [...content].sort((a, b) => b.points - a.points).forEach(entry => {
            const row = document.createElement('div');
            row.className = 'tooltip-row';

            const label = document.createElement('span');
            label.className = 'tooltip-label';
            label.textContent = `${entry.label} | ${REGION_LABEL[entry.region] || entry.region}`;

            const pts = document.createElement('span');
            pts.className = 'tooltip-points';
            pts.textContent = num(entry.points);

            row.append(label, pts);
            dom.tooltip.appendChild(row);
        });
    } else if (content && typeof content === 'object' && content.title) {
        dom.tooltip.classList.remove('text-only');

        const heading = document.createElement('div');
        heading.className = 'tooltip-heading';
        heading.textContent = content.title;
        dom.tooltip.appendChild(heading);

        (content.lines || []).forEach(line => {
            const div = document.createElement('div');
            div.className = 'tooltip-line';
            div.textContent = line;
            dom.tooltip.appendChild(div);
        });
    } else {
        dom.tooltip.classList.add('text-only');

        const p = document.createElement('div');
        p.className = 'tooltip-text';
        p.textContent = String(content);
        dom.tooltip.appendChild(p);
    }

    dom.tooltip.hidden = false;
    positionTooltip(e);
}

function positionTooltip(e) {
    const pad  = 14;
    const edge = 8;

    const rect = dom.tooltip.getBoundingClientRect();

    let x = e.clientX + pad;
    if (x + rect.width > window.innerWidth - edge) x = e.clientX - rect.width - pad;
    if (x < edge) x = edge;

    let y = e.clientY + pad;
    if (y + rect.height > window.innerHeight - edge) {
        y = e.clientY - rect.height - pad;
    }
    if (y < edge) y = edge;

    dom.tooltip.style.left = x + 'px';
    dom.tooltip.style.top  = y + 'px';
}

function moveTooltip(e) {
    if (!tooltipsEnabled) return;
    positionTooltip(e);
}

function hideTooltip() {
    dom.tooltip.hidden = true;
}

function attachTooltip(el, content) {
    el.removeAttribute('title');
    el.classList.add('has-tooltip');
    el.onmouseenter = e => showTooltip(e, content);
    el.onmousemove  = moveTooltip;
    el.onmouseleave = hideTooltip;
}

function detachTooltip(el) {
    el.classList.remove('has-tooltip');
    el.onmouseenter = null;
    el.onmousemove  = null;
    el.onmouseleave = null;
}

function setTooltipsEnabled(enabled) {
    tooltipsEnabled = enabled;
    localStorage.setItem(LS.tooltips, enabled ? '1' : '0');

    dom.tooltipToggle.textContent = enabled ? 'Tooltips: ON' : 'Tooltips: OFF';
    dom.tooltipToggle.classList.toggle('off', !enabled);

    if (!enabled) hideTooltip();
}

let selectedPlayerId = null;
let topChampMode = false;
let focusedChampionId = null;
let panelFadeTimer = null;
let topChampFadePlayed = false;

let detdertEggActive = false;

const DETDERT_ID        = 'p10';
const DETDERT_EGG_IMAGE = 'images/detdertlpmeme.png';

const clickBursts = new Map();

function registerRapidClick(key, threshold, windowMs) {
    const now = Date.now();
    const arr = clickBursts.get(key) || [];
    arr.push(now);
    while (arr.length && arr[0] < now - windowMs) arr.shift();
    clickBursts.set(key, arr);

    if (arr.length >= threshold) {
        arr.length = 0;
        return true;
    }
    return false;
}

function buildRegionData(player, list) {
    const champs = {};
    const totals = {};

    (list || []).forEach(m => {
        (m.breakdown || []).forEach(b => {
            if (!b.region) return;

            const key = String(m.championId);
            const map = champs[b.region] || (champs[b.region] = new Map());
            map.set(key, (map.get(key) || 0) + b.points);

            totals[b.region] = (totals[b.region] || 0) + b.points;
        });
    });

    player.regionChampionPoints = champs;
    player.regionPoints         = totals;
}

function playerTotalFor(player, region) {
    if (!region) return player.totalPoints || 0;
    return (player.regionPoints && player.regionPoints[region]) || 0;
}

function championPointsFor(player, region, championId) {
    const key = String(championId);

    const map = region
        ? player.regionChampionPoints && player.regionChampionPoints[region]
        : player.championPoints;

    return map ? map.get(key) : undefined;
}

function topChampFor(player, region) {
    if (!region) return player.topChamp || null;

    const map = player.regionChampionPoints && player.regionChampionPoints[region];
    if (!map || map.size === 0) return null;

    let bestId  = null;
    let bestPts = -1;

    for (const [id, points] of map) {
        if (points > bestPts) { bestPts = points; bestId = id; }
    }

    return bestId === null ? null : { championId: bestId, points: bestPts };
}

function accountCountFor(player, region) {
    if (!region) return player.accounts.length;
    return player.accounts.filter(a => a.region === region).length;
}

async function loadAllPlayerCaches() {
    const all     = [...PLAYERS, ...favorites];
    const missing = all.filter(p => !p.championPoints);
    if (missing.length === 0) return;

    await Promise.all(missing.map(async player => {
        try {
            const cached = await fetchPlayerCache(player.id);
if (cached && Array.isArray(cached.list) && cached.list.length > 0) {
    player.topChamp = {
        championId: cached.list[0].championId,
        points:     cached.list[0].points
    };
    player.championPoints = new Map(
        cached.list.map(m => [String(m.championId), m.points])
    );
    player.totalPoints = cached.totalPoints || player.totalPoints || 0;
    player.lastUpdated = cached.updated || player.lastUpdated;  // <-- make sure this line is here
    buildRegionData(player, cached.list);
}
        } catch (e) {  }
    }));
}

function setTopChampMode(enabled, animate = false) {
    topChampMode = enabled;
    localStorage.setItem(LS.topchamp, enabled ? '1' : '0');

    dom.topChampToggle.textContent = enabled ? 'OTP Mode: ON' : 'OTP Mode: OFF';
    dom.topChampToggle.classList.toggle('off', !enabled);

    const dataReady = enabled ? loadAllPlayerCaches() : Promise.resolve();

    if (!animate || topChampFadePlayed) {
        buildPlayerGallery();
        dataReady.then(() => {
            if (topChampMode === enabled) buildPlayerGallery();
        });
        return;
    }
    topChampFadePlayed = true;

    const panel = document.querySelector('.left-panel');
    panel.classList.add('fading');

    if (panelFadeTimer) clearTimeout(panelFadeTimer);
    panelFadeTimer = setTimeout(async () => {
        panelFadeTimer = null;
        await dataReady;
        buildPlayerGallery();
        panel.classList.remove('fading');
    }, 650);
}

function fitPlayerNames() {
    document.querySelectorAll('.player-card-name').forEach(el => {
        el.style.fontSize = '';

        const available = el.clientWidth;
        if (!available) return;

        const range   = document.createRange();
        const measure = () => {
            range.selectNodeContents(el);
            return range.getBoundingClientRect().width;
        };

        let width = measure();
        if (width <= available) return;

        let size = parseFloat(getComputedStyle(el).fontSize) || 18;
        while (width > available && size > 8) {
            size -= 0.5;
            el.style.fontSize = size + 'px';
            width = measure();
        }
    });
}

function updateSelectedCard() {
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.playerId === selectedPlayerId);
    });
}

let championSearchIndex = [];

function buildChampionSearchIndex() {
    championSearchIndex = Object.keys(championMap).map(id => {
        const name = championMap[id].name.toLowerCase();
        return { id, name, noApos: name.replace(/'/g, '') };
    });
}

function championIdsMatching(query) {
    const ids = new Set();
    if (!query) return ids;

    const q       = query.toLowerCase();
    const qNoApos = q.replace(/'/g, '');

    for (const entry of championSearchIndex) {
        if (topChampMode) {
            if (entry.name.startsWith(q) || entry.noApos.startsWith(qNoApos)) {
                ids.add(entry.id);
            }
        } else {
            if (entry.name === q || entry.noApos === qNoApos) {
                ids.add(entry.id);
            }
        }
    }
    return ids;
}

function filterPlayers() {
    const source  = activePlayers();
    const query   = dom.playerSearch.value.trim().toLowerCase();
    const country = countryFilterSelect.getValue();
    const region  = dom.regionFilter.value;

    const baseMatch = p => {
        if (country && p.country !== country) return false;
        if (region && !p.accounts.some(a => a.region === region)) return false;
        return true;
    };

    if (!query) return source.filter(baseMatch);

    const matchingChampIds = championIdsMatching(query);

    return source.filter(p => {
        if (!baseMatch(p)) return false;

        if (topChampMode) {
            if (matchingChampIds.size === 0) return false;
            const top = topChampFor(p, region);
            return !!top && matchingChampIds.has(String(top.championId));
        }

        if (p.name.toLowerCase().includes(query)) return true;
        if (p.accounts.some(a => a.riotId.toLowerCase().includes(query))) return true;

        if (matchingChampIds.size > 0 && p.championPoints) {
            for (const id of matchingChampIds) {
                if (championPointsFor(p, region, id) != null) return true;
            }
        }
        return false;
    });
}

function createPointsEl(player, region) {
    const el = document.createElement('div');
    el.className = 'player-card-points';

    const focusedPts = focusedChampionId
        ? championPointsFor(player, region, focusedChampionId)
        : undefined;

    if (focusedPts != null) {
        el.appendChild(document.createTextNode(num(focusedPts) + ' pts'));

        const icon = document.createElement('img');
        icon.className = 'player-card-focus-icon';
        icon.src = championIconUrl(focusedChampionId);
        icon.alt = championName(focusedChampionId);
        el.appendChild(icon);
    } else {
        el.textContent = num(playerTotalFor(player, region)) + ' pts';
    }

    const accCount = document.createElement('span');
    accCount.className = 'player-card-acc-count';
    accCount.textContent = ` (${accountCountFor(player, region)})`;
    el.appendChild(accCount);

    return el;
}

function createTopChampEl(player, region) {
    const el = document.createElement('div');
    el.className = 'player-card-topchamp';

    const top = topChampFor(player, region);

    if (!top) {
        const empty = document.createElement('span');
        empty.className = 'topchamp-empty';
        empty.textContent = 'no data';
        el.appendChild(empty);
        return el;
    }

    const pts = document.createElement('div');
    pts.className = 'topchamp-pts';
    pts.textContent = num(top.points) + ' pts';

    const accCount = document.createElement('span');
    accCount.className = 'player-card-acc-count';
    accCount.textContent = ` (${accountCountFor(player, region)})`;
    pts.appendChild(accCount);

    el.appendChild(pts);
    return el;
}

function createCardImage(player, region) {
    const wrap = document.createElement('div');
    wrap.className = 'player-card-image';

    const top = topChampFor(player, region);

    const useEgg         = detdertEggActive && player.id === DETDERT_ID;
    const useTopChampImg = !useEgg && topChampMode && !!top;

    const src = useEgg
        ? DETDERT_EGG_IMAGE
        : useTopChampImg
            ? championIconUrl(top.championId)
            : player.image;

    const alt = useEgg
        ? player.name
        : useTopChampImg
            ? championName(top.championId)
            : player.name;

    const fallbackText = (
        useTopChampImg
            ? championName(top.championId)
            : (player.name || '?')
    ).slice(0, 2).toUpperCase();

    const showInitials = () => {
        const fb = document.createElement('span');
        fb.className = 'player-initials';
        fb.textContent = fallbackText;
        wrap.appendChild(fb);
    };

    if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.onerror = () => { img.remove(); showInitials(); };
        wrap.appendChild(img);
    } else {
        showInitials();
    }

    if (player.verified === 'yes') {
        const badge = document.createElement('span');
        badge.className = 'player-verified';
        badge.setAttribute('aria-label', 'Verified - all accounts confirmed');
        badge.innerHTML =
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' +
            '</svg>';
        wrap.appendChild(badge);
    }

    if (player.isFavorite) {
        const edit = document.createElement('button');
        edit.type  = 'button';
        edit.className = 'favorite-edit';
        edit.textContent = '+';
        edit.title = 'Edit favorite';
        edit.setAttribute('aria-label', 'Edit favorite');
        edit.addEventListener('click', e => {
            e.stopPropagation();
            openEditFavoriteModal(player);
        });
        wrap.appendChild(edit);

        const del = document.createElement('button');
        del.type  = 'button';
        del.className = 'favorite-delete';
        del.textContent = '×';
        del.title = 'Remove from favorites';
        del.setAttribute('aria-label', 'Remove from favorites');
        del.addEventListener('click', e => {
            e.stopPropagation();
            if (confirm(`Remove "${player.name}" from favorites?`)) {
                removeFavorite(player.id);
            }
        });
        wrap.appendChild(del);
    }

    return wrap;
}

function checkDetdertEggClick(player) {
    if (detdertEggActive) return;
    if (!player || player.id !== DETDERT_ID) return;
    if (!currentPlayer || currentPlayer.id !== DETDERT_ID) return;
    if (!player.championPoints) return;

    if (registerRapidClick('detdert-egg', 10, 2000)) {
        detdertEggActive = true;
        buildPlayerGallery();
    }
}

function createPlayerCard(player) {
    const region = dom.regionFilter.value;

    const card = document.createElement('div');
    card.className = 'player-card';
    card.dataset.playerId = player.id;
    card.classList.toggle('selected', player.id === selectedPlayerId);

    if (detdertEggActive && player.id === DETDERT_ID) {
        attachTooltip(card, 'Detdert');
    } else {
        attachTooltip(card, player.name);
    }

    const name = document.createElement('div');
    name.className = 'player-card-name';
    name.appendChild(document.createTextNode(player.name));

    if (player.country) {
        name.appendChild(document.createTextNode(' - '));
        const flag = document.createElement('span');
        flag.className = `fi fi-${player.country}`;
        flag.setAttribute('aria-label', player.country);
        name.appendChild(flag);
    }

    const infoEl = topChampMode
        ? createTopChampEl(player, region)
        : createPointsEl(player, region);

    const date = document.createElement('div');
    date.className = 'player-card-date';
    date.textContent = formatLastUpdated(player.lastUpdated);

    const imageEl = createCardImage(player, region);

    if (player.id === DETDERT_ID) {
        imageEl.addEventListener('click', e => {
            const profileOpen = currentPlayer && currentPlayer.id === DETDERT_ID;
            const dataReady   = !!player.championPoints;

            if (profileOpen && dataReady) {
                e.stopPropagation();
                checkDetdertEggClick(player);
            }
        });
    }

    card.append(imageEl, name, infoEl, date);
    card.addEventListener('click', () => openPlayer(player));

    return card;
}

function formatRecentPlayers(count, source) {
    return source.slice(-count).reverse().map(p =>
        `${p.name} - ${plural(p.accounts.length, 'account')}`
    );
}

function formatRecentAccounts(count, source) {
    const lines = [];

    for (let i = source.length - 1; i >= 0 && lines.length < count; i--) {
        const player = source[i];

        for (let j = player.accounts.length - 1; j >= 0 && lines.length < count; j--) {
            const acc    = player.accounts[j];
            const region = REGION_LABEL[acc.region] || acc.region;
            lines.push(`${player.name} - ${acc.riotId} (${region})`);
        }
    }
    return lines;
}

function updateGalleryStats() {
    const source = activePlayers();

    const playerCount  = source.length;
    const accountCount = source.reduce((sum, p) => sum + p.accounts.length, 0);

    dom.playerCountBadge.textContent  = playerCount;
    dom.accountCountBadge.textContent = accountCount;

    dom.playerCountBadge.setAttribute(
        'aria-label', `${plural(playerCount, 'player')} tracked`
    );
    dom.accountCountBadge.setAttribute(
        'aria-label', `${plural(accountCount, 'account')} tracked`
    );

    const playerLines  = formatRecentPlayers(5, source);
    const accountLines = formatRecentAccounts(5, source);

    attachTooltip(dom.playerCountBadge, {
        title: favoritesMode ? 'Last 5 favorites added' : 'Last 5 players added',
        lines: playerLines.length ? playerLines : ['None yet']
    });

    attachTooltip(dom.accountCountBadge, {
        title: favoritesMode ? 'Last 5 favorite accounts added' : 'Last 5 accounts added',
        lines: accountLines.length ? accountLines : ['None yet']
    });
}

function buildPlayerGallery() {
    dom.gallery.innerHTML = '';

    const source = activePlayers();
    const region = dom.regionFilter.value;

    focusedChampionId = null;
    if (!topChampMode) {
        const query = dom.playerSearch.value.trim().toLowerCase();
        if (query) {
            const matches = championIdsMatching(query);
            if (matches.size === 1) focusedChampionId = [...matches][0];
        }
    }

    if (!Array.isArray(source) || source.length === 0) {
        dom.gallery.innerHTML = favoritesMode
            ? '<p style="color:#888">You have not added any favorites yet. To make a favorite search, look up any accounts you want to calculate together, then click the star icon next to the estimated playtime, set a name, country and picture (if you want) and click on save.</p>'
            : '<p style="color:#888">No players in players.js</p>';
        return;
    }

    const filtered = filterPlayers();
    if (filtered.length === 0) {
        dom.gallery.innerHTML = favoritesMode
            ? '<p style="color:#888">No favorites match your search.</p>'
            : '<p style="color:#888">No players match your search.</p>';
        return;
    }

    const sorted = [...filtered].sort((a, b) => {
        if (topChampMode) {
            const aTop = topChampFor(a, region);
            const bTop = topChampFor(b, region);
            return (bTop ? bTop.points : -1) - (aTop ? aTop.points : -1);
        }
        if (focusedChampionId) {
            const aPts = championPointsFor(a, region, focusedChampionId);
            const bPts = championPointsFor(b, region, focusedChampionId);
            return (bPts == null ? -1 : bPts) - (aPts == null ? -1 : aPts);
        }
        return playerTotalFor(b, region) - playerTotalFor(a, region);
    });

    sorted.forEach(player => dom.gallery.appendChild(createPlayerCard(player)));

    requestAnimationFrame(fitPlayerNames);
}

function getTrackedCountryOptions() {
    return [...new Set(PLAYERS.map(p => p.country).filter(Boolean))]
        .map(code => ({ value: code, label: regionDisplayName(code) }))
        .sort((a, b) => a.label.localeCompare(b.label));
}

function getEveryCountryOptions() {
    return ALL_COUNTRIES
        .map(code => ({ value: code, label: regionDisplayName(code) }))
        .sort((a, b) => a.label.localeCompare(b.label));
}

function populateCountryFilter() {
    countryFilterSelect.setItems([
        { value: '', label: 'All countries' },
        ...getTrackedCountryOptions()
    ]);
}

function populateFavoriteCountrySelect() {
    favoriteCountrySelect.setItems([
        { value: '', label: 'None' },
        ...getEveryCountryOptions()
    ]);
}

function populateFilters() {
    populateCountryFilter();
    populateFavoriteCountrySelect();
    fillSelect(dom.regionFilter, REGIONS);
}

function createAccountRow(index) {
    const row = document.createElement('div');
    row.className = 'account-row';

    const select = document.createElement('select');
    select.className = 'region-select';
    fillSelect(select, REGIONS);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'account-input';
    input.placeholder = `Account ${index + 1} + Riot ID (e.g. LxVer#Shaco)`;
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') combineMasteries();
    });

    row.append(select, input);
    return row;
}

function addAccountRow() {
    const count = dom.accounts.querySelectorAll('.account-row').length;
    if (count >= MAX_ACCOUNTS) return;

    dom.accounts.appendChild(createAccountRow(count));
    updateAddButtonState();
}

function updateAddButtonState() {
    const full = dom.accounts.querySelectorAll('.account-row').length >= MAX_ACCOUNTS;
    dom.addAccountBtn.disabled = full;
    dom.addAccountBtn.textContent = full ? `Max ${MAX_ACCOUNTS} accounts reached` : '+ Add Account';
}

function buildAccountRows() {
    for (let i = 0; i < ACCOUNT_COUNT; i++) {
        dom.accounts.appendChild(createAccountRow(i));
    }
    updateAddButtonState();
}

function readAccountRows() {
    const accounts = [];
    const formatErrors = [];

    dom.accounts.querySelectorAll('.account-row').forEach(row => {
        const region = row.querySelector('.region-select').value;
        const value  = row.querySelector('.account-input').value.trim();
        if (!value) return;

        if (!value.includes('#')) { formatErrors.push(value); return; }

        const parsed = parseRiotId(value);
        if (parsed) accounts.push({ region, ...parsed });
    });

    return { accounts, formatErrors };
}

let classicOnly = false;
let lastCombinedList = [];

function renderMasteryList(masteries, listEl) {
    listEl.innerHTML = '';

    if (classicOnly) masteries = masteries.filter(m => championMap[String(m.championId)]);

    if (!Array.isArray(masteries) || masteries.length === 0) {
        listEl.innerHTML = '<li>No mastery data found.</li>';
        return;
    }

    masteries.forEach(m => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.className = 'champ-icon';
        img.alt = championName(m.championId);
        img.src = championIconUrl(m.championId);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'champion-name';
        nameSpan.textContent = championName(m.championId);

        const sub = document.createElement('span');
        sub.className = 'champion-sub';
        sub.textContent = `(${plural(m.accounts, 'account')})`;

        const left = document.createElement('div');
        left.className = 'left-group';
        left.append(img, nameSpan, sub);

        const pointsSpan = document.createElement('span');
        pointsSpan.className = 'mastery-points';
        pointsSpan.textContent = `${num(m.points)} pts - Lvl ${m.level}`;

        li.append(left, pointsSpan);

        if (m.breakdown && m.breakdown.length > 0) attachTooltip(li, m.breakdown);

        listEl.appendChild(li);
    });
}

function rerenderCurrentView() {
    if (lastCombinedList.length === 0) return;
    const listEl = dom.playerView.hidden ? dom.masteryList : dom.playerMastery;
    renderMasteryList(lastCombinedList, listEl);
}

function setClassicOnly(enabled) {
    classicOnly = enabled;
    localStorage.setItem(LS.classic, enabled ? '1' : '0');

    dom.classicToggle.textContent = enabled ? 'Classic: Hidden' : 'Classic: Shown';
    dom.classicToggle.classList.toggle('off', !enabled);

    rerenderCurrentView();
}

function historyMessage(text, className) {
    const p = document.createElement('p');
    p.className = className || 'history-empty';
    p.textContent = text;
    return p;
}

function createHistoryRow(entry, delta) {
    const li = document.createElement('li');
    li.className = 'history-row';

    const date = document.createElement('span');
    date.className = 'history-date';
    date.textContent = formatLastUpdated(entry.date);

    const points = document.createElement('span');
    points.className = 'history-points';
    points.textContent = `${num(entry.points)} pts`;

    const change = document.createElement('span');
    change.className = 'history-delta';
    if (delta === null) {
        change.classList.add('flat');
        change.textContent = 'first record';
    } else if (delta > 0) {
        change.classList.add('up');
        change.textContent = '+' + num(delta);
    } else if (delta < 0) {
        change.classList.add('down');
        change.textContent = '-' + num(Math.abs(delta));
    } else {
        change.classList.add('flat');
        change.textContent = 'no change';
    }

    li.append(date, points, change);
    return li;
}

function renderHistory(entries, el) {
    el.innerHTML = '';

    if (!Array.isArray(entries) || entries.length === 0) {
        el.appendChild(historyMessage(
            'No history recorded yet - a snapshot is saved every time this player is refreshed.'
        ));
        return;
    }

    const chrono = entries
        .map(e => ({ date: e.date, points: Number(e.points) || 0 }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const first  = chrono[0];
    const last   = chrono[chrono.length - 1];
    const gained = last.points - first.points;

    const summary = document.createElement('p');
    summary.className = 'history-summary';
    summary.textContent =
        `Latest: ${num(last.points)} pts (${formatLastUpdated(last.date)}) - ` +
        `${gained >= 0 ? '+' : ''}${num(gained)} pts since the first record.`;
    el.appendChild(summary);

    const ul = document.createElement('ul');
    ul.className = 'history-list';

    chrono
        .map((entry, i) => createHistoryRow(
            entry,
            i === 0 ? null : entry.points - chrono[i - 1].points
        ))
        .reverse()
        .forEach(row => ul.appendChild(row));

    el.appendChild(ul);
}

function openHistory(player) {
    dom.historyTitle.textContent = `Mastery History - ${player.name}`;
    dom.historyBody.innerHTML = '';
    dom.historyBody.appendChild(historyMessage('Loading...'));
    dom.historyOverlay.hidden = false;

    fetchHistory(player.id)
        .then(entries => renderHistory(entries, dom.historyBody))
        .catch(err => {
            dom.historyBody.innerHTML = '';
            dom.historyBody.appendChild(
                historyMessage(`Couldn't load history: ${err.message}`, 'history-error')
            );
        });
}

function closeHistory() {
    dom.historyOverlay.hidden = true;
}