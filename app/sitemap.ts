import type { MetadataRoute } from "next";
import { info } from "@/lib/info";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/speisekarte", "/weinkarte", "/hotel", "/ueber-uns", "/reservation", "/kontakt"];
  return routes.map((route) => ({
    url: `${info.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/speisekarte" || route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
