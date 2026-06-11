// LEADERBOARD DE MCSRRANKED HISPANO... NO TOCAR SI NO SABES
'use strict';

// ==================== SISTEMA DE IDIOMAS / I18N ====================
// Traducciones para ES (default), EN, NO (Bokmål)
const I18N = {
    es: {
        'nav.leaderboard': 'leaderboard',
        'nav.times': 'mejores tiempos',
        'nav.credits': 'creditos',
        'widget.recentMatches': '[ matches recientes ]',
        'widget.globalStats': '[ stats globales ]',
        'widget.countryRank': '[ ranking por pais ]',
        'stats.activePlayers': '* jugadores hispanos activos',
        'stats.avgEloTop10': '* elo promedio top 10',
        'page.top110': 'top 1-10',
        'page.bestTimes': 'mejores tiempos',
        'page.bestTimesDesc': 'records personales de jugadores hispanicos',
        'page.credits': 'creditos',
        'page.creditsDesc': 'hecho con amor por la comunidad de mcsrh :3c',
        'table.player': 'jugador',
        'table.country': 'pais',
        'table.rank': 'rango',
        'table.time': 'tiempo',
        'table.season': 'temporada',
        'table.elo': 'elo',
        'table.phasePoints': 'phase pts',
        'table.loading': 'cargando... //',
        'times.noTimes': 'sin tiempos disponibles //',
        'times.loading': 'cargando tiempos... //',
        'times.currentSeason': 'temporada actual ',
        'times.historic': 'historico',
        'live.title': '[ en vivo ]',
        'live.noMatch': 'sin partida activa //',
        'footer.noAffil': 'no afiliada con mcsrranked ni mojang AB',
        'search.placeholder': 'buscar jugador...',
        'ticker.label': '[ reciente ]',
        'activity.noMatches': 'sin matches recientes //',
        'activity.time': 'tiempo',
        'stats.activePlayers.label': '* jugadores hispanos activos',
        'stats.avgEloTop10.label': '* elo promedio top 10',
        'timeago.justnow': 'hace unos segundos',
        'timeago.seconds': 'hace {n} segundos',
        'timeago.minutes': 'hace {n} minutos',
        'timeago.hours': 'hace {n} horas',
        'pagination.prev': '◀ anterior',
        'pagination.page': 'página',
        'pagination.of': 'de',
        'pagination.next': 'siguiente ▶',
        'credits.role.dev': 'desarrollo ⸜(｡˃ ᵕ ˂ )⸝♡',
        'credits.desc.dev': 'ola',
        'credits.role.base': 'base ( ദ്ദി ˙ᗜ˙ )',
        'credits.desc.base': 'gracias especiales a hugo por haber hecho la anterior leaderboard!',
        'credits.role.supporters': 'supporters ¯\\_(ツ)_/¯',
        'credits.name.supporters': 'frenex, bind y mago',
        'credits.desc.supporters': 'gracias por apoyar este proyecto los qiero mucho',
        'credits.role.helpers': 'ayudistas ≽^-⩊-^≼',
        'credits.desc.helpers': 'gracias por pasarme esta pagina frutigeraeroarchive.org/',
        'footer.generalData': 'datos generales:',
        'footer.title': 'leaderboard hispana de MCSRRanked :3c',
        'footer.madeBy': 'hecho con amor por valeno',
    },
    en: {
        'nav.leaderboard': 'leaderboard',
        'nav.times': 'best times',
        'nav.credits': 'credits',
        'widget.recentMatches': '[ recent matches ]',
        'widget.globalStats': '[ global stats ]',
        'widget.countryRank': '[ country ranking ]',
        'stats.activePlayers': '* active hispanic players',
        'stats.avgEloTop10': '* avg elo top 10',
        'page.top110': 'top 1-10',
        'page.bestTimes': 'best times',
        'page.bestTimesDesc': 'personal records of hispanic players',
        'page.credits': 'credits',
        'page.creditsDesc': 'made with love by the mcsrh community :3c',
        'table.player': 'player',
        'table.country': 'country',
        'table.rank': 'rank',
        'table.time': 'time',
        'table.season': 'season',
        'table.elo': 'elo',
        'table.phasePoints': 'phase pts',
        'table.loading': 'loading... //',
        'times.noTimes': 'no times available //',
        'times.loading': 'loading times... //',
        'times.currentSeason': 'current season ',
        'times.historic': 'all time',
        'live.title': '[ live ]',
        'live.noMatch': 'no active match //',
        'footer.noAffil': 'not affiliated with MCSRRanked or Mojang AB',
        'search.placeholder': 'search player...',
        'ticker.label': '[ recent ]',
        'activity.noMatches': 'no recent matches //',
        'activity.time': 'time',
        'stats.activePlayers.label': '* active hispanic players',
        'stats.avgEloTop10.label': '* avg elo top 10',
        'timeago.justnow': 'just now',
        'timeago.seconds': '{n}s ago',
        'timeago.minutes': '{n}m ago',
        'timeago.hours': '{n}h ago',
        'pagination.prev': '◀ previous',
        'pagination.page': 'page',
        'pagination.of': 'of',
        'pagination.next': 'next ▶',
        'credits.role.dev': 'development ⸜(｡˃ ᵕ ˂ )⸝♡',
        'credits.desc.dev': 'hello',
        'credits.role.base': 'base ( ദ്ദി ˙ᗜ˙ )',
        'credits.desc.base': 'special thanks to hugo for making the previous leaderboard!',
        'credits.role.supporters': 'supporters ¯\\_(ツ)_/¯',
        'credits.name.supporters': 'frenex, bind and mago',
        'credits.desc.supporters': 'thanks for supporting this project!!!!!!!!!!!!',
        'credits.role.helpers': 'helpers ≽^-⩊-^≼',
        'credits.desc.helpers': 'thanks for sharing this pageee itss ooo good :3c frutigeraeroarchive.org/',
        'footer.generalData': 'general data:',
        'footer.title': 'hispanic MCSRRanked leaderboard :3c',
        'footer.madeBy': 'made with love by valeno',
    },
    no: {
        'nav.leaderboard': 'ledertavle',
        'nav.times': 'beste tider',
        'nav.credits': 'credits',
        'widget.recentMatches': '[ siste kamper ]',
        'widget.globalStats': '[ global statistikk ]',
        'widget.countryRank': '[ landsrangering ]',
        'stats.activePlayers': '* aktive hispanske spillere',
        'stats.avgEloTop10': '* gjennomsn. elo topp 10',
        'page.top110': 'topp 1-10',
        'page.bestTimes': 'beste tider',
        'page.bestTimesDesc': 'personlige rekorder for hispanske spillere',
        'page.credits': 'credits',
        'page.creditsDesc': 'laget med kjærlighet av mcsrh-fellesskapet :3c',
        'table.player': 'spiller',
        'table.country': 'land',
        'table.rank': 'rang',
        'table.time': 'tid',
        'table.season': 'sesong',
        'table.elo': 'elo',
        'table.phasePoints': 'fasepoeng',
        'table.loading': 'laster inn... //',
        'times.noTimes': 'ingen tider tilgjengelig //',
        'times.loading': 'laster inn tider... //',
        'times.currentSeason': 'gjeldende sesong ',
        'times.historic': 'historisk',
        'live.title': '[ direkte ]',
        'live.noMatch': 'ingen aktiv kamp //',
        'footer.noAffil': 'ikke tilknyttet MCSRRanked eller Mojang AB',
        'search.placeholder': 'søk etter spiller...',
        'ticker.label': '[ siste ]',
        'activity.noMatches': 'ingen siste kamper //',
        'activity.time': 'tid',
        'stats.activePlayers.label': '* aktive hispanske spillere',
        'stats.avgEloTop10.label': '* gjennomsn. elo topp 10',
        'timeago.justnow': 'akkurat nå',
        'timeago.seconds': 'for {n} sek siden',
        'timeago.minutes': 'for {n} min siden',
        'timeago.hours': 'for {n} t siden',
        'pagination.prev': '◀ forrige',
        'pagination.page': 'side',
        'pagination.of': 'av',
        'pagination.next': 'neste ▶',
        'credits.role.dev': 'utvikling ⸜(｡˃ ᵕ ˂ )⸝♡',
        'credits.desc.dev': 'hei',
        'credits.role.base': 'base ( ദ്ദി ˙ᗜ˙ )',
        'credits.desc.base': 'spesiell takk til hugo for å ha laget den forrige ledertavlen!',
        'credits.role.supporters': 'støttespillere ¯\\_(ツ)_/¯',
        'credits.name.supporters': 'frenex, bind og mago',
        'credits.desc.supporters': 'takk for at dere støtter dette prosjektet hele tiden gjennom, glad i dere :3',
        'credits.role.helpers': 'hjelpere ≽^-⩊-^≼',
        'credits.desc.helpers': 'takk for at du delte denne siden frutigeraeroarchive.org/',
        'footer.generalData': 'generelle data:',
        'footer.title': 'hispansk MCSRRanked-ledertavle :3c',
        'footer.madeBy': 'laget med kjærlighet av valeno',
    },
};

