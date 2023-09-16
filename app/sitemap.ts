import { locales } from "@/middleware";
import { LinkEnum } from "@/utils/enum/links";
import { MetadataRoute } from "next";

const URL = "https://powerpulse.vercel.app/";

const links = Object.values(LinkEnum);

export default function sitemap(): MetadataRoute.Sitemap {
  let sitemapData: MetadataRoute.Sitemap = [];

  locales.forEach((locale) =>
    links.forEach((route) => {
      sitemapData.push({
        url: `${URL}${locale}${route}`,
        lastModified: new Date(),
      });
    })
  );

  return sitemapData;
}
