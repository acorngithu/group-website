// src/data/publications.ts
// ─────────────────────────────────────────────────────────────────────────
// Publications are built from a Better BibTeX (.bib) export — you don't write
// entries here by hand.
//
// WORKFLOW
//   • Best: in Zotero, right-click your collection → "Export Collection…" →
//     Format "Better BibTeX", tick "Keep updated", and point it at
//     src/data/publications.bib. It then stays in sync as you edit Zotero.
//   • Or one-off: File → Export → Better BibTeX → save over that file.
//   Then commit + push.
//
// Section (Journal / Conference / Preprint / Talk) is auto-detected from the
// entry type. Optional extras (see publications.bib header for how to set them
// from Zotero tags / the Extra field): keywords→topics, thumbnail, badge, pubtype.
// ─────────────────────────────────────────────────────────────────────────

import bibRaw from "./publications.bib?raw";

export type PubType = "journal" | "conference" | "preprint" | "talk";

export interface Publication {
  type: PubType;
  authors: string;
  title: string;
  venue: string;
  year: number;
  url?: string;
  note?: string;
  topics?: string[];
  thumbnail?: string;
  selected?: boolean;
}

type Fields = Record<string, string>;
interface Entry { type: string; fields: Fields; }

// ── minimal, self-contained BibTeX parser (handles Better BibTeX output) ──
function topLevelComma(s: string, from: number): number {
  let depth = 0, inQuote = false;
  for (let i = from; i < s.length; i++) {
    const c = s[i];
    if (c === '"' && depth === 0) inQuote = !inQuote;
    else if (!inQuote && c === "{") depth++;
    else if (!inQuote && c === "}") depth--;
    else if (!inQuote && depth === 0 && c === ",") return i;
  }
  return -1;
}

function parseEntry(type: string, body: string): Entry {
  const fc = topLevelComma(body, 0);
  const fields: Fields = {};
  let k = fc === -1 ? body.length : fc + 1;
  while (k < body.length) {
    const eq = body.indexOf("=", k);
    if (eq === -1) break;
    const name = body.slice(k, eq).trim().toLowerCase();
    let p = eq + 1;
    while (p < body.length && /\s/.test(body[p])) p++;
    let value = "";
    if (body[p] === "{") {
      let depth = 0;
      for (; p < body.length; p++) {
        const c = body[p];
        if (c === "{") { depth++; if (depth === 1) continue; }
        else if (c === "}") { depth--; if (depth === 0) { p++; break; } }
        value += c;
      }
    } else if (body[p] === '"') {
      p++;
      for (; p < body.length && body[p] !== '"'; p++) value += body[p];
      p++;
    } else {
      for (; p < body.length && body[p] !== ","; p++) value += body[p];
    }
    if (name) fields[name] = value.trim();
    const comma = topLevelComma(body, p);
    k = comma === -1 ? body.length : comma + 1;
  }
  return { type, fields };
}

function parseBib(text: string): Entry[] {
  const out: Entry[] = [];
  let i = 0;
  while (i < text.length) {
    const at = text.indexOf("@", i);
    if (at === -1) break;
    let j = at + 1;
    let type = "";
    while (j < text.length && /[a-zA-Z]/.test(text[j])) type += text[j++];
    while (j < text.length && /\s/.test(text[j])) j++;
    if (text[j] !== "{") { i = at + 1; continue; }
    let depth = 1; j++; const start = j;
    while (j < text.length && depth > 0) {
      const c = text[j];
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) break; }
      j++;
    }
    const body = text.slice(start, j);
    i = j + 1;
    const t = type.toLowerCase();
    if (["comment", "string", "preamble", "set"].includes(t)) continue;
    out.push(parseEntry(t, body));
  }
  return out;
}

// ── clean common LaTeX so names/titles read normally ──
const ACC: Record<string, Record<string, string>> = {
  '"': { a: "ä", o: "ö", u: "ü", A: "Ä", O: "Ö", U: "Ü", e: "ë", i: "ï" },
  "'": { a: "á", e: "é", i: "í", o: "ó", u: "ú", y: "ý", n: "ń", c: "ć", s: "ś", z: "ź", A: "Á", E: "É", I: "Í", O: "Ó", U: "Ú" },
  "`": { a: "à", e: "è", i: "ì", o: "ò", u: "ù" },
  "^": { a: "â", e: "ê", i: "î", o: "ô", u: "û" },
  "~": { n: "ñ", a: "ã", o: "õ" },
  "=": { a: "ā", e: "ē", o: "ō", u: "ū", i: "ī" },
};
const SPECIAL: Record<string, string> = { aa: "å", AA: "Å", o: "ø", O: "Ø", ss: "ß", ae: "æ", AE: "Æ", oe: "œ", OE: "Œ", l: "ł", L: "Ł" };

