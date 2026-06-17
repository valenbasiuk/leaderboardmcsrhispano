import { NextRequest, NextResponse } from "next/server"

const MCSR_BASE = "https://mcsrranked.com/api"

const HISPANIC_CODES = [
  "ar", "bo", "cl", "co", "cr", "cu", "do", "ec",
  "gt", "hn", "mx", "ni", "pa", "py", "pe", "pr",
  "sv", "uy", "ve", "es", "gq"
]

interface CacheEntry {
  timestamp: number
  data: any
}

// In-memory cache for the merged hispanic leaderboard
const leaderboardCache: Record<string, CacheEntry> = {}
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

// In-memory cache for user profiles
const profileCache: Record<string, CacheEntry> = {}
const PROFILE_CACHE_TTL = 30 * 60 * 1000 // 30 minutes

/**
 * Proxy transparente para la API de MCSR Ranked.
 * Cualquier request a /api/mcsr/xxx?params se redirige a
 * https://mcsrranked.com/api/xxx?params con la API key inyectada del lado del servidor.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  // Reconstruir el path de la API (ej: ["users", "uuid123"] -> "/users/uuid123")
  const path = "/" + (params.path || []).join("/")
  const searchParams = request.nextUrl.searchParams.toString()

  // Interceptar la petición especial del leaderboard hispano
  if (path === "/leaderboard/hispanic") {
    const season = request.nextUrl.searchParams.get("season") || ""
    const cacheKey = `hispanic-${season}`
    const now = Date.now()

    if (leaderboardCache[cacheKey] && (now - leaderboardCache[cacheKey].timestamp < CACHE_TTL)) {
      return NextResponse.json(leaderboardCache[cacheKey].data)
    }

    const apiKey = process.env.MCSR_API_KEY
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    }
    if (apiKey) {
      headers["API-Key"] = apiKey
    }

    const seasonParam = season ? `&season=${season}` : ""

    try {
      const results = await Promise.allSettled(
        HISPANIC_CODES.map(async (code) => {
          const url = `${MCSR_BASE}/leaderboard?country=${code}${seasonParam}`
          const res = await fetch(url, { headers, cache: "no-store" })
          if (!res.ok) return null
          return res.json()
        })
      )

      const merged = new Map()
      let currentSeasonNum = season ? parseInt(season, 10) : 0

      for (const r of results) {
        if (r.status !== 'fulfilled' || !r.value) continue
        const j = r.value
        if (j && j.data) {
          if (j.data.season && j.data.season.number) {
            if (j.data.season.number > currentSeasonNum) {
              currentSeasonNum = j.data.season.number
            }
          }
          if (Array.isArray(j.data.users)) {
            for (const user of j.data.users) {
              if (user && user.uuid && !merged.has(user.uuid)) {
                merged.set(user.uuid, user)
              }
            }
          }
        }
      }

      const sortedUsers = Array.from(merged.values()).sort(
        (a: any, b: any) => (b.eloRate || 0) - (a.eloRate || 0)
      )

      const responseData = {
        data: {
          users: sortedUsers,
          season: {
            number: currentSeasonNum
          }
        }
      }

      // Save to cache
      leaderboardCache[cacheKey] = {
        timestamp: now,
        data: responseData
      }

      return NextResponse.json(responseData)
    } catch (err) {
      console.error("[mcsr-proxy] custom leaderboard fetch error:", err)
      return NextResponse.json(
        { error: "Error fetching leaderboard data" },
        { status: 502 }
      )
    }
  }

  const isProfilePath = params.path && params.path[0] === "users" && params.path.length === 2
  const cacheKey = path
  const now = Date.now()

  if (isProfilePath && profileCache[cacheKey] && (now - profileCache[cacheKey].timestamp < PROFILE_CACHE_TTL)) {
    return NextResponse.json(profileCache[cacheKey].data)
  }

  const url = `${MCSR_BASE}${path}${searchParams ? "?" + searchParams : ""}`

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }

  const apiKey = process.env.MCSR_API_KEY
  if (apiKey) {
    headers["API-Key"] = apiKey
  }

  try {
    const res = await fetch(url, {
      headers,
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: `MCSR API error: ${res.status} ${res.statusText}` },
        { status: res.status }
      )
    }

    const data = await res.json()

    if (isProfilePath) {
      profileCache[cacheKey] = {
        timestamp: now,
        data
      }
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error("[mcsr-proxy] fetch error:", err)
    return NextResponse.json(
      { error: "Error connecting to MCSR API" },
      { status: 502 }
    )
  }
}
