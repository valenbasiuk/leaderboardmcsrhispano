// LEADERBOARD DE MCSRRANKED HISPANO... NO TOCAR SI NO SABES
'use strict';

const API = 'https://mcsrranked.com/api';
const SKIN_HEAD = n => `https://mc-heads.net/avatar/${n}/48`;
const SKIN_BODY = n => `https://nmsr.nickac.dev/fullbody/${n}?width=300`;
const BLOCKED = ['tommy21_'];

// la lista de paises con sus banderas... meti a Guinea Ecuatorial q ni idea si juegan mcsr pero weno
const COUNTRIES = {
    ar: { name: 'argentina', flag: '🇦🇷' }, bo: { name: 'bolivia', flag: '🇧🇴' },
    cl: { name: 'chile', flag: '🇨🇱' }, co: { name: 'colombia', flag: '🇨🇴' },
    cr: { name: 'costa rica', flag: '🇨🇷' }, cu: { name: 'cuba', flag: '🇨🇺' },
    do: { name: 'rep. dominicana', flag: '🇩🇴' }, ec: { name: 'ecuador', flag: '🇪🇨' },
    gt: { name: 'guatemala', flag: '🇬🇹' }, hn: { name: 'honduras', flag: '🇭🇳' },
    mx: { name: 'mexico', flag: '🇲🇽' }, ni: { name: 'nicaragua', flag: '🇳🇮' },
    pa: { name: 'panama', flag: '🇵🇦' }, py: { name: 'paraguay', flag: '🇵🇾' },
    pe: { name: 'peru', flag: '🇵🇪' }, pr: { name: 'puerto rico', flag: '🇵🇷' },
    sv: { name: 'el salvador', flag: '🇸🇻' }, uy: { name: 'uruguay', flag: '🇺🇾' },
    ve: { name: 'venezuela', flag: '🇻🇪' }, es: { name: 'españa', flag: '🇪🇸' },
    gq: { name: 'guinea ecuatorial', flag: '🇬🇶' },
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
    if (COUNTRIES[lower]) return COUNTRIES[lower];
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
    if (!elo) return 'ranks/unrated.png';
    if (elo >= 2000) return 'ranks/netherite.png';
    if (elo >= 1800) return 'ranks/diamond_3.png';
    if (elo >= 1650) return 'ranks/diamond_2.png';
    if (elo >= 1500) return 'ranks/diamond_1.png';
    if (elo >= 1400) return 'ranks/emerald_3.png';
    if (elo >= 1300) return 'ranks/emerald_2.png';
    if (elo >= 1200) return 'ranks/emerald_1.png';
    if (elo >= 1100) return 'ranks/gold_3.png';
    if (elo >= 1000) return 'ranks/gold_2.png';
    if (elo >= 900) return 'ranks/gold_1.png';
    if (elo >= 800) return 'ranks/iron_3.png';
    if (elo >= 700) return 'ranks/iron_2.png';
    if (elo >= 600) return 'ranks/iron_1.png';
    if (elo >= 500) return 'ranks/coal_3.png';
    if (elo >= 400) return 'ranks/coal_2.png';
    return 'ranks/coal_1.png';
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
    if (s < 15) return 'hace unos segundos';
    if (s < 60) return `hace ${s} segundos`;
    const m = Math.floor(s / 60);
    if (m < 60) return `hace ${m} minutos`;
    return `hace ${Math.floor(m / 60)} horas`;
}

