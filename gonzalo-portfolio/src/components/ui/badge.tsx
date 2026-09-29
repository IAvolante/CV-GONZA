import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-cyan-500 text-slate-950 shadow hover:bg-cyan-500/80",
        secondary:
          "border-transparent bg-violet-500 text-slate-50 hover:bg-violet-500/80",
        destructive:
          "border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-500/80",
        outline: "text-slate-50 border-white/10",
        success: "border-transparent bg-emerald-500 text-slate-950 hover:bg-emerald-500/80",
        gold: "border-transparent bg-amber-500 text-slate-950 hover:bg-amber-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
