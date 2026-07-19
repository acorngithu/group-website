// src/data/i18n.ts
// ─────────────────────────────────────────────────────────────────────────
// Bilingual (English / 简体中文) UI strings — the fixed "chrome" of the site:
// nav, section headings, button labels. Page CONTENT (hero copy, research
// pillars, people, news…) carries its own zh fields in its own data file.
//
// HOW THE SWITCH WORKS
//   • Every translatable string is rendered in BOTH languages via <Bi>, which
//     emits two spans; global.css shows one and hides the other based on the
//     <html data-lang> attribute.
//   • `langBootScript` runs first in <head>: it reads the saved choice (or the
//     browser language) and sets data-lang before paint — no flash. The header
//     <LangToggle> flips + remembers the choice. All self-hosted (China-safe).
//
// Editing: change any zh string here to retune a label site-wide. Keep the
// English-in-parentheses convention for specialist terms, e.g. "预印本 (Preprint)".
// ─────────────────────────────────────────────────────────────────────────

export interface Bilingual {
  en: string;
  zh: string;
}
const b = (en: string, zh: string): Bilingual => ({ en, zh });

export const ui = {
  nav: {
    home: b("Home", "主页"),
    research: b("Research", "研究"),
    people: b("People", "成员"),
    publications: b("Publications", "论文"),
    gallery: b("Gallery", "相册"),
    join: b("Join", "加入"),
  },

  home: {
    exploreResearch: b("Explore the research →", "了解我们的研究 →"),
    joinUs: b("Join us", "加入我们"),
    news: b("News", "动态"),
    joinTitle: b("Join us", "加入我们"),
    joinBlurb: b(
      "We're recruiting PhD and postdoc researchers.",
      "我们正在招募博士生与博士后研究人员。",
    ),
    seePositions: b("See open positions →", "查看招聘岗位 →"),
  },

  research: {
    eyebrow: b("What we do", "我们的研究"),
    title: b("Research", "研究"),
    lead: b(
      "A few directions we are exploring at the moment. They shift as we learn — each is a way into questions we find hard to put down.",
      "这是我们眼下正在探索的几个方向。它们会随着认识的深入而不断变化 —— 每一个，都是我们通往某个放不下的问题的入口。",
    ),
    explore: b("Explore", "了解更多"),
  },

  pillar: {
    back: b("← All research", "← 全部研究"),
    eyebrow: b("Research pillar", "研究方向"),
    figures: b("Figures", "图示"),
    furtherReading: b("Further reading", "延伸阅读"),
    // Complex-light-dynamics panels
    trojanTitle: b("Trapping light as if it is a planet", "让光如行星般被俘获"),
    trojanSub: b("Trojan beam", "特洛伊光束 (Trojan beam)"),
    bicTitle: b("Binding light by an endless interference", "以无尽的干涉束缚光"),
    bicSub: b("Bound state in the continuum", "连续域束缚态 (Bound state in the continuum)"),
  },

  people: {
    eyebrow: b("Who we are", "我们是谁"),
    title: b("People", "成员"),
    subtitle: b(
      "The researchers, students, and collaborators who make up the group.",
      "构成本课题组的研究人员、学生与合作者。",
    ),
    others: b("Others", "其他成员"),
    website: b("Website", "个人主页"),
    fullProfile: b("Full profile →", "查看主页 →"),
  },

  roles: {
    pi: b("Principal Investigator", "课题组负责人 (PI)"),
    postdoc: b("Postdocs", "博士后"),
    phd: b("PhD Students", "博士生"),
    msc: b("Master's Students", "硕士生"),
    undergrad: b("Undergraduates", "本科生"),
    alumni: b("Alumni", "已毕业成员"),
  },

  publications: {
    eyebrow: b("What we have worked on", "我们的工作"),
    title: b("Publications", "论文"),
    // The <a>Google Scholar</a> stays English; it is inserted by the page.
    scholarPre: b("For a full publication list, please visit ", "完整论文列表请访问 "),
    scholarPost: b(".", "。"),
    selected: b("Selected Publications", "代表性论文"),
    journal: b("Journal Articles", "期刊论文"),
    conference: b("Conference Papers", "会议论文"),
    preprint: b("Preprints", "预印本 (Preprint)"),
    talk: b("Invited Talks", "特邀报告"),
  },

  pi: {
    back: b("← People", "← 成员"),
    biography: b("Biography", "个人简介"),
    awards: b("Awards & Honors", "荣誉与奖项"),
    selected: b("Selected Publications", "代表性论文"),
    email: b("Email", "邮箱"),
    cv: b("CV ↗", "简历 (CV) ↗"),
    website: b("Website ↗", "个人主页 ↗"),
  },

  join: {
    eyebrow: b("Opportunities", "招聘机会"),
    title: b("Join us", "加入我们"),
    openPositions: b("Open positions", "招聘岗位"),
    noPositions: b(
      "No open positions right now — but we still welcome enquiries.",
      "目前暂无空缺岗位 —— 但我们始终欢迎您的咨询。",
    ),
    howToApply: b("How to apply", "申请方式"),
  },

  gallery: {
    eyebrow: b("Life in the group", "组内生活"),
    title: b("Gallery", "相册"),
    subtitle: b(
      "Moments from the lab, the field, conferences, and celebrations.",
      "实验室、外场、学术会议与庆祝时刻的点滴记录。",
    ),
  },
} as const;

// Runs in <head> before paint: pick the saved language, or fall back to the
// browser's. Inlined verbatim (no external request) via <script is:inline>.
export const langBootScript = `(function(){try{var l=localStorage.getItem('lang');if(l!=='en'&&l!=='zh'){l=(navigator.language||'').toLowerCase().indexOf('zh')===0?'zh':'en';}var r=document.documentElement;r.setAttribute('data-lang',l);r.setAttribute('lang',l==='zh'?'zh-Hans':'en');}catch(e){document.documentElement.setAttribute('data-lang','en');}})();`;
