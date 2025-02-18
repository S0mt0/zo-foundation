import { Metadata } from "next";

const VERSION = Date.now();
const BASE_URL = "https://ragner.ai";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "RAGNER | API to Agents in minutes ",
  description:
    "RAGNER is an AI orchestration swarm that transforms your protocol documentation into serverless AI agents. It simplifies dev integrations and becomes a callable tool for other AI agents.",

  icons: {
    icon: [
      { url: `${BASE_URL}/favicon.ico` },
      { url: `${BASE_URL}/android-chrome-192x192.png`, type: "image/png" },
      { url: `${BASE_URL}/android-chrome-512x512.png`, type: "image/png" },
    ],
    apple: [
      { url: `${BASE_URL}/apple-touch-icon.png` },
      { url: `${BASE_URL}/apple-touch-icon.png`, sizes: "180x180" },
    ],
    other: [{ rel: "mask-icon", url: `${BASE_URL}/favicon.svg` }],
  },

  keywords: [
    "AI agent swarms",
    "API transformation",
    "Web3 API integration",
    "Blockchain API agents",
    "Developer tooling",
    "AI-powered endpoints",
    "Instant API deployment",
    "Composable AI agents",
    "Blockchain development",
    "API automation",
    "Web3 development tools",
    "AI integration platform",
    "Decentralized API agents",
    "Intelligent API tooling",
    "Developer productivity",
    "RAGNER.ai",
    "artificial intelligence",
    "API orchestration",
    "blockchain technology",
    "developer tools",
    "AI agents",
    "API documentation",
    "smart contract development",
    "web3 infrastructure",
    "AI agent orchestration",
    "machine learning APIs",
    "natural language processing",
    "API semantics",
    "autonomous agents",
    "AI-first architecture",
    "semantic API integration",
    "agent-based computing",
    "API cognitive services",
  ],

  authors: [{ name: "RAGNER Team", url: BASE_URL }],
  category: "AI Development Tools & API Infrastructure",
  creator: "Ragner.ai",
  publisher: "RAGNER.ai",

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "",
    title: "RAGNER | Transform APIs into Autonomous AI Agents ",
    description:
      "RAGNER is an AI orchestration swarm that transforms your protocol documentation (API, RPC, Contracts, SOAP, GraphQL, etc.) into dynamic, interactive agents. It simplifies DSL (Domain-Specific Language) integrations and becomes a callable tool for other AI agents.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "RAGNER - AI Agent Swarms for API Transformation",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RAGNER: Protocol to Agents in minutes ",
    description:
      "Transform APIs and Smart contracts into intelligent agents with a single click.",
    creator: "@Ragner_ai",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },

  other: {
    "telegram:channel": "@RAGNER_AI",
    "og:image:width": "1200",
    "og:image:height": "630",
    // Force no-cache headers
    "cache-control": "no-cache, no-store, must-revalidate",
    pragma: "no-cache",
    expires: "0",
  },
};
