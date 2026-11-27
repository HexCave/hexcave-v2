# hexcave.com

The website of Hexcave, an independent product and game studio: Hushcoil, Ludo, Prism Games and
Come Through, each with a page that shows the real product and the way to get it, plus a press
kit. Static Astro, no client-side JavaScript, deployed to GitHub Pages.

**Status:** building · **Spec:** [`PRD.md`](PRD.md) · **Design:** [`docs/DESIGN.md`](docs/DESIGN.md) ·
**Code:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) · **For agents:** [`AGENTS.md`](AGENTS.md)

## Run it

Node 20 or newer.

```bash
npm install
npm run dev       # http://localhost:4321/hexcave-v2/
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
