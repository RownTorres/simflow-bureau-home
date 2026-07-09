import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://simflowbureau.com";

  return [
    {
      url: `${base}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/book`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
