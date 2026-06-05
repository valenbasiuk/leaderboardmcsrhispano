import React from "react"
import { eloColumns } from "./columns"
import { DataTable } from "./data-table"
import { Podium } from "@/components/podium"
import getHispanicLeaderboard from "@/lib/actions/getHispanicLeaderboard"

export const metadata = {
  title: "leaderboard — mcsr ranked hispana",
  description: "leaderboard de elo y tiempos de speedrunners hispanos en mcsrranked :p",
}

export default async function LeaderboardPage() {
  const eloData = await getHispanicLeaderboard()

  return (
    <section className="max-w-[1240px] mx-auto px-4 pb-12 pt-6 md:py-10 flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          leaderboard
        </h1>
        <p className="text-muted-foreground text-sm">
          top jugadores de países de habla hispana.
        </p>
      </div>

      {/* Hero 3D Pedestal Podium Stands */}
      <Podium runners={eloData} />

      {/* Main Leaderboard Table */}
      <div className="mt-4">
        <DataTable columns={eloColumns} data={eloData} />
      </div>
    </section>
  )
}
