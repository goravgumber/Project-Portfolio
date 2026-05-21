export interface TechItem {
  name: string
  category: string
}

export const techStack: TechItem[] = [
  // Languages
  { name: "C++", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Bash", category: "Languages" },

  // Backend & APIs
  { name: "Node.js", category: "Backend & APIs" },
  { name: "Express.js", category: "Backend & APIs" },
  { name: "FastAPI", category: "Backend & APIs" },
  { name: "REST APIs", category: "Backend & APIs" },
  { name: "JWT", category: "Backend & APIs" },
  { name: "RBAC", category: "Backend & APIs" },
  { name: "WebSockets", category: "Backend & APIs" },
  { name: "Socket.IO", category: "Backend & APIs" },
  { name: "Microservices", category: "Backend & APIs" },

  // Databases & Infrastructure
  { name: "MongoDB", category: "Databases & Infrastructure" },
  { name: "PostgreSQL", category: "Databases & Infrastructure" },
  { name: "Redis", category: "Databases & Infrastructure" },
  { name: "Docker", category: "Databases & Infrastructure" },
  { name: "Docker Compose", category: "Databases & Infrastructure" },
  { name: "Linux (Fedora/RHEL)", category: "Databases & Infrastructure" },
  { name: "Nginx", category: "Databases & Infrastructure" },
  { name: "AWS (basics)", category: "Databases & Infrastructure" },

  // AI & Systems
  { name: "TensorFlow", category: "AI & Systems" },
  { name: "scikit-learn", category: "AI & Systems" },
  { name: "RAG", category: "AI & Systems" },
  { name: "LangChain", category: "AI & Systems" },
  { name: "OpenAI API", category: "AI & Systems" },
  { name: "Vector Embeddings", category: "AI & Systems" },
  { name: "Distributed Systems", category: "AI & Systems" },

  // Developer Tools
  { name: "Git/GitHub", category: "Developer Tools" },
  { name: "Swagger/OpenAPI", category: "Developer Tools" },
  { name: "Postman", category: "Developer Tools" },
  { name: "GitHub Actions", category: "Developer Tools" },
  { name: "CI/CD", category: "Developer Tools" },
  { name: "Railway", category: "Developer Tools" },
  { name: "Render", category: "Developer Tools" },
  { name: "Vercel", category: "Developer Tools" },
]

export const techCategories = [
  "Languages",
  "Backend & APIs",
  "Databases & Infrastructure",
  "AI & Systems",
  "Developer Tools",
]
