import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/denied"],
    },
    sitemap: "https://powerpulse.vercel.app/sitemap.xml",
  };
}