let currentLang = 'es';

function t(key) {
    const lang = I18N[currentLang] || I18N.es;
    return lang[key] || I18N.es[key] || key;
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        // For filter buttons that have a child span (season label), preserve it
        if (key === 'times.currentSeason') {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) node.textContent = t(key);
            });
            return;
        }
        el.textContent = t(key);
    });

    // Update placeholder inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Update ticker label
    const tickerLabel = document.getElementById('ticker-label');
    if (tickerLabel) tickerLabel.textContent = t('ticker.label');

    // Update lang dropdown active state
    const flags = { es: '\uD83C\uDDEA\uD83C\uDDF8', en: '\uD83C\uDDEC\uD83C\uDDE7', no: '\uD83C\uDDF3\uD83C\uDDF4' };
    const currentFlag = document.getElementById('lang-current-flag');
    if (currentFlag) currentFlag.textContent = flags[currentLang] || flags.es;
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Re-render dynamic content that has translated strings
    if (allPlayers && allPlayers.length) {
        if (typeof renderSidebarStats === 'function') renderSidebarStats(allPlayers);
        if (typeof renderSidebarCountries === 'function') renderSidebarCountries(allPlayers);
        if (typeof renderPodium === 'function') renderPodium(allPlayers.slice(0, 3));
        if (typeof renderRow4to10 === 'function') renderRow4to10(allPlayers.slice(3, 10));
        if (typeof renderFullTable === 'function') renderFullTable(allPlayers);
        if (typeof renderTimesTable === 'function') renderTimesTable(allPlayers);
    }
    if (typeof renderActivityList === 'function') {
        renderActivityList(null);
    }
    const liveBody = document.querySelector('.live-body');
    if (liveBody && liveBody.querySelector('.live-no-match')) {
        liveBody.innerHTML = `<div class="live-no-match">${t('live.noMatch')}</div>`;
    }
}

function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    try { localStorage.setItem('lb-lang', lang); } catch (e) { }
    applyTranslations();
}

function toggleLangDropdown() {
    const btn = document.getElementById('lang-current-btn');
    const opts = document.getElementById('lang-options');
    if (!btn || !opts) return;
    const isOpen = opts.classList.contains('open');
    opts.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
}

function pickLang(lang) {
    setLanguage(lang);
    // Close dropdown
    const btn = document.getElementById('lang-current-btn');
    const opts = document.getElementById('lang-options');
    if (btn) btn.classList.remove('open');
    if (opts) opts.classList.remove('open');
}

function initLanguage() {
    let saved = 'es';
    try { saved = localStorage.getItem('lb-lang') || 'es'; } catch (e) { }
    currentLang = I18N[saved] ? saved : 'es';
    // Apply immediately (without re-render since data not loaded yet)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key === 'times.currentSeason') return; // handled separately
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    const tickerLabel = document.getElementById('ticker-label');
    if (tickerLabel) tickerLabel.textContent = t('ticker.label');
    // Update dropdown flag
    const flags = { es: '\uD83C\uDDEA\uD83C\uDDF8', en: '\uD83C\uDDEC\uD83C\uDDE7', no: '\uD83C\uDDF3\uD83C\uDDF4' };
    const currentFlag = document.getElementById('lang-current-flag');
    if (currentFlag) currentFlag.textContent = flags[currentLang] || flags.es;
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    // Fix logo path: relative works for both file:// and served
    const logoImg = document.getElementById('nav-logo-img');
    if (logoImg) {
        logoImg.src = (location.protocol === 'file:') ? 'public/mcsrrankedhispana.png' : '/mcsrrankedhispana.png';
    }
    // Close dropdown when clicking outside
    document.addEventListener('click', e => {
        const dd = document.getElementById('lang-dropdown');
        if (dd && !dd.contains(e.target)) {
            document.getElementById('lang-options')?.classList.remove('open');
            document.getElementById('lang-current-btn')?.classList.remove('open');
        }
    });
}
window.setLanguage = setLanguage;
window.toggleLangDropdown = toggleLangDropdown;
window.pickLang = pickLang;
// ==================== FIN I18N ====================


// Use the Next.js proxy when served through a real server; fall back to direct
// MCSR URL when the file is opened locally (file:// protocol).
const API = (typeof location !== 'undefined' && location.protocol === 'file:')
    ? 'https://mcsrranked.com/api'
    : '/api/mcsr';
const SKIN_HEAD = n => `https://mc-heads.net/avatar/${n}/48`;
const SKIN_BODY = n => `https://nmsr.nickac.dev/fullbody/${n}?width=300`;
const BLOCKED = ['tommy21_'];

// la lista de paises con sus banderas... meti a Guinea Ecuatorial q ni idea si juegan mcsr pero weno
const COUNTRIES = {
    ar: { name: 'argentina', flag: '🇦🇷', en: 'argentina', no: 'argentina' },
    bo: { name: 'bolivia', flag: '🇧🇴', en: 'bolivia', no: 'bolivia' },
    cl: { name: 'chile', flag: '🇨🇱', en: 'chile', no: 'chile' },
    co: { name: 'colombia', flag: '🇨🇴', en: 'colombia', no: 'colombia' },
    cr: { name: 'costa rica', flag: '🇨🇷', en: 'costa rica', no: 'costa rica' },
    cu: { name: 'cuba', flag: '🇨🇺', en: 'cuba', no: 'cuba' },
    do: { name: 'rep. dominicana', flag: '🇩🇴', en: 'dominican republic', no: 'den dominikanske republikk' },
    ec: { name: 'ecuador', flag: '🇪🇨', en: 'ecuador', no: 'ecuador' },
    gt: { name: 'guatemala', flag: '🇬🇹', en: 'guatemala', no: 'guatemala' },
    hn: { name: 'honduras', flag: '🇭🇳', en: 'honduras', no: 'honduras' },
    mx: { name: 'mexico', flag: '🇲🇽', en: 'mexico', no: 'mexico' },
    ni: { name: 'nicaragua', flag: '🇳🇮', en: 'nicaragua', no: 'nicaragua' },
    pa: { name: 'panama', flag: '🇵🇦', en: 'panama', no: 'panama' },
    py: { name: 'paraguay', flag: '🇵🇾', en: 'paraguay', no: 'paraguay' },
    pe: { name: 'peru', flag: '🇵🇪', en: 'peru', no: 'peru' },
    pr: { name: 'puerto rico', flag: '🇵🇷', en: 'puerto rico', no: 'puerto rico' },
    sv: { name: 'el salvador', flag: '🇸🇻', en: 'el salvador', no: 'el salvador' },
    uy: { name: 'uruguay', flag: '🇺🇾', en: 'uruguay', no: 'uruguay' },
    ve: { name: 'venezuela', flag: '🇻🇪', en: 'venezuela', no: 'venezuela' },
    es: { name: 'españa', flag: '🇪🇸', en: 'spain', no: 'spania' },
    gq: { name: 'guinea ecuatorial', flag: '🇬🇶', en: 'equatorial guinea', no: 'ekvatorial-guinea' },
};
const HISPANIC_CODES = Object.keys(COUNTRIES);

