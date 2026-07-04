---
branch: 104-ads-audit-ad-copy-landing-url
title: 104 Ads Audit Ad Copy Landing Url
spec: 104-ads-audit-ad-copy-landing-url
updated: 2026-07-03 14:34
phases:
  specify:
    status: done
    summary: "6 FRs captured, 0 clarifications needed"
    items:
      - id: US1
        title: "Update without a second API round-trip"
        status: done
      - id: US2
        title: "Count checks derived from text arrays"
        status: done
  plan:
    status: done
    summary: "Python-only; 4 files; _audit_ads_index helper + --audit-file flag; skip _live_headlines when audit index present; count derives from len()"
  tasks:
    status: done
  implement:
    status: done
  review:
    status: done
    summary: "4 agents; fixed: error guards on --audit-file, trailing-flag crash, uncovered-only live-fetch; 229 tests green"
    substeps:
      code: done
      comments: done
      tests: done
      errors: done
      types: done
      simplify: done
      pr: pending
---
