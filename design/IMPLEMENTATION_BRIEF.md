# Implementation Brief

This brief is for the implementation agent applying the Orchestration Ledger redesign in the existing Astro codebase.

## 1) Current State Alignment

The site already has the right strategic content and positioning. The codebase in [src/content/siteContent.ts](../src/content/siteContent.ts) and the homepage in [src/pages/index.astro](../src/pages/index.astro) establish a practical, evidence-first identity without sounding generic.

This means the implementation brief should prioritize refinement, not reinvention:
- Keep the strong positioning and language around workflow bottlenecks and human ownership.
- Tighten the homepage into a more memorable system-review composition.
- Increase the consistency of the signature motif and proof diagrams.
- Preserve the credibility of the current content while improving its visual distinctiveness.

## 2) Implementation Goal

Ship a site that feels authored and specific to Dave's positioning in AI-native engineering, with visible systems reasoning and non-generic composition.

## 3) Priority Order

1. Replace first viewport with a stronger Decision Review Board composition.
2. Introduce global Failure Mode Lens behavior as progressive enhancement.
3. Apply design tokens and typographic system consistently across the site.
4. Standardize project/case-study anatomy around boundary + outcome + exceptions.
5. Bring writing and about pages into ledger grammar.
6. Add visual polish only after the core identity and scan paths are clear.

## 4) Files Most Likely To Change

Core styling and layout:
- src/styles/global.css
- src/layouts/BaseLayout.astro

Homepage and page structure:
- src/pages/index.astro
- src/pages/work/index.astro
- src/pages/work/[slug].astro
- src/pages/writing/index.astro
- src/pages/writing/[slug].astro
- src/pages/about.astro
- src/pages/contact.astro

Components to update or create:
- src/components/TraceRail.astro
- src/components/ThesisBlock.astro
- src/components/ProofMetricStrip.astro
- src/components/ProjectEvidenceCard.astro
- src/components/BeforeAfterFlow.astro
- src/components/SystemDiagramBlock.astro
- src/components/TechnicalMetaRow.astro
- src/components/SectionBlock.astro

## 5) Essential Characteristics (Do Not Compromise)

1. First viewport is a Decision Review Board, not a standard hero with two CTA buttons.
2. Orchestration Ledger motif is semantic, consistent, and present across all major pages.
3. Failure paths and human override points are visibly represented, not hidden.
4. Project summaries follow: problem -> boundary -> mechanism -> outcome -> constraint.
5. Section rhythm alternates between dense evidence and calmer interpretation blocks.

## 6) Recommended Enhancements / Next Steps

These should be treated as the next iteration after the base identity is stable.

### High-priority enhancements
- Replace the current stock-photo-led hero with a diagrammatic first-screen system board.
- Add a small, recurring ledger motif to the header, case-study cards, and article list items.
- Introduce a stronger visual distinction between thesis blocks, evidence blocks, and process blocks.
- Add one architecture-style mini-diagram to each featured project summary card.
- Build a consistent before/after process visual for at least the top two case studies.

### Medium-priority enhancements
- Add an optional failure-lens interaction that exposes exception paths and human override points.
- Turn project cards into evidence objects with consistent metadata rows, decision ownership labels, and outcome callouts.
- Add a subtle article reading rail or reading-progress treatment for long-form writing pages.
- Introduce stronger section transitions between page blocks so the site feels authored, not templated.

### Lower-priority polish
- Subtle SVG line animation on diagrams, only if it does not slow the page or distract from reading.
- Hover-based annotations on key process nodes.
- Small editorial details such as chapter markers, note labels, and technical metadata blocks.

### Enhancement principle
Keep all enhancements anchored to real engineering meaning. If an effect only looks clever and does not clarify risk, ownership, or proof, it should be removed.

## 7) Optional Polish (Can Defer)

- Scroll spy node activation.
- Subtle path-draw animation.
- Metric enter animation.
- Article reading progress rail.

## 8) Failure Mode Lens: Technical Spec

### Required behavior
- Add a nav toggle button labeled `Failure Lens`.
- Toggle sets `data-failure-lens="on|off"` on root `html`.
- Persist state to `localStorage` key `failure-lens`.

### UI response
- Project cards: reveal/hide exception row.
- System diagrams: emphasis class on exception paths.
- Process timelines: show/hide failure checkpoints.

### Progressive enhancement
- No JS fallback: render all failure information visible by default.
- JS enhancement: allow decluttering via `off` mode.

## 9) Layout And Composition Rules

- Desktop grid: 12 columns.
- First viewport split: 4 columns identity/thesis support, 8 columns Decision Review Board.
- Reading width: max 48rem.
- Side annotations only on `min-width: --bp-lg`.
- Mobile: collapse side rails into top ledger chips.

## 10) Accessibility Requirements

- Keep skip link and semantic landmarks intact.
- Ensure `Failure Lens` control is keyboard operable and announced via `aria-pressed`.
- Do not rely on color only for exception states.
- Maintain AA contrast in both light and dark bands.
- Respect `prefers-reduced-motion`.

## 11) Performance Guardrails

- Keep JavaScript minimal and framework-free.
- Avoid animation libraries.
- Use inline SVG for reusable diagram primitives.
- Self-host required font files and preload only critical styles/weights.

## 12) Suggested Astro/CSS/SVG Techniques

- CSS custom properties for tokens.
- Shared ledger utility classes (`.ledger-spine`, `.ledger-node`, `.boundary-stamp`).
- Small inline script in BaseLayout for Failure Lens initialization.
- Use `details/summary` for mobile expanders where possible.
- Use SVG symbols for repeated node/fork stamp shapes.

## 13) QA Checklist

- First screen is memorable in 10 seconds.
- Failure Lens changes content meaningfully, not cosmetically.
- Work pages show real constraints and trade-offs.
- Writing pages feel like technical publication, not blog template.
- Mobile keeps hierarchy and scanability.
- Lighthouse and accessibility quality remain strong.

## 14) Essential Vs Optional

### Essential
- Decision Review Board first viewport.
- Failure Mode Lens.
- Orchestration Ledger semantics.
- Evidence-first case anatomy.

### Optional polish
- Animated path draws.
- Scroll-spy node states.
- Minor hover reveal transitions.

## 15) Do-Not-Simplify List

Do not replace the first viewport with centered headline and dual CTA.
Do not flatten all sections into identical cards.
Do not hide or remove failure-path information.
Do not substitute decorative graphics for labeled system diagrams.
Do not turn thesis treatments into generic quotes.