// CODIGO MAGICO PARA EMOJIS DE BANDERAS. lo robe de stackoverflow, ni idea de como funciona pero anda joya
function getFlagEmoji(countryCode) {
    if (!countryCode || countryCode.length !== 2) return '';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    try {
        return String.fromCodePoint(...codePoints);
    } catch (e) {
        return '';
    }
}

function countryInfo(code) {
    if (!code) return { name: '?', flag: '🏳️' };
    const lower = code.toLowerCase();
    if (COUNTRIES[lower]) {
        const c = COUNTRIES[lower];
        let name = c.name;
        if (currentLang === 'en') name = c.en;
        else if (currentLang === 'no') name = c.no;
        return { name, flag: c.flag };
    }
    const flag = getFlagEmoji(lower);
    return { name: code.toUpperCase(), flag: flag || '🏳️' };
}

// devuelve el nombre del rango segun el elo (bastante basico pero bue)
function getRankName(elo) {
    if (!elo) return 'Unranked';
    if (elo >= 2000) return 'Netherite';
    if (elo >= 1800) return 'Diamond III';
    if (elo >= 1650) return 'Diamond II';
    if (elo >= 1500) return 'Diamond I';
    if (elo >= 1400) return 'Emerald III';
    if (elo >= 1300) return 'Emerald II';
    if (elo >= 1200) return 'Emerald I';
    if (elo >= 1100) return 'Gold III';
    if (elo >= 1000) return 'Gold II';
    if (elo >= 900) return 'Gold I';
    if (elo >= 800) return 'Iron III';
    if (elo >= 700) return 'Iron II';
    if (elo >= 600) return 'Iron I';
    if (elo >= 500) return 'Coal III';
    if (elo >= 400) return 'Coal II';
    return 'Coal I';
}

// los iconos png de los rangos
function getRankIcon(elo) {
    const prefix = (typeof location !== 'undefined' && location.protocol === 'file:') ? 'public/ranks' : 'ranks';
    if (!elo) return `${prefix}/unrated.png`;
    if (elo >= 2000) return `${prefix}/netherite.png`;
    if (elo >= 1800) return `${prefix}/diamond_3.png`;
    if (elo >= 1650) return `${prefix}/diamond_2.png`;
    if (elo >= 1500) return `${prefix}/diamond_1.png`;
    if (elo >= 1400) return `${prefix}/emerald_3.png`;
    if (elo >= 1300) return `${prefix}/emerald_2.png`;
    if (elo >= 1200) return `${prefix}/emerald_1.png`;
    if (elo >= 1100) return `${prefix}/gold_3.png`;
    if (elo >= 1000) return `${prefix}/gold_2.png`;
    if (elo >= 900) return `${prefix}/gold_1.png`;
    if (elo >= 800) return `${prefix}/iron_3.png`;
    if (elo >= 700) return `${prefix}/iron_2.png`;
    if (elo >= 600) return `${prefix}/iron_1.png`;
    if (elo >= 500) return `${prefix}/coal_3.png`;
    if (elo >= 400) return `${prefix}/coal_2.png`;
    return `${prefix}/coal_1.png`;
}


function fmtNum(n) { return n?.toLocaleString('es-AR') ?? '0'; }

// formatea milisegundos a mm:ss (la clasica)
function fmtTime(ms) {
    if (!ms && ms !== 0) return '--:--';
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// calcula el tiempo transcurrido... dsp veo si se puede optimizar, x ahora safa
function timeAgo(ts) {
    const diff = Date.now() - ts * 1000;
    const s = Math.floor(diff / 1000);
    if (s < 15) return t('timeago.justnow');
    if (s < 60) return t('timeago.seconds').replace('{n}', s);
    const m = Math.floor(s / 60);
    if (m < 60) return t('timeago.minutes').replace('{n}', m);
    return t('timeago.hours').replace('{n}', Math.floor(m / 60));
}

// el numerito verde/rojo de cuanto elo ganaste o perdiste
function getEloChangeHTML(p, extraStyle) {
    const raw = p.eloChange ?? p.eloRate24h ?? null;
    if (raw === null || raw === undefined) return '';
    const change = Math.round(Number(raw));
    if (isNaN(change) || change === 0) return '';
    const cls = change > 0 ? 'pos' : 'neg';
    const arrow = change > 0 ? '▲' : '▼';
    const style = extraStyle ? ` style="${extraStyle}"` : '';
    return `<span class="elo-change ${cls}"${style}>${arrow} ${change > 0 ? '+' : ''}${change}</span>`;
}

// === EL TICKER DE ARRIBA (NO TOCAR X FAVOR) ===
let tickerX = 0, tickerRAF = null, lastTickerTime = null, tickerHalfWidth = 0;
let lastCalculatedChanges = [];
const TICKER_PX_SEC = 55;

function startTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    if (tickerRAF) { cancelAnimationFrame(tickerRAF); tickerRAF = null; }
    lastTickerTime = null;
    function step(ts) {
        if (lastTickerTime === null) lastTickerTime = ts;
        const dt = Math.min(ts - lastTickerTime, 80);
        lastTickerTime = ts;
        tickerX -= (TICKER_PX_SEC * dt) / 1000;
        tickerHalfWidth = track.scrollWidth / 2;
        if (tickerHalfWidth > 0 && tickerX <= -tickerHalfWidth) {
            tickerX += tickerHalfWidth;
        }
        track.style.transform = `translateX(${tickerX}px)`;
        tickerRAF = requestAnimationFrame(step);
    }
    tickerRAF = requestAnimationFrame(step);
}

function renderTickerMarquee(changes, theme, preserveScroll = false) {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    const sep = theme === 'metro' ? ' >>> ' : ' ~*~ ';
    const items = changes
        .filter(c => c.change != null && !isNaN(Number(c.change)))
        .map(c => {
            const val = Math.round(Number(c.change));
            const sign = val >= 0 ? '+' : '';
            const cls = val >= 0 ? 'pos' : 'neg';
            return `<span class="ticker-entry">${c.player} <strong class="elo-change ${cls}">${sign}${val} elo</strong><span class="ticker-sep">${sep}</span></span>`;
        }).join('');

    if (items) {
        // Repeat items enough times to ensure one block is wider than typical viewports (preventing jumpy resets)
        const repeatCount = Math.max(2, Math.ceil(20 / (changes.length || 1)));
        const repeated = items.repeat(repeatCount);
        track.innerHTML = repeated + repeated;
    } else {
        track.innerHTML = '';
    }

    if (!preserveScroll) {
        tickerX = 0;
        lastTickerTime = null;
    }
}

// ==================== CARGA DE DATOS DE LA API ====================
let allPlayers = [];
let lastFetchedGlobalMatches = [];
let backgroundHispanicMatches = [];

let currentLeaderboardSeason = '11'; // default/current season
let latestSeasonNum = 11; // the actual current season number

// ==================== PAGINACION ====================
const PAGE_SIZE = 100;
let currentLbPage = 1;
let currentTimesPage = 1;

function renderPaginationControls(topId, bottomId, currentPage, totalPages, onPageChange) {
    const html = totalPages <= 1 ? '' : `
        <button class="page-btn" id="${topId}-prev" ${currentPage <= 1 ? 'disabled' : ''}
            onclick="(${onPageChange.toString()})(${currentPage - 1})">
            ${t('pagination.prev')}
        </button>
        <span class="page-info">${t('pagination.page')} ${currentPage} ${t('pagination.of')} ${totalPages}</span>
        <button class="page-btn" id="${topId}-next" ${currentPage >= totalPages ? 'disabled' : ''}
            onclick="(${onPageChange.toString()})(${currentPage + 1})">
            ${t('pagination.next')}
        </button>
    `;
    const top = document.getElementById(topId);
    const bot = document.getElementById(bottomId);
    if (top) top.innerHTML = html;
    if (bot) bot.innerHTML = html;
}

