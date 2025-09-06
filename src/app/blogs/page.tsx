import { Metadata } from "next";

import { getAllBlogs } from "@/lib/api";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";

export const metadata: Metadata = {
  title: {
    default: "Blogs & Updates",
    template: "Blogs & Updates | %s",
  },
  description:
    "Stay informed with the latest news, success stories, and updates from the Zita-Onyeka Foundation. Learn how we’re making a difference in the lives of women, youth, and communities.",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const response = await getAllBlogs({
    featured: "all",
  });

  if (!response?.data || !response.data.length)
    return (
      <p className="text-muted-foreground text-sm p-2 rounded-full bg-gray-100 text-center m-4">
        No blog posts available yet.
      </p>
    );

  return (
    <main className="py-20 px-6 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-16">
        <div className="md:col-span-7 @container">
          <div className="grid @lg:grid-cols-2 gap-12"></div>
        </div>

        <div className="md:col-span-3 relative">
          <div className="md:sticky top-10 gap-12 flex flex-col-reverse md:flex-col">
            <QuickCTALinks />
            <SocialShareButtons title="Stay informed with the latest news, success stories, and updates from the Zita-Onyeka Foundation. Learn how we’re making a difference in the lives of women, youth, and communities." />
          </div>
        </div>
      </div>
    </main>
  );
}
