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
        "We support fellowship applications and occasionally have funded " +
        "openings. See the details for research areas and how to apply.",
      descriptionZh:
        "我们支持各类奖学金申请，并不时设有资助岗位。点击查看研究方向与申请方式。",
      open: true,
      // ── Postdoc detail page at /join/postdoc — edit body / bodyZh below ──
      slug: "postdoc",
      body: [
        "The group is recruiting postdoctoral researchers to work at the intersection of photonics, physical intelligence, and unconventional computing. Placeholder — describe the specific projects on offer, the research environment, and what a postdoc's day-to-day looks like.",
        "We look for candidates who hold (or are close to completing) a PhD in physics, optics, electrical engineering, applied mathematics, or a related field, with a strong record in one or more of: multimode nonlinear photonics, analog / physical computing, machine learning, or theory and simulation. Placeholder — adjust to the profile you want.",
        "Positions are available by arrangement: we actively support external fellowship applications and occasionally have directly funded openings. Placeholder — note the expected duration, funding, and start dates.",
        "To apply, email a CV, a short statement of research interests, and the names of two or three references. Placeholder — add any application specifics or deadlines.",
      ],
      bodyZh: [
        "课题组正在招募博士后研究员，方向聚焦于光子学、物理智能与新型计算的交叉领域。占位文字 —— 请在此介绍可供选择的具体课题、科研环境，以及博士后的日常工作。",
        "我们期望申请者已获得（或即将获得）物理、光学、电子工程、应用数学或相关领域的博士学位，并在以下一个或多个方向具有扎实积累：多模非线性光子学、模拟 / 物理计算、机器学习，或理论与仿真。占位文字 —— 请按你期望的人选画像进行调整。",
        "岗位采取面议方式：我们积极支持各类外部奖学金申请，并不时设有直接资助的岗位。占位文字 —— 请在此说明预期的聘期、资助情况与入职时间。",
        "申请请发送简历、一份简要的研究兴趣陈述，以及两至三位推荐人的姓名。占位文字 —— 请在此补充具体的申请要求或截止日期。",
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