async function loadLeaderboard() {
    try {
        const isCurrentSeason = String(currentLeaderboardSeason) === String(latestSeasonNum);
        const seasonParam = currentLeaderboardSeason ? `?season=${currentLeaderboardSeason}` : '';
        const seasonParamAmp = currentLeaderboardSeason ? `&season=${currentLeaderboardSeason}` : '';

        const merged = new Map();

        const isLocal = typeof location !== 'undefined' && location.protocol === 'file:';
        if (isLocal) {
            const results = await Promise.allSettled(
                HISPANIC_CODES.map(code =>
                    fetch(`${API}/leaderboard?country=${code}${seasonParamAmp}`)
                        .then(r => r.ok ? r.json() : null)
                        .then(j => {
                            if (j && j.data) {
                                if (j.data.season && j.data.season.number) {
                                    if (j.data.season.number > latestSeasonNum) {
                                        latestSeasonNum = j.data.season.number;
                                    }
                                    currentSeasonNum = j.data.season.number;
                                }
                                return Array.isArray(j.data.users) ? j.data.users : [];
                            }
                            return [];
                        })
                        .catch(() => [])
                )
            );
            for (const r of results) {
                if (r.status !== 'fulfilled') continue;
                for (const user of r.value) {
                    if (user?.uuid) merged.set(user.uuid, user);
                }
            }
        } else {
            const res = await fetch(`${API}/leaderboard/hispanic${seasonParam}`);
            if (!res.ok) throw new Error('Failed to fetch hispanic leaderboard');
            const json = await res.json();
            const users = json.data?.users || [];
            if (json.data?.season && json.data.season.number) {
                if (json.data.season.number > latestSeasonNum) {
                    latestSeasonNum = json.data.season.number;
                }
                currentSeasonNum = json.data.season.number;
            }
            for (const user of users) {
                if (user?.uuid) merged.set(user.uuid, user);
            }
        }

        // For past seasons, use seasonResult.eloRate instead of the user's current eloRate
        allPlayers = Array.from(merged.values())
            .filter(p => !BLOCKED.includes(p.nickname?.toLowerCase()))
            .map(p => {
                if (!isCurrentSeason && p.seasonResult) {
                    return {
                        ...p,
                        eloRate: p.seasonResult.eloRate ?? p.eloRate,
                        eloRank: p.seasonResult.eloRank ?? p.eloRank,
                    };
                }
                return p;
            })
            .sort((a, b) => (b.eloRate ?? 0) - (a.eloRate ?? 0))
            .map((p, i) => ({ ...p, eloRank: i + 1 }));

        // Only fetch matches and ticker data for the current season
        if (isCurrentSeason) {
            const matchRes = await fetch(`${API}/matches?page=0&count=100`).catch(() => null);
            let recentMatches = [];
            if (matchRes && matchRes.ok) {
                const matchJson = await matchRes.json();
                const rawMatches = matchJson.data?.matches || matchJson.data || [];
                recentMatches = rawMatches.filter(m => m.type === 2);
            }
            const playerChanges = new Map();
            recentMatches.forEach(m => {
                const players = m.players || [];
                const changes = m.changes || [];
                players.forEach(p => {
                    if (HISPANIC_CODES.includes(p.country?.toLowerCase())) {
                        const changeObj = changes.find(c => c.uuid === p.uuid);
                        if (changeObj && changeObj.change !== 0 && !playerChanges.has(p.nickname)) {
                            playerChanges.set(p.nickname, changeObj.change);
                        }
                    }
                });
            });
            const changes = Array.from(playerChanges.entries()).map(([nick, val]) => ({ player: nick, change: val }));
            lastCalculatedChanges = changes.length > 0 ? changes :
                allPlayers.slice(0, 12).map(p => ({ player: p.nickname, change: 0 }));

            // Merge ELO changes into allPlayers so the table/cards show +/- indicators
            allPlayers.forEach(p => {
                if (playerChanges.has(p.nickname)) {
                    p.eloChange = playerChanges.get(p.nickname);
                }
            });

            const theme = document.body.dataset.theme || 'aero';
            renderTickerMarquee(lastCalculatedChanges, theme);
            startTicker();
        } else {
            // Clear elo change indicators for past seasons
            allPlayers.forEach(p => { p.eloChange = undefined; });
        }

        // Fetch detailed statistics for the top 10 players to get average completion time
        const top10 = allPlayers.slice(0, 10);
        await Promise.allSettled(
            top10.map(async (p) => {
                try {
                    const res = await fetch(`${API}/users/${p.uuid}?season=${currentLeaderboardSeason}`);
                    if (res.ok) {
                        const j = await res.json();
                        if (j && j.data) {
                            p.detailedStats = j.data.statistics;
                        }
                    }
                } catch (e) {
                    console.warn(`Failed to fetch stats for ${p.nickname}`, e);
                }
            })
        );

        renderPodium(allPlayers.slice(0, 3));
        renderRow4to10(allPlayers.slice(3, 10));
        currentLbPage = 1;
        renderFullTable(allPlayers);
        renderSidebarStats(allPlayers);
        renderSidebarCountries(allPlayers);

        // Cargar ELO movement 24h en background (no bloquea la carga inicial)
        if (isCurrentSeason) {
            loadEloMovement24h();
        }
    } catch (e) {
        console.error('loadLeaderboard error:', e);
        const tbody = document.getElementById('lb-tbody');
        if (tbody) tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);">error cargando datos. reintenta. //</td></tr>`;
    }
}

// === ELO MOVEMENT 24H REAL (carga en background) ===
async function getEloMovement24h(uuid) {
    const cutoff = Date.now() - 86400000; // 24h en ms
    let matches = [];
    let eloAtCutoff = null;

    try {
        const res = await fetch(`${API}/users/${uuid}/matches?page=0&count=10`);
        if (res.ok) {
            const data = await res.json();
            const batch = data.data || [];

            for (const m of batch) {
                if (m.type !== 2) continue; // Only ranked matches
                const mTs = (m.date || m.endTime || m.createTime || 0) * 1000;
                if (mTs >= cutoff) {
                    matches.push(m);
                } else {
                    // el ELO antes de que empezara el periodo de 24h
                    const changes = m.changes || [];
                    const change = changes.find(c => c.uuid === uuid);
                    if (change && change.eloRate != null) {
                        eloAtCutoff = change.eloRate + change.change;
                    }
                    break;
                }
            }
        }
    } catch (e) {
        // ignore
    }
    return { matches, eloAtCutoff };
}

async function chunkedPromiseAll(items, fn, chunkSize = 15) {
    const results = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        const chunkRes = await Promise.allSettled(chunk.map(fn));
        results.push(...chunkRes);
    }
    return results;
}

