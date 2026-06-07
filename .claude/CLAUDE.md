# Project guide for Claude

A personal portfolio — a fully static Next.js site deployed on Vercel. Changes
tend to be small and visual; favour fast, verified, design-consistent edits.

## Stack

- **Next.js 16** (Pages Router) + Turbopack — fully static (SSG)
- **React 19**, **TypeScript 6** (strict)
- **MUI 9** + **Emotion 11** (`styled`) — no Tailwind
- ESLint 9 **flat config** (`eslint.config.mjs`); Prettier (no semicolons, single quotes)
- `next/font` (Inter body, Space Grotesk display), `next/image`, `@vercel/analytics`

## Run & verify

- Dev server: `npm run dev` — or `./start.sh` for the Dockerised env (node:24-alpine)
- **Verify after every change:** `npm run format && npm run lint && npm run build`
  (or `/verify`). A clean run = Prettier no-ops, ESLint passes, the production build
  compiles (TypeScript included).
- Verify **visually in both themes** via the preview (`/visual-check <path>`); the
  light/dark toggle is the header button.

## Map

- `pages/` — `_app` (theme provider + meta), `_document`, `index` (About), `bsc`, `msc`
- `components/layout/` — `Page` (nav, animated background), `Footer`
- `components/pages/About/` — hero, `ExperienceTimeline/` (one body component per role), skills
- `components/pages/CoursesPage/` — shared by `/bsc` and `/msc` (search + group/sort)
- `components/shared/` — `Card`, `GradientText`, `AnimatedNumber`, `AnimatedSentence`/`AnimatedChar`
- `data/` — `courses`, `links`, `navigation`, `skills` (all content lives here)
- `styles/` — `tokens` (design system), `getDesignTokens` (MUI theme), `fonts`
- `utils/` — `useInView`, `useCountUp`, `smoothStepIn`, `groupBy`, `courses`

## Design system (`styles/tokens.ts`)

- Single warm accent palette anchored on amber **#f9a825**. Don't hardcode accent
  colours — use `warm`, `warmGradient`, `warmGradientStrong`, `warmGradientSoft`,
  `gradientText(mode)`.
- `gradientText(mode)` is theme-aware (brighter on dark, deeper on light) so accents
  stay legible in both modes — preserve that contrast.
- Glassmorphism via `glass(theme)` / `glassHover(theme)`; animated background blobs in
  `Page/styles.ts`; dark/light via `useSyncExternalStore` (SSR-safe).
- Motion uses the `easing` tokens; scroll-reveal uses the `smoothStepIn` class + observer.

## Conventions

- Styled components live in a sibling `styles.ts`; component files stay markup-only.
- Prefer tokens over literals; reuse `easing`, `glass`, and the `warm*` gradients.
- Typography in JSX: real `—` (em dash), curly `’` apostrophes, and a literal `&`
  (not `&amp;`/`&apos;`).
- Keep comments terse — one concise line for a real constraint, none for the obvious.
- Content lives in `data/`; abbreviate months (Sep, not September).

## Known pitfalls

- **SWC whitespace:** an HTML entity immediately after an inline element drops the
  leading space → use a literal `’`/`&`. Prettier won't change it.
- **Hydration:** the theme is dark by default and SSR-rendered; anything time- or
  locale-dependent (e.g. a rendered year) needs `suppressHydrationWarning`.
- **next/image cache:** optimised images are keyed by URL — rename the file to bust a
  stale one.
- **smoothStepIn:** the reveal observer only sees elements present when it runs; after a
  list changes (e.g. search filtering), re-run `observeSmoothStepInElements` or re-added
  nodes stay at `opacity: 0`.
- **`styled(IconButton)`** drops the polymorphic `href` type — add a
  `<{ href?: string; target?: string; rel?: string }>` generic.
- **Durations:** experience spans count months inclusively (both endpoints).
- **Docker:** `node_modules`/`.next` are container-local volumes — sharing host binaries
  corrupts Turbopack.

## Workflow

- Change → `/verify` → `/visual-check` the affected page in both themes.
- Commit only when asked (`/commit` branches off `main` first). Never push unless asked.
