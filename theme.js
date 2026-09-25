const DEFAULT_ACCENT = { dark: '#f5f223', light: '#b58900' };

const SLIDER_S = 0.90;
const SLIDER_L = 0.55;

const RAINBOW_SLOW_MS     = 30000;
const RAINBOW_FAST_MS     = 800;
const RAINBOW_DEFAULT_PCT = 50;

function normalizeHex(value) {
    let v = String(value == null ? '' : value).trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(v)) v = v.split('').map(c => c + c).join('');
    return /^[0-9a-fA-F]{6}$/.test(v) ? '#' + v.toLowerCase() : null;
}

function shade(hex, amount) {
    const n   = parseInt(hex.slice(1), 16);
    const mix = c => Math.max(0, Math.min(255, Math.round(c + 255 * amount)));

    const r = mix((n >> 16) & 255);
    const g = mix((n >> 8) & 255);
    const b = mix(n & 255);

    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

function readableOn(hex) {
    const n   = parseInt(hex.slice(1), 16);
    const lin = c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };

    const lum = 0.2126 * lin((n >> 16) & 255)
              + 0.7152 * lin((n >> 8) & 255)
              + 0.0722 * lin(n & 255);

    return lum > 0.18 ? '#111111' : '#ffffff';
}

function hexToHue(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = ((n >> 16) & 255) / 255;
    const g = ((n >> 8)  & 255) / 255;
    const b = (n         & 255) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d   = max - min;
    if (d === 0) return 0;

    let h;
    if      (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else                h = (r - g) / d + 4;

    h *= 60;
    if (h < 0) h += 360;
    return h;
}

function hslToHex(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r, g, b;
    if      (h < 60)  [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else              [r, g, b] = [c, 0, x];

    const toHex = v => Math.round((v + m) * 255).toString(16).padStart(2, '0');
    return '#' + toHex(r) + toHex(g) + toHex(b);
}

const hueToHex = hue => hslToHex(((hue % 360) + 360) % 360, SLIDER_S, SLIDER_L);

let draggingSlider = false;

let rainbowActive   = false;
let rainbowFrame    = null;
let rainbowPeriodMs = 0;
let rainbowSpeedPct = RAINBOW_DEFAULT_PCT;

function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function currentAccent() {
    return localStorage.getItem(LS.accent) || DEFAULT_ACCENT[currentTheme()];
}

function setAccentVars(hex) {
    const root = document.documentElement;
    root.style.setProperty('--accent',      hex);
    root.style.setProperty('--accent-hov',  shade(hex, -0.1));
    root.style.setProperty('--accent-text', readableOn(hex));
    dom.accentSwatch.style.background = hex;
}

function applyAccent(value, persist) {
    const hex = normalizeHex(value);
    if (!hex) return;

    cancelRainbow(false);

    if (persist) localStorage.setItem(LS.accent, hex);

    setAccentVars(hex);

    dom.accentColorInput.value = hex;


    if (document.activeElement !== dom.accentHexInput) {
        dom.accentHexInput.value = hex.toUpperCase();
    }

    if (!draggingSlider) moveHandleToHue(hexToHue(hex));
}

function moveHandleToHue(hue) {
    const pct = (((hue % 360) + 360) % 360 / 360) * 100;
    dom.accentSliderHandle.style.left = pct + '%';
}

let themeTimer = null;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LS.theme, theme);

    dom.themeToggle.textContent = theme === 'light' ? 'Theme: Light' : 'Theme: Dark';



    if (!rainbowActive) applyAccent(currentAccent(), false);
}

function pctToPeriod(pct) {
    const ratio = RAINBOW_FAST_MS / RAINBOW_SLOW_MS;
    return RAINBOW_SLOW_MS * Math.pow(ratio, pct / 100);
}

function formatPeriod(ms) {
    const s = ms / 1000;
    return s >= 10 ? s.toFixed(0) + 's' : s.toFixed(1) + 's';
}

