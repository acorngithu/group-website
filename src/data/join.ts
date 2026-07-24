// src/data/join.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Join page (recruitment).
//   • intro       — a sentence or two of welcome.
//   • positions   — one { } block per role. Set `open: false` to show a role
//                   as "not currently open" without deleting it.
//   • howToApply  — array of paragraphs describing the application process.
//   • contactEmail — where enquiries should go.
//
// GIVE A POSITION ITS OWN PAGE — add a `slug` plus a `body` (English) and
// `bodyZh` (Chinese), each an array of paragraphs. That builds a detail page at
// /join/<slug>, and the position card links to it with a "Learn more →" link.
//   • slug   — URL segment, lowercase-with-dashes, unique (e.g. "postdoc").
//   • body / bodyZh — the full description shown on that page. Each entry is a
//                paragraph (string); make an entry a string[] to render it as a
//                bulleted list. body and bodyZh must line up entry-for-entry.
//                Basic HTML is allowed (e.g. <strong>…</strong>).
// ─────────────────────────────────────────────────────────────────────────

export interface Position {
  title: string;
  titleZh: string;
  detail?: string; // e.g. "Fully funded · 3–4 years"
  detailZh?: string;
  description: string; // short blurb shown on the Join page card
  descriptionZh: string;
  open: boolean;
  slug?: string; // set this to give the position its own page at /join/<slug>
  body?: (string | string[])[]; // paragraph (string) or bullet list (string[])
  bodyZh?: (string | string[])[]; // must line up entry-for-entry with `body`
}

export const join = {
  intro:
    "We're always looking for curious, motivated people to join the group. " +
    "If our research resonates with you, get in touch — we'd love to hear from you.",
  introZh:
    "我们始终欢迎充满好奇心、有热情的伙伴加入课题组。如果我们的研究能引起你的共鸣，" +
    "欢迎与我们联系 —— 期待收到你的来信。",

  positions: [
    {
      title: "PhD Students",
      titleZh: "博士生",
      detail: "Fully funded positions",
      detailZh: "全额奖学金",
      description:
        "We welcome applications from strong candidates with a background in " +
        "physics, optics, electrical engineering, and computer science for Fall 2027 admission",
      descriptionZh:
        "我们欢迎具有物理、光学、电子工程、和计算机背景的优秀申请者申请2027秋季博士生",
      open: true,
    },
    {
      title: "Postdoctoral Researchers",
      titleZh: "博士后研究员",
      detail: "By arrangement",
      detailZh: "面议",
      description:
        "We are recruiting postdoctoral researchers across experiment, theory, and " +
        "machine learning. See the focus areas and how to apply.",
      descriptionZh:
        "我们正在招募博士后研究员，方向涵盖实验、理论与机器学习。点击查看具体方向与申请方式。",
      open: true,
      // ── Postdoc detail page at /join/postdoc — edit body / bodyZh below ──
      slug: "postdoc",
      body: [
        "We welcome researchers from a wide range of backgrounds—including photonics, physics, electrical engineering, integrated circuits, artificial intelligence, nanofabrication, and related fields—who share our curiosity about science and our passion for building new technologies. Our research spans fundamental physics, emerging photonic platforms, physical intelligence, and unconventional approaches to computing.",
        "We are currently recruiting postdoctoral researchers whose interests align with these directions. We are particularly interested in, but not limited to, candidates with backgrounds in:",
        [
          "<strong>Optical nanofabrication</strong> — integrated photonic device design and fabrication, photonic chip testing, silicon photonics, lithium niobate or thin-film photonic platforms, and related areas.",
          "<strong>Analog integrated circuit design</strong> — analog or mixed-signal circuit design, on-chip driving and readout, optoelectronic co-design, low-noise amplification, circuit modeling, and layout design.",
          "<strong>Structured light</strong> — spatial light modulation, wavefront shaping, multimode and orbital-angular-momentum beams, mode multiplexing, holography, and complex beam engineering.",
          "<strong>Theory and computation</strong> — nonlinear optics, non-Hermitian and topological optics, multimode and nonequilibrium dynamics.",
          "<strong>Machine learning for physical systems</strong> — deep learning, physics-informed and in-situ training, differentiable and physical-hardware modeling, and optimization for photonic and analog computing.",
        ],
        "<strong>How to apply:</strong> send a CV and a research statement directly to the PI via email.",
      ],
      bodyZh: [
        "我们欢迎来自不同学科背景的研究者加入，包括光子学、物理学、电子工程、集成电路、人工智能、微纳加工及相关领域。只要你对科学怀有好奇、对创造新技术充满热情，我们都期待与你相遇。我们的研究涵盖基础物理、新型光子学平台、物理智能，以及不同于传统数字计算的新型计算方式。",
        "目前，我们正在招募研究方向与上述领域相关的博士后研究人员。我们尤其欢迎，但不限于，具有以下背景的申请者：",
        [
          "<strong>光学纳米加工</strong> —— 集成光子器件设计与制造、光子芯片测试、硅基光子学、铌酸锂或薄膜光子平台及相关领域。",
          "<strong>模拟集成电路设计</strong> —— 模拟或混合信号电路设计、片上驱动与读出、光电协同设计、低噪声放大、电路建模与版图设计。",
          "<strong>结构光</strong> —— 空间光调制、波前整形、多模与轨道角动量光束、模式复用、全息，以及复杂光束的调控。",
          "<strong>理论与计算</strong>——非线性光学、非厄米与拓扑光学、多模动力学、非平衡动力学等相关方向。",
          "<strong>面向物理系统的机器学习</strong> —— 深度学习、物理信息与原位训练、可微分与物理硬件建模，以及面向光子与模拟计算的优化。",
        ],
        "<strong>申请方式：</strong>请将个人简历和研究陈述通过电子邮件直接发送给课题组负责人。",
      ],
    },
    {
      title: "Visiting Students & Undergraduate Projects",
      titleZh: "访问学生与本科生项目",
      description:
        "Students from all over the world are welcome to enquire about project and thesis opportunities in the group.",
      descriptionZh:
        "欢迎世界各地的学生咨询课题组的科研项目与毕业论文机会。",
      open: true,
    },
  ] as Position[],

  howToApply: [
    "Send a brief email introducing your background and research interests, together with the following materials:",
    [
      "Student applicants: CV and academic transcripts, preferably with class ranking. For more information, see the university's <a href=\"https://en.westlake.edu.cn/admissions/graduate/\" target=\"_blank\" rel=\"noopener\">graduate admissions page</a>.",
      "Postdocs and senior researchers: CV and a brief research statement.",
    ],
  ],
  howToApplyZh: [
    "请发送一封简短的邮件，介绍你的背景与研究兴趣，并附上以下材料：",
    [
      "学生申请者：个人简历与成绩单（最好注明专业排名）。更多信息可访问学校的<a href=\"https://www.westlake.edu.cn/admissions/graduate/?first=%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0&amp;second=%E6%99%AE%E5%8D%9A%E7%94%9F\" target=\"_blank\" rel=\"noopener\">官方招生网站</a>。",
      "博士后及资深研究人员：个人简历与一份简要的研究陈述。",
    ],
  ],

  contactEmail: "wufan@westlake.edu.cn",
};
