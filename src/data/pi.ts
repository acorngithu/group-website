// src/data/pi.ts
// ─────────────────────────────────────────────────────────────────────────
// Content for the PI's standout page (/pi). Edit freely.
//   • photo   → same convention as people (a file in /public/people/).
//   • links   → omit any you don't have (empty string = hidden).
//   • bio     → array of paragraphs.
//   • awards  → one { } per award; shown newest-first as you order them.
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
  titleZh: "课题组负责人 (PI)",
  photo: "/people/fan-wu.png",

  links: {
    email: "wufan@westlake.edu.cn",
    scholar: "https://scholar.google.com/citations?user=Fuwe_nEAAAAJ&hl=en", // replace with your Scholar profile
    cv: "", // put the PDF in /public (e.g. public/cv.pdf)
    website: "", // optional personal site; leave "" to hide
  },

  bio: [
    "Fan Wu received his Ph.D. in Optics from the University of Central Florida in 2020, where he worked under the supervision of Prof. Demetrios Christodoulides. Since 2022, he has been conducting postdoctoral research at Cornell University. In 2027, he will join the School of Engineering at Westlake University as an Assistant Professor, where he will lead a research group working at the intersection of photonics, physical intelligence, and unconventional computing.",
    "Outside of research, he enjoys video games, exercise, and coding."
  ],
  bioZh: [
    "吴凡于2020年获得美国中佛罗里达大学光学博士学位，师从 Demetrios Christodoulides 教授。自2022年起，他在康奈尔大学从事博士后研究。2027年，他将加入西湖大学工学院任助理教授，并组建研究团队，开展光子学、物理智能与新型计算交叉方向的研究。",
    "科研之外，他喜欢电子游戏、运动和编程。",
  ],

  awards: [
    { year: 2024, title: "Rising Stars of Light", org: "Light: Science & Applications, Springer Nature" },
    { year: 2024, title: "Eric and Wendy Schmidt AI in Science Fellowship", org: "Schmidt Sciences" },
  ] as Award[],
};
