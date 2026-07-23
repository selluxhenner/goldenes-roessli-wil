import type { MetadataRoute } from "next";
import { info } from "@/lib/info";

// AI-Search-Agents ausdrücklich zugelassen (Audit-Vorgabe: die alte Site
// blockierte sie). Training-Bots bleiben Sache des Clients — Standard: offen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${info.url}/sitemap.xml`,
  };
}
