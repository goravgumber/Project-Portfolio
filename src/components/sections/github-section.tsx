"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { GitBranch, ExternalLink } from "lucide-react"
import { GitHubIcon } from "@/components/ui/icons"

export function GitHubSection() {
  return (
    <section id="github" className="py-24 px-4 bg-surface/50">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Open Source & Learning"
          subtitle="Continuous project building and active GitHub contributions."
          icon={<GitBranch className="h-4 w-4" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mt-10 space-y-4"
        >
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <GitHubIcon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground mb-2">
                  Active GitHub presence with consistent project building and
                  open source contributions.
                </p>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        100DaysOfReact
                      </strong>{" "}
                      — Daily React challenge building components and features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Backend & Cloud Portfolio
                      </strong>{" "}
                      — 10+ projects spanning distributed systems, IoT, AI
                      platforms, and real-time apps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Learning Journey
                      </strong>{" "}
                      — Linux (Fedora/RHEL) → Docker → Cloud infrastructure →
                      Distributed systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/goravgumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/goravgumber?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                All Repositories
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
