import * as React from "react"
import { cn } from "@/lib/utils"

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  angle?: number
}

export function RetroGrid({ className, angle = 65, ...props }: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-50",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 [perspective:200px]">
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(${angle}deg)`,
            transformOrigin: "bottom",
            backgroundSize: "60px 60px",
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-950/90" />
      </div>
    </div>
  )
}
