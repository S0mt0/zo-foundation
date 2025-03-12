import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { BlogCard } from "./blog-card";

export const Blog = (blog: TBlog) => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16">
        <div className="md:col-span-6">
          <BlogCard {...blog} />
        </div>

        <div className="md:col-span-4 relative">
          <div className="md:sticky top-10 gap-12 flex flex-col-reverse md:flex-col">
            <QuickCTALinks />
            <SocialShareButtons title={`Read "${blog.title}"`} />
          </div>
        </div>
      </div>
    </section>
  );
};
