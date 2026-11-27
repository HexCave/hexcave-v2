# hexcave.com

The website of Hexcave, an independent product and game studio: Hushcoil, Ludo, Prism Games and
Come Through, each with a page that shows the real product and the way to get it, plus a press
kit. Static Astro, no client-side JavaScript, deployed to GitHub Pages.

**Spec:** [`PRD.md`](PRD.md) · **Design:** [`docs/DESIGN.md`](docs/DESIGN.md) ·
**Code:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) · **For agents:** [`AGENTS.md`](AGENTS.md)

## Run it

Use Node 24 LTS. The minimum supported version is 22.23.4.

```bash
npm install
npm run dev       # http://localhost:4321/hexcave-v2/
npm run check     # Astro types and template diagnostics
npm run build     # dist/
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages
at `https://hexcave.github.io/hexcave-v2/`.

**Moving to hexcave.com** (after the domain is at Namecheap):

1. Add `public/CNAME` containing `hexcave.com`.
2. In the workflow, set `SITE=https://hexcave.com` and `BASE=/`.
3. Push; in the repo's Settings → Pages, set the custom domain to `hexcave.com` and enforce HTTPS.
4. At Namecheap, point the apex at GitHub Pages (A `185.199.108–111.153`, AAAA
   `2606:50c0:8000–8003::153`) and `www` as a CNAME to `hexcave.github.io`.
5. Remove `hexcave.com` as the custom domain of whichever repo serves the old site.

## Adding a product

Add an entry to `src/data/products.ts`, put its icon and screenshots in
`src/assets/products/<slug>/` (and the originals in `public/press/<slug>/`), and build. No page
needs editing.

## Refreshing artwork and games

Run `npm run snapshot:prism` after a Prism release, with `../prism/prism-games/` available.
Commit the refreshed `src/data/prism-games.json` and covers together. A clean site build uses
only the local snapshot.

Run `node scripts/generate-studio-og.mjs` to regenerate `public/og/studio.png`. The script uses
the studio banner in this checkout and the original Instrument Serif typeface in
`../tools/brand/hexcave/fonts/`. The site serves Latin WOFF2 subsets with their OFL licences.
The English Google Play badge is the [official PNG from Google](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png).
