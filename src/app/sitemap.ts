import type { MetadataRoute } from "next";
import { supabaseAdmin } from "@/lib/supabase";

const SITE_URL = "https://othersstudio.tech";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/thoughts`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/updates`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lab/readiness`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  let articles: MetadataRoute.Sitemap = [];
  try {
    const { data } = await supabaseAdmin
      .from("website_articles")
      .select("id, published_at, updated_at")
      .eq("status", "published");
    articles = (data || []).map((a) => ({
      url: `${SITE_URL}/thoughts/${a.id}`,
      lastModified: new Date(a.updated_at || a.published_at || now),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // 数据库不可达时只输出静态路由，不让 sitemap 整体 500
  }

  return [...staticRoutes, ...articles];
}
