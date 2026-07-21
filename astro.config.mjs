// @ts-check
import { defineConfig } from 'astro/config';

// Static output — Astro emits portable static files (China-safe, portable host).
//
// Served from the custom apex domain fanowu.com, so the site lives at the root
// (base '/'). The domain is pinned via public/CNAME so it survives every deploy.
// (If ever reverting to the project Pages URL: site 'https://acorngithu.github.io',
//  base '/group-website'.)
export default defineConfig({
  site: 'https://fanowu.com',
  base: '/',
  output: 'static',
});
