---
branch: 086-unsubscribe-opt-out
title: 086 Unsubscribe Opt Out
spec: 086-unsubscribe-opt-out
updated: 2026-07-03 12:17
phases:
  specify:
    status: done
    summary: "9 functional requirements captured, 0 clarifications needed"
    description: "One-click unsubscribe endpoint + opt-out Firestore write path for CAN-SPAM/GDPR compliance, split from #82."
    items:
      - id: US1
        title: "As a signup, I can opt out with a single click"
        status: done
      - id: US2
        title: "As the founder, opted-out emails are permanently excluded"
        status: done
  plan:
    status: done
    summary: "HTTPS two-step unsubscribe endpoint + optOuts Firestore collection; HMAC-signed token in token.ts; optout.ts pure exclusion logic; 5 phases"
  tasks:
    status: done
    summary: "19 tasks across 6 phases; 11-wave DAG; MVP = T001-T012"
  implement:
    status: done
    summary: "19/19 tasks done; 18 tests pass; constitution 11/11 PASS; tsc + eslint green"
  review:
    status: active
    substeps:
      code: active
      comments: active
      tests: active
      errors: active
      types: active
      simplify: active
      pr: pending
---
