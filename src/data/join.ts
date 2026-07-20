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
//   • body / bodyZh — the full description shown on that page, one string each.
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
  body?: string[]; // full detail paragraphs (English) for that page
  bodyZh?: string[]; // full detail paragraphs (Chinese)
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
        "In the Wu Lab, we conduct cutting-edge research at the intersection of photonics, artificial intelligence, statistical physics, nonlinear dynamics, analog computing, and unconventional computing. The group will focus on programmable integrated photonic chips, optical thermodynamic computing, physical neural networks, and next-generation physical computing hardware for artificial intelligence.",
        "We welcome outstanding young researchers with backgrounds in photonics, physics, electrical engineering, integrated circuits, artificial intelligence, nanofabrication, nonlinear dynamics, or related interdisciplinary fields. Together, we aim to explore a new generation of machines that compute by harnessing the natural dynamics of physical systems.",
        "We are currently recruiting postdoctoral researchers, with a particular interest in candidates with backgrounds in the following areas:",
        "<strong>Optical nanofabrication:</strong> experience in integrated photonic device design and fabrication, photonic chip testing, silicon photonics, lithium niobate photonics, thin-film photonic platforms, or related areas.",
        "<strong>Analog integrated circuit design:</strong> experience in analog or mixed-signal circuit design, on-chip driving and readout circuits, optoelectronic co-design, low-noise amplification, circuit modeling, or layout design.",
        "<strong>How to apply:</strong> applications for postdoctoral or research-assistant positions should include a CV and a research statement, sent to the email below.",
      ],
      bodyZh: [
        "在吴凡实验室，我们在光子学、人工智能、统计物理、非线性动力学、模拟计算与非常规计算的交叉领域开展前沿研究。课题组将聚焦于可编程集成光子芯片、光学热力学计算、物理神经网络，以及面向人工智能的新一代物理计算硬件。",
        "我们欢迎具有光子学、物理、电子工程、集成电路、人工智能、纳米加工、非线性动力学，或相关交叉学科背景的优秀青年学者加入。让我们一同探索新一代机器 —— 它们通过驾驭物理系统本身的自然动力学来完成计算。",
        "我们目前正在招募博士后研究员，尤其欢迎具有以下方向背景的申请者：",
        "<strong>光学纳米加工：</strong>具备集成光子器件设计与制造、光子芯片测试、硅基光子学、铌酸锂光子学、薄膜光子平台或相关领域经验者。",
        "<strong>模拟集成电路设计：</strong>具备模拟或混合信号电路设计、片上驱动与读出电路、光电协同设计、低噪声放大、电路建模或版图设计经验者。",
        "<strong>申请方式：</strong>申请博士后或研究助理职位，请提交个人简历与研究陈述，并发送至下方邮箱。",
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
