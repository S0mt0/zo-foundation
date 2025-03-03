import { Metadata } from "next";

import { BASE_URL } from "../constants";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Zita-Onyeka Foundation (ZOF) | Non-Profit Empowering Women, Youth, and Communities",
    template: "%s | Zita-Onyeka Foundation (ZOF)",
  },
  description:
    "The Zita-Onyeka Foundation is a non-profit organization dedicated to empowering women, youth, and communities in Nigeria. Join us in creating sustainable change through education, skill development, and community initiatives.",

  icons: {
    icon: [
      { url: `${BASE_URL}/assets/seo/favicon.ico` },
      {
        url: `${BASE_URL}/assets/seo/android-chrome-192x192.png`,
        type: "image/png",
      },
      {
        url: `${BASE_URL}/assets/seo/android-chrome-512x512.png`,
        type: "image/png",
      },
    ],
    apple: [
      { url: `${BASE_URL}/assets/seo/apple-touch-icon.png` },
      { url: `${BASE_URL}/assets/seo/apple-touch-icon.png`, sizes: "180x180" },
    ],
    other: [{ rel: "mask-icon", url: `${BASE_URL}/assets/seo/favicon.svg` }],
  },

  keywords: [
    "Zita Onyeka",
    "Zita Onyeka Foundation",
    "Zita-Onyeka Foundation",
    "Empower women",
    "Youth development",
    "Community development",
    "Gender equality",
    "Sustainable development",
    "NGO in Nigeria",
    "Women empowerment programs",
    "Youth skill training",
    "Community resilience",
    "Education for women",
    "Economic empowerment",
    "Healthcare access",
    "Poverty alleviation",
    "Non-profit organization",
    "Social impact",
    "Sustainable communities",
    "Women leadership",
    "Youth mentorship",
    "Community initiatives",
    "Nigeria NGO",
    "Empowerment programs",
    "Social development",
    "Sustainable livelihoods",
    "Women and youth support",
  ],

  authors: [{ name: "Zita Onyeka", url: BASE_URL }],
  category: "Non-Profit & Community Development",
  creator: "Zita-Onyeka Foundation",
  publisher: "Zita-Onyeka Foundation",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Zita-Onyeka Foundation (ZOF)",
    title: "Zita-Onyeka Foundation | Empowering Women, Youth, and Communities",
    description:
      "The Zita-Onyeka Foundation is a non-profit organization dedicated to empowering women, youth, and communities in Nigeria. Join us in creating sustainable change through education, skill development, and community initiatives.",
    images: [
      {
        url: `${BASE_URL}/assets/seo/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Zita-Onyeka Foundation (ZOF)",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Zita-Onyeka Foundation (ZOF)",
    description:
      "Join the Zita-Onyeka Foundation in empowering women, youth, and communities through education, skill development, and sustainable initiatives.",
    creator: "@ZitaOnyekaFdn",
    images: [`${BASE_URL}/assets/seo/og-image.png?v=${VERSION}`],
  },

  // other: {
  //   "og:image:width": "1200",
  //   "og:image:height": "630",
  //   "cache-control": "no-cache, no-store, must-revalidate",
  //   pragma: "no-cache",
  //   expires: "0",
  // },
};
