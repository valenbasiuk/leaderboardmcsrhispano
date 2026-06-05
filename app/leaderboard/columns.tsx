/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"

import { timeFormat, eloColor, getRankName, getRankIcon } from "@/lib/utils"

export type Runner = {
  // Look at api docs for object structure
  uuid: string
  nickname: string
  eloRank?: number
  eloRate?: number
  rank?: number
  time?: number
  seasonTime?: number
  totalTime?: number
  totalTimeSeason?: number
  season?: number
  country?: string // ISO 3166-1 alpha-2 format (lowercase)
  seasonResult?: SeasonResult
}

export type SeasonResult = {
  phasePoint?: number
}

import { PhaseBadge } from "@/components/phase-badge"

export const eloColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "eloRank",
    header: "#",
    cell: ({ row }) => {
      const val = row.original.eloRank
      // Gold/silver/bronze text glow for top 3
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
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect fill='%23ddd' width='32' height='32'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='20'%3E?%3C/text%3E%3C/svg%3E`
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
          {row.original.seasonResult?.phasePoint !== undefined && row.original.seasonResult.phasePoint > 0 && (
            <PhaseBadge points={row.original.seasonResult.phasePoint} />
          )}
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
    id: "rank",
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
    accessorKey: "eloRate",
    header: "elo",
    cell: ({ row }) => {
      return (
        <div
          className={`flex items-center font-bold text-sm ${row.original.eloRate !== undefined
            ? eloColor(row.original.eloRate)
            : ""
            }`}
        >
          {row.original.eloRate !== undefined ? row.original.eloRate : "n/a"}
        </div>
      )
    },
  },
]

export const timeColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      const uuid = row.original.uuid
      const avatarUrl = `https://mc-heads.net/avatar/${uuid}/32`
      return (
        <div className="flex items-center">
          <img
            src={avatarUrl}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-none"
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
            className="hover:underline"
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
    header: () => <div className="text-center">Country</div>,
    cell: ({ row }) => {
      const country = row.original.country
      if (!country) return <div className="text-center text-gray-400">N/A</div>
      return (
        <div className="flex items-center justify-center">
          <img
            src={`https://flagcdn.com/24x18/${country}.png`}
            srcSet={`https://flagcdn.com/48x36/${country}.png 2x`}
            alt={country}
            width={24}
            height={18}
            className="rounded-sm"
            loading="lazy"
          />
        </div>
      )
    },
  },
  {
    id: "elo_tier",
    header: "Rank",
    cell: ({ row }) => {
      const elo = row.original.eloRate
      const rankName = getRankName(elo)
      const rankIcon = getRankIcon(elo)

      if (!rankName || !rankIcon) {
        return <div className="flex items-center">N/A</div>
      }

      return (
        <div className="flex items-center gap-2">
          <Image
            src={rankIcon}
            alt={rankName}
            width={24}
            height={24}
            className="h-6 w-6"
            unoptimized
          />
          <span className="text-sm font-medium">{rankName}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      if (row.original.time !== undefined) {
        return (
          <div className="flex items-center">
            {timeFormat(row.original.time)}
          </div>
        )
      }
    },
  },
]

export const phasePointsColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>
    },
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <img
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8"
            loading="lazy"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
            prefetch={false}
          >
            {" "}
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "phasePoint",
    header: "Phase Points",
    cell: ({ row }) => {
      return (
        <div className={`flex items-center`}>
          {row.original.seasonResult?.phasePoint !== undefined
            ? `${row.original.seasonResult?.phasePoint} phase points`
            : "N/A"}
        </div>
      )
    },
  },
]
