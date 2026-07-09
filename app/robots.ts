import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://simflowbureau.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/book/thank-you",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
