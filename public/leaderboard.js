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
        'page.bestTimesDesc': '',
        'page.credits': 'creditos',
        'page.creditsDesc': 'hecho con amor por la comunidad de mcsrh :3c',
        'filter.allCountries': 'todos los paises',
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
        // Profile modal
        'profile.loading': 'cargando...',
        'profile.error': 'error cargando datos //',
        'profile.tab.general': '◉ general',
        'profile.tab.stats': '◈ stats',
        'profile.tab.matches': '⚔ matches',
        'profile.eloHistory': 'historial de elo',
        'profile.basedOn': 'basado en:',
        'profile.chartMode.matches': 'partidas',
        'profile.chartMode.time': 'tiempo',
        'profile.chip.peakElo': 'peak elo',
        'profile.chip.average': 'average',
        'profile.chip.matches': 'matches',
        'profile.chip.firstOnline': 'primera vez',
        'profile.lastRanked': 'última vez en ranked',
        'profile.global': 'global',
        'profile.noMatches': 'sin partidas recientes //',
        'profile.matchFilter.label': 'tipo:',
        'profile.matchFilter.ranked': 'ranked',
        'profile.matchFilter.all': 'todas',
        'profile.kpi.wins': 'victorias',
        'profile.kpi.losses': 'derrotas',
        'profile.kpi.winrate': 'winrate',
        'profile.kpi.bestTime': 'mejor tiempo',
        'profile.kpi.bestStreak': 'mejor racha',
        'profile.kpi.currentStreak': 'racha actual',
        'profile.kpi.peakElo': 'peak elo',
        'profile.kpi.completions': 'completions',
        'profile.kpi.sub.currentSeason': 'temporada actual',
        'profile.kpi.sub.inMatches': 'en {n} partidas',
        'profile.kpi.sub.allTime': 'all time',
        'profile.kpi.sub.consecutiveWins': 'victorias consecutivas',
        'profile.kpi.sub.forfeits': '{n} forfeits',
        'profile.winrateLabel': 'win rate temporada',
        'profile.match.type.ranked': 'Ranked',
        'profile.match.type.casual': 'Casual',
        'profile.match.type.private': 'Privada',
        'profile.match.forfeit': 'Forfeit',
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
        'page.bestTimesDesc': '',
        'page.credits': 'credits',
        'page.creditsDesc': 'made with love by the mcsrh community :3c',
        'filter.allCountries': 'all countries',
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
        // Profile modal
        'profile.loading': 'loading...',
        'profile.error': 'error loading data //',
        'profile.tab.general': '◉ general',
        'profile.tab.stats': '◈ stats',
        'profile.tab.matches': '⚔ matches',
        'profile.eloHistory': 'elo history',
        'profile.basedOn': 'based on:',
        'profile.chartMode.matches': 'matches',
        'profile.chartMode.time': 'time',
        'profile.chip.peakElo': 'peak elo',
        'profile.chip.average': 'average',
        'profile.chip.matches': 'matches',
        'profile.chip.firstOnline': 'first seen',
        'profile.lastRanked': 'last ranked',
        'profile.global': 'global',
        'profile.noMatches': 'no recent matches //',
        'profile.matchFilter.label': 'type:',
        'profile.matchFilter.ranked': 'ranked',
        'profile.matchFilter.all': 'all',
        'profile.kpi.wins': 'wins',
        'profile.kpi.losses': 'losses',
        'profile.kpi.winrate': 'winrate',
        'profile.kpi.bestTime': 'best time',
        'profile.kpi.bestStreak': 'best streak',
        'profile.kpi.currentStreak': 'current streak',
        'profile.kpi.peakElo': 'peak elo',
        'profile.kpi.completions': 'completions',
        'profile.kpi.sub.currentSeason': 'current season',
        'profile.kpi.sub.inMatches': 'in {n} matches',
        'profile.kpi.sub.allTime': 'all time',
        'profile.kpi.sub.consecutiveWins': 'consecutive wins',
        'profile.kpi.sub.forfeits': '{n} forfeits',
        'profile.winrateLabel': 'season win rate',
        'profile.match.type.ranked': 'Ranked',
        'profile.match.type.casual': 'Casual',
        'profile.match.type.private': 'Private',
        'profile.match.forfeit': 'Forfeit',
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
        'page.bestTimesDesc': '',
        'page.credits': 'credits',
        'page.creditsDesc': 'laget med kjærlighet av mcsrh-fellesskapet :3c',
        'filter.allCountries': 'alle land',
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
        // Profile modal
        'profile.loading': 'laster inn...',
        'profile.error': 'feil ved lasting av data //',
        'profile.tab.general': '◉ generelt',
        'profile.tab.stats': '◈ statistikk',
        'profile.tab.matches': '⚔ kamper',
        'profile.eloHistory': 'elo-historikk',
        'profile.basedOn': 'basert på:',
        'profile.chartMode.matches': 'kamper',
        'profile.chartMode.time': 'tid',
        'profile.chip.peakElo': 'peak elo',
        'profile.chip.average': 'gjennomsnitt',
        'profile.chip.matches': 'kamper',
        'profile.chip.firstOnline': 'første gang',
        'profile.lastRanked': 'sist i ranked',
        'profile.global': 'globalt',
        'profile.noMatches': 'ingen siste kamper //',
        'profile.matchFilter.label': 'type:',
        'profile.matchFilter.ranked': 'ranked',
        'profile.matchFilter.all': 'alle',
        'profile.kpi.wins': 'seire',
        'profile.kpi.losses': 'tap',
        'profile.kpi.winrate': 'vinnrate',
        'profile.kpi.bestTime': 'beste tid',
        'profile.kpi.bestStreak': 'beste rekke',
        'profile.kpi.currentStreak': 'nåværende rekke',
        'profile.kpi.peakElo': 'peak elo',
        'profile.kpi.completions': 'fullføringer',
        'profile.kpi.sub.currentSeason': 'gjeldende sesong',
        'profile.kpi.sub.inMatches': 'i {n} kamper',
        'profile.kpi.sub.allTime': 'all tid',
        'profile.kpi.sub.consecutiveWins': 'påfølgende seire',
        'profile.kpi.sub.forfeits': '{n} oppgivelser',
        'profile.winrateLabel': 'vinnrate denne sesongen',
        'profile.match.type.ranked': 'Ranked',
        'profile.match.type.casual': 'Uformell',
        'profile.match.type.private': 'Privat',
        'profile.match.forfeit': 'Oppgitt',
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

    // Update country-filter all-countries option
    const countryFilterOpt = document.querySelector('#country-filter option[value=""]');
    if (countryFilterOpt) {
        countryFilterOpt.textContent = t('filter.allCountries');
    }

    // Update placeholder inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Update ticker label
    const tickerLabel = document.getElementById('ticker-label');
    if (tickerLabel) tickerLabel.textContent = t('ticker.label');

    // Update lang dropdown active state
    const flags = { 
        es: '<img class="flag-icon" src="https://flagcdn.com/w20/es.png" alt="es" style="margin-right: 0;">', 
        en: '<img class="flag-icon" src="https://flagcdn.com/w20/gb.png" alt="en" style="margin-right: 0;">', 
        no: '<img class="flag-icon" src="https://flagcdn.com/w20/no.png" alt="no" style="margin-right: 0;">' 
    };
    const currentFlag = document.getElementById('lang-current-flag');
    if (currentFlag) currentFlag.innerHTML = flags[currentLang] || flags.es;
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
    const countryFilterOpt = document.querySelector('#country-filter option[value=""]');
    if (countryFilterOpt) {
        countryFilterOpt.textContent = t('filter.allCountries');
    }
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    const tickerLabel = document.getElementById('ticker-label');
    if (tickerLabel) tickerLabel.textContent = t('ticker.label');
    // Update dropdown flag
    const flags = { 
        es: '<img class="flag-icon" src="https://flagcdn.com/w20/es.png" alt="es" style="margin-right: 0;">', 
        en: '<img class="flag-icon" src="https://flagcdn.com/w20/gb.png" alt="en" style="margin-right: 0;">', 
        no: '<img class="flag-icon" src="https://flagcdn.com/w20/no.png" alt="no" style="margin-right: 0;">' 
    };
    const currentFlag = document.getElementById('lang-current-flag');
    if (currentFlag) currentFlag.innerHTML = flags[currentLang] || flags.es;
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
const SKIN_HEAD = (n, uuid) => {
    const id = uuid || n;
    return `https://minotar.net/helm/${id}/48`;
};
const SKIN_BODY = (n, uuid) => {
    const id = uuid || n;
    return `https://nmsr.nickac.dev/fullbody/${id}?width=300`;
};
const BLOCKED = ['tommy21_', 'ccbrito'];

