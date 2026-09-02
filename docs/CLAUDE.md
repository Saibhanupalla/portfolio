# CLAUDE.md

Guidance for AI coding agents working in this repository.

## Project

A personal portfolio design project: a mixed **developer + creative** portfolio inspired by the reference videos in this folder (`*.mp4`). The current deliverable is a design specification; the site itself is not yet built.

- `PORTFOLIO_DESIGN_SPEC.md` — the source-of-truth design direction (palette, typography, sections, motion, placeholder copy). Read this before designing or building any UI.
- `*.mp4` — visual reference videos that informed the spec. Do not delete or commit changes to these.

## Installed Skills

Two design skills are installed. Use them proactively for any UI/design work.

### impeccable
- Location: `.cursor/skills/impeccable/` and `.claude/skills/impeccable/`
- Use for: designing, redesigning, shaping, critiquing, auditing, polishing, animating, and otherwise improving frontend interfaces.
- Invoke with `/impeccable <command> [target]`. Run `/impeccable init` once to set up `PRODUCT.md`/`DESIGN.md` context before other commands.
- Key commands: `craft`, `shape`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `animate`, `colorize`, `typeset`, `layout`, `delight`.
- It enforces anti-AI-slop rules (no overused fonts, no gradient text, no side-stripe borders, no nested cards, no per-section uppercase eyebrows). Follow its `SKILL.md` setup steps when invoked.

### emil-design-eng
- Location: `.agents/skills/emil-design-eng/`
- Use for: UI polish, component design, animation decisions, and interaction details (Emil Kowalski's design-engineering philosophy).
- Apply its rules whenever writing motion/interaction code:
  - Animate only `transform` and `opacity`; use custom ease-out curves, never `ease-in` on UI.
  - Keep UI animations under 300ms; never animate keyboard-initiated actions.
  - Never animate from `scale(0)` (start at `scale(0.95)` + opacity); add `scale(0.97)` on `:active`.
  - Make popovers origin-aware; respect `prefers-reduced-motion`.
  - When reviewing UI code, output a Before/After/Why markdown table.

## Working Conventions

- When building or refining UI, read `PORTFOLIO_DESIGN_SPEC.md` first, then apply `impeccable` for overall design quality and `emil-design-eng` for motion/interaction polish.
- Respect the established palette and "section = color mode" system from the spec.
- Do not introduce AI-design tells called out by the `impeccable` skill.
- This folder is not a git repository; do not initialize one unless asked.
