// src/data/site.ts
// ─────────────────────────────────────────────────────────────────────────
// Site-wide identity. Edit these once; they feed the header, footer, and home.
// Each narrative field has an English value and a Chinese (`…Zh`) counterpart;
// the site renders both and the top-right toggle switches between them.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  // Shown in the header brand and page titles.
  name: "Wu Lab",
  nameZh: "吴凡实验室",

  // Research-areas strapline shown under the name on the home hero.
  subname: "Physical Neural Networks · Photonics · Intelligence",
  subnameZh: "物理神经网络 · 光子学 · 人工智能",

  // One line under the group name / used as the default meta description.
  tagline:
    "We pursue the problems that are the most fundamentally interesting or the most useful — in theory and in experiment.",
  taglineZh:
    "我们探索最引人入胜的基础问题，也追求最具实用价值的应用，理论与实验并重。",

  // The home-page hero body. Each entry is one paragraph (English + Chinese).
  intro: [
    {
      en: "We are drawn to problems that are fundamentally interesting, practically important, and, when possible, both. We explore them through theory, computation, and experiment.",
      zh: "我们关注那些在基础科学上引人入胜、或者在现实世界中富有价值的问题；而最令人振奋的，往往是二者兼具。我们通过理论、计算与实验，探索这些问题背后的规律与可能。",
    },
    {
      en: "Our work spans new ways of computing, different forms of intelligence, the complex behavior of light, and emerging photonic platforms. Across these areas, we seek simple principles underlying complex phenomena and new capabilities that emerge when physical limits are treated not merely as constraints, but as resources.",
      zh: "我们的研究涵盖全新的计算范式、智能的不同形式、光的复杂行为，以及新型光子平台。我们力求从纷繁的现象中提炼出简单的原理，也在探寻这样一种可能：当物理极限不再被当作束缚、而被善用为资源时，会有怎样的新能力就此浮现。",
    },
  ],

  // Shown as the home eyebrow and in the footer.
  institution: "Department · University",
  institutionZh: "院系 · 大学",

  // Google Scholar profile — the canonical full publication list.
  scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en",
};
