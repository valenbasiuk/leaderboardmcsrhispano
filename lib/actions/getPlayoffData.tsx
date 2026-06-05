import { apiFetch } from "@/lib/api-client"

export default async function getPlayoffData(season: number) {
  const data = await apiFetch(`/playoffs/${season}`)
  return data.data
}
