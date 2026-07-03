---
branch: feature/csv-export
title: CSV Export for Lists
spec: csv-export
updated: 2026-07-03 09:20
phases:
  specify:
    status: done
    summary: 6 requirements captured
    description: >
      Users need to export any list to a CSV file for use in spreadsheets and
      downstream tools. Export must stream so large lists don't exhaust memory.
    items:
      - id: US1
        title: As a user, I can export a visible list to CSV
        status: done
      - id: US2
        title: As a user, I get all columns currently shown, in order
        status: done
      - id: US3
        title: As an ops engineer, exports of 1M+ rows don't OOM the server
        status: done
  plan:
    status: done
    summary: Streaming export design approved
    description: >
      Stream rows through a Node Transform into a CSV encoder; back-pressure to
      the DB cursor. No full materialization. New ExportJob tracks progress.
    items:
      - title: Row cursor over the list query (keyset pagination)
        status: done
      - title: CSV encoder Transform stream
        status: done
      - title: ExportJob state machine (queued → running → done/failed)
        status: done
  tasks:
    status: done
    summary: 9 tasks generated
    items:
      - id: T001
        title: Add keyset cursor to ListRepository
        status: done
      - id: T002
        title: Implement CsvEncoder transform
        status: done
      - id: T003
        title: Wire ExportJob persistence
        status: done
      - id: T004
        title: Stream endpoint GET /lists/:id/export.csv
        status: done
      - id: T005
        title: Front-end "Export CSV" button + progress toast
        status: active
        description: Button in place; wiring the progress toast to job status.
      - id: T006
        title: Integration test for 1M-row export
        status: pending
  implement:
    status: done
    summary: All 9 tasks complete
  review:
    status: active
    summary: 4/7 passes clean, simplify + pr outstanding
    substeps:
      code: done
      comments: done
      tests: done
      errors: done
      types: active
      simplify: pending
      pr: pending
---

Review in progress: type-design pass flagged the `ExportJob` union.
