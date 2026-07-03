import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Load markdown from the repo-root entries/ folder so agents keep dropping
// files in the same place they always have.
const entries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./entries" }),
  // Everything optional: agents drop all kinds of markdown here, and a report
  // with no frontmatter should still render rather than fail the whole build.
  schema: z.object({
    title: z.string().optional(),
    author: z.string().default("unknown"),
    date: z.coerce.date().optional(),
    status: z.enum(["done", "in-progress", "blocked"]).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// A single branch's SpecKit progress. Written by the phase-runner skill as it
// moves a feature through specify → plan → tasks → implement → review. Every
// field is optional so a half-written status file still renders.
const phaseStatus = z.enum(["done", "active", "pending", "blocked"]);

// A work item inside a phase: a user story (specify), a task (tasks), etc.
const phaseItem = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  status: phaseStatus.optional(),
});

const phaseState = z.object({
  status: phaseStatus.default("pending"),
  summary: z.string().optional(),
  description: z.string().optional(),
  items: z.array(phaseItem).optional(),
});

const branches = defineCollection({
  // Ignore _-prefixed files so branches/_TEMPLATE.md can live here as a
  // reference without rendering as a card.
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./branches" }),
  schema: z.object({
    branch: z.string(),
    title: z.string().optional(),
    spec: z.string().optional(),
    updated: z.coerce.date().optional(),
    phases: z
      .object({
        specify: phaseState.optional(),
        plan: phaseState.optional(),
        tasks: phaseState.optional(),
        implement: phaseState.optional(),
        review: phaseState
          .extend({
            // review sub-passes from the review extension:
            // code, comments, tests, errors, types, simplify, pr
            substeps: z.record(phaseStatus).optional(),
          })
          .optional(),
      })
      .default({}),
  }),
});

export const collections = { entries, branches };
