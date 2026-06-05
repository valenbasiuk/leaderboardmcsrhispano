import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 w-full overflow-hidden aero-header"
    >
      {/* Aero shine strip at the top of header */}
      <div className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 30%, rgba(150,220,255,0.8) 60%, rgba(255,255,255,0.9) 80%, transparent 100%)",
        }} />
      {/* Bottom diffuse glow */}
      <div className="absolute bottom-[-1px] left-[10%] right-[10%] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(100,180,255,0.25), transparent)",
        }} />

      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 relative z-10">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
