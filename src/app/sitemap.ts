import { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/who-we-are`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 2,
    },
    {
      url: `${BASE_URL}/events`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 3,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 4,
    },
    {
      url: `${BASE_URL}/support-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 5,
    },
    {
      url: `${BASE_URL}/donate`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 7,
    },
  ];
}
