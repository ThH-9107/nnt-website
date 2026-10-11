# AGENTS.md — Nguyen Ngoc Thanh Portfolio

This repository is a personal academic portfolio for **Nguyen Ngoc Thanh**.

Before changing factual content, page hierarchy, project prominence, or the portfolio's central concept, read the files in `/docs`.

## Required reading order

1. `docs/DO_NOT_INVENT.md` — hard factual and wording constraints.
2. `docs/FACTS_AND_METRICS.md` — canonical numbers, dates, statuses, and evidence notes.
3. `docs/PORTFOLIO_CONTEXT.md` — narrative context and project history.
4. `docs/CONTENT_ARCHITECTURE.md` — what belongs where and what should receive emphasis.
5. `docs/DESIGN_SYSTEM.md` — current visual/interaction concept.
6. `docs/OPEN_QUESTIONS.md` — unresolved facts that must not be silently guessed.
7. `docs/ASSET_MANIFEST.md` — image strategy and future asset slots.

## Precedence when information conflicts

Use this order:

1. New explicit instruction from Thanh in the current task.
2. `docs/DO_NOT_INVENT.md`
3. `docs/FACTS_AND_METRICS.md`
4. `docs/OPEN_QUESTIONS.md`
5. `docs/PORTFOLIO_CONTEXT.md`
6. Existing website copy / old resume copy

Old website text is **not automatically authoritative**. Several older drafts contain outdated or unreconciled numbers.

## Core portfolio rule

This is not a résumé dump.

The portfolio's current central idea is:

> **Change the scale of attention.**

Primary scale labels:

**IMAGE → ORGANISM → LEARNER → COMMUNITY → AUDIENCE**

Secondary verbs:

*See → Test → Share → Serve → Express*

The scale concept is primary. A connecting path may remain as a subtle visual motif, but do not make a branching "tree" the dominant metaphor unless Thanh explicitly changes direction.

## Factual integrity

Never make a statement more impressive by making it less accurate.

If a claim is not supported by the docs:
- preserve conservative wording,
- insert a clearly marked placeholder,
- or ask Thanh.

Never silently infer publication status, research success, participant counts, money raised, or experimental results.

## Project-story behavior

The five main stories should feel like parts of one persistent portfolio world.

Preferred normal browsing:
- user remains conceptually anchored to the scale map,
- project stories open as large editorial overlays / route-aware drawers,
- closing returns to the same map state,
- direct URLs remain bookmarkable and render standalone when opened directly.

Do not revert the project stories into five visually identical generic pages.

## Interaction rules

- Scroll may control the active scale.
- Hover should be cosmetic only unless Thanh explicitly requests otherwise.
- Clicking may jump intentionally or open a project story.
- Do not let hover and scroll compete for the same active-state control.
- Respect `prefers-reduced-motion`.
- Keep a fast path for a busy admissions reader.

## Technical restraint

Prefer:
- semantic HTML,
- CSS,
- SVG,
- lightweight motion already in the stack.

Avoid unless explicitly requested:
- Three.js,
- React Three Fiber,
- WebGL,
- particle engines,
- heavy canvas scenes,
- gimmicky cursor effects.

## Content maintenance

When a factual status materially changes (for example, manuscript status), update:
- `FACTS_AND_METRICS.md`
- `PORTFOLIO_CONTEXT.md`
- `OPEN_QUESTIONS.md` if relevant
- website copy

in the same work session when possible.

## Privacy

This context pack is intentionally public-portfolio-oriented.

Do not add:
- passport numbers,
- home address,
- private family details,
- private health information,
- immigration records,
- account numbers,
- private contact details beyond what Thanh explicitly wants public,
- identifiable information about children or beneficiaries that is not already approved for public use.
