/**
 * Configuration for Hispanic countries
 * ISO 3166-1 alpha-2 country codes (lowercase)
 */
export const HISPANIC_COUNTRIES = [
  { code: "ar", name: "Argentina" },
  { code: "bo", name: "Bolivia" },
  { code: "cl", name: "Chile" },
  { code: "co", name: "Colombia" },
  { code: "cr", name: "Costa Rica" },
  { code: "cu", name: "Cuba" },
  { code: "do", name: "República Dominicana" },
  { code: "ec", name: "Ecuador" },
  { code: "gt", name: "Guatemala" },
  { code: "hn", name: "Honduras" },
  { code: "mx", name: "México" },
  { code: "ni", name: "Nicaragua" },
  { code: "pa", name: "Panamá" },
  { code: "py", name: "Paraguay" },
  { code: "pe", name: "Perú" },
  { code: "pr", name: "Puerto Rico" },
  { code: "sv", name: "El Salvador" },
  { code: "uy", name: "Uruguay" },
  { code: "ve", name: "Venezuela" },
  { code: "es", name: "España" },
  { code: "gq", name: "Guinea Ecuatorial" },
] as const

export type CountryCode = (typeof HISPANIC_COUNTRIES)[number]["code"]

export const HISPANIC_COUNTRY_CODES = HISPANIC_COUNTRIES.map((c) => c.code)
