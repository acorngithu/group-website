# Research Group Website — Project Brief

Context handoff from a planning conversation. Read this fully before acting.

## What this is
A public, static website for a research group. Framework: **Astro** (static output).
Pages planned: **home, research, people, publications, gallery**.
Built and maintained page-by-page. **People is done first** and is the pattern for the rest.

## Audience & the China constraint (important)
Must be accessible worldwide **including mainland China**.
- The group has **no mainland-China entity**, so **ICP filing is off the table** and we host **offshore only** (no ICP is needed for offshore hosting).
- China bar is **"must reliably load,"** not "must be fast."
- **China-safe rule, non-negotiable: self-host EVERY asset** — fonts, images, scripts. **No Google Fonts, no YouTube/Facebook embeds, no external CDNs.** Those are the main reason foreign sites break in China.
- Because Astro emits portable static files, if China loading proves inadequate later, the fix is a **DNS change to a Hong Kong host or near-China CDN — not a rebuild.** Don't do this pre-emptively.

## Hosting plan
1. Deploy free to **GitHub Pages** (user already has a GitHub account) to go live worldwide.
2. Set up deployment via **GitHub Actions**. Configure `site` and `base` in `astro.config.mjs` correctly for the repo type (project site `user.github.io/repo` needs `base: '/repo'`; a user/org site does not).
3. No custom domain yet — user plans to add a cheap one later (still no ICP required while offshore).

## People page (already designed — port these files in)
Data-driven. Three files, provided by the user in a handoff folder:
- `src/data/people.ts` — the **single edit point**. Each person is a `{ }` block with: `nameEn`, optional `nameNative` (native-language name), optional `email`, optional `website`, and `photo` (a path under `/public`, e.g. `/people/jane-doe.jpg`). Add/remove people by adding/deleting blocks.
- `src/components/PersonCard.astro` — renders one person. Photo sits in a fixed `aspect-ratio: 4/5` frame with `object-fit: cover` so **photos never distort regardless of their source shape** (switch to `contain` to show the whole photo uncropped). Shows an initials fallback if the photo is missing.
- `src/pages/people.astro` — the `/people` route; maps over the data. Currently holds the global design tokens and self-hosted `@font-face` rules.

Photos go in `/public/people/`. Fonts go in `/public/fonts/` (Newsreader for display, Inter for body); both **gracefully fall back to Georgia / system fonts** if the woff2 files aren't present, so nothing external ever loads.

## Design tokens (keep consistent across all pages)
```
--paper:#f6f7f8;  --ink:#191c22;  --muted:#6b7178;
--accent:#2c6e6a; --accent-soft:#2c6e6a1a; --line:rgba(25,28,34,.10);
--serif:"Newsreader",Georgia,serif;   (names, headings, native names in italic accent)
--sans:"Inter",system-ui,sans-serif;  (body, meta)
```

## Next steps, in order
1. Scaffold the Astro project.
2. Drop in the three People files at the paths above; get `npm run dev` showing `/people`.
3. Add a shared **layout** (header + nav across all five pages + footer); move the global tokens and font-face out of `people.astro` into a `global.css` imported by the layout, and wrap each page in the layout.
4. Set up the GitHub Pages deploy.
5. Then build the remaining pages one at a time (user will direct the order).

## House rules
- Keep the maintenance model intact: content lives in data files people can edit without touching layout or CSS.
- Never introduce an externally-hosted asset (breaks China). Self-host or inline everything.
- Review diffs before committing; commit early and often.
