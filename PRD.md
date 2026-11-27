# hexcave.com — Product Requirements Document

**Version:** 1.0 · **Date:** 2026-11-28 · **Owner:** Nizar · **Status:** building
**Repository:** `HexCave/hexcave-v2` · **Directory in the portfolio:** `hexcave-site/`

## 0. The ask, verbatim

> "now, i want a brand new website for hexcave - it shouldn't be AI slop! the content, the
> design, nothing should be ai-slop. … it should be attractive, to the point, practical and right
> away production ready. The design should look absolutely the best. … make sure to not mess it up
> by overengineering." — Nizar, 2026-11-28
>
> "you shouldn't copy the content from the existing website - the intent of the new website is for
> you to figure out for the good of all our projects" — Nizar, 2026-11-28

Decided with him the same day: **products only** (no client services, no client list); the
products are **Hushcoil, Ludo, Come Through and Prism Games**; contact is a hexcave.com address
once Zoho is set up; built and deployed to a preview URL, and he points hexcave.com at it.

## 1. What this is

The front door of Hexcave, an independent product and game studio. One small, fast, static site
whose job is to make every Hexcave product easier to find, trust and install.

### 1.1 What the site is for — the reason it exists

Every product's distribution points somewhere: a Short's description, a Reddit post, a reviewer's
email, a Play listing's "website" field, a QR code on a slide. Today those point at a store page
or at nothing. The site gives each of them a destination that:

1. **Says in one screen what the product is**, with real screenshots, and puts the install button
   where the thumb is. Every store link carries `utm_source=hexcave_site`, so Play Console shows
   what the site sends.
2. **Makes a small studio credible.** Who makes these, that they are real and maintained, how to
   reach a person, and where the privacy and terms pages are. Store reviewers, ad networks and
   press check this; so do users before installing something from a name they do not know.
3. **Gives coming products a place to exist** before they ship (Come Through today), so a
   mention now is not lost.
4. **Hands press and creators what they need without an email** — name, one line, icon,
   screenshots, links — per product.

### 1.2 Goals

| # | Goal | Measure |
|---|---|---|
| G1 | A visitor knows what Hexcave makes within 5 seconds of the home page | The first viewport names the studio and shows real product imagery — checked by eye at 390 × 844 and 1440 × 900 |
| G2 | Every live product is one tap from its store | Each product page has the store button above the fold on a phone |
| G3 | Fast everywhere | Lighthouse ≥ 95 performance, 100 accessibility, 100 best practices, 100 SEO on the home page and every product page (mobile) |
| G4 | Nothing on the site is untrue | Every factual claim traces to a source file listed in §5; no number, quote or feature is invented |
| G5 | Adding a product is one data entry and its images | No page template is edited to add a fifth product |

### 1.3 Non-goals for v1 — stated, not hidden

- **No client services, case studies or "work with us".** Hexcave is products only (§0).
- **No blog or "library".** A blog nobody writes rots in public. Writing lives on theonlyengineer.com.
- **No newsletter, forms, accounts or comments.** Nothing to store, nothing to secure. Contact is email.
- **No analytics in v1.** The store links' UTM tags already measure the one thing that matters.
- **No CMS, no client-side framework, no UI kit.** Content is a typed data file; pages are static HTML.
- **No duplicate legal pages.** Each app's privacy, terms and account-deletion pages already live
  at `theonlyengineer.com/projects/<slug>/` (portfolio standing rule 9); the site links to them.
- **No AI-generated imagery, stock photos or illustrations of products.** Products are shown by
  their real screenshots and icons only.

## 2. Who it is for

