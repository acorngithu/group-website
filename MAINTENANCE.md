# Maintaining & Updating the Wu Lab Website

A reference for keeping the site running and publishing changes.
For **what to type in each content file** (people, news, publications, research…),
see the companion guide **[EDITING.md](EDITING.md)**. This file covers the
**operational** side: how updates go live, previewing, troubleshooting, the
domain, and images.

---

## The 30-second version

```
1. Edit a file in  src/data/   (or drop an image in  public/ )
2. git add -A
3. git commit -m "what you changed"
4. git push
```

Push to `main` → GitHub rebuilds automatically → live at **https://fanowu.com**
in **~1–2 minutes**. Then **hard-refresh** the page (Ctrl/Cmd + Shift + R) to
clear the browser cache. That's the whole workflow — no manual deploy, no server,
no DNS to touch.

---

## How the site works (the big picture)

| Piece | What it is |
|---|---|
| **Framework** | [Astro](https://astro.build) — builds plain, portable static HTML/CSS/JS. |
| **Source of truth** | This Git repo: `acorngithu/group-website`. |
| **Hosting** | **GitHub Pages** (free). Serves the built files. |
| **Deploy** | **GitHub Actions** — on every push to `main`, it runs the build and publishes. Config: `.github/workflows/deploy.yml`. |
| **Domain** | **fanowu.com** (apex), registered + DNS at **Cloudflare** (DNS-only / grey cloud). Pinned via `public/CNAME`. |
| **HTTPS** | Automatic, free, from GitHub (Let's Encrypt). |
| **China rule** | **Every asset is self-hosted** (fonts, images, scripts). Never reference an external CDN/URL — that's the #1 reason foreign sites fail to load in China. |

Key config lives in **`astro.config.mjs`**: `site: 'https://fanowu.com'`,
`base: '/'`. Don't change these unless the domain changes.

---

## Everyday updating

**You only ever edit files in `src/data/` and drop images into `public/`.**
Never touch layout or CSS to change content. Two ways to do it:

**A. On your computer** (best for anything bigger, or adding images)
1. Edit the files in a text editor.
2. Preview locally (recommended — see below).
3. `git add -A && git commit -m "…" && git push`

**B. In the GitHub website** (best for a quick text fix, no software needed)
1. Open the repo → the file (e.g. `src/data/news.ts`) → click the ✏️ pencil.
2. Make the edit → **Commit changes**.
3. Auto-deploys the same way.

---

## Preview before you publish (recommended)

Catch mistakes *before* they go live by running the site locally:

```
npm run dev
```

Open the URL it prints (e.g. `http://localhost:4321/`). The page **reloads as you
save**. If it renders locally, it will build and deploy fine. Press **Ctrl+C** to
stop the server.

> First time only, or after pulling new changes: run `npm install` once.

---

## What you can edit, and where

All content lives in `src/data/`. Details for each are in **[EDITING.md](EDITING.md)**.

| To change… | Edit | Images go in |
|---|---|---|
| Group name, tagline, hero intro, institution | `src/data/site.ts` | — |
| People (add/remove/reorder) | `src/data/people.ts` | `public/people/` |
| PI profile page | `src/data/pi.ts` | `public/people/`, `public/` (cv.pdf) |
| Research pillars + figures | `src/data/research.ts` | `public/research/…` |
| Publications | `src/data/publications.bib` | `public/pubs/` |
| News (home + own pages) | `src/data/news.ts` | `public/news/` |
| Join / positions | `src/data/join.ts` | — |
| Fixed UI labels (nav, buttons) | `src/data/i18n.ts` | — |
| Gallery (currently hidden) | `src/data/gallery.ts` | `public/gallery/` |

---

## Bilingual (English / 中文)

The whole site toggles between English and Chinese (button, top-right). Narrative
text is stored **twice** — an English field and a Chinese twin whose name ends in
`Zh` (e.g. `title` / `titleZh`). **When you add or change narrative content, fill
in both.** If you leave a `…Zh` field off, the site just shows the English in both
modes (nothing breaks). Publications and references stay in English by design.

---

## Images

- **Always self-host.** Put the file under `public/…` and reference it with a
  **leading-slash path** (e.g. `/news/flyer.webp`). **Never** paste an external
  image URL — it breaks loading in China.
- **Keep them small — aim for ≤ ~300 KB each** so the site loads reliably
  everywhere (the China bar is "must reliably load"). A phone photo or a print
  flyer is often several MB; downscale it first.
- **Filenames:** lowercase, dashes, no spaces.
- **Optimizing:** the `sharp` tool is set up in this project. The easy path is to
  ask Claude to shrink an image for you (it resizes + re-encodes, usually to
  WebP). Example of what that does: the hiring flyer went 1.16 MB → 286 KB.
- If an image is missing, the site shows a tidy placeholder instead of breaking.

---

## Visitor analytics (private — only you can see it)

The site has a **private page-view counter** via **Cloudflare Web Analytics**.
No number shows on the public site; the data lives only in *your* Cloudflare
dashboard.

- **Where to read it:** Cloudflare → **Analytics & Logs → Web Analytics →
  fanowu.com**. Shows page views, unique visitors, top pages, countries, and
  referrers. New data appears within ~30 min of real visits (cookie-less, no
  consent banner needed).
- **How it works:** one tiny beacon script lives in a single file,
  **`src/components/Analytics.astro`**, and is included in the `<head>` of every
  page (via `BaseLayout.astro` and the standalone `index.astro`). The `token` in
  that file is a **public site identifier, not a secret** — it grants no access
  to your data.
- **The one exception to the self-host rule:** this beacon is loaded from
  Cloudflare's servers — the site's *only* externally-hosted asset. It's
  `defer`-loaded and never blocks rendering, so **if it's ever blocked (e.g. in
  mainland China) the page still loads perfectly** — those visitors just aren't
  counted, so the visitor total reads slightly low. That's the accepted trade-off
  for having any counter at all on a static site.
- **To remove analytics entirely:** delete `src/components/Analytics.astro` and
  the two `import Analytics …` + `<Analytics />` lines in `BaseLayout.astro` and
  `index.astro`, then commit + push. (This is also noted inside the component.)

---

## Troubleshooting

**"I pushed but the change didn't appear."** Most likely a **build error** (usually
a missing comma or quote in a `.ts` file). When the build fails, the deploy is
skipped, so **the site stays up on the last good version** but your change won't
show. To find it:
- Check **https://github.com/acorngithu/group-website/actions** — a **red ✗** on
  the top run = build failed; click it to see the file + line. A **green ✓** = it
  published.
- Or run `npm run dev` locally — the error shows immediately with the file/line.
- Fix the typo, commit, push again.

**"The page looks broken / blank / old."** Almost always **browser cache** —
**hard-refresh** (Ctrl/Cmd + Shift + R). The live site can also lag a push by a
couple of minutes; give it time, then refresh.

**"The deploy itself failed (build was fine)."** Occasionally GitHub's deploy step
has a transient hiccup. Fix: **re-run it** — Actions tab → the failed run →
**"Re-run failed jobs"** (or push any new commit). The site keeps serving the last
good version meanwhile, so there's no downtime.

**Roll back a bad change.** Because every version is a Git commit, you can always
revert: `git revert <commit>` then push, or ask Claude to roll back to the last
good state.

---

## The domain & hosting (rarely touched)

This was a **one-time setup** — you don't revisit it for normal updates.

- **Registrar/DNS:** Cloudflare. Records are **DNS-only (grey cloud)** pointing at
  GitHub Pages' IPs, with **Auto (low) TTL**. Keep them grey — proxying (orange
  cloud) hurts China access and complicates HTTPS.
