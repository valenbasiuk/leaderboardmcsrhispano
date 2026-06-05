"use client"

import React, { useEffect, useRef, useState } from "react"

interface SkinViewerProps {
  uuid: string
  mode?: "full" | "bust" | "head"
  pose?: "victory" | "idle" | "sitting" | "sitting_victory"
  width?: number
  height?: number
  className?: string
  /** If true, renders a square face image (no 3D) for compact display */
  squareFace?: boolean
}

export function SkinViewer({
  uuid,
  mode = "full",
  pose = "idle",
  width = 200,
  height = 300,
  className = "",
  squareFace = false,
}: SkinViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Square face mode: use static image, skip 3D
    if (squareFace) {
      setLoading(false)
      return
    }

    let viewer: any = null
    let active = true

    async function initViewer() {
      try {
        const skinview3d = await import("skinview3d")
        if (!active || !canvasRef.current) return

        const skinUrl = `https://mc-heads.net/skin/${uuid}`

        // Create SkinViewer instance without skin parameter initially
        viewer = new skinview3d.SkinViewer({
          canvas: canvasRef.current,
          width: width,
          height: height,
        })

        // Set transparent background for glassmorphism integration
        viewer.background = null

        // Load the skin asynchronously
        try {
          await viewer.loadSkin(skinUrl)
        } catch (e) {
          console.warn("Failed to load skin from mc-heads.net, loading fallback Steve skin", e)
          try {
            await viewer.loadSkin("https://textures.minecraft.net/texture/1a6f8742514de13a25272a818c3ef942d48bf1d7c35a8716f44d8258380cf05c")
          } catch (err) {
            setError(true)
          }
        }

        // Apply configuration based on mode
        // IMPORTANT: camera Z must be POSITIVE to face the front of the skin
        if (mode === "head") {
          viewer.zoom = 4.5
          // Z positive = front-facing camera
          viewer.camera.position.set(0, 16.5, 12)
          viewer.controls.target.set(0, 16.5, 0)

          viewer.playerObject.skin.leftArm.visible = false
          viewer.playerObject.skin.rightArm.visible = false
          viewer.playerObject.skin.leftLeg.visible = false
          viewer.playerObject.skin.rightLeg.visible = false
          viewer.playerObject.skin.torso.visible = false
        } else if (mode === "bust") {
          viewer.zoom = 2.2
          // Aim at chest/head area — keeps full arms visible
          viewer.camera.position.set(0, 14, 14)
          viewer.controls.target.set(0, 14, 0)
          // Hide legs for bust
          viewer.playerObject.skin.leftLeg.visible = false
          viewer.playerObject.skin.rightLeg.visible = false
        } else {
          // Full body — target chest level so head doesn't look down
          viewer.zoom = 0.95
          viewer.camera.position.set(0, 11, 20)
          viewer.controls.target.set(0, 11, 0)
        }

        // Apply pose / animation
        if (pose === "victory" && mode === "full") {
          // Arms raised victory pose
          viewer.playerObject.skin.leftArm.rotation.z = -Math.PI * 0.75
          viewer.playerObject.skin.leftArm.rotation.x = -Math.PI * 0.1
          viewer.playerObject.skin.rightArm.rotation.z = Math.PI * 0.75
          viewer.playerObject.skin.rightArm.rotation.x = -Math.PI * 0.1

          // Slight head tilt
          viewer.playerObject.skin.head.rotation.y = Math.PI * 0.05
          viewer.playerObject.skin.head.rotation.x = -Math.PI * 0.05
        } else if (pose === "sitting_victory") {
          // Sitting pose: legs bent 90° forward
          viewer.playerObject.skin.leftLeg.rotation.x = -Math.PI / 2
          viewer.playerObject.skin.rightLeg.rotation.x = -Math.PI / 2

          // Lower the player model to sit on the block
          viewer.playerObject.position.y = -3

          // Arms raised victory pose
          viewer.playerObject.skin.leftArm.rotation.z = -Math.PI * 0.75
          viewer.playerObject.skin.leftArm.rotation.x = -Math.PI * 0.1
          viewer.playerObject.skin.rightArm.rotation.z = Math.PI * 0.75
          viewer.playerObject.skin.rightArm.rotation.x = -Math.PI * 0.1

          // Slight head tilt
          viewer.playerObject.skin.head.rotation.y = Math.PI * 0.05
          viewer.playerObject.skin.head.rotation.x = -Math.PI * 0.05
        } else if (pose === "sitting") {
          // Sitting pose: legs bent 90° forward
          viewer.playerObject.skin.leftLeg.rotation.x = -Math.PI / 2
          viewer.playerObject.skin.rightLeg.rotation.x = -Math.PI / 2

          // Arms resting slightly forward
          viewer.playerObject.skin.leftArm.rotation.x = -Math.PI * 0.15
          viewer.playerObject.skin.rightArm.rotation.x = -Math.PI * 0.15

          // Lower the player model to sit on the block
          viewer.playerObject.position.y = -3
        } else {
          // Idle: subtle natural stance
          viewer.playerObject.skin.leftArm.rotation.z = -Math.PI * 0.05
          viewer.playerObject.skin.rightArm.rotation.z = Math.PI * 0.05
        }

        // Disable all controls to make it static like a PNG
        if (viewer.controls) {
          viewer.controls.enabled = false
        }

        // Force all outer layer parts visible (hats, jackets, sleeve overlays, pants overlays)
        const skin = viewer.playerObject.skin
        const parts = ["head", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"]
        for (const part of parts) {
          if (skin[part]?.outerLayer) {
            skin[part].outerLayer.visible = true
          }
        }

        // Shadow rendering
        viewer.renderer.shadowMap.enabled = true

        setLoading(false)
      } catch (err) {
        console.error("Failed to initialize skinview3d:", err)
        setError(true)
        setLoading(false)
      }
    }

    initViewer()

    return () => {
      active = false
      if (viewer) {
        viewer.dispose()
      }
    }
  }, [uuid, mode, pose, width, height, squareFace])

  // Square face: render static square avatar image (no circle, no 3D)
  if (squareFace) {
    return (
      <div
        ref={containerRef}
        className={`relative flex items-center justify-center select-none ${className}`}
        style={{ width, height }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://mc-heads.net/avatar/${uuid}/${Math.max(width, height)}`}
          alt={`Avatar de ${uuid}`}
          style={{ width, height, imageRendering: "pixelated", borderRadius: 0 }}
          className="object-contain"
          onError={(e) => {
            const t = e.target as HTMLImageElement
            if (!t.src.includes("minotar.net")) {
              t.src = `https://minotar.net/avatar/${uuid}/${Math.max(width, height)}`
            }
          }}
        />
      </div>
    )
  }

  // Fallbacks: static image if WebGL fails
  const fallbackUrl =
    mode === "head"
      ? `https://mc-heads.net/avatar/${uuid}/128`
      : mode === "bust"
      ? `https://mc-heads.net/body/${uuid}/256`
      : `https://mc-heads.net/player/${uuid}/256`

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width, height }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      )}

      {error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fallbackUrl}
          alt={`Minecraft skin fallback for ${uuid}`}
          className="object-contain max-h-full max-w-full transition-transform hover:scale-105 duration-300"
        />
      ) : (
        <canvas ref={canvasRef} className="outline-none" />
      )}
    </div>
  )
}
