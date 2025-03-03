import { Metadata } from "next";

import { Onboarding } from "./_components/onboarding";
import { Hero } from "@/components/common/hero";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Your support can change lives. Explore ways to donate, volunteer, or partner with the Zita-Onyeka Foundation to empower women, youth, and communities in Nigeria.",
};

export default function SupportPage() {
  return (
    <main>
      <Hero heading="Support Our Cause" />
      <Onboarding />
    </main>
  );
}
