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
    date: "2027-07-19",
    title: "We are hiring for 2027 Fall PhDs",
    titleZh: "我们正在招收 2027 年秋季入学的博士生。",
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
