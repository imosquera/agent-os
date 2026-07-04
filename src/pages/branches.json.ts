import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// A branch slug like "104-ads-audit-ad-copy-landing-url" becomes a readable
// "104 Ads Audit Ad Copy Landing Url" so a status file only needs `branch`.
const prettify = (slug: string) =>
  slug
    .replace(/^\d+[-_]?/, (m) => m.replace(/[-_]/, " "))
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

// Live feed for the Active Branches panel. In `astro dev` this runs per-request,
// so getCollection() re-reads the branches/ folder and the panel's poll picks up
// new status files without a full-page reload.
export const GET: APIRoute = async () => {
  const branches = await getCollection("branches");
  const data = branches
    // Skip _-prefixed reference files (e.g. _TEMPLATE). The negative glob covers
    // this at build time; this guard also covers Astro's dev watcher, which can
    // re-add such files on incremental updates.
    .filter((b) => !b.id.startsWith("_"))
    .map((b) => ({
      id: b.id,
      branch: b.data.branch,
      title: b.data.title ?? prettify(b.data.branch),
      spec: b.data.spec ?? null,
      issue: b.data.issue ?? null,
      session: b.data.session ?? null,
      updated: b.data.updated?.toISOString() ?? null,
      phases: b.data.phases,
      note: b.data.note?.trim() || null,
    }))
    .sort((a, b) => (b.updated ?? "").localeCompare(a.updated ?? ""));

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
};
