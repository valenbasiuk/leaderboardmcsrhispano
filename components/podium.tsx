"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Runner } from "@/app/leaderboard/columns"
import { PhaseBadge } from "@/components/phase-badge"
import { SkinViewer } from "@/components/skin-viewer"
import { ErrorBoundary } from "@/components/error-boundary"
import { getRankName, getRankIcon, eloColor } from "@/lib/utils"

interface PodiumProps {
  runners: Runner[]
}

// ─── Watercolor SVG Clip-Paths (declared once, used by ref) ───────────────────
function WatercolorClipDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        {/* Gold — larger, more dramatic splash */}
        <clipPath id="watercolor-clip-gold" clipPathUnits="objectBoundingBox">
          <path d="M0.12,0.02 C0.18,0.0,0.28,0.04,0.38,0.01 C0.48,0.0,0.55,0.05,0.65,0.02 C0.75,0.0,0.82,0.04,0.90,0.03 C0.96,0.06,1.0,0.12,0.98,0.22 C1.0,0.34,0.97,0.46,0.99,0.58 C1.0,0.70,0.97,0.78,0.96,0.88 C0.93,0.95,0.86,0.99,0.76,0.97 C0.66,1.0,0.56,0.96,0.46,0.99 C0.36,1.0,0.26,0.96,0.16,0.98 C0.08,0.96,0.02,0.92,0.03,0.82 C0.0,0.70,0.04,0.58,0.01,0.46 C0.0,0.34,0.03,0.22,0.02,0.12 C0.04,0.06,0.08,0.03,0.12,0.02 Z" />
        </clipPath>
        {/* Silver — asymmetric organic blob */}
        <clipPath id="watercolor-clip-silver" clipPathUnits="objectBoundingBox">
          <path d="M0.15,0.04 C0.25,0.0,0.35,0.06,0.48,0.02 C0.60,0.0,0.72,0.05,0.82,0.03 C0.92,0.05,0.98,0.14,0.96,0.26 C0.99,0.38,0.95,0.50,0.98,0.62 C1.0,0.74,0.96,0.84,0.92,0.92 C0.85,0.98,0.74,0.96,0.62,0.99 C0.50,1.0,0.38,0.95,0.26,0.98 C0.14,1.0,0.06,0.94,0.03,0.84 C0.0,0.72,0.04,0.60,0.02,0.48 C0.0,0.36,0.05,0.24,0.03,0.14 C0.06,0.06,0.10,0.04,0.15,0.04 Z" />
        </clipPath>
        {/* Bronze — rounder, paint-drop shape */}
        <clipPath id="watercolor-clip-bronze" clipPathUnits="objectBoundingBox">
          <path d="M0.10,0.06 C0.22,0.0,0.34,0.05,0.50,0.02 C0.66,0.0,0.78,0.06,0.88,0.04 C0.96,0.08,1.0,0.18,0.97,0.30 C1.0,0.44,0.96,0.56,0.98,0.68 C1.0,0.80,0.94,0.90,0.88,0.96 C0.78,1.0,0.66,0.95,0.50,0.98 C0.34,1.0,0.22,0.94,0.12,0.97 C0.04,0.92,0.0,0.80,0.03,0.68 C0.0,0.56,0.04,0.44,0.02,0.30 C0.0,0.18,0.04,0.10,0.10,0.06 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

// ─── Watercolor Flag Card ─────────────────────────────────────────────────────
interface FlagCardProps {
  country: string
  size?: number
  opacity?: number
  clipId: string
}

