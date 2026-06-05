import React from "react"
import { Shield, Star, Code, Heart } from "lucide-react"

export const metadata = {
  title: "créditos — mcsr ranked hispana",
  description: "créditos y agradecimientos del leaderboard hispano de minecraft speedrunning ranked",
}

export default function CreditosPage() {
  return (
    <div className="container max-w-4xl py-12 flex flex-col gap-10">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-white/20 dark:border-white/5 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          créditos
        </h1>
        <p className="text-muted-foreground text-sm">
          agradecimientos y atribuciones para los creadores y colaboradores de este proyecto.
        </p>
      </div>

      {/* Credits Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project Creator Card */}
        <div className="aero-card p-6 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
              <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">creador del proyecto</h3>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">hugoxeneize</p>
              <p className="text-xs text-muted-foreground mt-2">
                creador original de la base del leaderboard y el whitelist inicial de speedrunners hispanohablantes.
              </p>
            </div>
          </div>
        </div>

        {/* Development & Redesign Card */}
        <div className="aero-card p-6 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
              <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">desarrollo y rediseño</h3>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">antigravity & valen</p>
              <p className="text-xs text-muted-foreground mt-2">
                rediseño completo del sistema visual a estilo Frutiger Aero / Aero Dark, e implementación del visor 3D para el podium.
              </p>
            </div>
          </div>
        </div>

        {/* API & Services Card */}
        <div className="aero-card p-6 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
              <Star className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">servicios y apis</h3>
              <ul className="text-xs text-muted-foreground list-disc pl-4 flex flex-col gap-1 mt-2">
                <li><strong className="text-emerald-600 dark:text-emerald-300">mcsr ranked api</strong> — datos y estadísticas oficiales.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-300">mc-heads.net</strong> — texturas y skins en 3d.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-300">flagcdn.com</strong> — banderas de países.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community & Open Source Card */}
        <div className="aero-card p-6 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
              <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">comunidad y soporte</h3>
              <p className="text-xs text-muted-foreground mt-2">
                agradecimientos a todos los corredores de la comunidad hispana por su constante apoyo y dedicación a las speedruns competitivas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
