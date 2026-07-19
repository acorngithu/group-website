// src/data/people.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the People page. This is the only file you touch.
//   • Add a person     → copy a { } block, change the fields.
//   • Remove a person   → delete their { } block.
//   • Reorder           → move blocks up/down; within a section the page
//                         follows this order.
//   • role             → which section they appear under (see `roleSections`
//                         below). Omit it and they fall into "Others".
// Photos go in  /public/people/   (self-hosted = loads reliably in China).
// nameNative, email, and website are all optional — omit any you don't have.
// ─────────────────────────────────────────────────────────────────────────

export type Role = "pi" | "postdoc" | "phd" | "msc" | "undergrad" | "alumni";

export interface Person {
  nameEn: string;
  nameNative?: string;
  email?: string;
  website?: string;
  photo: string; // path under /public, e.g. "/people/jane-doe.jpg"
  role?: Role;
  profile?: string; // optional link to a standout profile page, e.g. "/pi"
}

export const people: Person[] = [
  {
    nameEn: "Fan O. Wu",
    nameNative: "吴凡",
    email: "wufan@westlake.edu.cn",
    photo: "/people/fan-wu.png",
    role: "pi",
    profile: "/pi",
  },
  {
    nameEn: "Amina Hassan",
    nameNative: "أمينة حسن",
    email: "amina.hassan@university.edu",
    website: "https://aminahassan.example.com",
    photo: "/people/amina-hassan.jpg",
    role: "postdoc",
  },
  {
    nameEn: "Kenji Tanaka",
    nameNative: "田中 健二",
    email: "k.tanaka@university.edu",
    website: "https://tanaka-lab.example.com",
    photo: "/people/kenji-tanaka.jpg",
    role: "postdoc",
  },
  {
    nameEn: "Mei Lin",
    nameNative: "林梅",
    email: "mei.lin@university.edu",
    photo: "/people/mei-lin.jpg",
    role: "postdoc",
  },

  // ── add more people below ──
];

// Section order + labels for the page. Reorder or rename freely (e.g. add
// "undergrad" / "alumni" rows); a section with no members is hidden.
export const roleSections: { role: Role; label: string; labelZh: string }[] = [
  { role: "pi", label: "Principal Investigator", labelZh: "课题组负责人 (PI)" },
  { role: "postdoc", label: "Postdocs", labelZh: "博士后" },
  { role: "phd", label: "PhD Students", labelZh: "博士生" },
  { role: "msc", label: "Master's Students", labelZh: "硕士生" },
  { role: "undergrad", label: "Undergraduates", labelZh: "本科生" },
  { role: "alumni", label: "Alumni", labelZh: "已毕业成员" },
];
