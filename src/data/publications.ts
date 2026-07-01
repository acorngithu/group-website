// src/data/publications.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Publications page.
//   • Add an entry   → copy a { } block, set its `type` and fields.
//   • type           → "journal" | "conference" | "preprint" | "talk".
//                      The page groups entries into sections by this field.
//   • url            → optional link (DOI, arXiv, slides). Omit if none.
//   • note           → optional extra (e.g. "Oral", "Best Paper", "Keynote").
//   • topics         → optional list of research pillar slugs (see research.ts).
//                      A paper tagged with a pillar's slug shows up under
//                      "Related publications" on that pillar's subpage.
// Within each section, entries are sorted newest-year-first automatically.
// To reorder or rename sections, edit `pubSections` at the bottom.
// ─────────────────────────────────────────────────────────────────────────

export type PubType = "journal" | "conference" | "preprint" | "talk";

export interface Publication {
  type: PubType;
  authors: string;
  title: string;
  venue: string; // journal name, conference, or event
  year: number;
  url?: string;
  note?: string;
  topics?: string[]; // research pillar slugs this paper relates to
}

export const publications: Publication[] = [
  {
    type: "journal",
    authors: "A. Author, B. Coauthor, C. Researcher",
    title: "A representative journal article title goes here",
    venue: "Journal of the Field",
    year: 2025,
    url: "https://doi.org/10.0000/placeholder",
    topics: ["first-pillar"],
  },
  {
    type: "conference",
    authors: "A. Author, D. Student",
    title: "A representative conference paper title goes here",
    venue: "Proceedings of the Annual Conference (CONF)",
    year: 2024,
    note: "Oral presentation",
    topics: ["second-pillar"],
  },
  {
    type: "preprint",
    authors: "A. Author, E. Collaborator",
    title: "A representative preprint title goes here",
    venue: "arXiv:2500.00000",
    year: 2025,
    url: "https://arxiv.org/abs/2500.00000",
    topics: ["first-pillar", "third-pillar"],
  },
  {
    type: "talk",
    authors: "A. Author",
    title: "An invited talk title goes here",
    venue: "Institution / Seminar Series",
    year: 2025,
    note: "Invited",
    topics: ["third-pillar"],
  },

  // ── add more publications below ──
];

// Section order + labels for the page. Reorder or rename freely; a section
// with no matching entries is hidden automatically.
export const pubSections: { type: PubType; label: string }[] = [
  { type: "journal", label: "Journal Articles" },
  { type: "conference", label: "Conference Papers" },
  { type: "preprint", label: "Preprints" },
  { type: "talk", label: "Invited Talks" },
];
