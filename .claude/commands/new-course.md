---
description: Add a course to the BSc or MSc list in data/courses.ts.
argument-hint: '[bsc|msc] [course name]'
---

Add a course to `data/courses.ts` (`bscCourses` or `mscCourses` per `$ARGUMENTS`).

Each entry follows the `Course` type:

- `name`, `href` (the course page URL), `score` (0–20), `credits` (ECTS)
- `period` — `'Nth year, Nth semester'` (this drives the "Period" grouping)
- `branch` — one of the union values in the `Course` type (e.g. `'Distributed Systems'`)
- `links?` — optional resources; each `Icon` is either a `react-icons` component or a
  string path to a `public/` image, plus a `tooltip` (used as the image `alt`)

The page GPA recomputes automatically from `score`×`credits`. After editing, `/verify`
and `/visual-check /bsc` (or `/msc`) — try the search and the group/sort controls.
