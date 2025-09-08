import { Metadata } from "next";

import { getAllBlogs } from "@/lib/api";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { Hero } from "@/components/common/hero";
import { InPageNav } from "@/components/common/in-page-nav";
import { SideBarWithSearchInput } from "@/components/common/sideBarWithSearchInput";
import { Pagination } from "@/components/common/pagination";
import { BlogSnippet } from "./_components/blog-snippet";

export const metadata: Metadata = {
  title: {
    default: "Blogs & Updates",
    template: "Blogs & Updates | %s",
  },
  description:
    "Stay informed with the latest news, success stories, and updates from the Zita-Onyeka Foundation. Learn how we’re making a difference in the lives of women, youth, and communities.",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage(props: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 2;
  const search = searchParams.search || undefined;

  const response = await getAllBlogs({
    featured: "all",
    fields: [
      "tags",
      "title",
      "slug",
      "excerpt",
      "bannerImage",
      "publishedAt",
      "comments",
    ],
    search,
    limit,
    page,
  });

  return (
    <main className="min-h-[calc(100vh-13rem)]">
      <Hero
        heading="Blogs and recent news"
        bgImgUrl="/assets/img/posts-bg.jpg"
      />
      <InPageNav
        className="max-w-6xl mx-auto px-4 xl:px-0 justify-start"
        breadcrumbs={[{ label: "Blogs" }]}
      />
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16 py-20 px-4 xl:px-0">
        {/* Main content */}
        <div className="md:col-span-7 text-sm space-y-8">
          <div className="grid gap-10">
            {response &&
              response.data.map((snippet) => (
                <BlogSnippet {...(snippet as any)} key={snippet.slug} />
              ))}
          </div>
          {response && (
            <Pagination
              pathname="/blogs"
              searchParams={searchParams}
              currentPage={response.pagination.page}
              totalPages={response.pagination.totalPages}
              showingStart={
                (response.pagination.page - 1) * response.pagination.limit + 1
              }
              showingEnd={Math.min(
                response.pagination.page * response.pagination.limit,
                response.pagination.total
              )}
              totalItems={response.pagination.total}
              itemName="blog posts"
              limit={response.pagination.limit}
            />
          )}{" "}
        </div>

        <div className="md:col-span-3 relative">
          <SideBarWithSearchInput
            search={search}
            placeholder="Search for blogs here..."
            shareButtonTitle="Stay informed with the latest news, success stories, and updates from the Zita-Onyeka Foundation. Learn how we're making a difference in the lives of women, youth, and communities."
          />
        </div>
      </section>
    </main>
  );
}