function currentRainbowSpeedPct() {
    const raw = localStorage.getItem(LS.rainbowSpeed);
    if (raw === null) return RAINBOW_DEFAULT_PCT;
    const n = Number(raw);
    return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : RAINBOW_DEFAULT_PCT;
}

function updateRainbowSpeedUI(pct) {
    dom.accentSpeedHandle.style.left = pct + '%';
    dom.accentSpeedValue.textContent = formatPeriod(pctToPeriod(pct));
}

function applyRainbowSpeed(pct, persist) {
    const clamped = Math.max(0, Math.min(100, pct));
    rainbowSpeedPct = clamped;
    rainbowPeriodMs = pctToPeriod(clamped);

    if (persist) localStorage.setItem(LS.rainbowSpeed, String(clamped));

    updateRainbowSpeedUI(clamped);
}

function updateRainbowUI() {
    dom.accentRainbow.textContent = rainbowActive ? 'Rainbow: ON' : 'Rainbow: OFF';
    dom.accentRainbow.classList.toggle('active', rainbowActive);
    dom.accentSpeed.classList.toggle('dimmed', !rainbowActive);
}

function startRainbow() {
    if (rainbowActive) return;
    rainbowActive = true;
    localStorage.setItem(LS.rainbow, '1');
    updateRainbowUI();



    let hue      = hexToHue(currentAccent());
    let lastTime = performance.now();

    const tick = now => {
        if (!rainbowActive) return;




        const dt = now - lastTime;
        lastTime = now;

        hue = (hue + (dt / rainbowPeriodMs) * 360) % 360;

        setAccentVars(hueToHex(hue));
        moveHandleToHue(hue);

        rainbowFrame = requestAnimationFrame(tick);
    };

    rainbowFrame = requestAnimationFrame(tick);
}

function cancelRainbow(restore) {
    if (!rainbowActive) return;

    rainbowActive = false;

    if (rainbowFrame) {
        cancelAnimationFrame(rainbowFrame);
        rainbowFrame = null;
    }

    localStorage.setItem(LS.rainbow, '0');
    updateRainbowUI();

    if (restore) applyAccent(currentAccent(), false);
}

function pctFromEvent(sliderEl, e) {
    const rect = sliderEl.getBoundingClientRect();
    const x    = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    return (x / rect.width) * 100;
}

function buildHueGradient() {
    const stops = [];
    for (let h = 0; h <= 360; h += 15) {
        stops.push(`hsl(${h}, ${SLIDER_S * 100}%, ${SLIDER_L * 100}%) ${(h / 360) * 100}%`);
    }
    return `linear-gradient(to right, ${stops.join(', ')})`;
}

function setHandlePct(pct) {
    const clamped = Math.max(0, Math.min(100, pct));
    dom.accentSliderHandle.style.left = clamped + '%';
    return clamped;
}

function applySliderPct(pct) {


    applyAccent(hueToHex((pct / 100) * 360), true);
}

function startSliderDrag(e) {
    draggingSlider = true;
    dom.accentSlider.classList.add('dragging');
    try { dom.accentSlider.setPointerCapture(e.pointerId); } catch (err) {}

    applySliderPct(setHandlePct(pctFromEvent(dom.accentSlider, e)));
}

function moveSliderDrag(e) {
    if (!draggingSlider) return;
    applySliderPct(setHandlePct(pctFromEvent(dom.accentSlider, e)));
}

function endSliderDrag(e) {
    if (!draggingSlider) return;
    draggingSlider = false;
    dom.accentSlider.classList.remove('dragging');
    try { dom.accentSlider.releasePointerCapture(e.pointerId); } catch (err) {}
}

function nudgeSlider(deltaPct) {
    const current = parseFloat(dom.accentSliderHandle.style.left) || 0;
    applySliderPct(setHandlePct(current + deltaPct));
}

let draggingSpeed = false;

function startSpeedDrag(e) {
    draggingSpeed = true;
    dom.accentSpeedSlider.classList.add('dragging');
    try { dom.accentSpeedSlider.setPointerCapture(e.pointerId); } catch (err) {}

    applyRainbowSpeed(pctFromEvent(dom.accentSpeedSlider, e), true);
}

