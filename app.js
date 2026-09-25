async function combineMasteries() {
    const { accounts, formatErrors } = readAccountRows();

    if (formatErrors.length > 0) {
        dom.errorMsg.textContent =
            `Missing #tagline on: ${formatErrors.join(', ')}. Use Name#Tag.`;
        return;
    }
    if (accounts.length === 0) {
        dom.errorMsg.textContent = 'Enter at least one Riot ID.';
        return;
    }

    dom.errorMsg.textContent = '';
    dom.masteryList.innerHTML = '';
    dom.timePlayed.textContent = '';
    dom.searchBtn.disabled = true;
    hideTooltip();

    startRateStatusPolling(status => renderRateWarning(dom.errorMsg, status));

    let result;
    try {
        result = await computeCombined(
            accounts, text => setLoading(dom.masteryList, text)
        );
    } finally {
        stopRateStatusPolling();
    }

    const { list, failures, rateLimited } = result;
    renderMasteryList(list, dom.masteryList);
    lastCombinedList = list;
    lastSearchList   = list;


    lastSearchAccounts = accounts.map(a => ({
        region: a.region,
        riotId: `${a.gameName}#${a.tagLine}`
    }));
    dom.saveFavoriteBtn.hidden = false;


    const key          = searchAccountsKey(lastSearchAccounts);
    const alreadySaved = favorites.some(f => searchAccountsKey(f.accounts) === key);
    dom.saveFavoriteBtn.classList.toggle('saved', alreadySaved);
    dom.saveFavoriteBtn.title = alreadySaved
        ? 'This search is already in your favorites'
        : 'Save this search to favorites';

    computeTimePlayed(accounts).then(tp => {
        if (!tp) {
            dom.timePlayed.textContent = '';
            detachTooltip(dom.timePlayed);
            return;
        }
        const partial = tp.accountsUsed < tp.totalAccounts
            ? ` (from ${tp.accountsUsed}/${tp.totalAccounts} accounts)`
            : '';
        dom.timePlayed.textContent = `Estimated: ${num(tp.hours)}h played${partial}`;
        attachTooltip(dom.timePlayed, tp.tooltip);
    });

    if (failures.length > 0) {
        renderFailures(dom.errorMsg, failures);
    }
    if (rateLimited) {
        renderRateLimit(dom.errorMsg, rateLimited);
    }

    dom.searchBtn.disabled = false;
}

let currentPlayer = null;
let playerToken = 0;

function applyPlayerData(player, data, updated) {
    const { list, totalPoints, perAccount, failures, rateLimited, timePlayed } = data;

    const suffix = updated ? ` - updated ${timeAgo(updated)}` : '';
    dom.playerSub.textContent =
        `${plural(player.accounts.length, 'account')} - ${num(totalPoints)} total pts${suffix}`;

    if (timePlayed) showTimePlayed(timePlayed);

    if (perAccount.length > 0) attachTooltip(dom.playerSub, perAccount);

    renderMasteryList(list, dom.playerMastery);
    lastCombinedList = list;

    dom.playerError.textContent = '';
    if (failures.length > 0) renderFailures(dom.playerError, failures);
    renderRateLimit(dom.playerError, rateLimited);
}

function showTimePlayed(tp) {
    while (dom.playerName.childNodes.length > 1) {
        dom.playerName.removeChild(dom.playerName.lastChild);
    }

    if (!tp) return;

    dom.playerName.appendChild(document.createTextNode(' - '));

    const span = document.createElement('span');
    span.className = 'player-card-time';
    span.textContent = `${num(tp.hours)}h played`;
    attachTooltip(span, tp.tooltip);
    dom.playerName.appendChild(span);
}

