import { Suspense } from "react";

import { getAllBlogs } from "@/lib/api";
import { CTABanner } from "./_components/cta-banner";
import { FixedSocials } from "./_components/fixed-socials";
import { Hero } from "./_components/hero";
import { OurValues } from "./_components/our-values";
import { UpcomingEvents } from "./_components/upcoming-events";
import { WhoWeAre } from "./_components/who-we-are";
import { FeaturedBlogs } from "./_components/featured-blogs";
import { SkeletonItems } from "@/components/common/skeleton-items";

export const revalidate = 0;

export default async function HomePage() {
  const blogsDataPromise = getAllBlogs({
    fields: ["bannerImage", "title", "slug", "excerpt"],
    featured: "featured",
    limit: 2,
  });

  return (
    <main>
      <FixedSocials />
      <Hero />
      <WhoWeAre />
      <OurValues />
      <UpcomingEvents />
      <Suspense fallback={<SkeletonItems />}>
        <FeaturedBlogs blogsDataPromise={blogsDataPromise} />
      </Suspense>
      <CTABanner />
    </main>
  );
}
