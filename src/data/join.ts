// src/data/join.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Join page (recruitment).
//   • intro       — a sentence or two of welcome.
//   • positions   — one { } block per role. Set `open: false` to show a role
//                   as "not currently open" without deleting it.
//   • howToApply  — array of paragraphs describing the application process.
//   • contactEmail — where enquiries should go.
// ─────────────────────────────────────────────────────────────────────────

export interface Position {
  title: string;
  detail?: string; // e.g. "Fully funded · 3–4 years"
  description: string;
  open: boolean;
}

export const join = {
  intro:
    "We're always looking for curious, motivated people to join the group. " +
    "If our research resonates with you, get in touch — we'd love to hear from you.",

  positions: [
    {
      title: "PhD Students",
      detail: "Fully funded positions",
      description:
        "We welcome applications from strong candidates with a background in " +
        "[relevant field]. Placeholder — describe funding, start dates, and the " +
        "kind of student who thrives here.",
      open: true,
    },
    {
      title: "Postdoctoral Researchers",
      detail: "By arrangement",
      description:
        "We support fellowship applications and occasionally have funded " +
        "openings. Placeholder — mention how to propose a project or fellowship.",
      open: true,
    },
    {
      title: "Master's & Undergraduate Projects",
      description:
        "Students at [your university] are welcome to enquire about project " +
        "and thesis opportunities in the group.",
      open: true,
    },
  ] as Position[],

  howToApply: [
    "Placeholder: send a short email describing your background and interests, " +
      "along with a CV and (for PhD/postdoc) a brief statement of research " +
      "interests.",
    "Mention which position or research pillar you're interested in, so we can " +
      "route your enquiry to the right person.",
  ],

  contactEmail: "recruit@university.edu",
};