async function openPlayer(player) {
    console.log(`[openPlayer] ${player.name} (${player.id}) - ${plural(player.accounts.length, 'account')}`);
    const token = ++playerToken;
    currentPlayer = player;

    selectedPlayerId = player.id;
    updateSelectedCard();

    dom.searchView.hidden = true;
    dom.playerView.hidden = false;

    dom.playerName.textContent = player.name;
    dom.playerSub.textContent = 'Loading...';
    detachTooltip(dom.playerSub);

    dom.playerError.textContent = '';
    dom.playerMastery.innerHTML = '';
    dom.refreshBtn.disabled = false;
    hideTooltip();

    const accounts = player.accounts
        .map(a => {
            const parsed = parseRiotId(a.riotId);
            return parsed ? { region: a.region, ...parsed } : null;
        })
        .filter(Boolean);

    if (accounts.length === 0) {
        dom.playerSub.textContent = '';
        dom.playerError.textContent =
            'This player has no valid accounts configured in players.js.';
        return;
    }

    let cached = null;
    try {
        cached = await fetchPlayerCache(player.id);
    } catch (err) {
        console.warn(`Cache read failed for ${player.name}: ${err.message}`);
    }
    if (token !== playerToken) return;

    if (cached && Array.isArray(cached.list)) {
        if (cached.accountCount === player.accounts.length) {
            console.log(`[openPlayer] cache hit for ${player.name} (${timeAgo(cached.updated)})`);

            if (cached.list.length > 0) {
                player.topChamp = {
                    championId: cached.list[0].championId,
                    points:     cached.list[0].points
                };
                player.championPoints = new Map(
                    cached.list.map(m => [String(m.championId), m.points])
                );
                buildRegionData(player, cached.list);
            }

            applyPlayerData(player, {
                list:        cached.list,
                totalPoints: cached.totalPoints,
                perAccount:  cached.perAccount || [],
                failures:    cached.failures || [],
                rateLimited: null,
                timePlayed:  cached.timePlayed
            }, cached.updated);
            return;
        }
        console.log(`[openPlayer] cache stale for ${player.name} (account count changed)`);
    }

    await fetchAndRenderPlayer(player, accounts, token);
}

async function fetchAndRenderPlayer(player, accounts, token) {
    dom.playerSub.textContent =
        `${plural(accounts.length, 'account')} - updating...`;
    dom.refreshBtn.disabled = true;

    startRateStatusPolling(status => {
        if (token !== playerToken) return;
        renderRateWarning(dom.playerError, status);
    });

    let timePlayedResult = null;
    const timePlayedPromise = computeTimePlayed(accounts).then(tp => {
        timePlayedResult = tp;
    });

    let combined;
    try {
        combined = await computeCombined(accounts, text => {
            if (token === playerToken) setLoading(dom.playerMastery, text);
        });
    } finally {
        stopRateStatusPolling();
    }

    if (token !== playerToken) return;

    const { list, failures, totalPoints, perAccount, rateLimited } = combined;

    await timePlayedPromise;
    if (token !== playerToken) return;

    const updated = new Date().toISOString();

    player.totalPoints = totalPoints;
    player.lastUpdated = updated;

    if (list.length > 0) {
        player.topChamp = {
            championId: list[0].championId,
            points:     list[0].points
        };
        player.championPoints = new Map(
            list.map(m => [String(m.championId), m.points])
        );
        buildRegionData(player, list);
    }

    savePlayerCacheLocal(player);


    if (player.isFavorite) saveFavorites();

    buildPlayerGallery();

    applyPlayerData(player, {
        list, totalPoints, perAccount, failures, rateLimited,
        timePlayed: timePlayedResult
    }, updated);

    if (!rateLimited && list.length > 0) {
        savePlayerCache(player.id, {
            name:         player.name,
            accountCount: player.accounts.length,
            totalPoints,
            list,
            perAccount,
            failures,
            timePlayed:   timePlayedResult
        }).catch(err => console.warn(`Could not save cache for ${player.name}: ${err.message}`));
    }

    recordHistory(player.id, player.name, totalPoints).catch(err =>
        console.warn(`Could not save history for ${player.name}: ${err.message}`)
    );

    dom.refreshBtn.disabled = false;
}

async function refreshCurrentPlayer() {
    if (!currentPlayer) return;
    const player = currentPlayer;
    const token = ++playerToken;

    const accounts = player.accounts
        .map(a => {
            const parsed = parseRiotId(a.riotId);
            return parsed ? { region: a.region, ...parsed } : null;
        })
        .filter(Boolean);

    if (accounts.length === 0) return;

    console.log(`[refresh] ${player.name}`);
    dom.refreshBtn.disabled = true;
    dom.playerError.textContent = '';

    await fetchAndRenderPlayer(player, accounts, token);
}