function FlagCard({ country, size = 120, opacity = 0.85, clipId }: FlagCardProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        top: -size * 0.4,
        left: "50%",
        transform: "translateX(-50%)",
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          clipPath: `url(#${clipId})`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w160/${country}.jpg`}
          alt={country}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: opacity,
            display: "block",
          }}
        />
        {/* Soft glassy overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.0) 55%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  )
}

// ─── Glass Pedestal Base ──────────────────────────────────────────────────────
type PedestalTier = "gold" | "silver" | "bronze"

interface GlassPedestalProps {
  tier: PedestalTier
  width?: number
}

const PEDESTAL_STYLES: Record<PedestalTier, {
  gradient: string
  border: string
  glow: string
  aura: string
}> = {
  gold: {
    gradient: "linear-gradient(135deg, rgba(255,215,0,0.25) 0%, rgba(255,180,0,0.12) 50%, rgba(200,150,0,0.08) 100%)",
    border: "2px solid rgba(255,215,0,0.35)",
    glow: "0 2px 12px rgba(255,215,0,0.15), inset 0 1px 2px rgba(255,255,255,0.25)",
    aura: "rgba(255,215,0,0.2)",
  },
  silver: {
    gradient: "linear-gradient(135deg, rgba(200,210,220,0.25) 0%, rgba(160,175,190,0.12) 50%, rgba(120,135,150,0.08) 100%)",
    border: "2px solid rgba(200,210,220,0.30)",
    glow: "0 2px 12px rgba(192,192,192,0.12), inset 0 1px 2px rgba(255,255,255,0.20)",
    aura: "rgba(192,192,192,0.18)",
  },
  bronze: {
    gradient: "linear-gradient(135deg, rgba(205,127,50,0.22) 0%, rgba(180,100,30,0.10) 50%, rgba(140,80,20,0.06) 100%)",
    border: "2px solid rgba(205,127,50,0.30)",
    glow: "0 2px 12px rgba(205,127,50,0.12), inset 0 1px 2px rgba(255,255,255,0.18)",
    aura: "rgba(205,127,50,0.15)",
  },
}

function GlassPedestal({ tier, width = 120 }: GlassPedestalProps) {
  const s = PEDESTAL_STYLES[tier]
  return (
    <div
      style={{
        width: width,
        height: 20,
        borderRadius: 10,
        background: s.gradient,
        backdropFilter: "blur(12px) saturate(1.5)",
        border: s.border,
        boxShadow: s.glow,
        position: "relative",
        marginTop: -4,
      }}
    >
      {/* Center aura dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width * 0.6,
          height: 6,
          borderRadius: 3,
          background: `radial-gradient(ellipse, ${s.aura}, transparent)`,
        }}
      />
    </div>
  )
}

// ─── Podium Slot ──────────────────────────────────────────────────────────────
interface PodiumSlotProps {
  player: Runner
  position: 1 | 2 | 3
}

const CLIP_IDS: Record<number, string> = {
  1: "watercolor-clip-gold",
  2: "watercolor-clip-silver",
  3: "watercolor-clip-bronze",
}

const PEDESTAL_CARD_STYLES = {
  1: {
    bg: "linear-gradient(180deg, #f5bc18 0%, #d4950c 100%)", // Solid vibrant gold
    border: "2px solid #e2a50b",
    shadow: "0 6px 20px rgba(212, 149, 12, 0.25)",
    textColor: "text-[#3a2001] font-black",
    mutedTextColor: "text-[#5c3c04] font-semibold",
    eloColor: "text-[#3a2001] font-bold",
    linkHover: "hover:text-[#5c3c04]",
  },
  2: {
    bg: "linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%)", // Solid vibrant silver/iron
    border: "2px solid #cbd5e1",
    shadow: "0 6px 20px rgba(148, 163, 184, 0.2)",
    textColor: "text-[#0f172a] font-black",
    mutedTextColor: "text-[#334155] font-semibold",
    eloColor: "text-[#0f172a] font-bold",
    linkHover: "hover:text-[#334155]",
  },
  3: {
    bg: "linear-gradient(180deg, #cc7443 0%, #9b4b24 100%)", // Solid vibrant copper/bronze
    border: "2px solid #a8542a",
    shadow: "0 6px 20px rgba(155, 75, 36, 0.2)",
    textColor: "text-[#ffffff] font-black",
    mutedTextColor: "text-[#ffdacf] font-semibold",
    eloColor: "text-[#ffffff] font-bold",
    linkHover: "hover:text-[#ffdacf]",
  },
}

const SLOT_CONFIG = {
  1: {
    pedestalTier: "gold" as PedestalTier,
    skinW: 240,
    skinH: 340,
    skinShowH: 210,  // overflow-hidden height = only show top ~62%
    pedestalH: 220,
    pedestalWidth: 140,
    flagSize: 160,
    flagOpacity: 0.90,
    zIndex: 20,
    glowColor: "rgba(0,0,0,0)",
    glowBorder: "rgba(255,215,0,0)",
    numColor: "text-[#3a2001]",
    numBg: "",
    order: "md:order-2",
    pose: "sitting" as const,
    mode: "full" as const,
  },
  2: {
    pedestalTier: "silver" as PedestalTier,
    skinW: 200,
    skinH: 290,
    skinShowH: 180,
    pedestalH: 180,
    pedestalWidth: 120,
    flagSize: 140,
    flagOpacity: 0.85,
    zIndex: 10,
    glowColor: "rgba(0,0,0,0)",
    glowBorder: "rgba(192,192,192,0)",
    numColor: "text-[#0f172a]",
    numBg: "",
    order: "md:order-1",
    pose: "sitting" as const,
    mode: "full" as const,
  },
  3: {
    pedestalTier: "bronze" as PedestalTier,
    skinW: 185,
    skinH: 270,
    skinShowH: 165,
    pedestalH: 155,
    pedestalWidth: 110,
    flagSize: 125,
    flagOpacity: 0.85,
    zIndex: 10,
    glowColor: "rgba(0,0,0,0)",
    glowBorder: "rgba(205,127,50,0)",
    numColor: "text-white",
    numBg: "",
    order: "md:order-3",
    pose: "sitting" as const,
    mode: "full" as const,
  },
}

function PodiumSlot({ player, position }: PodiumSlotProps) {
  const cfg = SLOT_CONFIG[position]
  const cardStyle = PEDESTAL_CARD_STYLES[position]
  const rankIcon = getRankIcon(player.eloRate)
  const rankName = getRankName(player.eloRate)

  return (
    <div
      className={`flex flex-col items-center group w-full ${
        position === 1 ? "md:w-72" : position === 2 ? "md:w-64" : "md:w-56"
      } ${cfg.order} transition-all duration-300 hover:-translate-y-2`}
      style={{ zIndex: cfg.zIndex }}
    >
      {/* Skin + Flag container */}
      <div className="relative z-10 flex flex-col items-center" style={{ marginBottom: -8 }}>
        {/* Watercolor flag card backdrop */}
        {player.country && (
          <FlagCard
            country={player.country}
            size={cfg.flagSize}
            opacity={cfg.flagOpacity}
            clipId={CLIP_IDS[position]}
          />
        )}

        {/* 3D SkinViewer — full mode, CSS overflow-hidden crops legs only from bottom */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: cfg.skinW,
            height: cfg.skinShowH,   // visible height = head + torso + arms only
            overflow: "hidden",      // legs cropped at bottom
          }}
        >
          <ErrorBoundary>
            <SkinViewer
              uuid={player.uuid}
              mode={cfg.mode}
              pose={cfg.pose}
              width={cfg.skinW}
              height={cfg.skinH}
              className="drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
            />
          </ErrorBoundary>
        </div>

        {/* Glass pedestal base */}
        <div style={{ position: "relative", zIndex: 1, marginTop: -4 }}>
          <GlassPedestal tier={cfg.pedestalTier} width={cfg.pedestalWidth} />
        </div>
      </div>

      {/* Info card pedestal — 100% solid opacity filling the interior */}
      <div
        className="relative w-full flex flex-col items-center justify-between p-4 pb-5 overflow-hidden"
        style={{
          height: cfg.pedestalH,
          background: cardStyle.bg,
          border: cardStyle.border,
          borderRadius: "0 0 20px 20px",
          boxShadow: cardStyle.shadow,
        }}
      >
        {/* Soft subtle light sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-b-[20px]" />

        <div className="text-center z-10 w-full flex flex-col items-center gap-1 mt-2">
          {/* Nickname */}
          <Link
            href={`/profile/${player.nickname}`}
            className={`${position === 1 ? "text-xl" : "text-lg"} font-black ${cardStyle.textColor} ${cardStyle.linkHover} transition-colors truncate max-w-full`}
          >
            {player.nickname}
          </Link>

          {/* Country + ELO row */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {player.country && (
              <img
                src={`https://flagcdn.com/24x18/${player.country}.png`}
                alt={player.country}
                width={20}
                height={15}
                className="rounded-sm shadow-sm"
                style={{ imageRendering: "auto" }}
              />
            )}
            <span className={`font-semibold text-sm ${cardStyle.eloColor}`}>
              {player.eloRate} elo
            </span>
          </div>

          {/* Rank badge */}
          {rankIcon && rankName && (
            <div className="flex items-center gap-1 mt-0.5">
              <Image
                src={rankIcon}
                alt={rankName}
                width={18}
                height={18}
                unoptimized
                className="drop-shadow"
              />
              <span className={`text-xs font-semibold ${cardStyle.mutedTextColor}`}>
                {rankName}
              </span>
            </div>
          )}

          {/* Phase badge */}
          {player.seasonResult?.phasePoint !== undefined && player.seasonResult.phasePoint > 0 && (
            <div className="mt-1">
              <PhaseBadge points={player.seasonResult.phasePoint} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Top 4–10 Card (Redesigned with 3D Head PNG) ──────────────────────────────
interface CompactCardProps {
  player: Runner
  position: number
}

function CompactCard({ player, position }: CompactCardProps) {
  const rankIcon = getRankIcon(player.eloRate)
  const rankName = getRankName(player.eloRate)

  return (
    <div className="relative flex flex-col items-center justify-between p-3 min-w-[130px] overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 group aero-card">
      <span className="text-xs font-black text-foreground/60 relative z-10">#{position}</span>

      {/* 3D Head Render PNG */}
      <div className="my-1.5 relative z-10 flex flex-col items-center gap-1">
        <div className="overflow-hidden" style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc-heads.net/head/${player.uuid}/64`}
            alt={player.nickname}
            className="object-contain select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
            style={{ width: 48, height: 48 }}
            onError={(e) => {
              const t = e.target as HTMLImageElement
              if (!t.src.includes("minotar.net")) {
                t.src = `https://minotar.net/helm/${player.uuid}/64`
              }
            }}
          />
        </div>
        
        {/* Country flag */}
        {player.country && (
          <img
            src={`https://flagcdn.com/20x15/${player.country}.png`}
            alt={player.country}
            width={20}
            height={15}
            className="rounded-sm opacity-90 relative z-10 shadow-sm"
          />
        )}
      </div>

      <Link
        href={`/profile/${player.nickname}`}
        className="text-xs font-bold text-foreground hover:text-emerald-400 transition-colors text-center truncate w-full relative z-10"
      >
        {player.nickname}
      </Link>

      <span className={`text-xs font-semibold mt-0.5 relative z-10 ${player.eloRate !== undefined ? eloColor(player.eloRate) : ""}`}>
        {player.eloRate}
      </span>

      {/* Rank icon */}
      {rankIcon && (
        <div className="flex items-center gap-1 mt-0.5 relative z-10">
          <Image
            src={rankIcon}
            alt={rankName}
            width={14}
            height={14}
            unoptimized
          />
          <span className="text-[10px] text-muted-foreground font-medium">{rankName}</span>
        </div>
      )}
    </div>
  )
}

