import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Spotlight({ children, className, ...props }: SpotlightProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    containerRef.current.style.setProperty("--x", `${x}px`)
    containerRef.current.style.setProperty("--y", `${y}px`)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("group relative overflow-hidden", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--x) var(--y), rgba(6, 182, 212, 0.08), transparent 40%)",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  )
}
