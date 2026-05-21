"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { FolderGit2, ExternalLink, ChevronDown } from "lucide-react"
import { GitHubIcon } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

const INITIAL_COUNT = 4

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="py-24 px-4 bg-surface/50">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production-oriented backend systems, distributed platforms, and AI-integrated applications."
          icon={<FolderGit2 className="h-4 w-4" />}
        />

        <div className="mt-10 grid gap-4">
          {visible.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="group rounded-xl border border-border bg-card p-5 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.live} live site`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.slice(0, 4).map((h, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              className="text-xs text-muted-foreground"
            >
              <ChevronDown
                className={cn(
                  "h-3 w-3 mr-1 transition-transform",
                  showAll && "rotate-180"
                )}
              />
              {showAll
                ? "Show fewer"
                : `Show all ${projects.length} projects`}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