//  lista de paises con banderas
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

// CODIGO MAGICO PARA EMOJIS DE BANDERAS. 
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
    
    // Mapeo especial para banderas que no tengan codigo ISO exacto
    let flagCode = lower;
    if (lower === 'gb' || lower === 'uk') flagCode = 'gb';
    else if (lower === 'en') flagCode = 'gb'; // England flag uses GB in flagcdn
    
    const flagHtml = `<img class="flag-icon" src="https://flagcdn.com/w20/${flagCode}.png" alt="${code}">`;
    
    if (COUNTRIES[lower]) {
        const c = COUNTRIES[lower];
        let name = c.name;
        if (currentLang === 'en') name = c.en;
        else if (currentLang === 'no') name = c.no;
        return { name, flag: flagHtml };
    }
    return { name: code.toUpperCase(), flag: flagHtml };
}

// devuelve el nombre del rango segun el elo 
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
let activeCountryFilter = ''; // filtro de pais activo ('' = todos)

// ==================== PAGINACION ====================
const PAGE_SIZE = 100;
let currentLbPage = 1;
let currentTimesPage = 1;

// filtra la tabla completa por pais
function filterByCountry(countryCode) {
    activeCountryFilter = countryCode.toLowerCase();
    currentLbPage = 1;
    const filtered = activeCountryFilter
        ? allPlayers.filter(p => (p.country || '').toLowerCase() === activeCountryFilter)
        : allPlayers;
    renderFullTable(filtered);
    // Mostrar contador si hay filtro activo
    const fullSection = document.getElementById('full-table-section');
    const subtitle = fullSection ? fullSection.querySelector('.section-subtitle') : null;
    if (subtitle) {
        if (activeCountryFilter) {
            const info = countryInfo(activeCountryFilter);
            subtitle.innerHTML = `${info.flag} ${info.name} <span style="opacity:0.55;font-size:0.7rem;">(${filtered.length} jugadores)</span>`;
        } else {
            subtitle.textContent = 'main';
        }
    }
}

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
        // Aplicar filtro de pais si hay uno activo
        const filteredForTable = activeCountryFilter
            ? allPlayers.filter(p => (p.country || '').toLowerCase() === activeCountryFilter)
            : allPlayers;
        renderFullTable(filteredForTable);
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
    // Solo top 75 para no pegarle a la API xd
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
    // Actualizar tabla sin resetear la página actual (respetando el filtro de pais activo)
    const filteredForBg = activeCountryFilter
        ? allPlayers.filter(p => (p.country || '').toLowerCase() === activeCountryFilter)
        : allPlayers;
    renderFullTable(filteredForBg);
    renderRow4to10(allPlayers.slice(3, 10));
    renderPodium(allPlayers.slice(0, 3));
}