// ─── Main Podium Component ────────────────────────────────────────────────────
export function Podium({ runners }: PodiumProps) {
  const top3 = runners.slice(0, 3)
  const top4to10 = runners.slice(3, 10)

  const p1 = top3[0]
  const p2 = top3[1]
  const p3 = top3[2]

  return (
    <div className="w-full flex flex-col items-center gap-10 py-8">

      {/* Watercolor clip-path definitions */}
      <WatercolorClipDefs />

      {/* ── Frutiger Aero Decorative Orbs (softened) ── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {/* Large cyan orb — reduced opacity */}
        <div style={{
          position: "absolute", top: "5%", left: "5%", width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(100,220,255,0.12), rgba(0,150,200,0.02) 65%)",
          filter: "blur(40px)",
        }} />
        {/* Green orb */}
        <div style={{
          position: "absolute", top: "10%", right: "5%", width: 260, height: 260,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(50,220,120,0.10), rgba(0,180,80,0.02) 65%)",
          filter: "blur(36px)",
        }} />
        {/* Gold orb for #1 */}
        <div style={{
          position: "absolute", top: "8%", left: "50%", transform: "translateX(-50%)", width: 200, height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(255,215,0,0.08), rgba(200,150,0,0.01) 65%)",
          filter: "blur(28px)",
        }} />
      </div>

      {/* ── Top 3 Podium ── */}
      <div className="relative flex flex-col md:flex-row items-end justify-center w-full max-w-5xl gap-6 md:gap-2 px-4"
        style={{ minHeight: 560 }}>

        {p2 && <PodiumSlot player={p2} position={2} />}
        {p1 && <PodiumSlot player={p1} position={1} />}
        {p3 && <PodiumSlot player={p3} position={3} />}
      </div>

      {/* ── Top 4–10 (no divider text, just clean spacing) ── */}
      {top4to10.length > 0 && (
        <div className="w-full max-w-5xl px-4 mt-8">
          <div className="flex flex-row md:justify-center items-start gap-3 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "thin" }}>
            {top4to10.map((runner, index) => (
              <CompactCard key={runner.uuid} player={runner} position={index + 4} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
