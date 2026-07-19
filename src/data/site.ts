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
    "我们探索最引人入胜的基础问题，也追求最具实用价值的应用，理论与实验并重。",

  // The home-page hero body. Each entry is one paragraph (English + Chinese).
  intro: [
    {
      en: "We are drawn to problems that are fundamentally interesting, practically important, and, when possible, both. We explore them through theory, computation, and experiment.",
      zh: "有些问题饶有基础意趣，有些问题关乎现实应用，而最令我们心动的，往往二者兼备。我们借助理论、计算与实验来探究它们。",
    },
    {
      en: "Our work spans different forms of intelligence, the complex behavior of light, emerging photonic platforms, and new ways of computing. Across these directions, we seek simple principles beneath complex phenomena and new capabilities that become possible when physical limits are treated not merely as constraints, but as resources.",
      zh: "我们的研究横跨多种形式的智能、光的复杂行为、新兴光子平台与全新的计算范式。在这些方向上，我们力求从纷繁的现象中提炼出简单的原理，也在探寻这样一种可能：当物理极限不再被当作束缚、而被善用为资源时，会有怎样的新能力就此浮现。",
    },
  ],

  // Shown as the home eyebrow and in the footer.
  institution: "Department · University",
  institutionZh: "院系 · 大学",

  // Google Scholar profile — the canonical full publication list.
  scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en",
};
