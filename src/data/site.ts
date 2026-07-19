// src/data/site.ts
// ─────────────────────────────────────────────────────────────────────────
// Site-wide identity. Edit these once; they feed the header, footer, and home.
// Each narrative field has an English value and a Chinese (`…Zh`) counterpart;
// the site renders both and the top-right toggle switches between them.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  // Shown in the header brand and page titles.
  name: "Physical Neural Networks Lab",
  nameZh: "物理神经网络实验室",

  // One line under the group name / used as the default meta description.
  tagline:
    "We pursue the problems that are the most fundamentally interesting or the most useful — in theory and in experiment.",
  taglineZh:
    "我们研究那些最具基础意义、或最具实用价值的问题 —— 理论与实验并重。",

  // The home-page hero body. Each entry is one paragraph (English + Chinese).
  intro: [
    {
      en: "We are drawn to problems that are fundamentally interesting, practically important, and, when possible, both. We explore them through theory, computation, and experiment.",
      zh: "我们着迷于那些兼具基础趣味与现实价值的问题 —— 并尽可能同时具备两者。我们通过理论、计算与实验来探索它们。",
    },
    {
      en: "Our work spans different forms of intelligence, the complex behavior of light, emerging photonic platforms, and new ways of computing. Across these directions, we seek simple principles beneath complex phenomena and new capabilities that become possible when physical limits are treated not merely as constraints, but as resources.",
      zh: "我们的工作横跨不同形式的智能、光的复杂行为、新兴光子 (photonic) 平台以及全新的计算范式。在这些方向中，我们探寻复杂现象背后的简单原理，并发掘当物理极限不再被视为约束、而被当作资源 (resource) 时所能开启的全新能力。",
    },
  ],

  // Shown as the home eyebrow and in the footer.
  institution: "Department · University",
  institutionZh: "院系 · 大学",

  // Google Scholar profile — the canonical full publication list.
  scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en",
};
