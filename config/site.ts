export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "MCSR Ranked Hispana",
  description:
    "Home of MCSR Ranked, a Minecraft Mod that adds a ranked system to Minecraft Speedruns.",
  mainNav: [
    {
      title: "leaderboard",
      href: "/leaderboard",
    },
    {
      title: "mejores tiempos",
      href: "/mejores-tiempos",
    },
    {
      title: "créditos",
      href: "/creditos",
    },
  ],
  mobileNav: [
    {
      title: "leaderboard",
      href: "/leaderboard",
    },
    {
      title: "mejores tiempos",
      href: "/mejores-tiempos",
    },
    {
      title: "créditos",
      href: "/creditos",
    },
  ],
  links: {
    github: "https://github.com/MCSR-Ranked/webpage",
    // store: "/store",
    discord: "/discord",
    apiDocs: "https://docs.mcsrranked.com/",
    licenses: "/licenses",
    privacyPolicy: "/privacy",
  },
}
