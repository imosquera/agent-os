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

// The SpecKit plan.md carries a consistent set of fields across features; the
// `plan` phase can surface them in its detail panel.
const techContext = z
  .object({
    language: z.string().optional(),
    dependencies: z.string().optional(),
    storage: z.string().optional(),
    testing: z.string().optional(),
    target_platform: z.string().optional(),
    project_type: z.string().optional(),
    performance: z.string().optional(),
    constraints: z.string().optional(),
    scale: z.string().optional(),
  })
  .partial();

const complexityItem = z.object({
  violation: z.string(),
  why: z.string().optional(),
  rejected: z.string().optional(),
});

const planState = phaseState.extend({
  tech_context: techContext.optional(),
  constitution: z.enum(["pass", "violations", "n/a"]).optional(),
  structure_decision: z.string().optional(),
  complexity: z.array(complexityItem).optional(),
});

const branches = defineCollection({
  // Branch status is plain YAML (one file per branch). Ignore _-prefixed files
  // so branches/_TEMPLATE.yaml can live here as a reference without rendering.
  loader: glob({
    pattern: ["**/*.{yaml,yml}", "!**/_*"],
    base: "./branches",
  }),
  schema: z.object({
    branch: z.string(),
    title: z.string().optional(),
    spec: z.string().optional(),
    updated: z.coerce.date().optional(),
    // Link to the tracking GitHub issue/PR for this branch.
    issue: z.string().url().optional(),
    // Name of the Claude Code session driving this branch.
    session: z.string().optional(),
    // Latest log line / what the branch is waiting on (was the markdown body).
    note: z.string().optional(),
    phases: z
      .object({
        specify: phaseState.optional(),
        plan: planState.optional(),
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
