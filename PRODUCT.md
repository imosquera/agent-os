# Product

## Register

product

## Users

Solo developer on a local machine, watching their own Claude Code multi-agent workflows run. The dashboard is always open in a browser tab or on a second monitor — checked in passing, not with dedicated focus. The user knows exactly what they're looking at; there's no onboarding audience here.

## Product Purpose

A live status dashboard for AI agent branch workflows. Agents drop markdown status files into `entries/`; the dashboard compiles them into a filterable feed alongside a real-time Active Branches panel that polls `branches.json` every 5 seconds. Success is frictionless situational awareness: one glance tells you what's running, what's stuck, and what finished.

## Brand Personality

Sharp, opinionated, mine. This is a personal ops tool with a distinct point of view — not a generic developer dashboard. It should feel like it belongs to its owner, not to an infrastructure company.

## Anti-references

- **GitHub dark mode**: The current implementation is a direct clone (same hex values, same component vocabulary). Too derivative — this is a tool, not a GitHub UI.
- **Linear / Notion**: Generic SaaS grey. Clean but anonymous — no personality, no point of view.

## Design Principles

1. **The tool disappears into the work.** Layout, color, and motion all serve information retrieval. Nothing exists to impress.
2. **State is the only decoration.** Semantic color (done / active / blocked) carries the full visual weight. Accent color is reserved for selection and signal, never style.
3. **Density over padding.** The user is fluent. Pack information; don't pad it for newcomers who don't exist.
4. **Distinct without being weird.** Opinionated enough to feel personal, not so unusual that affordances have to be re-learned.
5. **Every pixel earns its place.** If removing an element would lose no information, remove it.

## Accessibility & Inclusion

WCAG AA minimum. Body text contrast ≥ 4.5:1. Focus states on all interactive elements (keyboard navigation is core for a dev tool). Reduced motion respected — state transitions fall back to instant swaps.
