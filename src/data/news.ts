// src/data/news.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain group News (shown on the home page, newest first).
//   • date  — ISO "YYYY-MM-DD" (used for sorting; displayed as "Jul 1, 2026").
//   • title — the headline.
//
// GIVE AN ITEM ITS OWN PAGE — add a `slug` plus a `body` (English) and
// `bodyZh` (Chinese), each an array of paragraphs. That builds a page at
// /news/<slug>, and the home strip links the headline to it automatically.
//   • slug   — URL segment, lowercase-with-dashes, unique (e.g. "phd-hiring-2027").
//   • body / bodyZh — paragraphs of the full story, one string each. Inline HTML
//                is allowed; for an internal link write <a href="{base}/join">…</a>
//                ({base} is replaced with the site's base path when rendered).
//
// OR link OUT instead (no page of its own) — set `url`:
//   • external: a full "https://…" URL (paper DOI, award page, press) → new tab.
//   • internal: a site-relative path ("/join", "/pi", "/research/<slug>") → same tab.
//
// Precedence: slug (own page) → url (link out) → plain text (no link).
// The home page shows the most recent few, newest first.
// ─────────────────────────────────────────────────────────────────────────

export interface NewsItem {
  date: string; // "YYYY-MM-DD"
  title: string;
  titleZh: string;
  slug?: string; // set this to give the item its own page at /news/<slug>
  body?: string[]; // full-story paragraphs (English), shown on that page
  bodyZh?: string[]; // full-story paragraphs (Chinese)
  url?: string; // instead of a slug: link the headline out to an existing page
  // A flyer / figure shown on the item's own page (needs a slug). Put the file
  // in public/news/ and reference it here as "/news/<file>". Any shape works.
  image?: string; // e.g. "/news/phd-flyer.png"
  imageAlt?: string; // accessible description (falls back to the title)
  caption?: string; // optional caption under the image (English)
  captionZh?: string; // optional caption (Chinese)
}

export const news: NewsItem[] = [
  {
    date: "2026-07-21",
    title: "2027 Fall PhD applications are open.",
    titleZh: "2027 年秋季博士生申请现已开启。",
    slug: "phd-hiring-2027",
    image: "/news/Hiring_flyer_2027_downscaled.webp",
    imageAlt: "2027 hiring flyer 中文",
    caption: "Recruitment flyer",
    captionZh: "招生海报",
    body: [
      "We are recruiting PhD students to join the group in Fall 2027.",
      "Interested applicants can find details on the <a href=\"{base}/join\">Join page</a>, or email us directly.",
    ],
    bodyZh: [
      "我们正在招收将于 2027 年秋季入学的博士生。",
      "有意者可在<a href=\"{base}/join\">「加入我们」页面</a>了解详情，或直接来信联系。",
    ],
  },
  {
    date: "2026-07-19",
    title: "Our lab will be officially launched in January 2027.",
    titleZh: "实验室将于 2027 年 1 月正式成立。",
  },

  // ── add more news below ──
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format an ISO date string without timezone surprises → "Jul 1, 2026".
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// Chinese form → "2026年7月1日".
export function formatDateZh(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}
