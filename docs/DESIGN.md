# hexcave.com — Design

## Use conditions — start here

Most visitors arrive **on a phone, from a link in a video description or a chat**, half-interested,
with a thumb and ten seconds. They decide by looking at the product, not by reading about the
studio. The rest arrive on a laptop to check something: is this real, where is the privacy page,
who do I email.

Everything below follows from that: the products' own screenshots carry the page; type is large
and calm; the install button is where the thumb is; nothing moves that the visitor did not ask
to move.

## The idea

**An editorial page about four small, well-made things.** Think of a good independent publisher's
catalogue, not a SaaS landing page. Warm paper, ink-dark type, one ember accent. Big Instrument
Serif names, Instrument Sans for everything else. The products' own colourful screenshots are the
only saturated colour on the page, so they glow against the paper. Restraint is the brand: the
studio is confident enough to let the work speak.

## Colour

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#F6EFE6` | `#0E0B14` | Page background |
| `--paper-2` | `#EFE5D8` | `#1B1526` | Alternating bands, cards, code |
| `--ink` | `#1B1526` | `#F6EFE6` | Text, the mark's dark fill |
| `--ink-2` | `#5A5163` | `#C9BDCF` | Secondary text, captions (≥ 4.5:1 on both papers — verify) |
| `--rule` | `#DDD0C0` | `#2E2638` | Hairlines, borders |
| `--ember` | `#E2552F` | `#FF7A52` | Links on hover, focus ring, the one accent; never large fills |
| `--amber` | `#FFB84D` | `#FFB84D` | The mark only |

Dark follows `prefers-color-scheme`. There is no toggle. Contrast is checked, not assumed: body
text ≥ 7:1, secondary ≥ 4.5:1.

## Type

- **Instrument Serif** (regular, italic) for the wordmark, page titles, product names and pull
  lines. It is a display face: use it large (≥ 32 px), never for body or UI text.
- **Instrument Sans** (variable, 400–600) for everything else.
- Scale (fluid with `clamp`): display 56→112 px (product names on their pages, the home line),
  h2 36→56, h3 22→28, body 17→19 px at line-height 1.55, small 14 px for meta and captions.
- Measure: body text 60–68 characters. Headlines may run wider but break by hand where it
  matters (`text-wrap: balance`).
- Letter-spacing: default for serif; small caps-style labels (status, meta) in Instrument Sans
  600, 12–13 px, uppercase, +0.08em, `--ink-2`.

## Layout and spacing

- 8 px base; section padding 96–160 px desktop, 64–96 phone. Generous, not empty.
- A 12-column grid at ≥ 960 px with a 1200 px max content width; full-bleed bands are allowed for
  product screenshot rows.
- Asymmetry is welcome: text left on 5 columns, imagery 7 columns, alternating per product on the
  home page. On phones everything is one column, imagery first for products.
- Hairline rules (`1px var(--rule)`) separate sections instead of cards with shadows.

## Components

- **Header:** the mark (24 px) + "Hexcave" in Instrument Serif, then three text links: Products,
  Press, Contact. No hamburger on phones; the links fit (wrap if they must).
- **Product block (home):** status label, name in serif, one line, a tilted-nothing, frameless
  stack of 2–3 real screenshots with a 20 px radius and a 1 px `--rule` outline (no device frames,
  no fake shadows), and one text link: "See Hushcoil →" plus the store button.
- **Store button:** Google's official "Get it on Google Play" badge (download the official
  artwork and follow Google's badge guidelines; do not restyle it). For Prism: a plain ink button
  "Play in your browser". For Come Through: no button; the status label "In development" and a
  `mailto:` line.
- **Screenshot row (product page):** horizontal scroll-snap row on phones, a 3-up grid on desktop;
  native lazy loading; the first image eager.
- **Facts list:** a `<dl>` in two columns on desktop — term in small uppercase sans, value in body.
- **Principles:** four short statements in a 2 × 2 grid, each with the product that proves it as
  a quiet link underneath.
- **Footer:** contact email, YouTube, the publisher line ("Our apps are published on Google Play
  as The Only Engineer."), © year, nothing else.
- **Links:** underline with `text-underline-offset: 0.2em`, ember on hover. Focus: 2 px ember
  outline with offset, always visible.

## Motion

None by default. At most: images fade in over 200 ms once loaded, and only when
`prefers-reduced-motion` is not set. No scroll-triggered animation, parallax, marquee, cursor
effects or hover zooms.

## Imagery

- Products: their own store screenshots and icons, untouched apart from resizing. Show the real
  aspect ratio. Never put them in device mockups or perspective.
- Studio: the Hexcave mark (`../tools/brand/hexcave/mark.svg`). The cave art (`banner-art.png`) is
  for Open Graph cards only, not page decoration.
- No stock photos, no AI-generated images, no illustration, no decorative blobs or gradients, no
  abstract 3D, no icon sets used as bullet decoration.

## What makes it look AI-made — never do these

- Centred hero with a gradient headline, a subheading, and two buttons ("Get started", "Learn more").
- Three-column feature cards with an icon on top of each; any grid of identical cards with icons.
- Glassmorphism, glow, gradient meshes, purple-to-blue anything, noise overlays.
- Emoji or icons as bullet points; "✨"; sparkles; rockets.
- Fake numbers ("10k+ users", "99.9%"), fake logos ("Trusted by"), testimonials, star ratings.
- Copy that could belong to any company; words listed in the PRD §5 voice rules.
- Sections titled "Why choose us", "Our mission", "What we offer", "Features".
- Every section the same height and rhythm; everything centred.
- Dark mode as the only mode with neon accents.

## Accessibility

One `h1` per page; landmarks (`header`, `main`, `footer`, `nav`); skip link; alt text that says
what the screenshot shows ("A Hushcoil board of 99 coiled snakes, level 297"); focus visible;
targets ≥ 44 px; no text in images except the products' own screenshots and the Play badge.
