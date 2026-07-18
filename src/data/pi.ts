// src/data/pi.ts
// ─────────────────────────────────────────────────────────────────────────
// Content for the PI's standout page (/pi). Edit freely.
//   • photo   → same convention as people (a file in /public/people/).
//   • links   → omit any you don't have (empty string = hidden).
//   • bio     → array of paragraphs.
//   • awards  → one { } per award; shown newest-first as you order them.
//   • selected → paper titles (or substrings) to feature on this page.
//                Leave the array empty to auto-show the most recent few.
// ─────────────────────────────────────────────────────────────────────────

export interface Award {
  year: number;
  title: string;
  org?: string;
}

export const pi = {
  name: "Fan O. Wu",
  nameNative: "吴凡",
  title: "Principal Investigator",
  photo: "/people/fan-wu.png",

  links: {
    email: "wufan@westlake.edu.cn",
    scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en", // replace with your Scholar profile
    cv: "", // put the PDF in /public (e.g. public/cv.pdf)
    website: "", // optional personal site; leave "" to hide
  },

  bio: [
    "Placeholder biography. Introduce the PI: current position, the through-line " +
      "of the research, and what the group is known for.",
    "A second paragraph — background and training, notable directions, and the " +
      "vision guiding the group's work.",
  ],

  awards: [
    { year: 2024, title: "Rising Stars of Light", org: "Light: Science & Applications, Springer Nature" },
    { year: 2024, title: "Eric and Wendy Schmidt AI in Science Fellowship", org: "Schmidt Sciences" },
  ] as Award[],

  selected: [] as string[],
};
