// src/data/research.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Research page. Each { } block is one "pillar" —
// a big research theme shown as a large picture card on /research, linking to
// its own subpage at /research/<slug>.
//
//   • slug        — URL segment for the subpage (lowercase, dashes, unique).
//   • title       — the pillar name.
//   • tagline     — one line shown on the card and under the subpage title.
//   • image       — the big attracting picture: a path under /public, e.g.
//                   "/research/materials.jpg". Files go in /public/research/.
//                   If missing, a styled numbered placeholder shows instead.
//   • alt         — optional accessible description of the image.
//   • description — array of paragraphs shown on the subpage (add as many as
//                   you like; each string is its own paragraph).
//
// Related publications appear on a pillar's subpage automatically: tag a paper
// in publications.ts with  topics: ["<this-slug>"].
// ─────────────────────────────────────────────────────────────────────────

export interface Pillar {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  alt?: string;
  description: string[];
}

export const research: Pillar[] = [
  {
    slug: "first-pillar",
    title: "First research pillar",
    tagline: "A one-line hook that makes someone want to click in.",
    image: "/research/first-pillar.jpg",
    alt: "Representative image for the first research pillar.",
    description: [
      "Placeholder overview paragraph. Describe the big question this pillar " +
        "tackles, why it matters, and the approach the group takes.",
      "A second paragraph with more detail — methods, collaborations, or the " +
        "kinds of results this line of work produces. Add or remove paragraphs " +
        "freely.",
    ],
  },
  {
    slug: "second-pillar",
    title: "Second research pillar",
    tagline: "Another compelling one-liner for the second big theme.",
    image: "/research/second-pillar.jpg",
    alt: "Representative image for the second research pillar.",
    description: [
      "Placeholder overview for the second pillar. Swap in the real story of " +
        "this theme and the questions driving it.",
      "More context here — what makes this direction distinctive.",
    ],
  },
  {
    slug: "third-pillar",
    title: "Third research pillar",
    tagline: "A third one-liner — keep each pillar's hook short and vivid.",
    image: "/research/third-pillar.jpg",
    alt: "Representative image for the third research pillar.",
    description: [
      "Placeholder overview for the third pillar.",
      "Add the details that matter for this theme.",
    ],
  },

  // ── add more pillars below ──
];
