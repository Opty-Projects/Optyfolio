---
description: Screenshot a page in BOTH dark and light themes to verify a visual change.
argument-hint: '[path, e.g. / or /bsc]'
---

Verify the page at `$ARGUMENTS` (default `/`) in both themes:

1. Ensure the preview is running (`preview_start` → `optyfolio-dev`); navigate to the path.
2. Screenshot in the current theme.
3. Toggle the theme — click the header button whose `aria-label` is
   "Switch to light mode" / "Switch to dark mode" — then screenshot again.
4. Report whether the change looks right, paying attention to **readability and
   contrast in both modes**. The design is warm: bright accents on a dark base,
   deeper accents on a light base — accents must stay legible against the background.

For precise checks (colours, sizes, wrapping) prefer `preview_inspect` / `preview_eval`
over eyeballing the screenshot.
