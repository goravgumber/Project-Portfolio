"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Mail, Send, MapPin } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons"
import { personalInfo } from "@/data/info"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-surface/50">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Contact"
          subtitle="Open to backend engineering, cloud, platform engineering, and AI systems opportunities."
          icon={<Send className="h-4 w-4" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              I&apos;m currently looking for internship and full-time
              opportunities in backend engineering, cloud infrastructure,
              distributed systems, and AI platform development. If you&apos;re
              working on something interesting, I&apos;d love to hear about it.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card group-hover:border-accent/30 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card group-hover:border-accent/30 transition-colors">
                  <GitHubIcon className="h-4 w-4 text-accent" />
                </span>
                github.com/goravgumber
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card group-hover:border-accent/30 transition-colors">
                  <LinkedInIcon className="h-4 w-4 text-accent" />
                </span>
                linkedin.com/in/goravgumber
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                {personalInfo.location}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button asChild className="w-full sm:w-auto">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
