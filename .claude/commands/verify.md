---
description: Format, lint, and build — the standard verification gate after any change.
---

Run the project's verification gate and report results concisely:

```
npm run format && npm run lint && npm run build
```

- A clean run means Prettier made no changes, ESLint passed, and the Next.js
  production build (TypeScript included) succeeded.
- If anything fails, surface the exact error and fix it before moving on — don't
  report success on a partial pass.
