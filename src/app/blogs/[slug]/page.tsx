import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Tag } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

import { getAllBlogs, getBlog, getSiteSettings } from "@/lib/api";
import { Hero } from "@/components/common/hero";
import { capitalize } from "@/lib/utils";
import { InPageNav } from "@/components/common/in-page-nav";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { LexicalContentDisplay } from "@/components/lexical-editor/LexicalContentDisplay";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SkeletonItems } from "@/components/common/skeleton-items";
import { Suggestions } from "../_components/suggestions";

type Props = {
  params: Promise<{ slug: string }>;
};

const VERSION = Date.now();

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = (await getBlog(slug))?.data;

  if (!blog) notFound();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [
        {
          url: `${blog.bannerImage}?v=${VERSION}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
        ...previousImages,
      ],
      type: "article",
      publishedTime: format(blog.publishedAt!, "MMMM d, yyyy"),
      authors: "Admin, Zita-Onyeka Foundation",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`${blog.bannerImage}?v=${VERSION}`],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const slug = (await params).slug;
  const blog = (await getBlog(slug))?.data;

  const blogsDataPromise = getAllBlogs({
    featured: "all",
    fields: ["bannerImage", "title", "slug", "excerpt", "publishedAt"],
    limit: 10,
  });

  // const siteSettings = (await getSiteSettings())?.data;

  if (!blog) notFound();

  const category = capitalize(blog.tags[0]);
  const commentCount = blog?.comments?.length || 0;

  return (
    <main className="min-h-[calc(100vh-13rem)]">
      <Hero heading={category} bgImgUrl="/assets/img/posts-bg.jpg" />
      <InPageNav
        className="max-w-6xl mx-auto px-4 xl:px-0 justify-start"
        breadcrumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: category, href: `/category/${category}` },
        ]}
      />
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 py-20 pt-10 lg:pt-20 px-4 xl:px-0">
        <div className="md:col-span-7 text-sm space-y-8 flex flex-col gap-8">
          <article className="grid gap-6 max-w-full text-black">
            <div className="w-full h-auto rounded overflow-hidden bg-muted">
              <Image
                src={blog.bannerImage}
                alt={blog.title}
                className="w-full h-full object-cover object-center"
                width={1200}
                height={675}
                priority={true}
              />
            </div>
            <h1 className="text-2xl font-extrabold">{blog.title}</h1>
            {/* Metadata */}
            <div className="mb-4 w-full flex flex-wrap gap-8">
              <div className="hidden sm:block space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Posted by
                </div>
                <div className="font-extrabold">Admin</div>
              </div>
              <Separator orientation="vertical" className="hidden sm:block" />
              <div className="space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Categories
                </div>
                <div className="space-x-2">
                  {blog.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/category/${category}`}
                      className="font-extrabold capitalize hover:underline"
                    >
                      {tag}.
                    </Link>
                  ))}
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Published
                </div>
                <div className="font-extrabold">
                  {format(blog.publishedAt!, "MMMM d, yyyy")}
                </div>
              </div>
              <Separator orientation="vertical" className="hidden sm:block" />

              <div className="hidden sm:block pl-6 space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Comments
                </div>
                <div className="font-extrabold">{commentCount} Comments</div>
              </div>
            </div>
            <LexicalContentDisplay content={blog.content} />
            <div className="my-8">
              <Separator className="mb-6" />
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-sm capitalize"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <Suspense fallback={<SkeletonItems />}>
            <Suggestions
              blogsDataPromise={blogsDataPromise}
              currentBlogSlug={blog.slug}
            />
          </Suspense>
        </div>

        <div className="md:col-span-3 relative">
          <div className="sticky top-10 gap-10 flex flex-col-reverse md:flex-col">
            <QuickCTALinks />
            <SocialShareButtons title={blog.title} />
          </div>
        </div>
      </section>
    </main>
  );
}
