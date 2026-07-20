# Editing the website — content guide

**You only ever edit files in `src/data/` and drop images into `public/`.**
Never touch layout or CSS to change content. Each data file has comments at the
top explaining its fields.

---

## The site is bilingual (English / 中文)

Visitors switch the whole site between English and Chinese with the button in the
top-right. Narrative text is stored **twice** — an English field and a Chinese twin
whose name ends in `Zh` (e.g. `title` / `titleZh`). When you add or change narrative
content, fill in **both**. Quick rules for the three things in this guide:

- **People** — a member's only translated field is `nameNative` (their name in its
  native script). Email and links are language-neutral, so **members need no extra work**.
- **Publications** — **not translated.** Titles, authors, and venues stay in English in
  both modes (normal for academic references). Nothing extra to do.
- **News** — needs a Chinese `titleZh` (and `bodyZh` if it has its own page).

If you leave a needed `…Zh` field off, the site just shows the English in both modes
(nothing breaks). House style for technical terms: Chinese with the English in
parentheses, e.g. `连续域束缚态 (Bound state in the continuum)`.

---

## Where everything lives

| To change… | Edit this file | Images go in |
|---|---|---|
| Group name, tagline, intro, department | `src/data/site.ts` | — |
| People (add/remove/reorder, roles) | `src/data/people.ts` | `public/people/` |
| PI profile page (awards, bio, links) | `src/data/pi.ts` | `public/people/` (photo), `public/` (cv.pdf) |
| Research pillars + their figures | `src/data/research.ts` | `public/research/` (big image), `public/research/figures/` (paper screenshots) |
| Publications / references | `src/data/publications.bib` (Better BibTeX) | `public/pubs/` (thumbnails) |
| News (home page) | `src/data/news.ts` | — |
| Join / open positions | `src/data/join.ts` | — |
| Gallery photos | `src/data/gallery.ts` | `public/gallery/` |

---

## Two ways to edit & publish

**A. In the browser (no software needed) — best for quick text edits**
1. Go to the repo on GitHub → open the file (e.g. `src/data/news.ts`) → click the ✏️ pencil.
2. Make your edit → **Commit changes**.
3. GitHub rebuilds automatically; the live site updates in ~2 minutes.
- To add an image: open the folder (e.g. `public/people/`) → **Add file → Upload files**.

**B. On your computer — best for bigger changes / many images**
1. Edit the files in any text editor.
2. Preview locally: `npm run dev` → open <http://localhost:4321/group-website/>
   (the page reloads as you save).
3. Publish: `git add -A && git commit -m "update content" && git push`

---

## How to do each thing

### Add a group member
In `src/data/people.ts`, copy one `{ … }` block, change the fields, and set a `role`:
```ts
{
  nameEn: "New Person",
  nameNative: "新人",            // optional — name in native script (shows in both languages)
  email: "new.person@university.edu", // optional
  website: "https://…",          // optional
  photo: "/people/new-person.jpg",
  role: "phd",                    // pi | postdoc | phd | msc | undergrad | alumni
},
```
- Put the photo file in `public/people/` with a matching name (lowercase, dashes).
  Portraits look best around a 4:5 shape; a missing photo shows the person's initials.
- `nameNative` is the one bilingual field — it appears (in italic accent) under the English
  name in **both** language modes. Nothing else about a member needs translating.
- People are grouped by `role`; empty groups hide automatically. Order within a group
  follows the order of the blocks in the file.
- To rename/reorder the section headings — or add a new one — edit `roleSections` at the
  bottom of the file. Each entry needs **both** an English `label` and a Chinese `labelZh`:
  ```ts
  { role: "phd", label: "PhD Students", labelZh: "博士生" },
  ```
- Give a member their own profile page by adding `profile: "/pi"` (see the PI section);
  their card then shows a "Full profile →" link.

### Edit the PI's page
`src/data/pi.ts` powers the PI's standout page at **`/pi`**: photo, links (email / Google
Scholar / CV), `bio` paragraphs, `awards` (`year` + `title` + `org`), and `selected`
publications (leave the array empty to auto-show the latest few). Put the CV file at
`public/cv.pdf`. The PI's card on the People page links here automatically because that
person has `profile: "/pi"` in `people.ts` — add `profile: "/some-page"` to any person to
give their card a "Full profile →" link.

### Add / manage publications — from Better BibTeX (no hand-typing)
The page is built from a Better BibTeX `.bib` export; you never edit entries by hand.
Publications are **not translated** — they show in English in both language modes.

**Best (set-and-forget):** in Zotero, right-click your collection → **Export Collection…**
→ Format **Better BibTeX** → tick **Keep updated** → save it as `src/data/publications.bib`.
Zotero keeps that file in sync as you edit; you just commit + push.
(One-off alternative: File → Export → Better BibTeX → save over that file.)

The section (Journal / Conference / Preprint / Talk) is detected automatically from the
entry type, and every section sorts newest-first.

