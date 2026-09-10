import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: number
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 20,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--duration:40s]",
        pauseOnHover && "hover:[&>div]:[animation-play-state:paused]",
        className
      )}
      style={{
        "--duration": `${100 / speed}s`,
      } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee items-center justify-around gap-4",
          reverse ? "direction-reverse" : "direction-normal"
        )}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
      `}</style>
    </div>
  )
}
