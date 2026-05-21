export interface Project {
  title: string
  description: string
  highlights: string[]
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: "Adaptive Ecosystem Simulator",
    description:
      "Distributed AI monitoring and ecosystem simulation platform with real-time event streaming, anomaly detection, and ML-based forecasting. The system orchestrates multiple backend services for data ingestion, processing, and visualization.",
    highlights: [
      "Express.js backend with Socket.IO for real-time event streaming",
      "Flask ML microservice using TensorFlow and scikit-learn for anomaly detection",
      "MongoDB for time-series data storage with optimized aggregation pipelines",
      "JWT authentication with role-based access control",
      "Swagger-documented API with Docker-ready architecture",
      "Distributed backend orchestration across services",
    ],
    tags: [
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "TensorFlow",
      "Flask",
      "Docker",
      "JWT",
    ],
    github: "https://github.com/goravgumber/adaptive-ecosystem-simulator",
  },
  {
    title: "Customer Self-Service Portal",
    description:
      "Enterprise-grade self-service portal with Redis caching, Salesforce REST integration, and resilient API architecture. Built for production-scale customer operations with comprehensive health monitoring.",
    highlights: [
      "TypeScript backend with Express.js and modular service architecture",
      "Redis caching layer for sub-millisecond response times on frequent queries",
      "Salesforce REST API integration with rate limiting and retry logic",
      "Swagger-documented REST endpoints with health check endpoints",
      "Docker Compose setup for local and production parity",
      "CI-ready project structure with environment-based configuration",
    ],
    tags: [
      "TypeScript",
      "Express.js",
      "Redis",
      "Docker",
      "Swagger",
      "JWT",
      "REST",
    ],
    github: "https://github.com/goravgumber/customer-self-service-portal",
    live: "https://customer-self-service-portal.vercel.app",
  },
  {
    title: "DevMind (RAG Platform)",
    description:
      "Retrieval-Augmented Generation platform implementing semantic chunking, vector search, and caching for scalable AI-powered document retrieval. Designed for low-latency knowledge base queries.",
    highlights: [
      "FastAPI backend with async request handling for concurrent queries",
      "pgvector for PostgreSQL-based vector similarity search",
      "Redis semantic caching to reduce LLM API costs and latency",
      "Semantic chunking strategy for optimal document embedding",
      "OpenAI API integration with configurable model parameters",
      "Scalable retrieval pipeline designed for large document collections",
    ],
    tags: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "LangChain",
      "OpenAI",
      "RAG",
    ],
    github: "https://github.com/goravgumber/DevMind",
  },
  {
    title: "SmartPark AI",
    description:
      "IoT-based smart parking system with real-time camera monitoring, computer vision detection, and live slot availability tracking. End-to-end event-driven architecture from edge to cloud.",
    highlights: [
      "Socket.IO for real-time bidirectional communication between IoT devices and backend",
      "OpenCV-based computer vision pipeline for parking slot detection",
      "Raspberry Pi edge devices streaming data to central backend",
      "Event-driven architecture for live synchronization across clients",
      "Responsive web dashboard for real-time parking analytics",
      "End-to-end IoT-to-cloud pipeline with minimal latency",
    ],
    tags: [
      "Node.js",
      "Socket.IO",
      "OpenCV",
      "Raspberry Pi",
      "IoT",
      "Real-time",
    ],
    github: "https://github.com/goravgumber/SmartPark-AI",
    live: "https://smartpark-client.onrender.com/",
  },
  {
    title: "Collaborative AI Platform",
    description:
      "AI-powered team collaboration platform with Kanban workflows, real-time document editing, and analytics dashboards. Built with a scalable microservices architecture.",
    highlights: [
      "RBAC with multi-tenant workspace isolation and permission management",
      "Socket.IO for real-time collaboration and live document updates",
      "Kanban workflow engine with drag-and-drop and state management",
      "Analytics dashboard tracking team productivity metrics",
      "Document version control with structured diff and rollback support",
      "Scalable team architecture supporting concurrent users",
    ],
    tags: [
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "RBAC",
      "Real-time",
      "Docker",
    ],
    github: "https://github.com/Team-infotact-solutions/collab-ai-platform",
  },
  {
    title: "AI Visibility Tracker",
    description:
      "AI analytics platform measuring brand visibility and LLM evaluation metrics. Features a prompt analysis engine and real-time evaluation dashboard for model performance tracking.",
    highlights: [
      "FastAPI backend with async workers for parallel evaluation requests",
      "Prompt analysis engine for understanding LLM behavior patterns",
      "Brand visibility metrics pipeline with configurable scoring",
      "Real-time AI evaluation dashboard with streaming updates",
      "Structured metrics pipeline for evaluation result aggregation",
      "RESTful API design with comprehensive error handling",
    ],
    tags: ["FastAPI", "Python", "AI", "Analytics", "REST", "LLM"],
    github: "https://github.com/AI-Visibility-Tracker/AI-Visibility-Tracker",
  },
  {
    title: "Creative AI Studio",
    description:
      "AI-powered content creation platform with GPT-4 integration, social media management, and analytics. A scalable SaaS-style architecture for AI-assisted content workflows.",
    highlights: [
      "Next.js frontend with server-side rendering for SEO optimization",
      "Express.js backend with modular route and service architecture",
      "MongoDB for content storage with rich query support",
      "Socket.IO for real-time content generation status updates",
      "GPT-4 integration for AI-powered content generation",
      "Analytics systems tracking content performance and usage metrics",
    ],
    tags: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "GPT-4",
      "SaaS",
    ],
    github: "https://github.com/Creativeai-Studio-team/Creative-AI-Studio",
  },
]
