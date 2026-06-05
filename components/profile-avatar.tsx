"use client"

import React from "react"

interface ProfileAvatarProps {
    uuid: string
    nickname: string
}

export default function ProfileAvatar({ uuid, nickname }: ProfileAvatarProps) {
    return (
        <img
            src={`https://mc-heads.net/avatar/${uuid}/32`}
            alt={nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-none"
            loading="lazy"
            onError={(e) => {
                const target = e.target as HTMLImageElement
                if (!target.src.includes("minotar.net")) {
                    // Fallback a minotar si mc-heads falla
                    target.src = `https://minotar.net/avatar/${uuid}/32`
                } else {
                    // Placeholder simple si todo falla
                    target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect fill='%23ddd' width='32' height='32'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='20'%3E?%3C/text%3E%3C/svg%3E"
                }
            }}
        />
    )
}
