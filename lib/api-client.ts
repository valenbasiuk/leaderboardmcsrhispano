/**
 * API Client helper for mcsrranked.com API
 * Supports API-Key header authentication (optional for development)
 */
const API_BASE_URL = "https://mcsrranked.com/api"

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const apiKey = process.env.MCSR_API_KEY
  const url = `${API_BASE_URL}${endpoint}`

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  }

  // Only add API-Key header if it exists (production)
  // In development, works without API key
  if (apiKey) {
    headers["API-Key"] = apiKey
  }

  const response = await fetch(url, {
    cache: "no-cache",
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
