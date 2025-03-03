import { Metadata } from "next";

import { Hero } from "@/components/common/hero";
import { Main } from "./_components/main";
import { OurTeam } from "./_components/team";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about the Zita-Onyeka Foundation’s mission, vision, and values. Discover how we empower women, youth, and communities through education, skill development, and sustainable initiatives.",
};

export default function WhoAweArePage() {
  return (
    <main>
      <Hero heading="Who We Are" bgImgUrl="/assets/img/team-on-sunset.jpg" />
      <Main />
      <OurTeam />
    </main>
  );
}
