"use client"

import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

/**
 * React Error Boundary genérico.
 * Úsalo para envolver componentes que pueden crashear (ej: SkinViewer con WebGL).
 *
 * Uso:
 *   <ErrorBoundary fallback={<div>Error al cargar</div>}>
 *     <SkinViewer ... />
 *   </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary] Caught error:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center w-full h-full text-muted-foreground text-sm opacity-60">
            Error al cargar
          </div>
        )
      )
    }
    return this.props.children
  }
}
