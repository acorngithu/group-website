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
}

export const news: NewsItem[] = [
  {
    date: "2027-07-19",
    title: "We are hiring for 2027 Fall PhDs",
    titleZh: "我们正在招收 2027 年秋季入学的博士生。",
    slug: "phd-hiring-2027",
    body: [
      "We are recruiting PhD students to join the group in Fall 2027. Placeholder — describe the projects on offer, funding, and the background we're looking for.",
      "Interested applicants can find details on the <a href=\"{base}/join\">Join page</a>, or email us directly.",
    ],
    bodyZh: [
      "我们正在招收将于 2027 年秋季入学的博士生。占位文字 —— 请在此介绍拟招募的课题方向、资助情况，以及我们期望的申请人背景。",
      "有意者可在<a href=\"{base}/join\">「加入我们」页面</a>了解详情，或直接来信联系。",
    ],
  },
  {
    date: "2026-07-19",
    title: "Our lab will be launched in January 2027",
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
