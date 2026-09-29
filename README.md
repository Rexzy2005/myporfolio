# rexzy.dev

Portfolio of **Pererat Timothy (Rexzy)**, a software and systems engineer.
Live at <https://www.rexzy.dev>.

A single-page site organised as a narrative: hero → capabilities → engineering case studies → experience → about → contact.

## Stack

Vite 7 · React 19 · TypeScript (strict) · Tailwind CSS v4 · npm · deployed on Vercel.

Four runtime dependencies: `react`, `react-dom`, `react-icons`, `clsx`. No router (anchor navigation), no backend, no CMS, no analytics.

## Scripts

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Vite dev server                                |
| `npm run build`     | Type-check (`tsc -b`) then production build     |
| `npm run preview`   | Serve the production build locally              |
| `npm run lint`      | ESLint                                          |
| `npm run typecheck` | TypeScript project references, no emit          |

## Structure

```
src/
  data/          all copy: profile, capabilities, case studies, projects, experience
  sections/      Hero, Capabilities, Work (+ work/), Experience, About, Contact
  components/
    layout/      Header (scroll-spy nav, mobile menu), Footer
    ui/          Section, Reveal, ButtonLink, TextLink, SocialLinks
    diagrams/    LayerDiagram (semantic HTML/SVG system diagrams)
  hooks/         useActiveSection
  index.css      design tokens, fonts, base styles, reduced-motion rules
public/
  fonts/         self-hosted Inter + JetBrains Mono (SIL OFL, licences included)
  images/        optimised WebP images used by the site
docs/            source for the social-share image
```

## Editing content

Everything visible is data-driven from `src/data/`. Components render **only the fields that exist**, so leaving a field out hides it cleanly.

- `profile.ts` — name, positioning line, location, links, navigation.
- `capabilities.ts` — the six discipline groups and their "In practice" links.
- `caseStudies.ts` — engineering case studies. Optional fields: `problem`, `system`, `image`, `architecture` (+ diagram), `decisions`, `focus`, `infrastructure`, `reliability`, `result`, `contribution`, `stack`.
- `projects.ts` — "More work" list and the hackathon "Recognition" cards.
- `experience.ts` — roles, grouped as leadership / engineering / additional. `period` is optional; never guess a date.

**Content rule:** state only facts that exist in the repo, the résumé, or that the owner has confirmed. No invented metrics, employers, dates, certifications, or outcomes. Comments at the top of each data file record the evidence status of the content.

## Design system

Tokens live in `src/index.css` (`@theme`). Use the tokens, not raw values.

| Group | Tokens |
| --- | --- |
| Type | `text-display` (fluid 30→76px) · `text-title` · `text-heading` · `text-body-lg` · `text-body` · `text-small` · `text-micro` (mono labels). Sans: Inter. Mono: JetBrains Mono. |
| Surfaces | `bg-ink` `#050507` · `bg-surface` `#0b0b10` · `bg-surface-2` `#12121a` |
| Lines | `border-line` (decorative) · `border-line-strong` · `border-line-ui` (3:1, for controls) |
| Text | `text-fg` 17.5:1 · `text-fg-muted` 8.7:1 · `text-fg-faint` 6.2:1 (all on `ink`, all AA) |
| Brand | `bg-accent` `#5266eb` (white text 4.7:1) · `text-accent-soft` `#9aa6ff` (9:1) |
| Shape | `rounded-pill`, default radii; hairline borders instead of heavy shadows |
| Layout | `.container-page` (max 75rem, 24/32/48px gutters) · section rhythm `--section-y` · editorial 4/8 column split on `lg` |
| Breakpoints | Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536 |
| Motion | CSS only. `.reveal` (scroll fade-in), `animate-rise` (hero entrance). Disabled under `prefers-reduced-motion`. |

Buttons: `ButtonLink` (`primary` / `secondary`, compact on phones). Inline links: `TextLink`. Both are real anchors; external links open in a new tab with `noopener` and announce it to screen readers.

## Accessibility

Skip link, landmarks, one `h1` with no skipped heading levels, visible focus rings, `aria-current` scroll-spy navigation, a mobile menu with `aria-expanded` that closes on Escape / navigation, descriptive link text, image alt text, WCAG AA contrast on all text, and full `prefers-reduced-motion` support. Verified with axe-core (WCAG 2.0–2.2 A/AA + best practices): 0 violations on desktop and mobile.

## Performance

JS ≈ 75 kB gzip (React + app code), CSS ≈ 6 kB gzip, fonts self-hosted and preloaded (≈ 88 kB), images optimised to WebP with explicit dimensions and lazy loading, no animation library, no layout-shifting content.

## SEO and assets

`index.html` carries the title, description, canonical, Open Graph / Twitter tags, and `Person` + `WebSite` JSON-LD, plus a `<noscript>` fallback. `public/` provides `robots.txt`, `sitemap.xml`, `404.html`, favicons and `og-image.png` (1200×630; source in `docs/og-image.template.html`). `vercel.json` sets security headers and long-lived caching for fonts.

## Open items (need the owner)

- **Titles.** The site now uses the brief's conservative titles: ClearSig "Frontend Engineer / Software Engineering contributor" (the résumé says "Head of Product Engineering / Frontend Lead") and GeoPonix "Co-founder, COO & CTO" (résumé: "Co-founder & CTO"). Confirm both.
- **Résumé files** (`public/Pererat-Timothy-Resume.pdf`, `public/resume.html`) still carry the older titles and a "5+ years" claim; update them to match.
- **Unevidenced capabilities.** Linux, Red Hat, Azure, Ansible, monitoring, observability, system hardening and reliability engineering are listed because the brief lists them, but nothing in the repo or résumé evidences them. Add real examples or remove them.
- **Thin case studies.** GeoPonix and Nakama contain only what the brief states. Add problem, decisions, infrastructure, results, dates and links when available; the UI picks new fields up automatically.
- **Diagrams** are simplified overviews derived from the stack and components named in the brief. Verify against the real architecture.
- **DETALINK / nHub Foundation** come from the brief with no dates. They may overlap "Deta Wallet" / "NHUD Foundation" (possibly a misspelling of nHub) from the résumé. Confirm and merge if so.
- **Removed:** the Discord link (`discord.com/users/dev_rex` is not a valid profile URL; Discord uses numeric IDs) and the unverifiable counters (5+ years, 25+ projects, 12+ clients).
- **Not included:** Uphouse (2024–2025) appears only in the older PDF résumé.
- **Unreferenced assets in `public/`** (~10 MB): `profile.jpg`, `my-brand-name.png`, `dev-rex.jpg`, `projects/*`, `my picture.HEIC`. Consider deleting.
- **`ziralabs`** appeared in the previous README notes with no context; nothing was added.
- **Canonical host** is assumed to be `https://www.rexzy.dev/` (where the live site resolves). Confirm apex vs `www`.
