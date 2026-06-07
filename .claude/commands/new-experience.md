---
description: Scaffold a new role in the experience timeline (body component + entry + logo).
argument-hint: '[company / role]'
---

Add a new experience entry for: `$ARGUMENTS`

The timeline lives in `components/pages/About/ExperienceTimeline/`. Each role is a
body component rendered from the `entries` array in `index.tsx`. Steps:

1. **Logo** — add the company logo to `public/` (square, ideally ≥128px). Remember
   next/image caches by URL, so use a fresh filename.
2. **Body component** — create `<Company>.tsx` following the existing role components
   (the simplest is just a `Link` and a short description): a `TimelineItemCard` →
   `TimelineItemSection` with the company `Link` and the description / `BulletList`. Use
   `AnimatedNumber` for any stats, real `—` em dashes, and curly apostrophes.
3. **Entry** — add to the `entries` array in `index.tsx`, in reverse-chronological
   order: `logo` (`<LogoImg src="/..." />`), `role`, `company`, `companyUrl`, `kind`
   (`'Work'` | `'Education'`), `start: new Date(year, monthIndex, 1)`, optional `end`
   (omit for the current role → shows "Present", no duration), and `body: <Company />`.
   Months are formatted/abbreviated automatically; durations count **inclusively**.

Then `/verify` and `/visual-check /` in both themes.
