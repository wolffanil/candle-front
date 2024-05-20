import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/register",
        "/login",
        "/order",
        "/news",
        "/rules",
        "/constructorbeta",
        "/document",
      ],
      disallow: [],
    },
    sitemap: baseUrl + "/sitemap.xml",
  };
}