// ------------- EL PODIo -------------
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
        <img src="${SKIN_BODY(p.nickname, p.uuid)}" alt="skin de ${p.nickname}" loading="lazy" onerror="this.style.opacity='0.25'" style="max-height:200px; max-width:100%; width:auto; height:auto; object-fit:contain;" />
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
        // as alturas del podio las maneja el CSS, asi que no hay qe meter eee me olvide
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
        <img src="${SKIN_HEAD(p.nickname, p.uuid)}" alt="avatar de ${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
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
          <img src="${SKIN_HEAD(p.nickname, p.uuid)}" alt="${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
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
        (page) => { currentLbPage = page; renderFullTable(allPlayers); }
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
      <img src="${SKIN_HEAD(p.nickname, p.uuid)}" alt="${p.nickname}" onerror="this.style.opacity='0.2'" />
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
        const hasBlocked = users.some(u => BLOCKED.includes(u.nickname?.toLowerCase()));
        if (hasBlocked) return false;
        return users.some(u => HISPANIC_CODES.includes(u.country?.toLowerCase()));
    });

    const allMatches = [
        ...recentGlobalHisp,
        ...backgroundHispanicMatches.filter(m => {
            const users = m.players || [];
            return !users.some(u => BLOCKED.includes(u.nickname?.toLowerCase()));
        })
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
            const hasBlocked = players.some(p => BLOCKED.includes(p.nickname?.toLowerCase()));
            if (hasBlocked) return false;
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

// (live widget X removed — widget is always visible)

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

        const total = allPlayers.length;
        let done = 0;

        const showProgress = () => {
            const pct = Math.round((done / total) * 100);
            tbody.innerHTML = `
                <tr><td colspan="6" style="padding:24px 32px;text-align:center;">
                    <div style="color:var(--text-muted);font-size:0.82rem;margin-bottom:10px;letter-spacing:0.05em;">
                        cargando tiempos — ${done}/${total} jugadores
                    </div>
                    <div style="width:100%;max-width:340px;margin:0 auto;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent,#7c3aed),#a78bfa);border-radius:4px;transition:width 0.3s ease;"></div>
                    </div>
                    <div style="color:var(--text-muted);font-size:0.72rem;margin-top:8px;opacity:0.6;">${pct}%</div>
                </td></tr>`;
        };

        showProgress();

        const fetchPlayerTime = async (p) => {
            try {
                const r = await fetch(`${API}/users/${p.uuid}`);
                const j = r.ok ? await r.json() : null;
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
            } catch {
                return null;
            } finally {
                done++;
                showProgress();
            }
        };

        const rawResults = await chunkedPromiseAll(allPlayers, fetchPlayerTime, 12);

        cachedTimesData = rawResults
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
            <img src="${SKIN_HEAD(p.nickname, p.uuid)}" alt="${p.nickname}" loading="lazy" onerror="this.style.opacity='0.2'" />
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
        (page) => { currentTimesPage = page; renderTimesTable(cachedTimesData); }
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
    let saved = 'leaf';
    try { saved = localStorage.getItem('lb-theme') || 'leaf'; } catch (e) { }
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
            if (page === 'h2h') initH2H();
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

// e
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



// =====================================================
// PLAYER PROFILES — modal de perfil de jugador
// =====================================================

const H2H_COLORS = [
    '#38bdf8', // sky
    '#facc15', // gold
    '#fb7185', // coral
    '#4ade80', // lime
    '#c084fc', // violet
    '#f97316', // orange
    '#ec4899', // pink
    '#2dd4bf', // teal
    '#f87171', // red
    '#818cf8', // indigo
];

// Achievement display names & icons
const ACH_META = {
    seasonResult:     { icon: '🏆', name: 'Season Result' },
    ironHoe:          { icon: '⚔️', name: 'Iron Hoe' },
    playtime:         { icon: '⏱️', name: 'Playtime' },
    playedMatches:    { icon: '🎮', name: 'Matches Played' },
    bestTime:         { icon: '⚡', name: 'Best Time' },
    armorless:        { icon: '🛡️', name: 'Armorless' },
    highestWinStreak: { icon: '🔥', name: 'Win Streak' },
    wins:             { icon: '✅', name: 'Wins' },
    foodless:         { icon: '🍎', name: 'Foodless' },
    ironPickless:     { icon: '⛏️', name: 'Pickless' },
};

let profileCache = {};

window.openProfile = async function(uuid, nickname, country) {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;

    currentProfileChartMode = 'matches';
    const selector = document.getElementById('profile-chart-selector');
    if (selector) {
        selector.querySelectorAll('.pill-btn').forEach(btn => {
            const isMatches = (btn.getAttribute('onclick') || '').includes('matches');
            btn.classList.toggle('active', isMatches);
        });
    }

    // Show modal with loading state
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.getElementById('profile-name').textContent = nickname;
    document.getElementById('profile-avatar').src = SKIN_HEAD(nickname, uuid);
    document.getElementById('profile-meta').innerHTML = `<span style="color:var(--text-muted);font-size:0.8rem;">${t('profile.loading')}</span>`;
    document.getElementById('profile-rank-row').innerHTML = '';
    const _soc = document.getElementById('profile-socials'); if (_soc) _soc.innerHTML = '';
    document.getElementById('profile-general-chips').innerHTML = '';
    document.getElementById('profile-achievements').innerHTML = '';
    document.getElementById('profile-kpi-grid').innerHTML = '';
    document.getElementById('profile-winrate-wrap').innerHTML = '';
    document.getElementById('profile-phases-table').innerHTML = '';
    document.getElementById('profile-matches-list').innerHTML = '';

    // Switch to general tab
    switchProfileTab('general');

    const data = await loadProfileData(uuid, nickname, country);
    if (!data) {
        document.getElementById('profile-meta').innerHTML = `<span style="color:#f87171;">${t('profile.error')}</span>`;
        return;
    }

    renderProfileHeader(data);
    renderProfileGeneral(data);
    renderProfileStats(data);
    renderProfileMatches(data);
};

window.switchProfileTab = function(tab) {
    ['general', 'stats', 'matches'].forEach(t => {
        const el = document.getElementById(`profile-tab-${t}`);
        const btn = document.getElementById(`ptab-${t}`);
        if (el) el.style.display = t === tab ? '' : 'none';
        if (btn) btn.classList.toggle('active', t === tab);
    });
    // Re-draw canvas after display: block (needed for size)
    if (tab === 'general') {
        setTimeout(() => {
            const canvas = document.getElementById('profile-elo-canvas');
            if (canvas && canvas._drawFn) canvas._drawFn();
        }, 30);
    }
};

async function loadProfileData(uuid, nickname, country) {
    if (profileCache[uuid]) return profileCache[uuid];
    try {
        const [userRes, matchRes, rankedRes] = await Promise.all([
            fetch(`${API}/users/${uuid}`),
            fetch(`${API}/users/${uuid}/matches?count=50`),
            fetch(`${API}/users/${uuid}/matches?count=100&type=2`),
        ]);
        if (!userRes.ok) return null;
        const userJson = await userRes.json();
        if (!userJson?.data) return null;
        const d = userJson.data;

        let matches = [];
        if (matchRes.ok) {
            const matchJson = await matchRes.json();
            matches = matchJson?.data || [];
        }

        let rankedMatches = [];
        if (rankedRes.ok) {
            const rankedJson = await rankedRes.json();
            rankedMatches = rankedJson?.data || [];
        }

        const result = { uuid, nickname: d.nickname || nickname, country: d.country || country, raw: d, matches, rankedMatches };
        profileCache[uuid] = result;
        return result;
    } catch {
        return null;
    }
}

function renderProfileHeader(data) {
    const d = data.raw;
    const info = countryInfo(data.country);
    const elo = d.eloRate || 0;
    const rank = d.eloRank || null;
    const rankName = getRankName(elo);
    const rankIcon = getRankIcon(elo);

    document.getElementById('profile-name').textContent = data.nickname;
    document.getElementById('profile-avatar').src = SKIN_HEAD(data.nickname, data.uuid);

    const ts = d.timestamp || {};
    const lastRanked = ts.lastRanked ? timeAgo(ts.lastRanked) : null;

    const chips = [
        `${info.flag} ${info.name}`,
        rank ? `#${rank} global` : null,
        lastRanked ? `${t('profile.lastRanked')}: ${lastRanked}` : null,
    ].filter(Boolean);

    document.getElementById('profile-meta').innerHTML = chips.map(c =>
        `<span class="profile-modal-meta-chip">${c}</span>`
    ).join('');

    document.getElementById('profile-rank-row').innerHTML = `
        <img src="${rankIcon}" alt="${rankName}" style="width:28px;height:28px;image-rendering:pixelated;" />
        <span class="profile-rank-elo">${fmtNum(elo)}</span>
        <span style="color:var(--text-muted);">elo — ${rankName}</span>
    `;

    // Socials section
    const conn = d.connections || {};
    const socials = [];
    if (conn.twitch?.id) socials.push({
        href: `https://twitch.tv/${conn.twitch.id}`, label: conn.twitch.id, color: '#9146ff',
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>',
    });
    if (conn.discord?.id) socials.push({
        href: null, label: conn.discord.name || conn.discord.id, color: '#5865f2',
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>',
    });
    if (conn.youtube?.id) socials.push({
        href: `https://youtube.com/channel/${conn.youtube.id}`, label: 'YouTube', color: '#ff0000',
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    });
    if (conn.twitter?.id || conn['twitter-legacy']?.id) {
        const twitterId = conn.twitter?.id || conn['twitter-legacy']?.id;
        socials.push({
            href: `https://twitter.com/${twitterId}`, label: `@${twitterId}`, color: '#1da1f2',
            icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        });
    }

    const socialsEl = document.getElementById('profile-socials');
    if (socialsEl) {
        socialsEl.innerHTML = socials.length ? socials.map(s => s.href
            ? `<a class="profile-social-link" href="${s.href}" target="_blank" rel="noopener" style="color:${s.color};">${s.icon}<span>${s.label}</span></a>`
            : `<span class="profile-social-link" style="color:${s.color};">${s.icon}<span>${s.label}</span></span>`
        ).join('') : '';
    }
}

// Builds ELO history from matches
function buildEloHistory(matches, myUuid, currentElo) {
    if (!matches || !matches.length) return [];
    const chronological = [...matches].sort((a, b) => (a.date || 0) - (b.date || 0));

    const history = [];
    chronological.forEach(m => {
        const cEntry = m.changes?.find(c => c.uuid === myUuid);
        if (cEntry && cEntry.eloRate !== null && cEntry.eloRate !== undefined) {
            history.push({
                elo: cEntry.eloRate,
                date: m.date
            });
        }
    });
    return history;
}

// Builds a timeline for chart drawing over a specified period of days
function buildEloTimeline(matches, myUuid, currentElo, days) {
    const nowSec = Date.now() / 1000;
    const cutoff = nowSec - days * 86400;

    const history = buildEloHistory(matches, myUuid, currentElo);
    const activePoints = history.filter(p => p.date >= cutoff);

    let startingElo = currentElo;
    if (activePoints.length > 0) {
        const beforePoints = history.filter(p => p.date < cutoff);
        if (beforePoints.length > 0) {
            startingElo = beforePoints[beforePoints.length - 1].elo;
        } else {
            // Estimate ELO before first match by subtracting its change
            const firstMatch = matches.find(m => m.date === activePoints[0].date);
            const cEntry = firstMatch?.changes?.find(c => c.uuid === myUuid);
            if (cEntry && cEntry.change !== undefined) {
                startingElo = activePoints[0].elo - cEntry.change;
            } else {
                startingElo = activePoints[0].elo;
            }
        }
    } else {
        if (history.length > 0) {
            startingElo = history[history.length - 1].elo;
        }
    }

    const pts = [];
    pts.push({
        elo: startingElo,
        date: cutoff,
        label: new Date(cutoff * 1000).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })
    });

    activePoints.forEach(p => {
        pts.push({
            elo: p.elo,
            date: p.date,
            label: new Date(p.date * 1000).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })
        });
    });

    pts.push({
        elo: currentElo,
        date: nowSec,
        label: 'ahora'
    });

    return pts;
}

let lastProfileData = null;
let currentProfileChartMode = 'matches';