**Optional extras — set them in Zotero so they export automatically:**
- **Thumbnail** (graphical abstract, shown on the left): add to the item's **Extra** box →
  `tex.thumbnail: /pubs/2025-paper.png`, and put the image in `public/pubs/`. White
  backgrounds are fine (it's matted); any shape works (shown whole). No thumbnail → a tidy
  "Figure" placeholder.
- **Feature in "Selected Publications"** (the highlighted list at the top of the page):
  Extra → `tex.selected: true`. Selected papers appear there newest-first; every other paper
  still files into its Journal / Conference / Preprint / Talk section below.
- _(A pillar's "Further reading" list is curated in `research.ts` — see below — not pulled from Zotero.)_
- **Badge** (small tag by the venue): Extra → `tex.badge: Oral` (e.g. Oral, Best Paper, Invited).
- **Force a section** (e.g. talks/presentations): Extra → `tex.pubtype: talk`
  (`journal` | `conference` | `preprint` | `talk`).

### Edit a research pillar
Everything for the Research pages lives in `src/data/research.ts` — one `{ }` block per pillar.

- **Text:** `title`, `tagline`, and `description` (an array of paragraphs).
- **`slug`** — the page address (`/research/<slug>`); lowercase-with-dashes, unique.
- **Hero (top of the subpage)** — one of:
  - `image: "/research/<slug>.jpg"` — a static picture (file in `public/research/`), **or**
  - `animation: "<name>"` — a live, code-drawn animated figure (see next section). If both are
    set, the animation wins; with neither, a titled placeholder shows.
- **Result figures** (matted — white-background paper screenshots are fine):
  ```ts
  figures: [
    { src: "/research/figures/result-1.png", caption: "Fig. 1 — What it shows." },
  ],
  ```
  Put the image files in `public/research/figures/`.
- **Further reading** — a curated list of key papers (often other groups') at the bottom:
  ```ts
  references: [
    { authors: "A. Author et al.", title: "Paper title", venue: "Journal", year: 2025, url: "https://…" },
  ],
  ```

### Switch (or remove) a pillar's animated figure
Some pillars use a **live animated hero** — pure code (an HTML `<canvas>`), **no image or GIF
file**; every frame is drawn in the browser. It's chosen by the `animation:` value on that pillar
in `research.ts`. The animations themselves are defined in `src/components/PillarFigure.astro`.

For **Reconfigurable Photonic Chips**, three interchangeable styles exist — just set `animation:`
to one of them:

| `animation:` | Look |
|---|---|
| `"reconfigurable"` | Coarse pixel grid |
| `"reconfigurableSmooth"` | Continuous, pixel-less slab |
| `"reconfigurablePixels"` | Fine small pixels (SLM-like) — current |

To use a **static image instead**, delete the `animation:` line and set `image:` to a file in
`public/research/`. (Need a still PNG or a GIF of an animation for a slide/paper? Ask and I'll
capture one — it isn't stored anywhere by default.)

### Add news
In `src/data/news.ts`, add a `{ … }` block. `date`, `title`, and `titleZh` are
**required**; newest date shows first, and the home page lists the latest few.
```ts
{
  date: "2026-07-15",                 // YYYY-MM-DD (also used for sorting)
  title: "We published a new paper.",
  titleZh: "我们发表了一篇新论文。",
},
```
That alone shows the headline as plain text. To make the headline **clickable**, pick
**one** of these (optional):

**(a) Give the item its own page.** Add a `slug` plus the full story in both languages
(`body` / `bodyZh`, one string per paragraph). This builds a page at `/news/<slug>` and
links the headline to it automatically:
```ts
{
  date: "2027-07-19",
  title: "We are hiring for 2027 Fall PhDs",
  titleZh: "我们正在招收 2027 年秋季入学的博士生。",
  slug: "phd-hiring-2027",            // lowercase-with-dashes, unique
  body:   ["First paragraph…", "Second paragraph…"],
  bodyZh: ["第一段……", "第二段……"],
},
```

**(b) Link out to an existing page** — add a `url` instead of a slug:
```ts
url: "https://doi.org/10.xxxx/yyyy",  // external → opens in a new tab
url: "/publications",                  // internal site path → same tab
```

**Precedence:** `slug` (own page) → `url` (link out) → plain text. Use at most one of
`slug` / `url` per item.

### Edit Join / positions
In `src/data/join.ts`: edit `intro`, the `positions` list (set `open: false` to hide a role
without deleting it), `howToApply`, and `contactEmail`.

### Add gallery photos
In `src/data/gallery.ts`: `{ src: "/gallery/retreat.jpg", caption: "Group retreat 2026." }`,
and put the file in `public/gallery/`.

---

## Images — rules of thumb
- **Always self-host** (put the file in `public/…` and reference it). Never paste an
  external image URL — externally-hosted assets are the main reason sites fail to load in China.
- Filenames: lowercase, dashes, no spaces (e.g. `jane-doe.jpg`).
- Keep them reasonably small (roughly ≤ 300 KB each) so the site loads fast everywhere.
- People photos look best around a 4:5 portrait shape (they're cropped to fit); paper
  figures can be any shape (they're shown whole).
- If an image is missing, the site shows a tidy placeholder instead of breaking.

## Syntax — don't break these
- Keep every `"quote"` and trailing `,` comma. Each `{ … }` block ends with `},`.
- Only change the text inside quotes / the values. Don't edit lines with `interface`,
  `export`, or the field names themselves.
- If the site won't build, it's almost always a missing comma or quote — undo your last edit.
