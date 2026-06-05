import { apiFetch } from "@/lib/api-client"
import { Runner } from "@/app/leaderboard/columns"
import getHispanicLeaderboard from "./getHispanicLeaderboard"

/**
 * Maps a Unix timestamp to a season number based on known season boundaries.
 */
function getSeasonFromTimestamp(timestamp: number): number | undefined {
    const SEASON_BOUNDARIES = [
        { season: 1,  endTs: 1686787248 },
        { season: 2,  endTs: 1695081662 },
        { season: 3,  endTs: 1704499267 },
        { season: 4,  endTs: 1713658167 },
        { season: 5,  endTs: 1724198414 },
        { season: 6,  endTs: 1734741051 },
        { season: 7,  endTs: 1745193877 },
        { season: 8,  endTs: 1755734804 },
        { season: 9,  endTs: 1767312115 },
        { season: 10, endTs: 1777507279 },
    ]

    for (const boundary of SEASON_BOUNDARIES) {
        if (timestamp <= boundary.endTs) {
            return boundary.season
        }
    }

    // If after S10, it's S11+
    return 11
}

/**
 * Gets the time leaderboard filtered by Hispanic countries
 * Steps:
 * 1. Fetch all Top Hispanic runners (via Elo leaderboard)
 * 2. Fetch detailed profile for each runner to get their Best Time
 * 
 * NOTE: Profile requests are cached for 1 hour to respect API rate limits.
 */
export default async function getHispanicTimeLeaderboard(): Promise<Runner[]> {
    try {
        // 1. Get the base list of Hispanic runners (reuses existing Elo logic)
        const eloRunners = await getHispanicLeaderboard()

        // 2. Limit to Top 40 to avoid rate limits
        const topRunners = eloRunners.slice(0, 40)

        // 3. Fetch full profile for each runner in parallel with CACHING
        const profilePromises = topRunners.map(async (runner): Promise<Runner | null> => {
            try {
                // Fetch profile with 1 hour cache
                const response = await apiFetch(`/users/${runner.uuid}`, {
                    next: { revalidate: 3600 }, // 1 hour cache
                } as any)

                const userData = response.data

                if (!userData) return null

                // Extract best times (both season and total)
                const seasonBestTime = userData.statistics?.season?.bestTime?.ranked
                const totalBestTime = userData.statistics?.total?.bestTime?.ranked

                // If no best times exist at all, return null
                if ((!seasonBestTime || seasonBestTime <= 0) && (!totalBestTime || totalBestTime <= 0)) {
                    return null
                }

                // Extract the season of the historical best time from achievements
                let totalTimeSeason: number | undefined = undefined
                try {
                    const achievements = userData.achievements?.display || userData.achievements?.total || []
                    const bestTimeAchievement = Array.isArray(achievements)
                        ? achievements.find((a: any) => a.id === "bestTime")
                        : undefined
                    if (bestTimeAchievement?.date) {
                        // date can be a Unix timestamp in seconds or milliseconds
                        let ts = bestTimeAchievement.date
                        // If it looks like milliseconds (> year 2100 in seconds), convert to seconds
                        if (ts > 10000000000) {
                            ts = Math.floor(ts / 1000)
                        }
                        totalTimeSeason = getSeasonFromTimestamp(ts)
                    }
                } catch {
                    // Silently fail if achievement parsing fails
                }

                return {
                    ...runner,
                    seasonTime: seasonBestTime || undefined,
                    totalTime: totalBestTime || undefined,
                    totalTimeSeason,
                    time: seasonBestTime || totalBestTime || undefined, // fallback/default
                }
            } catch (error) {
                console.warn(`Failed to fetch profile for ${runner.nickname}`, error)
                return null
            }
        })

        const detailedRunners = await Promise.all(profilePromises)

        // Filter out nulls
        return detailedRunners.filter((r): r is Runner => r !== null)
    } catch (error) {
        console.error("Error fetching Hispanic time leaderboard:", error)
        throw error
    }
}