window.setProfileChartMode = function(mode) {
    if (currentProfileChartMode === mode) return;
    currentProfileChartMode = mode;
    
    // Toggle active classes on selector buttons
    const selector = document.getElementById('profile-chart-selector');
    if (selector) {
        const buttons = selector.querySelectorAll('.pill-btn');
        buttons.forEach(btn => {
            const isActive = (btn.getAttribute('onclick') || '').includes(mode);
            btn.classList.toggle('active', isActive);
        });
    }

    // Re-render chart if lastProfileData exists
    if (lastProfileData) {
        const d = lastProfileData.raw;
        const peak = (d.seasonResult || {}).highest || 0;
        const current = d.eloRate || 0;
        
        // Detect mobile (viewport width <= 640px)
        const isMobile = window.innerWidth <= 640;
        const matchCount = isMobile ? 30 : 50;

        const eloPoints = currentProfileChartMode === 'matches'
            ? buildEloMatchesSeries(lastProfileData.rankedMatches, lastProfileData.uuid, current, matchCount)
            : buildEloTimeline(lastProfileData.rankedMatches, lastProfileData.uuid, current, 30);

        const canvas = document.getElementById('profile-elo-canvas');
        const tooltip = document.getElementById('profile-chart-tooltip');
        
        const drawFn = () => drawEloChart(canvas, tooltip, eloPoints, peak, '#38bdf8', { stepLine: currentProfileChartMode === 'time' });
        canvas._drawFn = drawFn;
        drawFn();
    }
};

// Builds ELO series based on match count (oldest first)
function buildEloMatchesSeries(matches, myUuid, currentElo, maxCount) {
    const history = buildEloHistory(matches, myUuid, currentElo);
    const sliced = history.slice(-maxCount);

    if (sliced.length === 0) {
        return [{ label: 'ahora', elo: currentElo, date: Date.now() / 1000 }];
    }

    const pts = sliced.map((p, idx) => ({
        elo: p.elo,
        date: p.date,
        label: new Date(p.date * 1000).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })
    }));

    if (pts[pts.length - 1].elo !== currentElo) {
        pts.push({
            elo: currentElo,
            date: Date.now() / 1000,
            label: 'ahora'
        });
    }

    return pts;
}

function renderProfileGeneral(data) {
    const d = data.raw;
    const seasonRes = d.seasonResult || {};
    const peak = seasonRes.highest || 0;
    const current = d.eloRate || 0;

    lastProfileData = data;
    
    // Default to matches mode
    const isMobile = window.innerWidth <= 640;
    const matchCount = isMobile ? 30 : 50;

    // Toggle active classes on selector buttons when rendering general tab
    const selector = document.getElementById('profile-chart-selector');
    if (selector) {
        const buttons = selector.querySelectorAll('.pill-btn');
        buttons.forEach(btn => {
            const isActive = (btn.getAttribute('onclick') || '').includes(currentProfileChartMode);
            btn.classList.toggle('active', isActive);
        });
    }

    const eloPoints = currentProfileChartMode === 'matches'
        ? buildEloMatchesSeries(data.rankedMatches, data.uuid, current, matchCount)
        : buildEloTimeline(data.rankedMatches, data.uuid, current, 30);

    const canvas = document.getElementById('profile-elo-canvas');
    const tooltip = document.getElementById('profile-chart-tooltip');

    const drawFn = () => drawEloChart(canvas, tooltip, eloPoints, peak, '#38bdf8', { stepLine: currentProfileChartMode === 'time' });
    canvas._drawFn = drawFn;
    setTimeout(drawFn, 50);

    // General chips — include average completion time
    const ts = d.timestamp || {};
    const totalStats = d.statistics?.total || {};
    const seasonStats = d.statistics?.season || {};
    const compTime = seasonStats.completionTime?.ranked || totalStats.completionTime?.ranked || 0;
    const compCount = seasonStats.completions?.ranked || totalStats.completions?.ranked || 0;
    const avgTime = (compTime && compCount) ? fmtTime(compTime / compCount) : '\u2014';

    document.getElementById('profile-general-chips').innerHTML = [
        { label: t('profile.chip.peakElo'), val: fmtNum(peak) || '\u2014' },
        { label: t('profile.chip.average'), val: avgTime },
        { label: t('profile.chip.matches'), val: fmtNum(totalStats.playedMatches?.ranked || 0) },
        { label: t('profile.chip.firstOnline'), val: ts.firstOnline ? new Date(ts.firstOnline * 1000).toLocaleDateString('es-AR', {year:'numeric', month:'short'}) : '\u2014' },
    ].map(c => `
        <div class="profile-chip">
            <div class="profile-chip-label">${c.label}</div>
            <div class="profile-chip-val">${c.val}</div>
        </div>
    `).join('');
}

function drawEloChart(canvas, tooltip, points, peak, color = '#38bdf8', opts = {}) {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width || canvas.offsetWidth || 600;
    const H = rect.height || canvas.offsetHeight || 220;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const theme = document.body.getAttribute('data-theme') || 'aero';
    const isLight = (theme === 'aero');

    if (!points || points.length < 2) {
        ctx.fillStyle = isLight ? 'rgba(0, 90, 140, 0.03)' : 'rgba(255,255,255,0.04)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.4)' : 'rgba(255,255,255,0.2)';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('sin datos de temporada', W / 2, H / 2);
        return;
    }

    const PAD = { top: 20, right: 20, bottom: 32, left: 52 };
    const gW = W - PAD.left - PAD.right;
    const gH = H - PAD.top - PAD.bottom;

    const eloVals = points.map(p => p.elo);
    const minElo = Math.min(...eloVals) - 20;
    const maxElo = Math.max(...eloVals) + 20;
    const eloRange = maxElo - minElo || 1;

    const timeBased = !!opts.stepLine;
    const minTime = points[0].date;
    const maxTime = points[points.length - 1].date;
    const timeRange = maxTime - minTime || 1;

    const toX = (pt, i) => {
        if (timeBased) {
            return PAD.left + ((pt.date - minTime) / timeRange) * gW;
        } else {
            return PAD.left + (i / (points.length - 1)) * gW;
        }
    };
    const toY = (elo) => PAD.top + gH - ((elo - minElo) / eloRange) * gH;

    // Background
    ctx.fillStyle = isLight ? 'rgba(0, 90, 140, 0.03)' : 'rgba(0,0,0,0.18)';
    ctx.roundRect ? ctx.roundRect(0, 0, W, H, 8) : ctx.fillRect(0, 0, W, H);
    ctx.fill();

    // Grid lines
    ctx.strokeStyle = isLight ? 'rgba(0, 90, 140, 0.08)' : 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
        const y = PAD.top + (gH / gridSteps) * i;
        ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(W - PAD.right, y); ctx.stroke();
        const label = Math.round(maxElo - (eloRange / gridSteps) * i);
        ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.6)' : 'rgba(255,255,255,0.28)';
        ctx.font = `${10 * dpr / dpr}px sans-serif`;
        ctx.textAlign = 'right';
        ctx.fillText(label, PAD.left - 6, y + 4);
    }

    // Peak ELO dashed line
    if (peak && peak > minElo && peak < maxElo + 50) {
        const peakY = toY(peak);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = isLight ? 'rgba(180, 130, 10, 0.45)' : 'rgba(250,204,21,0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(PAD.left, peakY); ctx.lineTo(W - PAD.right, peakY); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = isLight ? 'rgba(180, 130, 10, 0.7)' : 'rgba(250,204,21,0.5)';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`peak ${peak}`, PAD.left + 4, peakY - 4);
    }

    // Animate draw with rAF
    let progress = opts.progress !== undefined ? opts.progress : 0;
    const DURATION = 600;
    const startTime = performance.now();

    function frame(now) {
        progress = Math.min((now - startTime) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const visiblePts = Math.max(2, Math.round(eased * (points.length)));

        ctx.clearRect(0, 0, W, H);

        // bg again
        ctx.fillStyle = isLight ? 'rgba(0, 90, 140, 0.03)' : 'rgba(0,0,0,0.18)';
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(0, 0, W, H, 8); else ctx.rect(0, 0, W, H);
        ctx.fill();

        // grid
        ctx.strokeStyle = isLight ? 'rgba(0, 90, 140, 0.08)' : 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= gridSteps; i++) {
            const y = PAD.top + (gH / gridSteps) * i;
            ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(W - PAD.right, y); ctx.stroke();
            const label = Math.round(maxElo - (eloRange / gridSteps) * i);
            ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.6)' : 'rgba(255,255,255,0.28)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(label, PAD.left - 6, y + 4);
        }

        if (peak && peak > minElo) {
            const peakY = toY(peak);
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = isLight ? 'rgba(180, 130, 10, 0.45)' : 'rgba(250,204,21,0.35)';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(PAD.left, peakY); ctx.lineTo(W - PAD.right, peakY); ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = isLight ? 'rgba(180, 130, 10, 0.7)' : 'rgba(250,204,21,0.5)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(`peak ${peak}`, PAD.left + 4, peakY - 4);
        }

        // Filled area + curve for visible points
        const vpts = points.slice(0, visiblePts);

        if (vpts.length >= 2) {
            // Fill area
            ctx.beginPath();
            ctx.moveTo(toX(vpts[0], 0), H - PAD.bottom);
            ctx.lineTo(toX(vpts[0], 0), toY(vpts[0].elo));
            for (let i = 1; i < vpts.length; i++) {
                if (timeBased) {
                    ctx.lineTo(toX(vpts[i], i), toY(vpts[i - 1].elo));
                }
                ctx.lineTo(toX(vpts[i], i), toY(vpts[i].elo));
            }
            const grad = ctx.createLinearGradient(0, PAD.top, 0, H - PAD.bottom);
            grad.addColorStop(0, hexToRgba(color, 0.18));
            grad.addColorStop(1, hexToRgba(color, 0.01));
            ctx.lineTo(toX(vpts[vpts.length - 1], vpts.length - 1), H - PAD.bottom);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();

            // Line — sharp
            ctx.beginPath();
            ctx.moveTo(toX(vpts[0], 0), toY(vpts[0].elo));
            for (let i = 1; i < vpts.length; i++) {
                if (timeBased) {
                    ctx.lineTo(toX(vpts[i], i), toY(vpts[i - 1].elo));
                }
                ctx.lineTo(toX(vpts[i], i), toY(vpts[i].elo));
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Dots — small
            vpts.forEach((pt, i) => {
                ctx.beginPath();
                ctx.arc(toX(pt, i), toY(pt.elo), 3, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            });
        }

        // X labels — only at endpoints
        ctx.font = '9px sans-serif';
        ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.55)' : 'rgba(255,255,255,0.32)';
        if (vpts[0]?.label) {
            ctx.textAlign = 'left';
            ctx.fillText(vpts[0].label, PAD.left, H - PAD.bottom + 14);
        }
        if (vpts.length > 1 && vpts[vpts.length - 1]?.label) {
            ctx.textAlign = 'right';
            ctx.fillText(vpts[vpts.length - 1].label, W - PAD.right, H - PAD.bottom + 14);
        }

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            // Setup hover tooltip
            setupChartHover(canvas, tooltip, points, toX, toY, color);
        }
    }

    requestAnimationFrame(frame);
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

