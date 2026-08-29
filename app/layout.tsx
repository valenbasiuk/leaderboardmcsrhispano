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
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://hispana.mcsrranked.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/mcsrrankedhispana.png",
        width: 512,
        height: 512,
        alt: "MCSR Ranked Hispana",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/mcsrrankedhispana.png"],
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
