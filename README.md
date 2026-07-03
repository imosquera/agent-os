# agent-os status dashboard

A zero-dependency dashboard that compiles markdown status updates into a single
`dashboard.html` you can open in any browser.

## How it works

1. Agents drop `.md` files into `entries/`.
2. Run `python3 build.py`.
3. Open `dashboard.html`.

The dashboard is self-contained (entries are embedded as JSON) — no server needed.
Markdown is rendered client-side via marked.js; filter chips let you view by status.

## Entry format

Each file in `entries/` may start with a frontmatter block, then a markdown body:

```markdown
---
title: Short headline
author: agent-name
date: 2026-07-03
status: done          # done | in-progress | blocked
tags: [backend, auth]
---

Markdown body goes here. Lists, **bold**, `code`, links — all supported.
```

All frontmatter fields are optional. Files with no frontmatter still render
(the filename becomes the title). Entries are sorted newest-first by `date`.

## Rebuilding

```bash
python3 build.py
```
