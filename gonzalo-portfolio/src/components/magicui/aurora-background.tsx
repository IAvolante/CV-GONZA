import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function AuroraBackground({
  className,
  children,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center bg-gray-950 text-slate-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            transform: [
              "translate(0%, 0%) scale(1)",
              "translate(20%, -10%) scale(1.1)",
              "translate(-10%, 10%) scale(0.9)",
              "translate(0%, 0%) scale(1)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            transform: [
              "translate(0%, 0%) scale(1)",
              "translate(-20%, 10%) scale(1.1)",
              "translate(10%, -10%) scale(0.9)",
              "translate(0%, 0%) scale(1)",
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-500/15 blur-[100px]"
        />
        <motion.div
          animate={{
            transform: [
              "translate(0%, 0%) scale(1)",
              "translate(15%, 15%) scale(1.05)",
              "translate(-15%, -15%) scale(0.95)",
              "translate(0%, 0%) scale(1)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full bg-emerald-500/15 blur-[100px]"
        />
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
