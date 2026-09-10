import { cn } from "@/lib/utils"

export interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  className?: string
}

export function BorderBeam({
  duration = 15,
  delay = 0,
  colorFrom = "#06b6d4",
  colorTo = "#8b5cf6",
  className,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-40 group-hover:opacity-70 transition-opacity duration-500",
        className
      )}
      style={{ borderRadius: "inherit" }}
    >
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, ${colorFrom} 85%, ${colorTo} 95%, transparent 100%)`,
          animation: `border-beam-spin ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
      <div
        className="absolute inset-[1px] rounded-[inherit] bg-slate-900/90"
      />
      <style>{`
        @keyframes border-beam-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
