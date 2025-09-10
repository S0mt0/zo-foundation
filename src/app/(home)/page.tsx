import { Suspense } from "react";

import { getAllBlogs, getAllEvents } from "@/lib/api";
import { CTABanner } from "./_components/cta-banner";
import { FixedSocials } from "./_components/fixed-socials";
import { Hero } from "./_components/hero";
import { OurValues } from "./_components/our-values";
import { WhoWeAre } from "./_components/who-we-are";
import { FeaturedBlogs } from "./_components/featured-blogs";
import { SkeletonItems } from "@/components/common/skeleton-items";
import { FeaturedEvents } from "./_components/featured-events";

export const revalidate = 0;

export default async function HomePage() {
  const blogsDataPromise = getAllBlogs({
    fields: ["bannerImage", "title", "slug", "excerpt", "publishedAt"],
    featured: "featured",
  });

  const eventsDataPromise = getAllEvents({
    fields: [
      "name",
      "excerpt",
      "slug",
      "status",
      "date",
      "startTime",
      "endTime",
      "location",
      "bannerImage",
    ],
    featured: "featured",
  });

  return (
    <main>
      {/* <FixedSocials /> */}
      <Hero />
      <WhoWeAre />
      <OurValues />
      <Suspense fallback={<SkeletonItems />}>
        <FeaturedBlogs blogsDataPromise={blogsDataPromise} />
      </Suspense>
      <Suspense>
        <FeaturedEvents eventsDataPromise={eventsDataPromise} />
      </Suspense>
      <CTABanner />
    </main>
  );
}
