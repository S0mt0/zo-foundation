import { Metadata } from "next";
import { Suspense } from "react";

import { Hero } from "@/components/common/hero";
import { Main } from "./_components/main";
import { OurTeam } from "./_components/team";
import { getTeamMembers } from "@/lib/api";
import { SkeletonItems } from "@/components/common/skeleton-items";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about the Zita-Onyeka Foundation's mission, vision, and values. Discover how we empower women, youth, and communities through education, skill development, and sustainable initiatives.",
};

export default async function WhoAweArePage() {
  const teams = getTeamMembers();
  return (
    <main>
      <Hero heading="Who We Are" bgImgUrl="/assets/img/team-on-sunset.jpg" />
      <Main />
      <Suspense fallback={<SkeletonItems />}>
        <OurTeam teamsPromise={teams} />
      </Suspense>
    </main>
  );
}