function cleanLatex(s: string): string {
  if (!s) return "";
  let out = s;
  out = out.replace(/\{\\([`'"^~=.])\{?([A-Za-z])\}?\}/g, (_, d, ch) => (ACC[d]?.[ch]) ?? ch);
  out = out.replace(/\\([`'"^~=.])\{?([A-Za-z])\}?/g, (_, d, ch) => (ACC[d]?.[ch]) ?? ch);
  out = out.replace(/\{\\(aa|AA|o|O|ss|ae|AE|oe|OE|l|L)\}/g, (_, m) => SPECIAL[m] ?? m);
  out = out.replace(/\\(aa|AA|ss|ae|AE|oe|OE)\b/g, (_, m) => SPECIAL[m] ?? m);
  out = out.replace(/\\([&%$#_{}])/g, "$1");
  out = out.replace(/~/g, " ");
  out = out.replace(/---/g, "—").replace(/--/g, "–");
  out = out.replace(/[{}]/g, "");
  return out.replace(/\s+/g, " ").trim();
}

function authorsOf(f: Fields): string {
  const raw = f.author || f.editor || "";
  if (!raw) return "";
  return raw
    .split(/\s+and\s+/i)
    .map((name) => {
      name = name.trim();
      if (/^others$/i.test(name)) return "et al.";
      if (name.includes(",")) {
        const parts = name.split(",");
        return cleanLatex(`${parts[1] ?? ""} ${parts[0]}`.trim());
      }
      return cleanLatex(name);
    })
    .filter(Boolean)
    .join(", ");
}

function yearOf(f: Fields): number {
  const y = f.year || (f.date ? f.date.slice(0, 4) : "");
  return parseInt(y, 10) || 0;
}

function isPreprint(f: Fields): boolean {
  const hay = `${f.journal || ""} ${f.journaltitle || ""} ${f.archiveprefix || ""} ${f.eprinttype || ""} ${f.howpublished || ""}`.toLowerCase();
  return /arxiv|biorxiv|medrxiv|ssrn|osf|preprint/.test(hay) || !!f.eprint;
}

function sectionFor(type: string, f: Fields): PubType {
  const forced = (f.pubtype || "").toLowerCase();
  if (forced === "journal" || forced === "conference" || forced === "preprint" || forced === "talk") return forced;
  switch (type) {
    case "article": return isPreprint(f) ? "preprint" : "journal";
    case "inproceedings":
    case "conference":
    case "proceedings": return "conference";
    case "unpublished": return "preprint";
    case "misc": return isPreprint(f) ? "preprint" : "preprint";
    default: return "journal";
  }
}

function venueOf(f: Fields): string {
  if (isPreprint(f) && f.eprint) return `arXiv:${f.eprint}`;
  return cleanLatex(
    f.journal || f.journaltitle || f.booktitle || f.publisher ||
    f.howpublished || f.institution || f.school || ""
  );
}

function urlOf(f: Fields): string | undefined {
  if (f.url) return f.url;
  if (f.doi) return `https://doi.org/${f.doi}`;
  if (isPreprint(f) && f.eprint) return `https://arxiv.org/abs/${f.eprint}`;
  return undefined;
}

function keywordsToTopics(f: Fields): string[] | undefined {
  const kw = f.keywords || f.keyword || "";
  if (!kw) return undefined;
  const list = kw.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
  return list.length ? list : undefined;
}

export const publications: Publication[] = parseBib(bibRaw).map((e) => ({
  type: sectionFor(e.type, e.fields),
  authors: authorsOf(e.fields),
  title: cleanLatex(e.fields.title || "Untitled"),
  venue: venueOf(e.fields),
  year: yearOf(e.fields),
  url: urlOf(e.fields),
  note: e.fields.badge ? cleanLatex(e.fields.badge) : undefined,
  topics: keywordsToTopics(e.fields),
  thumbnail: e.fields.thumbnail || undefined,
  selected: /^(true|1|yes)$/i.test((e.fields.selected || "").trim()),
}));

// Section order + labels for the page. Reorder or rename freely; a section
// with no matching entries is hidden automatically.
export const pubSections: { type: PubType; label: string }[] = [
  { type: "journal", label: "Journal Articles" },
  { type: "conference", label: "Conference Papers" },
  { type: "preprint", label: "Preprints" },
  { type: "talk", label: "Invited Talks" },
];