function setupChartHover(canvas, tooltip, points, toX, toY, color) {
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        let closest = null, minDist = Infinity;
        points.forEach((pt, i) => {
            const d = Math.abs(mx - toX(pt, i));
            if (d < minDist) { minDist = d; closest = { pt, i }; }
        });

        if (closest && minDist < 40) {
            if (!tooltip) return;
            tooltip.style.display = 'block';
            tooltip.style.color = color;
            tooltip.innerHTML = `<strong>${closest.pt.label}</strong>: ${fmtNum(closest.pt.elo)} ELO`;
            const px = toX(closest.pt, closest.i);
            const py = toY(closest.pt.elo);
            tooltip.style.left = `${Math.min(px + 10, canvas.offsetWidth - 140)}px`;
            tooltip.style.top = `${Math.max(py - 30, 4)}px`;
        } else {
            if (tooltip) tooltip.style.display = 'none';
        }
    };
    canvas.onmouseleave = () => { if (tooltip) tooltip.style.display = 'none'; };
}

function renderProfileStats(data) {
    const d = data.raw;
    const seasonStats = d.statistics?.season || {};
    const totalStats  = d.statistics?.total  || {};
    const seasonRes   = d.seasonResult || {};

    const played  = seasonStats.playedMatches?.ranked || 0;
    const wins    = seasonStats.wins?.ranked || 0;
    const losses  = seasonStats.loses?.ranked || 0;
    const winrate = played > 0 ? (wins / played) * 100 : 0;
    const streak  = seasonStats.highestWinStreak?.ranked || 0;
    const curStrk = seasonStats.currentWinStreak?.ranked || 0;
    const bestElo = seasonRes.highest || d.eloRate || 0;
    const bestTime = totalStats.bestTime?.ranked || null;
    const totalMatches = totalStats.playedMatches?.ranked || 0;
    const totalWins = totalStats.wins?.ranked || 0;
    const completions = seasonStats.completions?.ranked || 0;
    const forfeits = seasonStats.forfeits?.ranked || 0;

    const kpis = [
        { label: t('profile.kpi.wins'), val: fmtNum(wins), sub: t('profile.kpi.sub.currentSeason') },
        { label: t('profile.kpi.losses'), val: fmtNum(losses), sub: t('profile.kpi.sub.currentSeason') },
        { label: t('profile.kpi.winrate'), val: `${winrate.toFixed(1)}%`, sub: t('profile.kpi.sub.inMatches').replace('{n}', played) },
        { label: t('profile.kpi.bestTime'), val: bestTime ? fmtTime(bestTime) : '—', sub: t('profile.kpi.sub.allTime') },
        { label: t('profile.kpi.bestStreak'), val: fmtNum(streak), sub: t('profile.kpi.sub.consecutiveWins') },
        { label: t('profile.kpi.currentStreak'), val: fmtNum(curStrk), sub: '' },
        { label: t('profile.kpi.peakElo'), val: fmtNum(bestElo), sub: getRankName(bestElo) },
        { label: t('profile.kpi.completions'), val: fmtNum(completions), sub: t('profile.kpi.sub.forfeits').replace('{n}', forfeits) },
    ];

    document.getElementById('profile-kpi-grid').innerHTML = kpis.map(k => `
        <div class="profile-kpi-card">
            <div class="profile-kpi-label">${k.label}</div>
            <div class="profile-kpi-val">${k.val}</div>
            ${k.sub ? `<div class="profile-kpi-sub">${k.sub}</div>` : ''}
        </div>
    `).join('');

    // Winrate bar
    const wrColor = winrate >= 55 ? '#4ade80' : winrate >= 45 ? '#facc15' : '#f87171';
    document.getElementById('profile-winrate-wrap').innerHTML = `
        <div class="profile-winrate-label">
            <span>${t('profile.winrateLabel')}</span>
            <span style="color:${wrColor};font-weight:700;">${winrate.toFixed(1)}%</span>
        </div>
        <div class="profile-winrate-bar-bg">
            <div class="profile-winrate-bar-fill" id="profile-wr-fill" style="background:${wrColor};"></div>
        </div>
    `;
    setTimeout(() => {
        const fill = document.getElementById('profile-wr-fill');
        if (fill) fill.style.width = `${Math.min(winrate, 100)}%`;
    }, 80);

    // Phases table
    const phases = seasonRes.phases || [];
    if (phases.length > 0) {
        document.getElementById('profile-phases-table').innerHTML = `
            <table>
                <thead><tr>
                    <th>Fase</th><th>ELO</th><th>Rank</th><th>Phase Pts</th>
                </tr></thead>
                <tbody>${phases.map(ph => `<tr>
                    <td>Fase ${ph.phase}</td>
                    <td>${fmtNum(ph.eloRate || 0)}</td>
                    <td>${ph.eloRank ? `#${ph.eloRank}` : '—'}</td>
                    <td>${ph.point || '—'}</td>
                </tr>`).join('')}</tbody>
            </table>
        `;
    }
}

let currentMatchFilter = 'ranked';

