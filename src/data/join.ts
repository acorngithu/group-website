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
        "physics, optics, electrical engineering, and computer science for the admission of 2027 Fall",
      descriptionZh:
        "我们欢迎具有物理，光学，电子工程，和计算机背景的优秀申请者申请2027秋季PhD",
      open: true,
    },
    {
      title: "Postdoctoral Researchers",
      titleZh: "博士后研究员",
      detail: "By arrangement",
      detailZh: "面议",
      description:
        "We are recruiting postdoctoral researchers, with particular interest in " +
        "optical nanofabrication and analog integrated-circuit design.",
      descriptionZh:
        "我们正在招募博士后研究员，尤其欢迎光学纳米加工与模拟集成电路设计方向的申请者。",
      open: true,
      // ── Postdoc detail page at /join/postdoc — edit body / bodyZh below ──
      slug: "postdoc",
      body: [
        "The Wu Lab works at the intersection of photonics, artificial intelligence, statistical physics, and unconventional computing — building programmable photonic chips, optical thermodynamic computing, physical neural networks, and next-generation computing hardware for AI.",
        "We welcome researchers from photonics, physics, electrical engineering, integrated circuits, AI, nanofabrication, and related fields to help build a new generation of machines that compute by harnessing the natural dynamics of physical systems.",
        "We are currently recruiting postdoctoral researchers, with particular interest in candidates whose background is in:",
        [
          "<strong>Optical nanofabrication</strong> — integrated photonic device design and fabrication, photonic chip testing, silicon photonics, lithium niobate or thin-film photonic platforms, and related areas.",
          "<strong>Analog integrated circuit design</strong> — analog or mixed-signal circuit design, on-chip driving and readout, optoelectronic co-design, low-noise amplification, circuit modeling, and layout design.",
        ],
        "<strong>How to apply:</strong> send a CV and a research statement to the email below.",
      ],
      bodyZh: [
        "吴凡实验室工作于光子学、人工智能、统计物理与非常规计算的交叉领域，致力于可编程光子芯片、光学热力学计算、物理神经网络，以及面向人工智能的新一代计算硬件。",
        "我们欢迎来自光子学、物理、电子工程、集成电路、人工智能、纳米加工及相关领域的研究者加入，一同打造新一代机器 —— 它们通过驾驭物理系统本身的自然动力学来完成计算。",
        "我们目前正在招募博士后研究员，尤其欢迎具有以下方向背景的申请者：",
        [
          "<strong>光学纳米加工</strong> —— 集成光子器件设计与制造、光子芯片测试、硅基光子学、铌酸锂或薄膜光子平台及相关领域。",
          "<strong>模拟集成电路设计</strong> —— 模拟或混合信号电路设计、片上驱动与读出、光电协同设计、低噪声放大、电路建模与版图设计。",
        ],
        "<strong>申请方式：</strong>请将个人简历与研究陈述发送至下方邮箱。",
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
    "Placeholder: send a short email describing your background and interests, " +
      "along with a CV and (for PhD/postdoc) a brief statement of research " +
      "interests.",
    "Mention which position or research pillar you're interested in, so we can " +
      "route your enquiry to the right person.",
  ],
  howToApplyZh: [
    "占位文字：请发送一封简短的邮件，介绍你的背景与研究兴趣，并附上简历；" +
      "（博士 / 博士后申请者）请另附一份简要的研究兴趣陈述。",
    "请注明你感兴趣的岗位或研究方向，以便我们将你的咨询转交给合适的人。",
  ],

  contactEmail: "recruit@university.edu",
};
