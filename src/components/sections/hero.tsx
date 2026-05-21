"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons"
import { personalInfo } from "@/data/info"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-subtle" />
            {personalInfo.location}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground mb-6 font-mono"
        >
          <span className="text-accent">$</span>{" "}
          {personalInfo.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-muted"
        >
          <span className="h-px w-8 bg-border" />
          <span className="font-mono">/* available for opportunities */</span>
          <span className="h-px w-8 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M8 3v10m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
