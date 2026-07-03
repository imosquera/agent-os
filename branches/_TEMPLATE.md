---
# One file per active branch. Path: branches/<branch-slug>.md
# The automode skill rewrites this whole file on every phase transition.
# This _-prefixed file is ignored by the dashboard (won't render as a card).

branch: feature/example            # REQUIRED — real git branch name
title: Human Readable Feature      # label shown on the card (falls back to branch)
spec: example                      # spec/feature slug (optional)
updated: 2026-07-03 09:35          # bump on EVERY write — drives "Xm ago" + ordering

# status for each phase is one of: done | active | pending | blocked
# - mark the phase currently running as `active`
# - use `blocked` on the phase that is stuck; put the reason in `summary`
# - when all five phases are `done`, the card auto-shows "done"
# - omitted phases/substeps render as `pending`, so partial files are fine
#
# Each phase may ALSO carry (all optional) — these appear when a user clicks the
# phase in the pipeline, in a collapsible detail panel:
#   summary:     one short line, always shown on the card
#   description: a paragraph shown at the top of the expanded panel
#   items:       the work list for that phase. In `specify` these are user
#                stories; in `tasks`/`implement` they are tasks; etc. Each item:
#                  - id:          optional short id (US1, T001, ...)
#                    title:       required, the story/task text
#                    description: optional extra line shown under the title
#                    status:      done | active | pending | blocked (done = struck through)
phases:
  specify:
    status: pending
    summary: ""
    description: ""
    items:
      - id: US1
        title: "As a <role>, I can <capability> so that <benefit>"
        status: pending
  plan:
    status: pending
    summary: ""
    description: ""
    items:
      - title: "Design/plan item"
        status: pending
  tasks:
    status: pending
    summary: ""
    items:
      - id: T001
        title: "First task"
        description: "Optional detail about the task"
        status: pending
  implement:
    status: pending
    summary: ""
    items:                         # usually the same task ids as `tasks`
      - id: T001
        title: "First task"
        status: pending
  review:
    status: pending                # becomes `active` once implement is done
    summary: ""
    substeps:                      # review-extension passes, keep this order
      code: pending                # each: done | active | pending | blocked
      comments: pending
      tests: pending
      errors: pending
      types: pending
      simplify: pending
      pr: pending
---

Optional one-line note — latest log line or what the branch is waiting on.
