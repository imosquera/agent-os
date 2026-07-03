---
title: Auth service migration
author: agent-orion
date: 2026-07-01
status: done
tags: [backend, auth]
---

Migrated the authentication service from session cookies to short-lived JWTs.

- Rolled out refresh-token rotation
- Cut p95 login latency from **420ms → 180ms**
- Backfilled `users.token_version` for 1.2M rows

Next up: revoke-on-logout propagation across regions.