async function loadEloMovement24h() {
    // Solo top 75 para no pegar demasiado a la API
    const toFetch = allPlayers.slice(0, 75);
    const matchesMap = new Map();

    await chunkedPromiseAll(
        toFetch,
        async (p) => {
            try {
                const { matches, eloAtCutoff } = await getEloMovement24h(p.uuid);

                // Recopilar partidas
                if (matches && matches.length > 0) {
                    matches.forEach(m => {
                        if (m && m.id) {
                            matchesMap.set(m.id, m);
                        }
                    });
                }

                // El ELO actual del jugador en la leaderboard
                const eloNow = p.eloRate || 0;
                let finalEloAtCutoff = eloAtCutoff;
                if (finalEloAtCutoff === null && matches && matches.length > 0) {
                    const oldestMatch = matches[matches.length - 1];
                    const changeObj = oldestMatch.changes?.find(c => c.uuid === p.uuid);
                    if (changeObj && changeObj.eloRate != null) {
                        finalEloAtCutoff = changeObj.eloRate;
                    }
                }

                if (finalEloAtCutoff !== null) {
                    p.eloChange = eloNow - finalEloAtCutoff;
                } else {
                    p.eloChange = 0;
                }
            } catch (e) {
                // silently ignore
            }
        },
        15
    );

    // Guardar partidas de background
    const uniqueMatches = Array.from(matchesMap.values());
    uniqueMatches.sort((a, b) => (b.date || 0) - (a.date || 0));
    backgroundHispanicMatches = uniqueMatches;

    // Renderizar activity feed con los nuevos datos
    renderActivityList(null);

    // Re-renderizar ticker y tabla con los datos actualizados
    const changedPlayers = allPlayers.filter(p => p.eloChange !== undefined && p.eloChange !== 0);
    if (changedPlayers.length > 0) {
        const changes = changedPlayers.slice(0, 20).map(p => ({ player: p.nickname, change: p.eloChange }));
        lastCalculatedChanges = changes;
        const theme = document.body.dataset.theme || 'aero';
        renderTickerMarquee(changes, theme, true);
    }
    // Actualizar tabla sin resetear la página actual
    renderFullTable(allPlayers);
    renderRow4to10(allPlayers.slice(3, 10));
    renderPodium(allPlayers.slice(0, 3));
}

// ------------- EL PODIO (TOP 3) -------------
function renderPodium(players) {
    const podium = document.getElementById('podium');
    podium.innerHTML = '';
    const ORDER = [1, 0, 2];
    ORDER.forEach(idx => {
        const p = players[idx];
        if (!p) return;
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;
        const rankName = getRankName(elo);
        const rankNum = idx + 1;
        const phase = p.seasonResult?.phasePoint ?? 0;
        const rankClass = { 1: 'r1', 2: 'r2', 3: 'r3' }[rankNum] || '';
        const cardClass = { 1: 'rank-1', 2: 'rank-2', 3: 'rank-3' }[rankNum] || '';

        const stats = p.detailedStats;
        const completionTime = stats?.season?.completionTime?.ranked || stats?.total?.completionTime?.ranked;
        const completions = stats?.season?.completions?.ranked || stats?.total?.completions?.ranked;
        const avgTime = (completionTime && completions) ? fmtTime(completionTime / completions) : '--:--';

        const card = document.createElement('div');
        card.className = `podium-card ${cardClass} glass`;
        card.setAttribute('role', 'listitem');
        card.setAttribute('aria-label', `#${rankNum}: ${p.nickname}, ${elo} elo`);
        card.innerHTML = `
      <div class="podium-rank-badge ${rankClass}" aria-hidden="true">#${rankNum}</div>
      <div class="badge-country" aria-label="${info.name}">${info.flag}</div>
      <div class="podium-skin-wrap">
        <img src="${SKIN_BODY(p.nickname)}" alt="skin de ${p.nickname}" loading="lazy" onerror="this.style.opacity='0.25'" style="max-height:200px;" />
      </div>
      <div class="podium-info">
        <div class="podium-name">${p.nickname}</div>
        <div class="podium-country-label">${info.flag} ${info.name}</div>
        <div>
          <span class="podium-elo">${fmtNum(elo)}</span>
          <span class="podium-elo-label">elo</span>
          ${getEloChangeHTML(p)}
        </div>
        <div class="podium-rank-text" style="display:flex;align-items:center;gap:4px;margin-top:4px;">
          <img src="${getRankIcon(elo)}" alt="${rankName}" style="width:22px;height:22px;image-rendering:pixelated;" />
          <span>${rankName}</span>
        </div>
        <div class="podium-avg-time" style="font-size:0.72rem;color:var(--text-muted);margin-top:2px;">average: ${avgTime}</div>
        ${phase > 0 ? `<span class="podium-phase">${phase} phase points</span>` : ''}
      </div>
    `;
        // ojo: las alturas del podio las maneja el CSS, asi que no hay q meter margin-bottom aca
        podium.appendChild(card);
    });
}

// los de la fila del top 4 al 10 en chiquito
function renderRow4to10(players) {
    const wrap = document.getElementById('row-scroll-inner');
    wrap.innerHTML = '';
    players.forEach((p, i) => {
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;
        const rankName = getRankName(elo);
        const rankNum = i + 4;

        const stats = p.detailedStats;
        const completionTime = stats?.season?.completionTime?.ranked || stats?.total?.completionTime?.ranked;
        const completions = stats?.season?.completions?.ranked || stats?.total?.completions?.ranked;
        const avgTime = (completionTime && completions) ? fmtTime(completionTime / completions) : '--:--';

        const card = document.createElement('div');
        card.className = 'mini-card glass';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `#${rankNum}: ${p.nickname}, ${elo} elo`);
        card.innerHTML = `
      <div class="mini-badge-rank" aria-hidden="true">#${rankNum}</div>
      <div class="mini-skin-wrap">
        <img src="${SKIN_HEAD(p.nickname)}" alt="avatar de ${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
        <div class="mini-flag-badge" aria-label="${info.name}">${info.flag}</div>
      </div>
      <div class="mini-name">${p.nickname}</div>
      <div class="mini-elo">
        ${fmtNum(elo)}
        ${getEloChangeHTML(p, 'display:block;font-size:0.72rem;margin-top:2px;')}
      </div>
      <div class="mini-rank-text" style="display:flex;align-items:center;gap:4px;margin-top:4px;">
        <img src="${getRankIcon(elo)}" alt="${rankName}" style="width:20px;height:20px;image-rendering:pixelated;" />
        <span>${rankName}</span>
      </div>
      <div class="mini-avg-time" style="font-size:0.65rem;color:var(--text-muted);margin-top:2px;">average: ${avgTime}</div>
    `;
        wrap.appendChild(card);
    });
}

