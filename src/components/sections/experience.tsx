"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { experiences } from "@/data/experience"
import { Briefcase } from "lucide-react"

export function Experience() {
  const exp = experiences[0]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="Professional engineering work and internships."
          icon={<Briefcase className="h-4 w-4" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="relative border-l border-border pl-6 pb-2">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />

            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                {exp.duration}
              </span>
            </div>
            <p className="text-sm text-accent mb-4">{exp.company}</p>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                >
                  <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