- **Renewal:** make sure **auto-renew is ON** at Cloudflare so the domain
  (~$10/yr) never lapses. That's the one recurring thing to not forget.
- **Check it's healthy:** visit https://fanowu.com (padlock = HTTPS OK). Settings →
  Pages on GitHub shows the custom-domain + HTTPS status.

**China accessibility — the fallback plan.** The site is built to be
China-reachable (all assets self-hosted). GitHub Pages *itself* can be
intermittent in mainland China. If it proves inadequate:
1. Test first with **itdog.cn** (enter `fanowu.com`, run the HTTP test from
   Chinese cities).
2. If it's bad, the fix is **not** a rebuild — it's hosting the same built files on
   a **Hong Kong / near-China host or CDN** and **repointing the Cloudflare DNS
   records** there. Because DNS is DNS-only with a low TTL, that switch takes
   effect in minutes, same domain, same content. Ask Claude to set this up if
   needed.

---

## Privacy — never publish these

- **`resources/`** (CV, research statement, private docs) and **`bic-standalone.html`**
  are **gitignored** — `git add -A` always skips them. Keep private files there.
- The site is fully public. Don't put anything in `src/` or `public/` you wouldn't
  want the world (and search engines) to see.
- Never commit passwords, API keys, or tokens.

---

## Quick command reference

```bash
npm install          # once, or after pulling new changes
npm run dev          # local preview at http://localhost:4321/ (live reload)
npm run build        # produce the final static site in dist/ (what gets deployed)

git status           # what you've changed
git add -A           # stage everything (skips gitignored files)
git commit -m "…"    # save a version with a message
git push             # publish → auto-deploys to fanowu.com in ~2 min
git revert <hash>    # undo a specific commit (then push)
```

**Live site:** https://fanowu.com  ·
**Repo:** https://github.com/acorngithu/group-website  ·
**Build status:** https://github.com/acorngithu/group-website/actions

---

## When in doubt

Ask Claude Code. Good things to hand off: adding a page, optimizing images,
fixing a failed build, rolling back, or setting up the China/Hong-Kong fallback.
Paste any red error text from the Actions tab and it can tell you the exact fix.
