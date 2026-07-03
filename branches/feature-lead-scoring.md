---
branch: feature/lead-scoring
title: Lead Scoring Engine
spec: lead-scoring
updated: 2026-07-03 09:35
phases:
  specify:
    status: done
    summary: 12 requirements captured, 3 clarifications resolved
  plan:
    status: done
    summary: Architecture + data model + quickstart ready
  tasks:
    status: done
    summary: 18 tasks generated across 4 workstreams
  implement:
    status: active
    summary: 11/18 tasks complete — scoring pipeline wired, backfill running
    items:
      - id: T004
        title: Build feature extraction pipeline
        status: done
      - id: T005
        title: Train + version the scoring model
        status: done
      - id: T011
        title: Wire real-time scorer into lead ingestion
        status: active
        description: Consuming the Kafka lead stream; scoring latency ~40ms p95.
      - id: T012
        title: Backfill historical leads
        status: active
        description: 1.2M of 3.4M rows scored so far.
      - id: T013
        title: Expose score on the lead detail API
        status: pending
      - id: T014
        title: Add score-threshold alerting
        status: pending
  review:
    status: pending
    substeps:
      code: pending
      comments: pending
      tests: pending
      errors: pending
      types: pending
      simplify: pending
      pr: pending
---

Latest: backfilling historical leads before enabling the live scorer.
