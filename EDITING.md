# Editing the website — content guide

**You only ever edit files in `src/data/` and drop images into `public/`.**
Never touch layout or CSS to change content. Each data file has comments at the
top explaining its fields.

---

## Where everything lives

| To change… | Edit this file | Images go in |
|---|---|---|
| Group name, tagline, intro, department | `src/data/site.ts` | — |
| People (add/remove/reorder, roles) | `src/data/people.ts` | `public/people/` |
| Research pillars + their figures | `src/data/research.ts` | `public/research/` (big image), `public/research/figures/` (paper screenshots) |
| Publications / references | `src/data/publications.ts` | — |
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

### Add a person
In `src/data/people.ts`, copy one `{ … }` block, change the fields, and set a `role`:
```ts
{
  nameEn: "New Person",
  nameNative: "新人",            // optional
  email: "new.person@university.edu", // optional
  website: "https://…",          // optional
  photo: "/people/new-person.jpg",
  role: "phd",                    // pi | postdoc | phd | msc | undergrad | alumni
},
```
- Put the photo file in `public/people/` with a matching name.
- People are grouped by `role`; empty groups hide automatically.
- To rename/reorder the section headings, edit `roleSections` at the bottom of the file.

### Add a reference / publication
In `src/data/publications.ts`, copy a `{ … }` block:
```ts
{
  type: "journal",   // journal | conference | preprint | talk
  authors: "A. Author, B. Coauthor",
  title: "The paper title",
  venue: "Journal of the Field",
  year: 2026,
  url: "https://doi.org/…",   // optional link
  note: "Oral",               // optional badge
  topics: ["first-pillar"],   // optional: shows it under that pillar's "Related publications"
},
```
Sections (Journal / Conference / Preprints / Talks) sort newest-first automatically.

### Edit a research pillar & add figures
In `src/data/research.ts`, each pillar has a `description` (array of paragraphs) and an
optional `figures` list. Paper screenshots are framed nicely for the dark theme automatically:
```ts
figures: [
  { src: "/research/figures/result-1.png", caption: "Fig. 1 — What it shows." },
],
```
- Drop the image in `public/research/figures/`. A **white background is fine** — it's matted.
- The big card image for a pillar is its `image:` field (put the file in `public/research/`).
- `slug` is the page address (`/research/<slug>`); keep it lowercase-with-dashes and unique.

### Add news
In `src/data/news.ts`:
```ts
{ date: "2026-07-15", title: "We published a new paper.", url: "https://…" },
```
Newest date shows first; the home page lists the latest few.

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
