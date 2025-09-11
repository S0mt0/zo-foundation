import type { MetadataRoute } from "next";

import { getAllEvents } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";

export async function generateSitemaps() {
  const events =
    (
      await getAllEvents({
        fields: ["slug"],
        limit: 10,
      })
    )?.data || [];

  return events.map((b) => ({
    id: b?.slug,
  }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const events =
    (
      await getAllEvents({
        fields: ["slug", "updatedAt"],
        limit: 10,
      })
    )?.data || [];

  return events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: event.updatedAt || event.date,
    changeFrequency: "daily",
    priority: 0.7,
  }));
}
