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
  titleZh: string;
  detail?: string; // e.g. "Fully funded · 3–4 years"
  detailZh?: string;
  description: string;
  descriptionZh: string;
  open: boolean;
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
      detailZh: "全额资助岗位",
      description:
        "We welcome applications from strong candidates with a background in " +
        "[relevant field]. Placeholder — describe funding, start dates, and the " +
        "kind of student who thrives here.",
      descriptionZh:
        "我们欢迎具有[相关领域]背景的优秀申请者。占位文字 —— 请在此说明资助情况、" +
        "入学时间，以及适合在此成长的学生类型。",
      open: true,
    },
    {
      title: "Postdoctoral Researchers",
      titleZh: "博士后研究员",
      detail: "By arrangement",
      detailZh: "面议",
      description:
        "We support fellowship applications and occasionally have funded " +
        "openings. Placeholder — mention how to propose a project or fellowship.",
      descriptionZh:
        "我们支持各类奖学金 (fellowship) 申请，并不时设有资助岗位。占位文字 —— " +
        "请在此说明如何提出研究计划或奖学金申请。",
      open: true,
    },
    {
      title: "Master's & Undergraduate Projects",
      titleZh: "硕士与本科生项目",
      description:
        "Students at [your university] are welcome to enquire about project " +
        "and thesis opportunities in the group.",
      descriptionZh:
        "[本校]的学生欢迎咨询课题组的科研项目与毕业论文机会。",
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