function backToSearch() {
    playerToken++;

    selectedPlayerId = null;
    currentPlayer = null;
    updateSelectedCard();

    dom.playerView.hidden = true;
    dom.searchView.hidden = false;
}

loadPlayerCache();
loadFavorites();
populateFilters();
buildPlayerGallery();
buildAccountRows();
updateGalleryStats();

attachTooltip(document.querySelector('.discord-link'), 'Join our Discord Server');
attachTooltip(dom.infoBtn, 'About and Legal');
attachTooltip(dom.themeToggle, 'Switch between dark and light mode');
attachTooltip(dom.accentToggle, 'Choose the accent colour');
attachTooltip(dom.topChampToggle, "Show each player's most played champion instead of their total points");
attachTooltip(dom.countryFilter, 'Filter by country (there needs to be at least one user from a country to appear)');
attachTooltip(dom.regionFilter, 'Filter by main region');
attachTooltip(dom.classicToggle, 'Hide or show League Classic champions');
attachTooltip(dom.tooltipToggle, 'Hode or show the tooltip that appears when hovering stuff, like this thing you are reading');
attachTooltip(dom.favoritesToggle, 'Show your saved favorite searches');
attachTooltip(dom.saveFavoriteBtn, 'Save this search to your favorites');

loadChampionData().then(() => {
    buildChampionSearchIndex();
    if (topChampMode) buildPlayerGallery();
});

loadAllPlayerCaches().then(() => {
    buildPlayerGallery();
});

setTooltipsEnabled(savedFlag(LS.tooltips, true));
setClassicOnly(savedFlag(LS.classic, true));
setTopChampMode(false);

dom.searchBtn.addEventListener('click', combineMasteries);
dom.addAccountBtn.addEventListener('click', addAccountRow);
dom.backBtn.addEventListener('click', backToSearch);
dom.refreshBtn.addEventListener('click', refreshCurrentPlayer);

dom.favoritesToggle.addEventListener('click', () => setFavoritesMode(!favoritesMode));
dom.saveFavoriteBtn.addEventListener('click', openFavoriteModal);
dom.favoriteClose.addEventListener('click', closeFavoriteModal);
dom.favoriteOverlay.addEventListener('click', e => {
    if (e.target === dom.favoriteOverlay) closeFavoriteModal();
});
dom.favoriteImageInput.addEventListener('change', handleFavoriteImageSelect);
dom.favoriteSaveBtn.addEventListener('click', saveFavoriteFromSearch);
dom.favoriteAddAccount.addEventListener('click', () => addModalAccountRow());
dom.favoriteNameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') saveFavoriteFromSearch();
});

dom.accounts.addEventListener('input', () => {
    dom.saveFavoriteBtn.hidden = true;
    dom.saveFavoriteBtn.classList.remove('saved');
    lastSearchAccounts = [];
    lastSearchList     = [];
});

dom.historyBtn.addEventListener('click', () => {
    if (currentPlayer) openHistory(currentPlayer);
});
dom.historyClose.addEventListener('click', closeHistory);
dom.historyOverlay.addEventListener('click', e => {
    if (e.target === dom.historyOverlay) closeHistory();
});

dom.playerSearch.addEventListener('input', buildPlayerGallery);
dom.regionFilter.addEventListener('change', buildPlayerGallery);

dom.tooltipToggle.addEventListener('click', () => setTooltipsEnabled(!tooltipsEnabled));
dom.classicToggle.addEventListener('click', () => setClassicOnly(!classicOnly));
dom.topChampToggle.addEventListener('click', () => setTopChampMode(!topChampMode, true));

dom.infoBtn.addEventListener('click', () => { dom.infoOverlay.hidden = false; });
dom.infoClose.addEventListener('click', () => { dom.infoOverlay.hidden = true; });
dom.infoOverlay.addEventListener('click', e => {
    if (e.target === dom.infoOverlay) dom.infoOverlay.hidden = true;
});

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!dom.infoOverlay.hidden) dom.infoOverlay.hidden = true;
    if (!dom.historyOverlay.hidden) closeHistory();
    if (!dom.favoriteOverlay.hidden) closeFavoriteModal();
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitPlayerNames, 100);
});