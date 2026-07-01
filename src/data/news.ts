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
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-06-15",
    title: "New paper accepted in the Journal of the Field.",
    url: "https://doi.org/10.0000/placeholder",
  },
  {
    date: "2026-05-20",
    title: "Amina Hassan awarded a postdoctoral fellowship.",
  },
  {
    date: "2026-04-10",
    title: "The group welcomes two new PhD students.",
  },
  {
    date: "2026-02-28",
    title: "Invited talk at the Annual Conference.",
  },

  // ── add more news below ──
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format an ISO date string without timezone surprises → "Jul 1, 2026".
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
