import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { getBlog } from "@/lib/api";
import { Blog } from "./_components/main";
import { Hero } from "@/components/common/hero";
import { BASE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ blogId: string }>;
};

const VERSION = Date.now();

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blogId = (await params).blogId;
  const blog = await getBlog(blogId);

  if (!blog) notFound();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.desc,
    openGraph: {
      title: blog.title,
      description: blog.desc,
      images: [
        {
          url:
            `${blog.bannerUrl}?v=${VERSION}` ||
            `${BASE_URL}/assets/img/blank-book.jpg?v=${VERSION}`,
          width: 1200,
          height: 630,
          alt: "Zita-Onyeka Foundation (ZOF)",
          type: "image/png",
        },
        ...previousImages,
      ],
      type: "article",
      publishedTime: blog.createdAt,
      authors: "Zita-Onyeka Foundation (ZOF)",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.desc,
      images: [
        `${blog.bannerUrl}?v=${VERSION}` ||
          `${BASE_URL}/assets/img/blank-book.jpg?v=${VERSION}`,
      ],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const blogId = (await params).blogId;
  const blog = await getBlog(blogId);

  if (!blog) notFound();

  return (
    <div>
      <Hero
        heading="Blog"
        bgImgUrl={blog.bannerUrl || "/assets/img/blank-book.jpg"}
      />
      <Blog {...blog} />
    </div>
  );
}
