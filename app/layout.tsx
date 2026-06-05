import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d4eef9" },
    { media: "(prefers-color-scheme: dark)", color: "#050e18" },
  ],
  icons: {
    icon: "/mcsrrankedhispana.png",
    shortcut: "/mcsrrankedhispana.png",
    apple: "/mcsrrankedhispana.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased relative overflow-x-hidden",
            fontSans.variable
          )}
        >
          {/* defaultTheme="light" — loads the light (claro) theme by default */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>

            {/* ════ Frutiger Aero Aurora System ════
                3 layered wave sets, each with multiple stacked SVG paths
                All colors from CSS vars → adapt light/dark automatically     */}

            {/* ── Wave 1: dramatic top sweep ── */}
            <div className="aurora-wave aurora-wave-1" aria-hidden="true">
              <svg viewBox="0 0 1440 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ag1a" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-1a)" }} />
                    <stop offset="45%"  style={{ stopColor: "var(--aurora-1b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-1c)" }} />
                  </linearGradient>
                  <linearGradient id="ag1b" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-1b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-1a)" }} />
                  </linearGradient>
                  <radialGradient id="ag1r" cx="30%" cy="0%" r="70%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-1a)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-1c)" }} />
                  </radialGradient>
                </defs>
                {/* Main sweep — wide dramatic wave */}
                <path d="M0,0 L1440,0 L1440,280 C1200,180 960,380 720,220 C480,60 240,320 0,180 Z"
                  fill="url(#ag1r)" />
                {/* Secondary underbelly — tighter wave */}
                <path d="M0,140 C180,40 420,260 680,130 C940,0 1180,220 1440,100 L1440,0 L0,0 Z"
                  fill="url(#ag1b)" opacity="0.6" />
                {/* Bright crest highlight */}
                <path d="M0,60 C200,20 500,110 760,50 C1020,0 1260,80 1440,30 L1440,0 L0,0 Z"
                  fill="url(#ag1a)" opacity="0.5" />
              </svg>
            </div>

            {/* ── Wave 2: mid-page flowing band ── */}
            <div className="aurora-wave aurora-wave-2" aria-hidden="true">
              <svg viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ag2a" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-2a)" }} />
                    <stop offset="40%"  style={{ stopColor: "var(--aurora-2b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-2c)" }} />
                  </linearGradient>
                  <linearGradient id="ag2b" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-2b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-2a)" }} />
                  </linearGradient>
                </defs>
                {/* Wide lower fill */}
                <path d="M0,600 L1440,600 L1440,320 C1100,160 800,480 480,260 C260,100 100,380 0,220 Z"
                  fill="url(#ag2a)" />
                {/* Flowing upper edge */}
                <path d="M0,380 C280,180 560,460 840,280 C1120,100 1340,360 1440,240 L1440,600 L0,600 Z"
                  fill="url(#ag2b)" opacity="0.55" />
              </svg>
            </div>

            {/* ── Wave 3: bottom accent glow ── */}
            <div className="aurora-wave aurora-wave-3" aria-hidden="true">
              <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ag3a" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-3a)" }} />
                    <stop offset="55%"  style={{ stopColor: "var(--aurora-3b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-3c)" }} />
                  </linearGradient>
                  <linearGradient id="ag3b" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   style={{ stopColor: "var(--aurora-3b)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--aurora-3a)" }} />
                  </linearGradient>
                </defs>
                <path d="M0,500 L1440,500 L1440,260 C1100,380 820,120 540,300 C280,460 100,180 0,320 Z"
                  fill="url(#ag3a)" />
                <path d="M0,400 C320,260 620,460 920,300 C1160,160 1340,380 1440,280 L1440,500 L0,500 Z"
                  fill="url(#ag3b)" opacity="0.50" />
              </svg>
            </div>

            {/* ── Frutiger Aero: Lens flare / light beam (fixed, top-left) ── */}
            <div
              aria-hidden="true"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "50vw",
                height: "50vh",
                pointerEvents: "none",
                zIndex: -5,
                background:
                  "radial-gradient(ellipse 60% 40% at 5% 0%, rgba(255,255,255,0.22) 0%, transparent 70%)",
              }}
            />

            {/* ── Frutiger Aero Bubbles ── */}
            {/* Large slow bubbles */}
            <div className="bubble" style={{ left: "4%",  width: 70, height: 70,  "--duration": "24s", "--delay": "0s",   "--bubble-opacity": "0.48" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "14%", width: 28, height: 28,  "--duration": "16s", "--delay": "3s",   "--bubble-opacity": "0.38" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "25%", width: 85, height: 85,  "--duration": "30s", "--delay": "1s",   "--bubble-opacity": "0.50" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "38%", width: 44, height: 44,  "--duration": "20s", "--delay": "5s",   "--bubble-opacity": "0.42" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "52%", width: 22, height: 22,  "--duration": "14s", "--delay": "2s",   "--bubble-opacity": "0.35" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "64%", width: 58, height: 58,  "--duration": "26s", "--delay": "7s",   "--bubble-opacity": "0.46" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "76%", width: 34, height: 34,  "--duration": "18s", "--delay": "10s",  "--bubble-opacity": "0.38" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "88%", width: 18, height: 18,  "--duration": "12s", "--delay": "6s",   "--bubble-opacity": "0.32" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "96%", width: 55, height: 55,  "--duration": "22s", "--delay": "14s",  "--bubble-opacity": "0.44" } as React.CSSProperties} />
            {/* Small accent bubbles */}
            <div className="bubble" style={{ left: "9%",  width: 14, height: 14,  "--duration": "11s", "--delay": "4s",   "--bubble-opacity": "0.28" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "31%", width: 18, height: 18,  "--duration": "13s", "--delay": "8s",   "--bubble-opacity": "0.30" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "47%", width: 72, height: 72,  "--duration": "28s", "--delay": "11s",  "--bubble-opacity": "0.46" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "70%", width: 12, height: 12,  "--duration": "10s", "--delay": "9s",   "--bubble-opacity": "0.26" } as React.CSSProperties} />
            <div className="bubble" style={{ left: "82%", width: 40, height: 40,  "--duration": "20s", "--delay": "15s",  "--bubble-opacity": "0.38" } as React.CSSProperties} />

            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
