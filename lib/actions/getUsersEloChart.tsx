import { apiFetch } from "@/lib/api-client"

export default async function getUsersEloChart(uuid: string, nickname: string) {
  const data = await apiFetch(`/users/${nickname}/matches?filter=2`)

  let matchesData = data.data
  let matches = []
  for (let i = 0; i < matchesData.length; i++) {
    if (!matchesData[i].decayed) {
      matches.push(matchesData[i])
    }
  }

  if (matches.length !== 0) {
    let elo = []
    for (let i = 0; i < matches.length; i++) {
      for (let j = 0; j < matches[i].changes.length; j++) {
        if (matches[i].changes[j].uuid === uuid) {
          elo.push({
            elo: matches[i].changes[j].eloRate,
          })
        }
      }
    }
    return elo.reverse()
  }
}
