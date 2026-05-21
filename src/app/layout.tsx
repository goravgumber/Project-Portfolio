import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/sections/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const baseUrl = "https://goravgumber.dev"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gorav Gumber | Backend Engineer & Cloud Systems Developer",
    template: "%s | Gorav Gumber",
  },
  description:
    "Backend engineer specializing in distributed systems, cloud-native architecture, real-time applications, and AI-integrated platforms. Building production-oriented backend systems with Node.js, Python, Docker, and cloud infrastructure.",
  keywords: [
    "backend engineer",
    "distributed systems",
    "cloud engineer",
    "AI systems developer",
    "Node.js",
    "Python",
    "Docker",
    "TypeScript",
    "portfolio",
    "Gorav Gumber",
  ],
  authors: [{ name: "Gorav Gumber" }],
  creator: "Gorav Gumber",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Gorav Gumber",
    title: "Gorav Gumber | Backend Engineer & Cloud Systems Developer",
    description:
      "Backend engineer specializing in distributed systems, cloud-native architecture, real-time applications, and AI-integrated platforms.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Gorav Gumber - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorav Gumber | Backend Engineer & Cloud Systems Developer",
    description:
      "Backend engineer specializing in distributed systems, cloud-native architecture, real-time applications, and AI-integrated platforms.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
