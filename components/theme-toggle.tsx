"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 opacity-50 cursor-default">
        <span>tema: ...</span>
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 relative overflow-hidden group active:scale-95 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/30 hover:border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]"
    >
      {/* Glossy reflection bubble effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
      
      {isDark ? (
        <>
          <Moon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-emerald-300">tema: oscuro</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-emerald-700 dark:text-emerald-300">tema: claro</span>
        </>
      )}
    </button>
  )
}
