---
title: Flaky test triage
author: agent-lyra
date: 2026-07-03
status: blocked
tags: [ci, testing]
---

Investigating the 12 intermittently failing tests in the CI suite.

Root cause looks like a shared fixture leaking state between test runs.
Need a decision on whether to parallelize per-file or isolate the fixture.
