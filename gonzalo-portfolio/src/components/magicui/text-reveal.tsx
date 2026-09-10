import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

export function TextReveal({ text, className, ...props }: TextRevealProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  })

  const words = text.split(" ")

  return (
    <div
      ref={containerRef}
      className={cn("relative flex flex-wrap gap-2 text-2xl font-semibold", className)}
      {...props}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="text-slate-50"
          >
            {word}
          </motion.span>
        )
      })}
    </div>
  )
}