// ==== LA TABLA COMPLETA DE ABAJO (con paginado) ====
function renderFullTable(players) {
    const totalPages = Math.ceil(players.length / PAGE_SIZE);
    if (currentLbPage > totalPages) currentLbPage = 1;

    const start = (currentLbPage - 1) * PAGE_SIZE;
    const slice = players.slice(start, start + PAGE_SIZE);

    const tbody = document.getElementById('lb-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    slice.forEach((p, i) => {
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;
        const rankName = getRankName(elo);
        const rankNum = start + i + 1;
        const phase = p.seasonResult?.phasePoint ?? 0;
        const rankCls = rankNum === 1 ? 'lb-rank top1' : rankNum === 2 ? 'lb-rank top2' : rankNum === 3 ? 'lb-rank top3' : 'lb-rank';
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td><span class="${rankCls}">${rankNum}</span></td>
      <td>
        <div class="lb-player">
          <img src="${SKIN_HEAD(p.nickname)}" alt="${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
          <span class="lb-player-name">${p.nickname}</span>
          ${phase > 0 ? `<span class="lb-phase">${phase} pts</span>` : ''}
        </div>
      </td>
      <td><span class="lb-country">${info.flag} ${info.name}</span></td>
      <td>
        <span class="lb-elo">${fmtNum(elo)}</span>
        ${getEloChangeHTML(p, 'font-size:0.7rem;margin-left:6px;')}
      </td>
      <td>
        <span class="lb-rank-badge" style="display:inline-flex;align-items:center;gap:4px;">
          <img src="${getRankIcon(elo)}" alt="${rankName}" style="width:20px;height:20px;image-rendering:pixelated;" />
          <span>${rankName}</span>
        </span>
      </td>
      <td>${phase > 0 ? `<span class="lb-phase">${phase} pts</span>` : '<span style="color:var(--text-muted);font-size:0.72rem;">--</span>'}</td>
    `;
        tbody.appendChild(tr);
    });

    renderPaginationControls(
        'lb-pagination-top',
        'lb-pagination-bottom',
        currentLbPage,
        totalPages,
        (page) => { currentLbPage = page; renderFullTable(allPlayers); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    );
}

// buscador falopa de jugadores
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q || !allPlayers.length) { searchResults.innerHTML = ''; searchResults.classList.remove('open'); return; }
    const matches = allPlayers.filter(p => p.nickname.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { searchResults.innerHTML = ''; searchResults.classList.remove('open'); return; }
    searchResults.innerHTML = matches.map(p => `
    <div class="search-result-item" tabindex="0" role="option" data-nick="${p.nickname}">
      <img src="${SKIN_HEAD(p.nickname)}" alt="${p.nickname}" onerror="this.style.opacity='0.2'" />
      <span class="search-result-name">${p.nickname}</span>
      <span class="search-result-elo">${fmtNum(p.eloRate || 0)} elo</span>
    </div>
  `).join('');
    searchResults.classList.add('open');
});

searchResults.addEventListener('click', e => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const nick = item.dataset.nick;
    searchInput.value = nick;
    searchResults.innerHTML = '';
    searchResults.classList.remove('open');
    document.querySelectorAll('#lb-tbody tr').forEach(r => {
        if (r.querySelector('.lb-player-name')?.textContent === nick) {
            r.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const prev = r.style.background;
            r.style.transition = 'background 0.3s';
            r.style.background = 'var(--accent-glow)';
            setTimeout(() => { r.style.background = prev; }, 2200);
        }
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('#search-wrap')) { searchResults.innerHTML = ''; searchResults.classList.remove('open'); }
});

// sidebar: estadisticas basicas
function renderSidebarStats(players) {
    const el = document.getElementById('stats-list');
    if (!el) return;
    const active = players.length;
    const top10avg = players.slice(0, 10).reduce((s, p) => s + (p.eloRate || 0), 0) / Math.min(10, players.length);
    el.innerHTML = `
    <div class="stat-chip">
      <div class="stat-label">${t('stats.activePlayers')}</div>
      <div><span class="stat-value">${active}</span></div>
    </div>
    <div class="stat-chip">
      <div class="stat-label">${t('stats.avgEloTop10')}</div>
      <div><span class="stat-value">${Math.round(top10avg).toLocaleString('es-AR')}</span></div>
    </div>
  `;
}

// sidebar: ranking por paises
function renderSidebarCountries(players) {
    const el = document.getElementById('countries-list');
    if (!el) return;
    const counts = {};
    for (const p of players) {
        const c = p.country?.toLowerCase() || 'xx';
        counts[c] = (counts[c] || 0) + 1;
    }
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const max = sorted[0]?.[1] || 1;
    el.innerHTML = sorted.map(([code, n]) => {
        const info = countryInfo(code);
        const pct = Math.round((n / max) * 100);
        return `
      <div class="country-row">
        <span class="country-name-label">${info.flag} ${info.name}</span>
        <div class="country-progress-wrap"><div class="country-progress-fill" style="width:${pct}%"></div></div>
        <span class="country-count">${n}</span>
      </div>
    `;
    }).join('');
}

// partidas recientes (el feed de la izquierda)
function renderActivityList(newGlobalMatches = null) {
    if (newGlobalMatches !== null) {
        lastFetchedGlobalMatches = newGlobalMatches;
    }

    // Combinar globales recientes filtradas con las obtenidas en background
    const recentGlobalHisp = lastFetchedGlobalMatches.filter(m => {
        const users = m.players || [];
        return users.some(u => HISPANIC_CODES.includes(u.country?.toLowerCase()));
    });

    const allMatches = [
        ...recentGlobalHisp,
        ...backgroundHispanicMatches
    ];

    // De-duplicar por ID
    const matchMap = new Map();
    allMatches.forEach(m => {
        if (m && m.id) {
            matchMap.set(m.id, m);
        }
    });

    const uniqueMatches = Array.from(matchMap.values());

    // Ordenar por fecha descendente
    uniqueMatches.sort((a, b) => (b.date || b.endTime || b.createTime || 0) - (a.date || a.endTime || a.createTime || 0));

    // Slice a las primeras 7
    const toRender = uniqueMatches.slice(0, 5);

    const el = document.getElementById('activity-list');
    if (!el) return;

    if (!toRender.length) {
        el.innerHTML = `<div style="color:var(--text-muted);font-size:0.72rem;padding:8px 4px;">${t('activity.noMatches')}</div>`;
        return;
    }

    el.innerHTML = toRender.map(m => {
        const players = m.players || [];
        const p1 = players[0], p2 = players[1];
        if (!p1 || !p2) return '';

        const changes = m.changes || [];
        const p1ChangeObj = changes.find(c => c.uuid === p1.uuid);
        const p1cRaw = p1ChangeObj ? p1ChangeObj.change : 0;
        const p1c = (p1cRaw != null && !isNaN(Number(p1cRaw))) ? Math.round(Number(p1cRaw)) : 0;

        const cls = p1c > 0 ? 'win' : 'loss';
        const time = fmtTime(m.result?.timelines?.slice(-1)[0]?.time ?? m.result?.time ?? m.completionTime ?? 0);
        const ago = timeAgo(m.date || m.endTime || m.createTime || Date.now() / 1000);

        return `
        <div class="activity-entry ${cls}">
          <div class="activity-players">
            ${p1.nickname} <span class="activity-elo-change ${p1c >= 0 ? 'pos' : 'neg'}">[${p1c >= 0 ? '+' : ''}${p1c}]</span>
            vs ${p2.nickname}
          </div>
          <div class="activity-meta">${ago} &nbsp;|&nbsp; ${t('activity.time')}: ${time}</div>
        </div>
      `;
    }).filter(Boolean).join('');
}

async function loadActivity() {
    try {
        const r = await fetch(`${API}/matches?page=0&count=100`);
        if (!r.ok) throw new Error('activity fetch failed');
        const json = await r.json();
        const matches = json.data?.matches || json.data || [];
        renderActivityList(matches.filter(m => m.type === 2));
    } catch (e) {
        console.warn('loadActivity error:', e);
        if (backgroundHispanicMatches.length > 0) {
            renderActivityList(null);
        } else {
            const el = document.getElementById('activity-list');
            if (el) el.innerHTML = `<div style="color:var(--text-muted);font-size:0.72rem;padding:8px 4px;">error cargando matches //</div>`;
        }
    }
}

// WIDGET DE PARTIDAS EN VIVO (Tremendo quilombo hacer esto)
let liveIntervalId = null;

