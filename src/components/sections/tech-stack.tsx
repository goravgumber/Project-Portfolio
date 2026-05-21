"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { techStack, techCategories } from "@/data/tech-stack"
import { Cpu } from "lucide-react"

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-4 bg-surface/50">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="Languages, frameworks, tools, and infrastructure I work with."
          icon={<Cpu className="h-4 w-4" />}
        />

        <div className="mt-10 space-y-8">
          {techCategories.map((category, catIdx) => {
            const items = techStack.filter(
              (item) => item.category === category
            )
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
