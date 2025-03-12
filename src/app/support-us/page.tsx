import { Metadata } from "next";

import { Onboarding } from "./_components/onboarding";
import { Hero } from "@/components/common/hero";
import { BASE_URL } from "@/lib/constants";

const VERSION = Date.now();

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Your support can change lives. Explore ways to donate, volunteer, or partner with the Zita-Onyeka Foundation to empower women, youth, and communities in Nigeria.",

  openGraph: {
    title: "Support Us",
    description:
      "Your support can change lives. Explore ways to donate, volunteer, or partner with the Zita-Onyeka Foundation to empower women, youth, and communities in Nigeria.",
    images: [
      {
        url: `${BASE_URL}/assets/seo/support-on-sunset.jpg?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Zita-Onyeka Foundation (ZOF)",
        type: "image/png",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Support Us",
    description:
      "Your support can change lives. Explore ways to donate, volunteer, or partner with the Zita-Onyeka Foundation to empower women, youth, and communities in Nigeria.",
    images: [`${BASE_URL}/assets/seo/support-on-sunset.jpg?v=${VERSION}`],
  },
};

export default function SupportPage() {
  return (
    <main>
      <Hero heading="Support Our Cause" />
      <Onboarding />
    </main>
  );
}