1. **Someone who just saw a Hexcave product** (a Short, a post, a friend's phone) and wants to
   know if it is worth installing. On a phone, from a link, in under a minute.
2. **A checker** — a Play/AdMob reviewer, a journalist, a curator, a potential collaborator —
   confirming the studio is real and finding the policy pages and contact.
3. **Nizar**, pointing people somewhere better than a store page.

## 3. Information architecture

```
/                     Home: who we are in one line, the products, how we make things, contact
/hushcoil/            Product page
/ludo/                Product page (store name: Ludo Jaldi)
/come-through/        Product page (in development)
/prism/               Product page (browser games)
/press/               Press kit: per product name, one line, icon, screenshots, links; studio facts
/404.html             Not found
```

Five product-adjacent routes, one press page. Nothing else in v1.

## 4. The load-bearing decision

**Content is data, pages are templates, and every claim has a source.** Products live in one typed
file (`src/data/products.ts`) whose fields are the only things the templates print. A product page
cannot say something its entry does not contain, and its entry cannot contain anything its source
files (§5) do not support. That is what keeps the site honest as products change, and what makes
G5 true.

## 5. Content — what the site says, and where each fact comes from

**Voice.** Plain, specific, first person plural, short sentences. Say what the thing does, for
whom, and what it will not do to you. No superlatives ("best", "leading", "ultimate"), no
startup filler ("elevate", "seamless", "unlock", "empower", "journey", "crafted with passion",
"cutting-edge", "next-level"), no rhetorical questions, no exclamation marks, no emoji. If a
sentence would fit on any studio's site, cut it.

**Studio line (home, hero):** *Hexcave is an independent product and game studio.* Followed by
one sentence that is true of every product: we make small, well-made apps and games that respect
the person using them. The site then proves it with the products, not with adjectives.

**How we make things** — principles that are true of the products today, each shown with the
product that demonstrates it (verify each against the sources before printing it):

- **No account needed.** Hushcoil and Ludo play with no sign-up; Come Through keeps its data on
  the phone.
- **Works offline.** Hushcoil and Ludo's pass-and-play need no connection; Prism's launcher caches
  games to play offline.
- **Ads only at natural pauses, if at all.** Hushcoil shows full-screen ads only at a level's end
  and never mid-puzzle; Ludo's interstitial comes at the end of a game.
- **Original work.** Hushcoil's levels come from its own generator; names, art and sounds are
  the studio's own.

**Product sources** (read these; print nothing they do not support):

| Product | Status | Sources | Store / play link |
|---|---|---|---|
| Hushcoil | Live, Google Play | `../hushcoil/README.md`, `../hushcoil/release/listing.md` | `https://play.google.com/store/apps/details?id=com.theonlyengineer.hushcoil` |
| Ludo (Ludo Jaldi) | Live, Google Play | `../ludo/README.md`, `../ludo/docs/listing/store-listing.md` | `https://play.google.com/store/apps/details?id=com.theonlyengineer.ludo` |
| Come Through | In development, not on any store | `../come-through/README.md` (the first section only: what it is and why) | none — say "In development" and offer the email |
| Prism Games | Live, browser: 26 games, each playable at `https://hexcave.github.io/prism-games/games/<id>/<version>/` (verified 2026-11-28; the Pages root is a technical endpoint, never link it) | `../prism/README.md`, `../prism/prism-games/index.json` (title, tagline, description, version per game), `../prism/prism-games/games/<id>/cover.svg` | the per-game URLs |

Store links append `&referrer=utm_source%3Dhexcave_site%26utm_medium%3Dproduct_page` (product page)
or `…utm_medium%3Dhome` (home). Legal links: Hushcoil and Ludo have
`https://theonlyengineer.com/projects/<slug>/privacy/`, `/terms/` and `/delete-account/`; Come
Through and Prism have none yet — omit the links rather than invent them.

**Publisher name.** The apps appear on Google Play under the developer name **The Only Engineer**.
Say so once, plainly, in the footer and on the press page, so a visitor who taps through is not
surprised.

**Contact.** One address, `hello@hexcave.com`, held in one config constant (it starts receiving
mail once Zoho is set up after the domain transfer). Social: the YouTube channel
`https://www.youtube.com/@hexcave`.

**Assets** (copy into the site repo, optimise at build; never redraw a product):

| Product | Icon | Screenshots / art |
|---|---|---|
| Hushcoil | `../hushcoil/release/art/icon-512.png` | `../hushcoil/release/screenshots/0*.png`, `../hushcoil/release/art/feature-graphic.png` |
| Ludo | `../ludo/docs/listing/icon-512.png` | `../ludo/docs/listing/screenshots/*.png`, `../ludo/docs/listing/feature-graphic-1024x500.png` |
| Come Through | convert `../come-through/app/src/main/res/drawable/ic_launcher_{background,foreground}.xml` to one SVG | none — the page is text and the icon; no mock screenshots |
| Prism Games | none — set the name in type | `src/assets/products/prism/{arrowlock,hex-drift,lumen,chess}.png` (real screenshots of the live games, 1280 × 800, taken 2026-11-28); each game's `cover.svg` for the games grid |
| Studio | `../tools/brand/hexcave/mark.svg`, `avatar-800.png` | `../tools/brand/hexcave/banner-art.png` (Open Graph only) |

## 6. Page specifications

### 6.1 Home
Hero: the mark, the studio line, and the products visible without scrolling on desktop (on a
phone, the first product starts within the first screen). Then one block per product, in this
order: Hushcoil, Ludo, Prism Games, Come Through — name, one line, a real screenshot, status
("On Google Play" / "In your browser" / "In development"), and its link. Then *How we make things*.
Then contact and the footer.

### 6.2 Product page
Name, one line, store button (or "In development"), 3–6 real screenshots in a row that scrolls
horizontally on phones, a short "what it is" paragraph, 3–5 facts as a definition list (not icon
bullets), the principles that apply to it, and its legal links. Open Graph image: its feature
graphic where one exists.

### 6.2a Prism page — the games
Prism has no player-facing front: its live root is a technical endpoint for a launcher extension.
So its page is that front. Below the usual product content, a grid of all 26 games — cover, title,
tagline — each opening the game itself in a new tab. The catalogue is a snapshot committed to this
repo (`src/data/prism-games.json` and the covers in `src/assets/products/prism/covers/`), made
from `../prism/prism-games/index.json` by a small script (`scripts/snapshot-prism.mjs`), because
the site's CI cannot see the Prism repo. Re-run the script when Prism publishes.

### 6.3 Press
Studio facts (name, one line, publisher name on Play, contact, YouTube), then per product: name,
one line, status, icon and screenshot downloads (the original PNGs), and links. Plus the Hexcave
mark as SVG and PNG.

### 6.4 404
One line, a link home.

## 7. Business rules

- A product with `status: "live"` must have a working link; the build fails if a live product has none.
- A product with no legal pages prints none.
- No price, rating, download count, review or testimonial appears anywhere unless it is copied
  from a source on the day and dated — v1 prints none.

## 8. Monetization and policy

The site earns nothing directly. It must not contradict the store listings or the apps' policy
pages (Play's Metadata policy applies to anything that looks like a store claim). It shows no ads
and sets no cookies.

## 9. Distribution

The site is distribution for everything else: it is the link in every Short, post and listing.
The site itself needs only: correct titles and descriptions, Open Graph cards that render in
WhatsApp, X and LinkedIn, a sitemap, and `hexcave.com` pointing at it.

## 10. Non-functional requirements

- Static HTML, zero client-side JavaScript unless a feature cannot work without it (none in v1).
- Works without JavaScript, with images off (alt text), at 320 px wide, with 200 % zoom.
- WCAG 2.2 AA: contrast, focus visible, landmarks, one h1 per page, reduced-motion respected.
- Light and dark, following the system.
- Self-hosted fonts (Instrument Serif, Instrument Sans; SIL OFL), `font-display: swap`, subset to Latin.
- Every image responsive (AVIF/WebP with fallback), sized, lazy below the fold.

## 11. Risks

- **The site says something the product no longer does.** Mitigated by §4 and §5: claims come from
  the products' own docs, and changing a product means changing its entry.
- **Ludo's store screenshots show the older UI** (the redesign has not been uploaded to Play).
  Accepted for v1: the site shows what the store shows; refresh both together.
- **Come Through has no screenshots.** Accepted: an honest text-and-icon page beats a mock.
- **Prism's live status is unverified** (whether it reached users is open in the Prism section of
  the tracker). The page links to what is live and claims nothing about players.

## 12. Milestones

1. The five documents (this one first).
2. Astro project, design tokens, base layout, home page with real content.
3. Product pages and press page from the data file.
4. Build checks, Lighthouse pass, accessibility pass.
5. Deploy to GitHub Pages at `https://hexcave.github.io/hexcave-v2/`.
6. Nizar points hexcave.com at it (custom domain + `base: "/"`).

## 13. Review log

| Date | Change | By |
|---|---|---|
| 2026-11-28 | v1.0 written from the ask and the four product sources | Claude, with Nizar's answers |
