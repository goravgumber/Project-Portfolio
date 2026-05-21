"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { personalInfo } from "@/data/info"

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume for a detailed overview of experience and skills."
          icon={<FileText className="h-4 w-4" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <FileText className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="text-base font-semibold text-foreground mb-2">
              {personalInfo.name} — Resume
            </h3>
            <p className="text-xs text-muted-foreground mb-6 max-w-sm mx-auto">
              Backend Engineering | Cloud & Distributed Systems | AI Systems
              Development
            </p>
            <Button asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
