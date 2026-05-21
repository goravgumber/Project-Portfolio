"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { personalInfo } from "@/data/info"
import { Terminal } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="About"
          subtitle="A backend engineer focused on distributed systems, cloud infrastructure, and AI platforms."
          icon={<Terminal className="h-4 w-4" />}
        />

        <div className="space-y-4 mt-10">
          {personalInfo.about.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 rounded-xl border border-border bg-card p-4"
        >
          <div className="flex items-start gap-3">
            <span className="text-accent mt-0.5 font-mono text-sm">$</span>
            <div>
              <p className="text-sm text-foreground font-mono mb-1">
                cat /etc/gorav/about.txt
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                B.Tech CSE (2023-2027) — Government Engineering College Ajmer{" "}
                <span className="text-accent">|</span> CGPA: 8.83{" "}
                <span className="text-accent">|</span> Linux + Docker + Cloud
                roadmap
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