function renderProfileMatchesList(data, filter) {
    const allMatches = data.matches || [];
    const myUuid = data.uuid;
    const matches = filter === 'ranked' ? allMatches.filter(m => m.type === 2) : allMatches;
    const listEl = document.getElementById('profile-matches-list');
    if (!listEl) return;

    if (!matches.length) {
        listEl.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.82rem;">${t('profile.noMatches')}</div>`;
        return;
    }

    listEl.innerHTML = matches.map(m => {
        const opponent = m.players?.find(p => p.uuid !== myUuid);
        const iWon = m.result?.uuid === myUuid;
        const forfeited = m.forfeited;
        const myTime = !forfeited && m.result ? fmtTime(m.result.time) : (forfeited ? t('profile.match.forfeit') : '—');
        const rowCls = forfeited ? 'forfeit' : (iWon ? 'win' : 'loss');
        const resultLabel = iWon ? 'W' : 'L';
        const oppName = opponent?.nickname || '?';
        const date = m.date ? timeAgo(m.date) : '';
        const seed = m.seedType || '';
        const matchUrl = `https://mcsrranked.com/match/${m.id}`;

        let typeLabel = t('profile.match.type.casual');
        let typeCls = 'match-type-casual';
        if (m.type === 2) {
            typeLabel = t('profile.match.type.ranked');
            typeCls = 'match-type-ranked';
        } else if (m.type === 3) {
            typeLabel = t('profile.match.type.private');
            typeCls = 'match-type-private';
        }

        return `<a class="profile-match-row ${rowCls}" href="${matchUrl}" target="_blank" rel="noopener" title="${seed}">
            <img class="profile-match-avatar" src="${SKIN_HEAD(oppName, opponent?.uuid)}" alt="${oppName}" onerror="this.style.opacity='0.2'" />
            <span class="profile-match-opponent">${oppName}</span>
            <span class="profile-match-type ${typeCls}">${typeLabel}</span>
            <span class="profile-match-result ${rowCls}">${resultLabel}</span>
            <span class="profile-match-time">${myTime}</span>
            <span class="profile-match-date">${date}</span>
        </a>`;
    }).join('');
}

function renderProfileMatches(data) {
    currentMatchFilter = 'ranked';
    const filterWrap = document.getElementById('profile-matches-filter');
    if (filterWrap) {
        filterWrap.querySelectorAll('.pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === 'ranked');
        });
    }
    renderProfileMatchesList(data, 'ranked');
}

window.setMatchFilter = function(filter) {
    if (!lastProfileData) return;
    currentMatchFilter = filter;
    const filterWrap = document.getElementById('profile-matches-filter');
    if (filterWrap) {
        filterWrap.querySelectorAll('.pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
    }
    renderProfileMatchesList(lastProfileData, filter);
};


// Close modal on overlay click / ESC (no DOMContentLoaded needed — bound in main init)
function closeProfile() {
    const modal = document.getElementById('profile-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
}


// =====================================================
// MAKE PLAYER NAMES CLICKABLE (lb table + mini-cards + podium)
// =====================================================

// Patch renderFullTable to make names clickable
const _origRenderFullTable = renderFullTable;
window.renderFullTable = function(players) {
    _origRenderFullTable(players);
    document.querySelectorAll('#lb-tbody .lb-player-name').forEach(el => {
        el.classList.add('clickable');
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const p = players.find(pl => pl.nickname === el.textContent.trim());
            if (p) openProfile(p.uuid, p.nickname, p.country);
        });
    });
};

// Patch renderRow4to10 to make names clickable
const _origRenderRow4to10 = renderRow4to10;
window.renderRow4to10 = function(players) {
    _origRenderRow4to10(players);
    document.querySelectorAll('#row-scroll-inner .mini-name').forEach((el, i) => {
        el.classList.add('clickable');
        const p = players[i];
        if (p) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                openProfile(p.uuid, p.nickname, p.country);
            });
        }
    });
};

// Patch renderPodium to make names clickable
const _origRenderPodium = renderPodium;
window.renderPodium = function(players) {
    _origRenderPodium(players);
    document.querySelectorAll('#podium .podium-name').forEach(el => {
        el.classList.add('clickable');
        const nick = el.textContent.trim();
        const p = players.find(pl => pl.nickname === nick);
        if (p) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                openProfile(p.uuid, p.nickname, p.country);
            });
        }
    });
};

// =====================================================
// HEAD TO HEAD — multi-player comparator (1-10)
// =====================================================

let h2hCount = 2;
let h2hInitialized = false;
let h2hSelected = {}; // { slot: { uuid, nickname, country } }

function initH2H() {
    if (h2hInitialized) return;
    h2hInitialized = true;

    renderH2HSlots();

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.h2h-input-wrap')) {
            document.querySelectorAll('.h2h-suggestions').forEach(s => s.classList.remove('open'));
        }
    });
}

window.h2hChangeCount = function(delta) {
    const newCount = Math.max(1, Math.min(10, h2hCount + delta));
    if (newCount === h2hCount) return;
    h2hCount = newCount;

    const display = document.getElementById('h2h-count-display');
    if (display) display.textContent = h2hCount;

    const btnMinus = document.getElementById('h2h-btn-minus');
    const btnPlus  = document.getElementById('h2h-btn-plus');
    if (btnMinus) btnMinus.disabled = h2hCount <= 1;
    if (btnPlus)  btnPlus.disabled  = h2hCount >= 10;

    // Remove slots that are now out of range
    Object.keys(h2hSelected).forEach(k => {
        if (parseInt(k) > h2hCount) delete h2hSelected[k];
    });

    renderH2HSlots();
};

function renderH2HSlots() {
    const grid = document.getElementById('h2h-slots-grid');
    if (!grid) return;

    grid.innerHTML = Array.from({ length: h2hCount }, (_, i) => {
        const slot = i + 1;
        const sel = h2hSelected[slot];
        return `
        <div class="h2h-slot" id="h2h-slot-${slot}">
            <div class="h2h-label" style="margin-bottom:8px;">jugador ${slot}</div>
            <div class="h2h-input-wrap" ${sel ? 'style="display:none;"' : ''}>
                <input type="search" id="h2h-input-${slot}" class="h2h-input" placeholder="buscar..." autocomplete="off"
                    oninput="h2hSearch(${slot}, this.value)" />
                <div class="h2h-suggestions" id="h2h-sug-${slot}"></div>
            </div>
            ${sel ? `
            <div class="h2h-slot-selected" id="h2h-sel-${slot}">
                <img class="h2h-slot-selected-avatar" src="${SKIN_HEAD(sel.nickname, sel.uuid)}" alt="${sel.nickname}" onerror="this.style.opacity='0.2'" />
                <div class="h2h-slot-selected-info">
                    <span class="h2h-slot-selected-name">${sel.nickname}</span>
                    <span class="h2h-slot-selected-elo">${countryInfo(sel.country).flag} ${fmtNum(sel.elo || 0)} ELO</span>
                </div>
                <button class="h2h-slot-clear-btn" onclick="h2hClearSlot(${slot})" title="quitar">✕</button>
            </div>
            <button class="h2h-profile-btn" onclick="openProfile('${sel.uuid}','${sel.nickname}','${sel.country}')">ver perfil →</button>
            ` : ''}
        </div>`;
    }).join('');
}

