# AGENTS.md — hexcave.com

## Instruction ownership and complete reading

Before doing work, explicitly read this entire `AGENTS.md`, continuing through the end
if a reader returns only an excerpt. Do not assume automatic loading included every line.
When working in a submodule, also read its complete `AGENTS.md` before touching its files.
Read the workspace root `AGENTS.md` too when working from a submodule checkout inside
this workspace. Apply directory-scoped sections only to the work they govern.

All rules, guidelines and project knowledge for agents go only in the relevant
repository's `AGENTS.md`, in agent-agnostic wording. Never create agent-specific rule
files. Never keep a rule only in one agent's private memory or settings. When a new rule
is given or learned, record it here in the same session. Agent-specific setup, commands,
models and usage notes belong only in the dedicated [agent notes](../wiki/agent-specific-instructions.md), to which this
file refers; they must not be embedded in a project rule.


The website of Hexcave, an independent product and game studio: a small static Astro site whose
job is to make each Hexcave product easier to find, trust and install. **The most surprising
constraint: the site may not say anything its sources do not support.** Every product fact comes
from that product's own docs (PRD §5), and the design forbids the generic look of a template site
(`docs/DESIGN.md` → *What makes it look AI-made*). Both are acceptance criteria, not taste.

**The spec is [`PRD.md`](PRD.md) and it is authoritative.** Section references in this file
point at it. If code and PRD disagree, the PRD wins unless the deviation is written down in
`docs/ARCHITECTURE.md` → *Deviations*.

Repo-level conventions in `../AGENTS.md` — the wiki layer, `sources/`, `[[links]]`,
frontmatter — **do not apply in here.** This is a normal Astro project. What crosses the
boundary is the tracker: work on this site is tracked in the *Hexcave website* section of
`../tasks/todo.md`.

## Orientation

| Read | For |
|---|---|
| `PRD.md` | What the site is for, the pages, the content rules and every fact's source (§5) |
| `docs/DESIGN.md` | Tokens, type, layout, components, and the list of things never to do |
| `docs/ARCHITECTURE.md` | Stack, file layout, the product data model, the base path |
| `README.md` | What this is, how to run and deploy it |

## Commands

```bash
npm install
npm run dev        # http://localhost:4321/hexcave-v2/
npm run build      # static site in dist/; runs the content check; must finish with no warnings
npm run preview    # serve dist/ exactly as Pages will
npm run check      # astro check (types)
```

## The rules that are easy to break

1. **No invented facts.** A number, feature, status, quote or claim on the site must be in the
   product's source files (PRD §5). If a source does not say it, the site does not either.
   No prices, ratings, download counts, testimonials or "trusted by".
2. **Products are data.** Add or change a product in `src/data/products.ts` and its assets; never
   hard-code product content in a page or component.
3. **Real imagery only.** Products are shown by their own store screenshots and icons. No device
   mockups, stock, AI images, illustration or decorative gradients.
4. **Every store link is tagged** `utm_source=hexcave_site` through the one helper that builds it.
5. **Legal pages are linked, not copied.** They live on theonlyengineer.com (PRD §5).
6. **No client-side JavaScript** unless a feature cannot work without it; none does in v1.
7. **Everything internal goes through `import.meta.env.BASE_URL`.** The site runs under
   `/hexcave-v2/` until the domain moves; a hard-coded `/` breaks the preview.
8. **Keep it small.** No new dependency, integration, page or abstraction without a line in the
   PRD that needs it.
9. **Words to avoid** are listed in PRD §5 (voice). Read the page aloud before shipping it.

## What this owes the portfolio

- **Revenue line:** none directly. It is the link every product's distribution points at.
- **Policy:** must not contradict any store listing or app policy page.
- **Domain:** hexcave.com moves from GoDaddy to Namecheap (root `tasks/todo.md` → Foundation);
  pointing it here is Nizar's step after the transfer completes.
