# Gorav Gumber — Portfolio

Backend engineer specializing in distributed systems, cloud-native architecture, real-time applications, and AI-integrated platforms.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, CSS animations |
| Motion | Framer Motion |
| Icons | Lucide React + Custom SVG icons |
| UI | shadcn/ui (Radix primitives + CVA) |
| Deployment | Vercel (recommended) |

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + theme variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── header.tsx           # Fixed navigation header
│   ├── ui/
│   │   ├── badge.tsx        # Tag/badge component
│   │   ├── button.tsx       # Button variants
│   │   ├── card.tsx         # Card container
│   │   ├── icons.tsx        # Custom SVG icons (GitHub, LinkedIn)
│   │   └── section-heading.tsx  # Reusable section heading
│   └── sections/
│       ├── hero.tsx         # Hero with terminal aesthetic
│       ├── about.tsx        # About section
│       ├── tech-stack.tsx   # Tech stack categories
│       ├── experience.tsx   # Work experience timeline
│       ├── projects.tsx     # Featured projects (show/hide)
│       ├── philosophy.tsx   # Engineering principles
│       ├── github-section.tsx  # Open source presence
│       ├── resume-section.tsx  # Resume download
│       ├── contact.tsx      # Contact info
│       └── footer.tsx       # Site footer
├── data/
│   ├── info.ts              # Personal info + philosophy
│   ├── tech-stack.ts        # Tech stack data
│   ├── experience.ts        # Experience data
│   └── projects.ts          # Projects data
└── lib/
    └── utils.ts             # cn() utility
```

## Sections

1. **Hero** — Name, role, tagline, CTA buttons (Resume, GitHub, LinkedIn, Contact), location indicator, scroll prompt
2. **About** — Human-written bio covering backend engineering, distributed systems, Linux/cloud learning journey, AI systems
3. **Tech Stack** — Categorized skill cards (Languages, Backend & APIs, Databases & Infrastructure, AI & Systems, Developer Tools)
4. **Experience** — Software Developer Intern at Infotact Solutions timeline with highlights
5. **Projects** — 7 featured projects with architecture descriptions, tech tags, GitHub links, and live links. Show more/less toggle
6. **Engineering Philosophy** — 6 principles: Modular Architecture, API Contracts First, Observability by Default, Containerized Delivery, Security First, Event-Driven Thinking
7. **GitHub/Open Source** — Learning journey, 100DaysOfReact, active contributions
8. **Resume** — Downloadable resume section
9. **Contact** — Email, GitHub, LinkedIn with professional CTA

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

### Environment Variables

No environment variables are required for the portfolio to function. All data is static.

If you add contact form functionality later, you would add:

```
CONTACT_EMAIL=your@email.com
```

## Customization

Edit data files in `src/data/` to update:
- `info.ts` — Name, role, tagline, about paragraphs, philosophy
- `tech-stack.ts` — Skills and categories
- `experience.ts` — Work experience
- `projects.ts` — Project details, descriptions, links

Replace `public/resume.pdf` with your actual resume file.

Update `src/app/layout.tsx` metadata with your actual domain and social links.

## Performance

- Static site generation (SSG) — all pages pre-rendered at build time
- Optimized font loading with next/font
- No runtime data fetching
- Minimal JavaScript with client components only where needed (animations, interactions)

## Lighthouse Optimization

The portfolio scores highly on Lighthouse by default due to:
- Static HTML generation
- Optimized font loading
- Semantic HTML structure
- Proper heading hierarchy
- Accessible interactive elements
- Responsive design with mobile-first approach

## License

MIT
