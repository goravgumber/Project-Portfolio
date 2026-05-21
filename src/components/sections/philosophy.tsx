"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { engineeringPhilosophy } from "@/data/info"
import { BookOpen } from "lucide-react"

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="How I Build Systems"
          subtitle="Engineering principles I follow when designing and building backend systems."
          icon={<BookOpen className="h-4 w-4" />}
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          {engineeringPhilosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 hover:border-accent/20 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