function moveSpeedDrag(e) {
    if (!draggingSpeed) return;
    applyRainbowSpeed(pctFromEvent(dom.accentSpeedSlider, e), true);
}

function endSpeedDrag(e) {
    if (!draggingSpeed) return;
    draggingSpeed = false;
    dom.accentSpeedSlider.classList.remove('dragging');
    try { dom.accentSpeedSlider.releasePointerCapture(e.pointerId); } catch (err) {}
}

function nudgeSpeed(deltaPct) {
    applyRainbowSpeed(rainbowSpeedPct + deltaPct, true);
}

function openAccentMenu() {
    dom.accentMenu.hidden = false;
    dom.accentToggle.classList.add('open');
    dom.accentToggle.setAttribute('aria-expanded', 'true');
}

function closeAccentMenu() {
    dom.accentMenu.hidden = true;
    dom.accentToggle.classList.remove('open');
    dom.accentToggle.setAttribute('aria-expanded', 'false');
}

dom.themeToggle.addEventListener('click', () => {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
});

dom.accentToggle.addEventListener('click', e => {
    e.stopPropagation();
    if (dom.accentMenu.hidden) openAccentMenu();
    else closeAccentMenu();
});

dom.accentMenu.addEventListener('click', e => e.stopPropagation());

document.addEventListener('click', () => {
    if (!dom.accentMenu.hidden) closeAccentMenu();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !dom.accentMenu.hidden) closeAccentMenu();
});

dom.accentColorInput.addEventListener('input', e => applyAccent(e.target.value, true));

dom.accentHexInput.addEventListener('input', () => {
    const hex = normalizeHex(dom.accentHexInput.value);
    if (hex) applyAccent(hex, true);
});

dom.accentHexInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const hex = normalizeHex(dom.accentHexInput.value);
    if (hex) applyAccent(hex, true);
    dom.accentHexInput.blur();
});

dom.accentHexInput.addEventListener('blur', () => {
    dom.accentHexInput.value = currentAccent().toUpperCase();
});

dom.accentSlider.addEventListener('pointerdown',   startSliderDrag);
dom.accentSlider.addEventListener('pointermove',   moveSliderDrag);
dom.accentSlider.addEventListener('pointerup',     endSliderDrag);
dom.accentSlider.addEventListener('pointercancel', endSliderDrag);

dom.accentSlider.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); nudgeSlider(-2); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nudgeSlider(2); }
    if (e.key === 'Home')       { e.preventDefault(); applySliderPct(setHandlePct(0)); }
    if (e.key === 'End')        { e.preventDefault(); applySliderPct(setHandlePct(100)); }
});

dom.accentSpeedSlider.addEventListener('pointerdown',   startSpeedDrag);
dom.accentSpeedSlider.addEventListener('pointermove',   moveSpeedDrag);
dom.accentSpeedSlider.addEventListener('pointerup',     endSpeedDrag);
dom.accentSpeedSlider.addEventListener('pointercancel', endSpeedDrag);

dom.accentSpeedSlider.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); nudgeSpeed(-2); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nudgeSpeed(2); }
    if (e.key === 'Home')       { e.preventDefault(); applyRainbowSpeed(0,   true); }
    if (e.key === 'End')        { e.preventDefault(); applyRainbowSpeed(100, true); }
});

dom.accentRainbow.addEventListener('click', () => {
    if (rainbowActive) cancelRainbow(true);
    else               startRainbow();
});

dom.accentReset.addEventListener('click', () => {
    cancelRainbow(false);
    localStorage.removeItem(LS.accent);
    applyAccent(DEFAULT_ACCENT[currentTheme()], false);
});

dom.accentSliderTrack.style.background = buildHueGradient();

applyRainbowSpeed(currentRainbowSpeedPct(), false);

setTheme(currentTheme());
if (localStorage.getItem(LS.rainbow) === '1') startRainbow();
updateRainbowUI();