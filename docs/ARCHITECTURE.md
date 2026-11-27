# hexcave.com — Architecture

## Stack, and why it is this small

- **Astro** (static output). Multi-page static HTML with components and image optimisation, and
  zero client JavaScript by default. Nothing else in the site needs a framework.
- **Plain CSS**: one `src/styles/global.css` holding the tokens from `docs/DESIGN.md`, plus
  component-scoped `<style>` blocks. No Tailwind, no CSS-in-JS, no UI kit.
- **`astro:assets`** for images: responsive AVIF/WebP with explicit sizes, generated at build.
- **`@astrojs/sitemap`** for the sitemap. Nothing else from the integration catalogue.
- **Fonts self-hosted** from `public/fonts/` (copied from `../tools/brand/hexcave/fonts/`, with
  their OFL licences), declared once in `global.css`.
- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`, the official
  `withastro/action` + `actions/deploy-pages`).

Ruled out: Next.js/Nuxt (a server framework for a static catalogue), a headless CMS (four
products, one editor), React islands (nothing interactive), analytics (UTM on store links is
enough for v1).

## Layout

```
src/
  data/products.ts        The four products: the only content source for product templates
  data/site.ts            Studio constants: name, line, contact email, YouTube, publisher name, base URL
  layouts/Base.astro      <head> (title, description, canonical, OG/Twitter, favicon), header, footer
  components/             Header, Footer, ProductBlock, ScreenshotRow, StoreButton, FactsList, Principles
  pages/index.astro       Home
  pages/[slug].astro      Product pages, from products.ts (getStaticPaths)
  pages/press.astro       Press kit
  pages/404.astro
  assets/products/<slug>/ Icons and screenshots, imported so astro:assets optimises them
  styles/global.css       Tokens, reset, type, utilities
public/
  fonts/                  Instrument Serif, Instrument Sans (+ OFL texts)
  press/<slug>/           Original PNGs offered for download on /press/
  favicon.svg, og/*.png, robots.txt
```

## The data model

`products.ts` exports a typed array. Each entry: `slug`, `name`, `storeName?`, `oneLine`,
`status` (`"live" | "in-development"`), `platform` (`"android" | "web"`), `link?` (store or play
URL, without UTM — templates add it), `about` (one or two paragraphs), `facts` (term/value
pairs), `principles` (which of the studio principles apply), `legal?` (privacy/terms/deletion
URLs), `icon`, `screenshots` (imported images + alt), `ogImage?`, `sources` (the files the
entry was written from — for maintainers, not printed).

A build-time check (in `products.ts` or a tiny `scripts/check.mjs` run before `astro build`)
fails if a `live` product has no `link`, or any screenshot lacks alt text.

## Base path

Until hexcave.com points here, the site is served at `https://hexcave.github.io/hexcave-v2/`.
`astro.config.mjs` reads `SITE` and `BASE` from the environment (defaults: the preview URL and
`/hexcave-v2/`); every internal link and asset goes through Astro's `base`
(`import.meta.env.BASE_URL`). Switching to the domain is: add `public/CNAME` with `hexcave.com`,
set `BASE=/` and `SITE=https://hexcave.com` in the workflow, push. Documented in `README.md`.

## Tested, and not

- `npm run build` must pass with zero warnings; the data check runs inside it.
- `npm run check` (`astro check`) for types.
- Lighthouse (mobile) and an axe pass are run by hand before each deploy; results noted in the
  log, not automated in CI (judgement: four pages do not justify a CI browser).
- Not tested: how the Play badge and OG cards render in every app. Spot-checked in WhatsApp and X.

## Deviations

None yet.