window.h2hSearch = function(slot, query) {
    const sug = document.getElementById(`h2h-sug-${slot}`);
    if (!sug) return;

    const q = query.trim().toLowerCase();
    if (!q || !allPlayers?.length) { sug.classList.remove('open'); return; }

    const matches = allPlayers.filter(p => p.nickname.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { sug.classList.remove('open'); return; }

    sug.innerHTML = matches.map(p => {
        const info = countryInfo(p.country);
        return `<div class="h2h-sug-item" onclick="h2hSelectPlayer(${slot},'${p.uuid}','${p.nickname.replace(/'/g,"\\'")}','${p.country}')">
            <img src="${SKIN_HEAD(p.nickname, p.uuid)}" alt="${p.nickname}" onerror="this.style.opacity='0.2'" />
            <span>${p.nickname}</span>
            <span class="h2h-sug-elo">${info.flag} ${fmtNum(p.eloRate||0)} elo</span>
        </div>`;
    }).join('');

    sug.classList.add('open');
};

window.h2hSelectPlayer = async function(slot, uuid, nickname, country) {
    const pObj = allPlayers.find(p => p.uuid === uuid) || {};
    const elo = pObj.eloRate || 0;
    h2hSelected[slot] = { uuid, nickname, country, elo };
    renderH2HSlots();

    const allFilled = Array.from({ length: h2hCount }, (_, i) => i + 1)
        .every(s => h2hSelected[s]);

    if (allFilled) await renderH2H();
    else document.getElementById('h2h-result').innerHTML = '';
};

window.h2hClearSlot = function(slot) {
    delete h2hSelected[slot];
    renderH2HSlots();
    document.getElementById('h2h-result').innerHTML = '';
};

async function renderH2H() {
    const result = document.getElementById('h2h-result');
    if (!result) return;

    const slots = Array.from({ length: h2hCount }, (_, i) => i + 1);
    const selected = slots.map(s => h2hSelected[s]).filter(Boolean);
    if (selected.length < 1) return;

    // Loading indicator
    result.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:0.82rem;">
        <div style="margin-bottom:12px;">cargando datos de ${selected.length} jugadores...</div>
        <div style="width:200px;height:3px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto;overflow:hidden;">
            <div style="height:100%;width:100%;background:linear-gradient(90deg,var(--aqua-mid),rgba(100,200,255,0.3));border-radius:4px;animation:shimmer 1.2s ease-in-out infinite;"></div>
        </div>
    </div>`;

    const dataArr = await Promise.all(selected.map(s => loadProfileData(s.uuid, s.nickname, s.country)));
    const validData = dataArr.filter(Boolean);

    if (!validData.length) {
        result.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted);">error cargando datos //</div>`;
        return;
    }

    // Build ELO history based on currentH2HChartMode
    lastH2HValidData = validData;
    const playersElo = validData.map((pd, idx) => {
        const d = pd.raw;
        const current = d.eloRate || 0;
        const pts = currentH2HChartMode === 'matches'
            ? buildEloMatchesSeries(pd.rankedMatches, pd.uuid, current, 50)
            : buildEloTimeline(pd.rankedMatches, pd.uuid, current, 14);
        return { nickname: pd.nickname, color: H2H_COLORS[idx % H2H_COLORS.length], pts, elo: current, rank: d.eloRank, country: pd.country };
    });

    // Create canvas for H2H chart
    const canvasId = 'h2h-chart-canvas';
    result.innerHTML = `
        <div class="glass h2h-stats-panel" style="padding:20px;">
            <div class="h2h-chart-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
                <div class="h2h-chart-title" style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;font-weight:600;">comparación de elo</div>
                <div style="display:flex;align-items:center;">
                    <span style="font-size:0.7rem;color:var(--text-muted);margin-right:8px;text-transform:lowercase;">basado en:</span>
                    <div class="h2h-chart-selector flex-pill-selector" id="h2h-chart-selector">
                        <button class="pill-btn ${currentH2HChartMode === 'time' ? 'active' : ''}" onclick="setH2HChartMode('time')">ult. 2 semanas</button>
                        <button class="pill-btn ${currentH2HChartMode === 'matches' ? 'active' : ''}" onclick="setH2HChartMode('matches')">ultimas 50 matches</button>
                    </div>
                </div>
            </div>
            <div class="h2h-chart-wrap">
                <canvas id="${canvasId}" class="h2h-chart-canvas"></canvas>
                <div id="h2h-chart-tooltip" class="profile-chart-tooltip" style="position:absolute;"></div>
            </div>
            <div class="h2h-chart-legend" id="h2h-legend"></div>
            <div style="margin-top:20px;" id="h2h-table-wrap"></div>
        </div>
    `;

    // Render legend
    document.getElementById('h2h-legend').innerHTML = playersElo.map((p, i) => {
        const info = countryInfo(p.country);
        return `<div class="h2h-legend-item">
            <div class="h2h-legend-dot" style="background:${p.color};"></div>
            <span>${info.flag} ${p.nickname}</span>
            <span style="color:var(--text-muted);font-size:0.7rem;margin-left:4px;">${fmtNum(p.elo)} elo</span>
        </div>`;
    }).join('');

    // Draw multi-line chart
    setTimeout(() => {
        const canvas = document.getElementById(canvasId);
        const tooltip = document.getElementById('h2h-chart-tooltip');
        if (canvas) drawH2HChart(canvas, tooltip, playersElo, { stepLine: currentH2HChartMode === 'time' });
    }, 50);

    // Comparison table
    renderH2HCompareTable(validData, playersElo);
}

let currentH2HChartMode = 'matches';
let lastH2HValidData = null;

window.setH2HChartMode = function(mode) {
    if (currentH2HChartMode === mode) return;
    currentH2HChartMode = mode;

    // Toggle active classes on selector buttons
    const selector = document.getElementById('h2h-chart-selector');
    if (selector) {
        const buttons = selector.querySelectorAll('.pill-btn');
        buttons.forEach(btn => {
            const isActive = (btn.getAttribute('onclick') || '').includes(mode);
            btn.classList.toggle('active', isActive);
        });
    }

    if (lastH2HValidData) {
        // Re-build playersElo ELO history based on new mode
        const playersElo = lastH2HValidData.map((pd, idx) => {
            const d = pd.raw;
            const current = d.eloRate || 0;
            const pts = currentH2HChartMode === 'matches'
                ? buildEloMatchesSeries(pd.rankedMatches, pd.uuid, current, 50)
                : buildEloTimeline(pd.rankedMatches, pd.uuid, current, 14);
            return { nickname: pd.nickname, color: H2H_COLORS[idx % H2H_COLORS.length], pts, elo: current, rank: d.eloRank, country: pd.country };
        });

        const canvas = document.getElementById('h2h-chart-canvas');
        const tooltip = document.getElementById('h2h-chart-tooltip');
        if (canvas) {
            drawH2HChart(canvas, tooltip, playersElo, { stepLine: currentH2HChartMode === 'time' });
        }
    }
};

