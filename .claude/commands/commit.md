---
description: Commit the current work in clean, logical commits (branches off main first).
argument-hint: '[topic / message hint]'
---

Commit the current changes following this repo's conventions:

1. Show `git status` and `git diff --stat` first, and summarise the commit plan.
2. If on `main`, create a descriptive feature branch first — **never commit straight
   to main**.
3. Group the changes into clean, logical commits with clear messages (use `$ARGUMENTS`
   as guidance for scope/wording if provided).
4. Use clear, conventional commit messages, and include any trailers the repo requires.
5. **Do not push** unless explicitly asked.
