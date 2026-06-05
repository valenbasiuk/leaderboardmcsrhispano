import React from "react"
import { timeColumns } from "./columns"
import { TimeDataTable } from "./data-table"
import getHispanicTimeLeaderboard from "@/lib/actions/getHispanicTimeLeaderboard"

export const metadata = {
  title: "mejores tiempos — mcsr ranked hispana",
  description: "mejores tiempos registrados por corredores de minecraft speedrunning ranked en países de habla hispana.",
}

export default async function MejoresTiemposPage() {
  const timeData = await getHispanicTimeLeaderboard()

  return (
    <section className="container pb-12 pt-6 md:py-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          mejores tiempos
        </h1>
        <p className="text-muted-foreground text-sm">
          mejores tiempos de jugadores de países de habla hispana.
        </p>
      </div>

      {/* Main Time Leaderboard Table */}
      <div className="mt-4">
        <TimeDataTable columns={timeColumns} data={timeData} />
      </div>
    </section>
  )
}
