// src/data/news.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain group News (shown on the home page, newest first).
//   • date  — ISO "YYYY-MM-DD" (used for sorting; displayed as "Jul 1, 2026").
//   • title — the headline.
//   • url   — optional link (paper, award page, announcement). Omit if none.
// The home page shows the most recent few. (A dedicated /news archive page can
// be added later; the home strip would then link to it.)
// ─────────────────────────────────────────────────────────────────────────

export interface NewsItem {
  date: string; // "YYYY-MM-DD"
  title: string;
  titleZh: string;
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-06-15",
    title: "New paper accepted in the Journal of the Field.",
    titleZh: "一篇新论文被《领域期刊》接收。",
    url: "https://doi.org/10.0000/placeholder",
  },
  {
    date: "2026-05-20",
    title: "Amina Hassan awarded a postdoctoral fellowship.",
    titleZh: "Amina Hassan 荣获博士后奖学金。",
  },
  {
    date: "2026-04-10",
    title: "The group welcomes two new PhD students.",
    titleZh: "课题组迎来两名新博士生。",
  },
  {
    date: "2026-02-28",
    title: "Invited talk at the Annual Conference.",
    titleZh: "在年度学术会议上作特邀报告。",
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