async function loadLiveMatch() {
    try {
        const r = await fetch(`${API}/live`);
        if (!r.ok) throw new Error('live fetch failed');
        const json = await r.json();
        const matches = json.data?.liveMatches || [];
        let activeHispMatches = matches.filter(m => {
            const players = m.players || [];
            return players.some(p => HISPANIC_CODES.includes(p.country?.toLowerCase()));
        });
        if (activeHispMatches.length === 0) { setLiveNoMatch(); return; }

        activeHispMatches.forEach(m => {
            m.startTime = Date.now() - (m.currentTime || 0);
            m.matchKey = (m.players || []).map(p => p.uuid).sort().join('_');
        });

        // Ordenar por ELO del jugador hispano con mayor ELO en la partida
        activeHispMatches.sort((a, b) => {
            const getMaxElo = (match) => {
                const players = match.players || [];
                return Math.max(...players
                    .filter(p => HISPANIC_CODES.includes(p.country?.toLowerCase()))
                    .map(p => {
                        const found = allPlayers.find(ap => ap.uuid === p.uuid);
                        return found?.eloRate || 0;
                    })
                );
            };
            return getMaxElo(b) - getMaxElo(a);
        });

        const widgetBody = document.querySelector('.live-body');
        if (!widgetBody) return;
        widgetBody.innerHTML = '';
        const mainMatch = activeHispMatches[0];
        const mainPlayers = mainMatch.players || [];
        const mp1 = mainPlayers[0] || { nickname: '--' };
        const mp2 = mainPlayers[1] || { nickname: '--' };

        // Obtener ELO de los jugadores del match principal desde allPlayers
        const mp1Data = allPlayers.find(p => p.uuid === mp1.uuid);
        const mp2Data = allPlayers.find(p => p.uuid === mp2.uuid);
        const mp1Elo = mp1Data?.eloRate ? `<span style="font-size:0.72rem;opacity:0.75;margin-left:3px;">[${fmtNum(mp1Data.eloRate)}]</span>` : '';
        const mp2Elo = mp2Data?.eloRate ? `<span style="font-size:0.72rem;opacity:0.75;margin-right:3px;">[${fmtNum(mp2Data.eloRate)}]</span>` : '';

        const p1Live = mainMatch.data?.[mp1.uuid]?.liveUrl;
        const p2Live = mainMatch.data?.[mp2.uuid]?.liveUrl;
        const info1 = countryInfo(mp1.country);
        const info2 = countryInfo(mp2.country);

        const p1Html = p1Live
            ? `<a href="${p1Live}" target="_blank" class="live-stream-link">${mp1.nickname}</a>`
            : `<span>${mp1.nickname}</span>`;
        const p2Html = p2Live
            ? `<a href="${p2Live}" target="_blank" class="live-stream-link">${mp2.nickname}</a>`
            : `<span>${mp2.nickname}</span>`;

        widgetBody.innerHTML = `
      <div class="live-matchup">
        <span class="live-player">${p1Html} ${mp1Elo} ${info1.flag}</span>
        <span class="live-vs">vs</span>
        <span class="live-player">${info2.flag} ${mp2Elo} ${p2Html}</span>
      </div>
      <div class="live-timer" id="live-timer-main">00:00</div>
      <div class="live-elo-info">+/- 20</div>
    `;
        if (activeHispMatches.length > 1) {
            const sub = document.createElement('div');
            sub.className = 'live-sub-container';
            activeHispMatches.slice(1).forEach(m => {
                const pl = m.players || [];
                const p1 = pl[0] || { nickname: '--' };
                const p2 = pl[1] || { nickname: '--' };
                const p1LiveSub = m.data?.[p1.uuid]?.liveUrl;
                const p2LiveSub = m.data?.[p2.uuid]?.liveUrl;
                const subInfo1 = countryInfo(p1.country);
                const subInfo2 = countryInfo(p2.country);
                const p1sub = allPlayers.find(ap => ap.uuid === p1.uuid);
                const p2sub = allPlayers.find(ap => ap.uuid === p2.uuid);
                const p1SubElo = p1sub?.eloRate ? ` [${fmtNum(p1sub.eloRate)}]` : '';
                const p2SubElo = p2sub?.eloRate ? ` [${fmtNum(p2sub.eloRate)}]` : '';

                const p1SubHtml = p1LiveSub
                    ? `<a href="${p1LiveSub}" target="_blank" class="live-stream-link">${p1.nickname}</a>`
                    : `<span>${p1.nickname}</span>`;
                const p2SubHtml = p2LiveSub
                    ? `<a href="${p2LiveSub}" target="_blank" class="live-stream-link">${p2.nickname}</a>`
                    : `<span>${p2.nickname}</span>`;

                const div = document.createElement('div');
                div.className = 'live-sub-match';
                div.innerHTML = `
                    <span class="live-sub-players">${p1SubHtml}${p1SubElo} ${subInfo1.flag} vs ${subInfo2.flag} ${p2SubHtml}${p2SubElo}</span>
                    <span id="live-timer-sub-${m.matchKey}" class="live-sub-time">00:00</span>
                `;
                sub.appendChild(div);
            });
            widgetBody.appendChild(sub);
        }
        if (liveIntervalId) clearInterval(liveIntervalId);
        liveIntervalId = setInterval(() => {
            activeHispMatches.forEach((m, idx) => {
                const elapsed = Math.max(0, Date.now() - m.startTime);
                const displayTime = fmtTime(elapsed);
                if (idx === 0) {
                    const el = document.getElementById('live-timer-main');
                    if (el) el.textContent = displayTime;
                } else {
                    const el = document.getElementById(`live-timer-sub-${m.matchKey}`);
                    if (el) el.textContent = displayTime;
                }
            });
        }, 1000);
    } catch (e) { setLiveNoMatch(); }
}

function setLiveNoMatch() {
    const body = document.querySelector('.live-body');
    if (!body) return;
    body.innerHTML = `<div class="live-no-match">${t('live.noMatch')}</div>`;
}

document.getElementById('live-close-btn').addEventListener('click', () => {
    document.getElementById('live-widget').style.display = 'none';
});

// --- SECCION DE MEJORES TIEMPOS ---
let cachedTimesData = null;
let timesFilter = 'season'; // 'season' | 'historico'
let currentSeasonNum = null;

async function loadTimes() {
    const tbody = document.getElementById('times-tbody');
    if (!tbody) return;

    if (cachedTimesData) {
        renderTimesTable(cachedTimesData);
        return;
    }

    tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);font-size:0.85rem;">cargando tiempos... //</td></tr>`;

    try {
        if (!allPlayers || allPlayers.length === 0) {
            await loadLeaderboard();
        }

        tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);font-size:0.85rem;">cargando tiempos de ${allPlayers.length} jugadores... //</td></tr>`;

        const detailedResults = await Promise.allSettled(
            allPlayers.map(p =>
                fetch(`${API}/users/${p.uuid}`)
                    .then(r => r.ok ? r.json() : null)
                    .then(j => {
                        if (!j || !j.data) return null;
                        const userData = j.data;
                        const seasonBestTime = userData.statistics?.season?.bestTime?.ranked || null;
                        const totalBestTime = userData.statistics?.total?.bestTime?.ranked || null;

                        let totalBestTimeSeason = null;
                        if (totalBestTime) {
                            if (seasonBestTime && fmtTime(seasonBestTime) === fmtTime(totalBestTime)) {
                                totalBestTimeSeason = latestSeasonNum;
                            } else {
                                const bestTimeAch =
                                    userData.achievements?.display?.find(a => a.id === 'bestTime') ||
                                    userData.achievements?.total?.find(a => a.id === 'bestTime');

                                if (bestTimeAch && bestTimeAch.date) {
                                    totalBestTimeSeason = getSeasonFromTimestamp(bestTimeAch.date);
                                } else if (seasonBestTime === totalBestTime) {
                                    totalBestTimeSeason = latestSeasonNum;
                                }
                            }
                        }

                        if (!seasonBestTime && !totalBestTime) return null;
                        return { ...p, seasonBestTime, totalBestTime, totalBestTimeSeason };
                    })
                    .catch(() => null)
            )
        );

        cachedTimesData = detailedResults
            .filter(r => r.status === 'fulfilled' && r.value)
            .map(r => r.value);

        updateTimesSeasonLabel();
        renderTimesTable(cachedTimesData);
    } catch (e) {
        console.warn('loadTimes error:', e);
        tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);">error cargando tiempos //</td></tr>`;
    }
}

function updateTimesSeasonLabel() {
    const el = document.getElementById('times-season-label');
    if (el && latestSeasonNum) el.textContent = `S${latestSeasonNum}`;
}

