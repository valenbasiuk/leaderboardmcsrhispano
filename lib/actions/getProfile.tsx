import { notFound } from "next/navigation"
import { apiFetch } from "@/lib/api-client"

export default async function getProfile(nickname: string) {
  try {
    const data = await apiFetch(`/users/${nickname}`)
    return data
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      notFound()
    }
    throw error
  }
}
