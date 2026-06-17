/**
 * API Client helper for mcsrranked.com API
 * Supports API-Key header authentication (optional for development)
 */
const API_BASE_URL = "https://mcsrranked.com/api"
const DEFAULT_TIMEOUT_MS = 10_000 // 10 seconds

export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit & { next?: { revalidate?: number; tags?: string[] } } = {}
): Promise<T> {
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

  // Abort controller for timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS)

  try {
    const fetchOptions: RequestInit = {
      ...options,
      headers,
      signal: controller.signal,
    }

    // Only default to no-cache if no custom cache or revalidation is requested
    if (!options.cache && !options.next?.revalidate) {
      fetchOptions.cache = "no-cache"
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText} — ${endpoint}`)
    }

    return response.json() as Promise<T>
  } catch (err: any) {
    if (err.name === "AbortError") {
      throw new Error(`API Timeout (${DEFAULT_TIMEOUT_MS}ms): ${endpoint}`)
    }
    throw err
  } finally {
    clearTimeout(timeoutId)
  }
}