// el numerito verde/rojo de cuanto elo ganaste o perdiste
function getEloChangeHTML(p, extraStyle) {
    const change = p.eloChange ?? p.eloRate24h ?? null;
    if (change === null || change === undefined) return '';
    const cls = change >= 0 ? 'pos' : 'neg';
    const arrow = change >= 0 ? '/\\' : '\\/';
    const style = extraStyle ? ` style="${extraStyle}"` : '';
    return `<span class="elo-change ${cls}"${style}>${arrow} ${change >= 0 ? '+' : ''}${change}</span>`;
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
    const items = changes.map(c => {
        const sign = c.change >= 0 ? '+' : '';
        const cls = c.change >= 0 ? 'pos' : 'neg';
        return `<span class="ticker-entry">${c.player} <strong class="elo-change ${cls}">${sign}${c.change} elo</strong><span class="ticker-sep">${sep}</span></span>`;
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

let currentLeaderboardSeason = '11'; // default/current season
let latestSeasonNum = 11; // the actual current season number

async function loadLeaderboard() {
    try {
        const isCurrentSeason = String(currentLeaderboardSeason) === String(latestSeasonNum);
        const seasonParam = currentLeaderboardSeason ? `&season=${currentLeaderboardSeason}` : '';
        const results = await Promise.allSettled(
            HISPANIC_CODES.map(code =>
                fetch(`${API}/leaderboard?country=${code}${seasonParam}`)
                    .then(r => r.ok ? r.json() : null)
                    .then(j => {
                        if (j && j.data) {
                            if (j.data.season && j.data.season.number) {
                                // Always track the actual latest season from the API
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
        const merged = new Map();
        for (const r of results) {
            if (r.status !== 'fulfilled') continue;
            for (const user of r.value) {
                if (user?.uuid && !merged.has(user.uuid)) merged.set(user.uuid, user);
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
            const matchRes = await fetch(`${API}/matches?page=0&count=40`).catch(() => null);
            let recentMatches = [];
            if (matchRes && matchRes.ok) {
                const matchJson = await matchRes.json();
                recentMatches = matchJson.data?.matches || matchJson.data || [];
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
        renderFullTable(allPlayers);
        renderSidebarStats(allPlayers);
        renderSidebarCountries(allPlayers);
    } catch (e) {
        console.error('loadLeaderboard error:', e);
        const tbody = document.getElementById('lb-tbody');
        if (tbody) tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--text-muted);">error cargando datos. reintenta. //</td></tr>`;
    }
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

// ==== LA TABLA COMPLETA DE ABAJO ====
function renderFullTable(players) {
    const tbody = document.getElementById('lb-tbody');
    tbody.innerHTML = '';
    players.forEach((p, i) => {
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;
        const rankName = getRankName(elo);
        const rankNum = i + 1;
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
      <div class="stat-label">* jugadores hispanos activos</div>
      <div><span class="stat-value">${active}</span></div>
    </div>
    <div class="stat-chip">
      <div class="stat-label">* elo promedio top 10</div>
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
async function loadActivity() {
    try {
        const r = await fetch(`${API}/matches?page=0&count=30`);
        if (!r.ok) throw new Error('activity fetch failed');
        const json = await r.json();
        const matches = json.data?.matches || json.data || [];
        const hispMatches = matches.filter(m => {
            const users = m.players || [];
            return users.some(u => HISPANIC_CODES.includes(u.country?.toLowerCase()));
        }).slice(0, 7);
        const el = document.getElementById('activity-list');
        if (!hispMatches.length) {
            el.innerHTML = `<div style="color:var(--text-muted);font-size:0.72rem;padding:8px 4px;">sin matches recientes //</div>`;
            return;
        }
        el.innerHTML = hispMatches.map(m => {
            const players = m.players || [];
            const p1 = players[0], p2 = players[1];
            if (!p1 || !p2) return '';
            const changes = m.changes || [];
            const p1ChangeObj = changes.find(c => c.uuid === p1.uuid);
            const p1c = p1ChangeObj ? p1ChangeObj.change : 0;
            const cls = p1c > 0 ? 'win' : 'loss';
            const time = fmtTime(m.result?.timelines?.slice(-1)[0]?.time ?? m.result?.time ?? m.completionTime ?? 0);
            const ago = timeAgo(m.date || m.endTime || m.createTime || Date.now() / 1000);
            return `
        <div class="activity-entry ${cls}">
          <div class="activity-players">
            ${p1.nickname} <span class="activity-elo-change ${p1c >= 0 ? 'pos' : 'neg'}">[${p1c >= 0 ? '+' : ''}${p1c}]</span>
            vs ${p2.nickname}
          </div>
          <div class="activity-meta">${ago} &nbsp;|&nbsp; tiempo: ${time}</div>
        </div>
      `;
        }).filter(Boolean).join('');
    } catch (e) {
        console.warn('loadActivity error:', e);
        const el = document.getElementById('activity-list');
        if (el) el.innerHTML = `<div style="color:var(--text-muted);font-size:0.72rem;padding:8px 4px;">error cargando matches //</div>`;
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
        const activeHispMatches = matches.filter(m => {
            const players = m.players || [];
            return players.some(p => HISPANIC_CODES.includes(p.country?.toLowerCase()));
        });
        if (activeHispMatches.length === 0) { setLiveNoMatch(); return; }

        activeHispMatches.forEach(m => {
            m.startTime = Date.now() - (m.currentTime || 0);
            m.matchKey = (m.players || []).map(p => p.uuid).sort().join('_');
        });

        const widgetBody = document.querySelector('.live-body');
        if (!widgetBody) return;
        widgetBody.innerHTML = '';
        const mainMatch = activeHispMatches[0];
        const mainPlayers = mainMatch.players || [];
        const mp1 = mainPlayers[0] || { nickname: '--' };
        const mp2 = mainPlayers[1] || { nickname: '--' };

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
        <span class="live-player">${p1Html} ${info1.flag}</span>
        <span class="live-vs">vs</span>
        <span class="live-player">${info2.flag} ${p2Html}</span>
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

                const p1SubHtml = p1LiveSub 
                    ? `<a href="${p1LiveSub}" target="_blank" class="live-stream-link">${p1.nickname}</a>` 
                    : `<span>${p1.nickname}</span>`;
                const p2SubHtml = p2LiveSub 
                    ? `<a href="${p2LiveSub}" target="_blank" class="live-stream-link">${p2.nickname}</a>` 
                    : `<span>${p2.nickname}</span>`;

                const div = document.createElement('div');
                div.className = 'live-sub-match';
                div.innerHTML = `
                    <span class="live-sub-players">${p1SubHtml} ${subInfo1.flag} vs ${subInfo2.flag} ${p2SubHtml}</span>
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
    body.innerHTML = '<div class="live-no-match">sin partida activa //</div>';
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
                <th>jugador</th>
                <th>pais</th>
                <th>tiempo</th>
                <th>elo</th>
            `;
        } else {
            theadTr.innerHTML = `
                <th>#</th>
                <th>jugador</th>
                <th>pais</th>
                <th>tiempo</th>
                <th>temporada</th>
                <th>elo</th>
            `;
        }
    }

    const colCount = timesFilter === 'season' ? 5 : 6;

    if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="${colCount}" style="padding:24px;text-align:center;color:var(--text-muted);">sin tiempos disponibles //</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map((p, i) => {
        const info = countryInfo(p.country);
        const elo = p.eloRate || 0;
        
        let seasonColHtml = '';
        if (timesFilter !== 'season') {
            const seasonText = p.totalBestTimeSeason ? `S${p.totalBestTimeSeason}` : '—';
            seasonColHtml = `<td><span class="times-season-badge">${seasonText}</span></td>`;
        }

        return `
      <tr>
        <td><span class="lb-rank">${i + 1}</span></td>
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
    try { localStorage.setItem('lb-theme', theme); } catch(e) {}
}

// inicia el tema al cargar la pag
function initTheme() {
    let saved = 'aero';
    try { saved = localStorage.getItem('lb-theme') || 'aero'; } catch(e) {}
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
            left:${Math.random()*100}%;
            background:${colors[Math.floor(Math.random()*colors.length)]};
            filter: blur(${2 + Math.random()*4}px);
            animation-duration: ${18 + Math.random()*22}s;
            animation-delay: -${Math.random()*20}s;
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
        s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${0.3+Math.random()*0.5};`;
        wrap.appendChild(s);
    }
}

function getSeasonFromTimestamp(ts) {
    if (!ts) return null;
    // Correct season boundaries from the MCSR Ranked API
    const seasonStarts = [
        { season: 1,  start: 1679875200 }, // 2023-03-27
        { season: 2,  start: 1686787200 }, // 2023-06-15
        { season: 3,  start: 1695081600 }, // 2023-09-19
        { season: 4,  start: 1704499200 }, // 2024-01-06
        { season: 5,  start: 1713657600 }, // 2024-04-21
        { season: 6,  start: 1724198400 }, // 2024-08-21
        { season: 7,  start: 1734739200 }, // 2024-12-21
        { season: 8,  start: 1745193600 }, // 2025-04-21
        { season: 9,  start: 1755734400 }, // 2025-08-21
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
    initNav();
    initBokeh();
    initMetroSpecks();
    loadLeaderboard();
    loadActivity();
    loadLiveMatch();
    setInterval(loadActivity, 60000);
    setInterval(loadLiveMatch, 30000);
});
