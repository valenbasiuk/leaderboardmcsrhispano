import React from "react"

interface PhaseBadgeProps {
  points?: number
}

export function PhaseBadge({ points }: PhaseBadgeProps) {
  if (!points || points <= 0) return null

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 dark:bg-sky-950/40 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:text-sky-300 border border-sky-300/60 dark:border-sky-700/50">
      <span>{points} phase points</span>
    </span>
  )
}
