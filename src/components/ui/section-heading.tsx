import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      {icon && (
        <div className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-accent">
          {icon}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
