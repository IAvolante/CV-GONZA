import { useRef, useEffect, useState } from "react"
import { useInView, animate } from "framer-motion"
import { cn } from "@/lib/utils"

export interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(direction === "up" ? 0 : value)

  useEffect(() => {
    if (!isInView) return

    const initial = direction === "up" ? 0 : value
    const target = direction === "up" ? value : 0

    const timeout = setTimeout(() => {
      const controls = animate(initial, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest))
        },
      })
      return () => controls.stop()
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, value, direction, delay])

  return (
    <span
      ref={ref}
      className={cn("inline-block font-mono tabular-nums tracking-wider", className)}
    >
      {displayValue.toLocaleString()}
    </span>
  )
}
