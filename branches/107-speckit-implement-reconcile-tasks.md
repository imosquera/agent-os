---
branch: 107-speckit-implement-reconcile-tasks
title: 107 Speckit Implement Reconcile Tasks
spec: 107-speckit-implement-reconcile-tasks
updated: 2026-07-03 15:56
phases:
  specify:
    status: done
    summary: "6 requirements captured, 0 clarifications needed"
    items:
      - id: US1
        title: "As an operator, I am warned when clarify ran after tasks before implementation begins"
        status: done
      - id: US2
        title: "As an operator, the normal pipeline order proceeds without interruption"
        status: done
      - id: US3
        title: "As an operator, missing tasks.md still errors as before"
        status: done
  plan:
    status: done
    summary: "SKILL.md edit: mtime guard before implement loop; halt-and-prompt if stale, --force bypass; all 11 constitution N/A or PASS"
  tasks:
    status: done
  implement:
    status: done
  review:
    status: done
    summary: "code+simplify passes applied: fixed fragile substitution, --force moved to top, steps 2/3 merged, explicit exit-code check; constitution re-validated OK"
    substeps:
      code: done
      comments: done
      tests: done
      errors: done
      types: done
      simplify: done
      pr: done
---
