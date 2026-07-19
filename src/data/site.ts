// src/data/site.ts
// ─────────────────────────────────────────────────────────────────────────
// Site-wide identity. Edit these once; they feed the header, footer, and home.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  // Shown in the header brand and page titles.
  name: "Physical Neural Networks Lab",

  // One line under the group name / used as the default meta description.
  tagline:
    "We pursue the problems that are the most fundamentally interesting or the most useful — in theory and in experiment.",

  // The home-page hero body. Each string is its own paragraph.
  intro: [
    "We are drawn to problems that are fundamentally interesting, practically important, and, when possible, both. We explore them through theory, computation, and experiment.",
    "Our work spans different forms of intelligence, the complex behavior of light, emerging photonic platforms, and new ways of computing. Across these directions, we seek simple principles beneath complex phenomena and new capabilities that become possible when physical limits are treated not merely as constraints, but as resources.",
  ],

  // Shown as the home eyebrow and in the footer.
  institution: "Department · University",

  // Google Scholar profile — the canonical full publication list.
  scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en",
};