function drawH2HChart(canvas, tooltip, playersElo, opts = {}) {
    if (!canvas || !playersElo.length) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width || canvas.offsetWidth || 600;
    const H = rect.height || canvas.offsetHeight || 260;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const theme = document.body.getAttribute('data-theme') || 'aero';
    const isLight = (theme === 'aero');

    // Compute global ELO range
    const allElos = playersElo.flatMap(p => p.pts.map(pt => pt.elo));
    const minElo = Math.min(...allElos) - 20;
    const maxElo = Math.max(...allElos) + 20;
    const eloRange = maxElo - minElo || 1;

    const PAD = { top: 20, right: 20, bottom: 36, left: 56 };
    const gW = W - PAD.left - PAD.right;
    const gH = H - PAD.top - PAD.bottom;

    const timeBased = !!opts.stepLine;
    const nowSec = Date.now() / 1000;
    const minTime = nowSec - 14 * 86400;
    const maxTime = nowSec;
    const timeRange = maxTime - minTime;

    const toX = (pt, i, len) => {
        if (timeBased) {
            return PAD.left + ((pt.date - minTime) / timeRange) * gW;
        } else {
            return PAD.left + ((len <= 1 ? 0 : i / (len - 1)) * gW);
        }
    };
    const toY = (elo) => PAD.top + gH - ((elo - minElo) / eloRange) * gH;

    let progress = 0;
    const DURATION = 700;
    const startTime = performance.now();

    function frame(now) {
        progress = Math.min((now - startTime) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        ctx.clearRect(0, 0, W, H);

        // Background
        ctx.fillStyle = isLight ? 'rgba(0, 90, 140, 0.03)' : 'rgba(0,0,0,0.15)';
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(0, 0, W, H, 8); else ctx.rect(0, 0, W, H);
        ctx.fill();

        // Grid
        const gridSteps = 4;
        ctx.strokeStyle = isLight ? 'rgba(0, 90, 140, 0.08)' : 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= gridSteps; i++) {
            const y = PAD.top + (gH / gridSteps) * i;
            ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(W - PAD.right, y); ctx.stroke();
            const label = Math.round(maxElo - (eloRange / gridSteps) * i);
            ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.6)' : 'rgba(255,255,255,0.25)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(label, PAD.left - 6, y + 4);
        }

        // Draw each player line
        playersElo.forEach(player => {
            const pts = player.pts;
            const visLen = Math.max(2, Math.round(eased * pts.length));
            const vpts = pts.slice(0, visLen);
            if (vpts.length < 2) return;

            // Area fill
            ctx.beginPath();
            ctx.moveTo(toX(vpts[0], 0, pts.length), H - PAD.bottom);
            ctx.lineTo(toX(vpts[0], 0, pts.length), toY(vpts[0].elo));
            for (let i = 1; i < vpts.length; i++) {
                if (timeBased) {
                    ctx.lineTo(toX(vpts[i], i, pts.length), toY(vpts[i - 1].elo));
                }
                ctx.lineTo(toX(vpts[i], i, pts.length), toY(vpts[i].elo));
            }
            ctx.lineTo(toX(vpts[vpts.length - 1], vpts.length - 1, pts.length), H - PAD.bottom);
            ctx.closePath();
            ctx.fillStyle = hexToRgba(player.color, 0.07);
            ctx.fill();

            // Line
            ctx.beginPath();
            ctx.moveTo(toX(vpts[0], 0, pts.length), toY(vpts[0].elo));
            for (let i = 1; i < vpts.length; i++) {
                if (timeBased) {
                    ctx.lineTo(toX(vpts[i], i, pts.length), toY(vpts[i - 1].elo));
                }
                ctx.lineTo(toX(vpts[i], i, pts.length), toY(vpts[i].elo));
            }
            ctx.strokeStyle = player.color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Dots
            vpts.forEach((pt, i) => {
                ctx.beginPath();
                ctx.arc(toX(pt, i, pts.length), toY(pt.elo), 3.5, 0, Math.PI * 2);
                ctx.fillStyle = player.color;
                ctx.fill();
            });
        });

        // X axis labels
        if (timeBased) {
            const firstLabel = new Date(minTime * 1000).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' });
            ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.55)' : 'rgba(255,255,255,0.28)';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(firstLabel, PAD.left, H - PAD.bottom + 14);
            ctx.textAlign = 'right';
            ctx.fillText('ahora', W - PAD.right, H - PAD.bottom + 14);
        } else {
            const labelsPlayer = playersElo.reduce((a, b) => a.pts.length >= b.pts.length ? a : b);
            ctx.fillStyle = isLight ? 'rgba(0, 18, 30, 0.55)' : 'rgba(255,255,255,0.28)';
            ctx.font = '9px sans-serif';
            if (labelsPlayer.pts.length > 0) {
                ctx.textAlign = 'left';
                ctx.fillText(labelsPlayer.pts[0].label, PAD.left, H - PAD.bottom + 14);
            }
            if (labelsPlayer.pts.length > 1) {
                ctx.textAlign = 'right';
                ctx.fillText(labelsPlayer.pts[labelsPlayer.pts.length - 1].label, W - PAD.right, H - PAD.bottom + 14);
            }
        }

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            // Hover tooltip for H2H
            canvas.onmousemove = (e) => {
                const r = canvas.getBoundingClientRect();
                const mx = e.clientX - r.left;
                
                let lines = '';
                let dateLabel = '';

                if (timeBased) {
                    const hoverTime = minTime + ((mx - PAD.left) / gW) * timeRange;
                    lines = playersElo.map(p => {
                        let closestPt = p.pts[0];
                        let minDt = Infinity;
                        p.pts.forEach(pt => {
                            const dt = Math.abs(pt.date - hoverTime);
                            if (dt < minDt) { minDt = dt; closestPt = pt; }
                        });
                        return `<div style="color:${p.color};">${p.nickname}: <strong>${fmtNum(closestPt?.elo||0)}</strong></div>`;
                    }).join('');

                    let minGlobalDt = Infinity;
                    playersElo.forEach(p => {
                        p.pts.forEach(pt => {
                            const dt = Math.abs(pt.date - hoverTime);
                            if (dt < minGlobalDt) { minGlobalDt = dt; dateLabel = pt.label; }
                        });
                    });
                } else {
                    const refPlayer = playersElo.reduce((a, b) => a.pts.length >= b.pts.length ? a : b);
                    const refLen = refPlayer.pts.length;
                    
                    let nearestI = 0, minDx = Infinity;
                    for (let i = 0; i < refLen; i++) {
                        const x = PAD.left + ((refLen <= 1 ? 0 : i / (refLen - 1)) * gW);
                        const d = Math.abs(mx - x);
                        if (d < minDx) { minDx = d; nearestI = i; }
                    }

                    lines = playersElo.map(p => {
                        const idx = Math.round((nearestI / (refLen - 1)) * (p.pts.length - 1));
                        const pt = p.pts[idx] || p.pts[p.pts.length - 1];
                        return `<div style="color:${p.color};">${p.nickname}: <strong>${fmtNum(pt?.elo||0)}</strong></div>`;
                    }).join('');

                    const idx = Math.round((nearestI / (refLen - 1)) * (refPlayer.pts.length - 1));
                    dateLabel = refPlayer.pts[idx]?.label || '';
                }

                if (tooltip) {
                    tooltip.style.display = 'block';
                    tooltip.style.color = 'var(--text-main)';
                    tooltip.innerHTML = `<div style="font-size:0.65rem;color:var(--text-muted);margin-bottom:3px;">${dateLabel}</div>${lines}`;
                    tooltip.style.left = `${Math.min(mx + 10, W - 160)}px`;
                    tooltip.style.top = '8px';
                }
            };
            canvas.onmouseleave = () => { if (tooltip) tooltip.style.display = 'none'; };
        }
    }

    requestAnimationFrame(frame);
}

function renderH2HCompareTable(validData, playersElo) {
    const wrap = document.getElementById('h2h-table-wrap');
    if (!wrap) return;

    const stats = [
        { label: 'Rank', fn: (pd) => pd.raw.eloRank || 9999, fmt: (v, raw) => raw.eloRank ? `#${raw.eloRank}` : '—', higher: false },
        {
            label: 'Average',
            fn: (pd) => {
                const s = pd.raw.statistics;
                const ct = s?.season?.completionTime?.ranked || s?.total?.completionTime?.ranked || 0;
                const cc = s?.season?.completions?.ranked || s?.total?.completions?.ranked || 0;
                return (ct && cc) ? ct / cc : Infinity;
            },
            fmt: (v) => v !== Infinity ? fmtTime(v) : '—',
            higher: false
        },
        { label: 'Best Time', fn: (pd) => pd.raw.statistics?.total?.bestTime?.ranked || Infinity, fmt: (v) => v !== Infinity ? fmtTime(v) : '—', higher: false },
        { label: 'Wins', fn: (pd) => pd.raw.statistics?.season?.wins?.ranked || 0, fmt: (v) => fmtNum(v), higher: true },
        { label: 'Winrate', fn: (pd) => { const pl = pd.raw.statistics?.season?.playedMatches?.ranked||0; const w = pd.raw.statistics?.season?.wins?.ranked||0; return pl>0?(w/pl)*100:0; }, fmt: (v) => `${v.toFixed(1)}%`, higher: true },
        { label: 'Peak ELO', fn: (pd) => pd.raw.seasonResult?.highest || 0, fmt: (v) => fmtNum(v), higher: true },
    ];

    const playerColHeaders = playersElo.map(p =>
        `<th class="player-col" style="color:${p.color};">${p.nickname}</th>`
    ).join('');

    const rows = stats.map(stat => {
        const vals = validData.map(pd => stat.fn(pd));
        const winner = stat.higher
            ? vals.indexOf(Math.max(...vals))
            : vals.indexOf(Math.min(...vals));

        const cells = validData.map((pd, i) => {
            const isWinner = i === winner && vals.filter((v, j) => v === vals[winner]).length === 1;
            const display = stat.fmt(vals[i], pd.raw);
            return `<td class="${isWinner ? 'winner-val' : ''}">${display}</td>`;
        }).join('');

        return `<tr><td class="stat-label-col">${stat.label}</td>${cells}</tr>`;
    }).join('');

    wrap.innerHTML = `
        <table class="h2h-compare-table">
            <thead><tr><th class="stat-col">stat</th>${playerColHeaders}</tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

window.changeLeaderboardSeason = changeLeaderboardSeason;
window.setTimesFilter = setTimesFilter;
window.openProfile = openProfile;
window.switchProfileTab = switchProfileTab;
window.h2hChangeCount = h2hChangeCount;
window.h2hSearch = h2hSearch;
window.h2hSelectPlayer = h2hSelectPlayer;
window.h2hClearSlot = h2hClearSlot;

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

    // Profile modal close handlers
    const modal = document.getElementById('profile-modal');
    const closeBtn = document.getElementById('profile-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeProfile);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeProfile(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProfile(); });
});
