---
description: Start (or reuse) the local dev preview so changes can be checked in the browser.
argument-hint: '[path to open, e.g. /bsc]'
---

Start the dev preview and open the requested page:

1. Use the preview tooling to start the server defined in `.claude/launch.json`
   (name `optyfolio-dev`, port 3000) — `preview_start`, then `preview_list` to get
   the server id. Reuse it if already running.
2. Navigate to `$ARGUMENTS` (default `/`).
3. Confirm it's serving and report the URL.

Prefer the preview tool over a raw backgrounded `npm run dev` so screenshots and
in-page `eval` work for verification.
