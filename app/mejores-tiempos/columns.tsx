/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"
import { Runner } from "@/app/leaderboard/columns"
import { timeFormat, eloColor, getRankName, getRankIcon } from "@/lib/utils"

export const timeColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "rank",
    header: "#",
    cell: ({ row }) => {
      const val = row.original.rank
      if (val === 1) return <span className="font-extrabold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">1</span>
      if (val === 2) return <span className="font-extrabold text-slate-300 drop-shadow-[0_0_8px_rgba(200,200,200,0.5)]">2</span>
      if (val === 3) return <span className="font-extrabold text-amber-600 drop-shadow-[0_0_8px_rgba(180,83,9,0.5)]">3</span>
      return <span className="text-muted-foreground text-xs font-semibold">{val}</span>
    }
  },
  {
    accessorKey: "nickname",
    header: "jugador",
    cell: ({ row }) => {
      const uuid = row.original.uuid
      const avatarUrl = `https://mc-heads.net/avatar/${uuid}/32`
      return (
        <div className="flex items-center gap-2">
          <img
            src={avatarUrl}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="h-8 w-8 rounded-none shadow-sm border border-white/5"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              if (!target.src.includes("minotar.net")) {
                target.src = `https://minotar.net/avatar/${uuid}/32`
              } else {
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect fill='%23ddd' width='32' height='32'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='20'%3E?%3C/text%3E%3C/svg%3E"
              }
            }}
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline font-bold text-sm tracking-wide text-foreground hover:text-emerald-400 transition-colors"
            prefetch={false}
          >
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "country",
    header: () => <div className="text-center">país</div>,
    cell: ({ row }) => {
      const country = row.original.country
      if (!country) return <div className="text-center text-gray-400 text-xs">n/a</div>
      return (
        <div className="flex items-center justify-center">
          <img
            src={`https://flagcdn.com/24x18/${country}.png`}
            srcSet={`https://flagcdn.com/48x36/${country}.png 2x`}
            alt={country}
            width={24}
            height={18}
            className="shadow-sm"
            loading="lazy"
          />
        </div>
      )
    },
  },
  {
    id: "elo_tier",
    header: "rango",
    cell: ({ row }) => {
      const elo = row.original.eloRate
      const rankName = getRankName(elo)
      const rankIcon = getRankIcon(elo)

      if (!rankName || !rankIcon) {
        return <div className="flex items-center text-xs text-muted-foreground">n/a</div>
      }

      return (
        <div className="flex items-center gap-2">
          <Image
            src={rankIcon}
            alt={rankName}
            width={20}
            height={20}
            className="h-5 w-5 drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]"
            unoptimized
          />
          <span className="text-xs font-semibold text-muted-foreground">{rankName}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "time",
    header: "tiempo",
    cell: ({ row }) => {
      if (row.original.time !== undefined) {
        return (
          <div className="flex items-center font-mono font-bold text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.2)]">
            {timeFormat(row.original.time)}
          </div>
        )
      }
      return <span className="text-xs text-muted-foreground">n/a</span>
    },
  },
  {
    accessorKey: "eloRate",
    header: "elo",
    cell: ({ row }) => {
      return (
        <div
          className={`flex items-center font-semibold text-xs ${row.original.eloRate !== undefined
            ? eloColor(row.original.eloRate)
            : ""
            }`}
        >
          {row.original.eloRate !== undefined ? row.original.eloRate : "n/a"}
        </div>
      )
    },
  },
  {
    id: "season",
    accessorKey: "totalTimeSeason",
    header: "season",
    cell: ({ row }) => {
      const season = row.original.totalTimeSeason
      if (!season) return <span className="text-xs text-muted-foreground">—</span>
      return (
        <span className="text-xs font-bold text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">
          s{season}
        </span>
      )
    },
  },
]
