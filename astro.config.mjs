// @ts-check
import { defineConfig } from 'astro/config';

// Static output — Astro emits portable static files (China-safe, portable host).
//
// GitHub Pages deploy step (done later): set `site` and `base` here.
//   • Project site (user.github.io/<repo>):  site: 'https://<user>.github.io', base: '/<repo>'
//   • User/org site (<user>.github.io):       site: 'https://<user>.github.io'  (no base)
export default defineConfig({
  site: 'https://acorngithu.github.io',
  base: '/group-website',
  output: 'static',
});
