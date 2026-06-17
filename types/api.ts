/**
 * Tipos base de la API de mcsrranked.com
 */

// Respuesta genérica de la API
export interface ApiResponse<T> {
  status: "success" | "error"
  data: T
}

// Usuario en el leaderboard
export interface LeaderboardUser {
  uuid: string
  nickname: string
  eloRate: number | null
  eloRank: number | null
  country: string | null
  roleType: number
  seasonResult?: {
    phasePoint?: number
    [key: string]: any
  }
}

// Respuesta del leaderboard por país
export interface LeaderboardData {
  users: LeaderboardUser[]
  season: {
    id: number
    starts: number
    ends: number
    [key: string]: any
  }
}

// Datos del match individual
export interface MatchChange {
  uuid: string
  eloRate: number
  eloChange: number
}

export interface MatchData {
  id: string
  type: number
  date: number
  decayed: boolean
  forfeited: boolean
  result: {
    uuid: string
    time: number | null
  }
  players: {
    uuid: string
    nickname: string
    eloRate: number | null
  }[]
  changes: MatchChange[]
}

// Estadísticas de usuario
export interface UserStatistics {
  season?: {
    bestTime?: {
      ranked?: number
    }
    [key: string]: any
  }
  total?: {
    bestTime?: {
      ranked?: number
    }
    [key: string]: any
  }
}

// Perfil de usuario completo
export interface UserProfile {
  uuid: string
  nickname: string
  country: string | null
  eloRate: number | null
  eloRank: number | null
  roleType: number
  statistics?: UserStatistics
  achievements?: {
    display?: any[]
    total?: any[]
  }
  seasonResult?: {
    phasePoint?: number
    [key: string]: any
  }
}

// Respuesta de ELO chart (matches con changes)
export interface EloDataPoint {
  elo: number
}
