import { apiFetch } from "@/lib/api-client"

export default async function getUsersMatches(uuid: string, nickname: string) {
  const data = await apiFetch(
    `/users/${nickname}/matches?type=2&excludedecay=false`
  )

  let matchesData = data.data
  let matches = []
  for (let i = 0; i < matchesData.length; i++) {
    if (!matchesData[i].decayed) {
      matches.push({
        match_id: matchesData[i].id,
        match_type: matchesData[i].type,
        match_date: matchesData[i].date,
        winner: matchesData[i].result.uuid,
        opponent: getOpponent(matchesData[i].players, uuid),
        playoff: matchesData[i].players.length > 2 ? true : false,
        final_time: matchesData[i].result.time,
        // match_details: await getMatchDetails(matchesData[i].id),
        forfeit: matchesData[i].forfeited,
      })
    }
  }
  return matches
}

export async function getMatchDetails(match_id: string) {
  const data = await apiFetch(`/matches/${match_id}`)
  return data.data
}

function getOpponent(members: any, uuid: string) {
  if (members.length !== 1) {
    for (let i = 0; i < members.length; i++) {
      if (members[i].eloRate !== null) {
        if (members[i].uuid !== uuid) {
          return { nickname: members[i].nickname, uuid: members[i].uuid }
        }
      }
    }
  } else {
    return { nickname: "N/A", uuid: "N/A" }
  }
}