// setTimesFilter
function setTimesFilter(filter) {
    timesFilter = filter;
    document.querySelectorAll('.times-filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`btn-filter-${filter}`);
    if (btn) btn.classList.add('active');
    updateTimesSeasonLabel();
    if (cachedTimesData) renderTimesTable(cachedTimesData);
}

function renderTimesTable(players) {
    const tbody = document.getElementById('times-tbody');
    const theadTr = document.getElementById('times-thead-tr');
    if (!tbody) return;

    const filtered = players
        .map(p => {
            const time = timesFilter === 'season' ? p.seasonBestTime : p.totalBestTime;
            return time ? { ...p, bestTime: time } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.bestTime - b.bestTime);

    if (theadTr) {
        if (timesFilter === 'season') {
            theadTr.innerHTML = `
                <th>#</th>
                <th data-i18n="table.player">${t('table.player')}</th>
                <th data-i18n="table.country">${t('table.country')}</th>
                <th data-i18n="table.time">${t('table.time')}</th>
                <th data-i18n="table.elo">${t('table.elo')}</th>
            `;
        } else {
            theadTr.innerHTML = `
                <th>#</th>
                <th data-i18n="table.player">${t('table.player')}</th>
                <th data-i18n="table.country">${t('table.country')}</th>
                <th data-i18n="table.time">${t('table.time')}</th>
                <th data-i18n="table.season">${t('table.season')}</th>
                <th data-i18n="table.elo">${t('table.elo')}</th>
            `;
        }
    }

    const colCount = timesFilter === 'season' ? 5 : 6;

    if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="${colCount}" style="padding:24px;text-align:center;color:var(--text-muted);">${t('times.noTimes')}</td></tr>`;
        renderPaginationControls('times-pagination-top', 'times-pagination-bottom', 1, 1, () => { });
        return;
    }

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentTimesPage > totalPages) currentTimesPage = 1;
    const start = (currentTimesPage - 1) * PAGE_SIZE;
    const slice = filtered.slice(start, start + PAGE_SIZE);

    tbody.innerHTML = slice.map((p, i) => {
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;

        let seasonColHtml = '';
        if (timesFilter !== 'season') {
            const seasonText = p.totalBestTimeSeason ? `S${p.totalBestTimeSeason}` : '—';
            seasonColHtml = `<td><span class="times-season-badge">${seasonText}</span></td>`;
        }

        return `
      <tr>
        <td><span class="lb-rank">${start + i + 1}</span></td>
        <td>
          <div class="lb-player">
            <img src="${SKIN_HEAD(p.nickname)}" alt="${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
            <span class="lb-player-name">${p.nickname}</span>
          </div>
        </td>
        <td><span class="lb-country">${info.flag} ${info.name}</span></td>
        <td><span class="time-value">${fmtTime(p.bestTime)}</span></td>
        ${seasonColHtml}
        <td><span class="lb-elo">${fmtNum(elo)}</span></td>
      </tr>
    `;
    }).join('');

    renderPaginationControls(
        'times-pagination-top',
        'times-pagination-bottom',
        currentTimesPage,
        totalPages,
        (page) => { currentTimesPage = page; renderTimesTable(cachedTimesData); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    );
}

// CAMBIAR DE TEMA (aero, leaf, metro)
function applyTheme(theme) {
    document.body.dataset.theme = theme;

    // Show/hide metro SVG aurora background layer
    const metroBg = document.getElementById('metro-bg-layer');
    if (metroBg) metroBg.style.display = theme === 'metro' ? 'block' : 'none';

    // Update aurora wave classes to match theme
    const aurora1 = document.getElementById('aurora-1');
    const aurora2 = document.getElementById('aurora-2');
    const aurora3 = document.getElementById('aurora-3');
    if (aurora1) aurora1.className = `aurora-wave ${theme}-aurora-1`;
    if (aurora2) aurora2.className = `aurora-wave ${theme}-aurora-2`;
    if (aurora3) aurora3.className = `aurora-wave ${theme}-aurora-3`;

    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });

    // Re-render ticker in the correct style for this theme, then restart it
    if (lastCalculatedChanges.length) {
        renderTickerMarquee(lastCalculatedChanges, theme, false);
    }
    startTicker();

    // Persist preference
    try { localStorage.setItem('lb-theme', theme); } catch (e) { }
}

// inicia el tema al cargar la pag
function initTheme() {
    let saved = 'aero';
    try { saved = localStorage.getItem('lb-theme') || 'aero'; } catch (e) { }
    applyTheme(saved);

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
    });
}

// clicks en la barra de navegacion
function initNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const page = link.dataset.page;
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
            const section = document.getElementById(`page-${page}`);
            if (section) section.classList.add('active');
            if (page === 'tiempos') loadTimes();
        });
    });
}

// circulitos de fondo (bokeh) flotando por ahi
function initBokeh() {
    const wrap = document.getElementById('bokeh-wrap');
    if (!wrap) return;
    const colors = ['rgba(0,200,230,0.22)', 'rgba(100,230,200,0.18)', 'rgba(200,240,255,0.16)'];
    for (let i = 0; i < 12; i++) {
        const b = document.createElement('div');
        b.className = 'bokeh';
        const size = 18 + Math.random() * 28;
        b.style.cssText = `
            width:${size}px; height:${size}px;
            left:${Math.random() * 100}%;
            background:${colors[Math.floor(Math.random() * colors.length)]};
            filter: blur(${2 + Math.random() * 4}px);
            animation-duration: ${18 + Math.random() * 22}s;
            animation-delay: -${Math.random() * 20}s;
        `;
        wrap.appendChild(b);
    }
}

// los cuadraditos verdes flotantes del tema metro
function initMetroSpecks() {
    const wrap = document.getElementById('metro-specks');
    if (!wrap) return;
    for (let i = 0; i < 22; i++) {
        const s = document.createElement('div');
        s.className = 'metro-speck';
        s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${0.3 + Math.random() * 0.5};`;
        wrap.appendChild(s);
    }
}

function getSeasonFromTimestamp(ts) {
    if (!ts) return null;
    // Correct season boundaries from the MCSR Ranked API
    const seasonStarts = [
        { season: 1, start: 1679875200 }, // 2023-03-27
        { season: 2, start: 1686787200 }, // 2023-06-15
        { season: 3, start: 1695081600 }, // 2023-09-19
        { season: 4, start: 1704499200 }, // 2024-01-06
        { season: 5, start: 1713657600 }, // 2024-04-21
        { season: 6, start: 1724198400 }, // 2024-08-21
        { season: 7, start: 1734739200 }, // 2024-12-21
        { season: 8, start: 1745193600 }, // 2025-04-21
        { season: 9, start: 1755734400 }, // 2025-08-21
        { season: 10, start: 1767312000 }, // 2026-01-02
        { season: 11, start: 1777507200 }, // 2026-04-30
    ];
    for (let i = seasonStarts.length - 1; i >= 0; i--) {
        if (ts >= seasonStarts[i].start) {
            return seasonStarts[i].season;
        }
    }
    return 1;
}

function changeLeaderboardSeason(season) {
    currentLeaderboardSeason = season;

    const podium = document.getElementById('podium');
    if (podium) {
        podium.innerHTML = `
            <div class="podium-card rank-2 shimmer-load" style="width:178px;min-height:360px;margin-bottom:20px;"></div>
            <div class="podium-card rank-1 shimmer-load" style="width:200px;min-height:420px;margin-bottom:40px;"></div>
            <div class="podium-card rank-3 shimmer-load" style="width:168px;min-height:340px;margin-bottom:0px;"></div>
        `;
    }

    const scrollInner = document.getElementById('row-scroll-inner');
    if (scrollInner) {
        scrollInner.innerHTML = `
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
            <div class="mini-card glass shimmer-load" style="height:155px;"></div>
        `;
    }

    const tbody = document.getElementById('lb-tbody');
    if (tbody) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);font-size:0.85rem;">cargando... //</td>
            </tr>
        `;
    }

    loadLeaderboard();
}

window.changeLeaderboardSeason = changeLeaderboardSeason;
window.setTimesFilter = setTimesFilter;

// == ACA ENTRA EL DOMContentLoaded Y ARRANCA TODO ==
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNav();
    initBokeh();
    initMetroSpecks();
    loadLeaderboard();
    loadActivity();
    loadLiveMatch();
    setInterval(loadActivity, 60000);
    setInterval(loadLiveMatch, 30000);
});
