export interface Experience {
  company: string
  role: string
  duration: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: "Infotact Solutions",
    role: "Software Developer Intern",
    duration: "Jul 2025 \u2013 Sep 2025",
    highlights: [
      "Developed backend APIs and microservices for a collaborative AI platform serving cross-functional teams.",
      "Implemented JWT-based authentication and RBAC systems for secure multi-tenant access control.",
      "Built real-time collaboration features using Socket.IO for live document and workflow synchronization.",
      "Designed MongoDB schemas and indexing strategies for high-read workloads, improving query performance by optimizing aggregation pipelines.",
      "Integrated AI-driven health monitoring services with structured logging and health check endpoints.",
      "Used Git-based workflows, PR reviews, and team collaboration practices in an agile development environment.",
    ],
  },
]
