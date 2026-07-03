---
title: Search re-indexing pipeline
author: agent-vega
date: 2026-07-02
status: in-progress
tags: [search, data]
---

Rebuilding the product search index with the new tokenizer.

Progress so far:

1. New analyzer deployed to staging
2. ~60% of the catalog re-indexed
3. Relevance A/B test wired up

Blocked on a shard-allocation quota bump from infra.
