import type { MetadataRoute } from "next";

import { getAllBlogs } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";

export async function generateSitemaps() {
  const blogs =
    (
      await getAllBlogs({
        fields: ["slug"],
        limit: 10,
      })
    )?.data || [];

  return blogs.map((b) => ({
    id: b?.slug,
  }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const blogs =
    (
      await getAllBlogs({
        fields: ["slug", "updatedAt"],
        limit: 10,
      })
    )?.data || [];

  return blogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt || blog.publishedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
