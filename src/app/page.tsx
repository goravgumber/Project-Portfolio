import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { TechStack } from "@/components/sections/tech-stack"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Philosophy } from "@/components/sections/philosophy"
import { GitHubSection } from "@/components/sections/github-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Philosophy />
      <GitHubSection />
      <ResumeSection />
      <Contact />
    </>
  )
}
