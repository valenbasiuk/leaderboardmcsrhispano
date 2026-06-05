import { apiFetch } from "@/lib/api-client"
import { HISPANIC_COUNTRY_CODES } from "@/config/countries"
import { BANNED_PLAYERS } from "@/config/bans"
import { Runner } from "@/app/leaderboard/columns"

/**
 * Gets the leaderboard filtered by Hispanic countries
 * Fetches leaderboard for each Hispanic country in parallel,
 * then combines and re-ranks all users
 */
export default async function getHispanicLeaderboard(): Promise<Runner[]> {
  try {
    // Fetch leaderboard for each Hispanic country in parallel
    // API endpoint: /leaderboard?country={countryCode}
    // Response structure: { status: "success", data: { season: {...}, users: [...] } }
    const countryPromises = HISPANIC_COUNTRY_CODES.map(async (countryCode) => {
      try {
        const response = await apiFetch(`/leaderboard?country=${countryCode}`)
        // Response structure: { status: "success", data: { users: [...] } }
        return response.data?.users || []
      } catch (error) {
        // Log warning but continue with other countries
        // This allows partial results if some countries fail
        console.warn(
          `Failed to fetch leaderboard for country ${countryCode}:`,
          error
        )
        return []
      }
    })

    // Wait for all country leaderboards
    const countryResults = await Promise.all(countryPromises)

    // Combine all users from all countries
    const allUsers: Runner[] = countryResults.flat()

    // Remove duplicates by UUID (in case a user appears in multiple countries)
    const uniqueUsers = new Map<string, Runner>()
    for (const user of allUsers) {
      if (!uniqueUsers.has(user.uuid)) {
        uniqueUsers.set(user.uuid, user)
      }
    }

    // Filter out blocked players from env variable + hardcoded ban list
    // Format in Vercel: BLOCKED_PLAYERS=jugador1,jugador2,jugador3
    const envBlocked = (process.env.BLOCKED_PLAYERS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)

    // Merge env variable blocks with hardcoded ban list (deduplicated)
    const allBlocked = new Set([
      ...envBlocked,
      ...BANNED_PLAYERS.map((n) => n.toLowerCase()),
    ])

    const filteredUsers = Array.from(uniqueUsers.values()).filter(
      (user) => !allBlocked.has(user.nickname?.toLowerCase())
    )

    // Convert back to array and sort by ELO rate (descending)
    const sortedUsers = filteredUsers.sort((a, b) => {
      const eloA = a.eloRate ?? 0
      const eloB = b.eloRate ?? 0
      return eloB - eloA
    })

    // Assign new ranks after combining all countries
    const rankedUsers: Runner[] = sortedUsers.map((user, index) => ({
      ...user,
      eloRank: index + 1,
    }))

    return rankedUsers
  } catch (error) {
    console.error("Error fetching Hispanic leaderboard:", error)
    throw error
  }
}
