import { Metadata } from "next";

import { BASE_URL } from "../constants";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Zita Onyeka Foundation | Empowering Women, Youth, and Communities",
  description:
    "The Zita-Onyeka Foundation is dedicated to empowering women and youth, promoting gender equality, and fostering sustainable community development in Nigeria. Join us in creating a brighter future for all.",

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
    "Zita Onyeka Foundation",
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
  creator: "Zita Onyeka",
  publisher: "Zita Onyeka",

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
    siteName: "Zita Onyeka Foundation",
    title: "Zita Onyeka Foundation | Empowering Women, Youth, and Communities",
    description:
      "The Zita-Onyeka Foundation is dedicated to empowering women and youth, promoting gender equality, and fostering sustainable community development in Nigeria. Join us in creating a brighter future for all.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Zita Onyeka Foundation - Empowering Women, Youth, and Communities",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zita Onyeka Foundation | Empowering Women, Youth, and Communities",
    description:
      "Join the Zita-Onyeka Foundation in empowering women, youth, and communities through education, skill development, and sustainable initiatives.",
    creator: "@ZitaOnyekaFdn",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },

  // other: {
  //   "telegram:channel": "@ZitaOnyekaFdn",
  //   "og:image:width": "1200",
  //   "og:image:height": "630",
  //   // Force no-cache headers
  //   "cache-control": "no-cache, no-store, must-revalidate",
  //   pragma: "no-cache",
  //   expires: "0",
  // },
};
