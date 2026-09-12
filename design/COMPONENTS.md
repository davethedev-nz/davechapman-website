# Components Specification

All components inherit the Orchestration Ledger grammar and must work without JavaScript.

## 1) Global Navigation + Failure Lens Toggle

## Purpose

Provide orientation and expose the non-generic interaction that demonstrates system thinking.

## Visual rules

- Sticky top bar with compact identity, section links, and Failure Lens control.
- Failure Lens control is text-first, not a glossy switch toy.

## States

- Default
- Scrolled
- Failure Lens off
- Failure Lens on

## Hover/focus

- Links underline from left to right.
- Failure Lens button shows clear pressed state.

## Responsive

- Desktop inline links.
- Mobile drawer with Failure Lens pinned at top.

## Accessibility

- `aria-pressed` for toggle.
- `aria-current` on active route.

## 2) Decision Review Board (Homepage First Screen)

## Purpose

Replace the usual hero with an authored opening artifact.

## Visual rules

- Four-row board:
  1. Signal
  2. Decision Owner
  3. Automation Route
  4. Proof Gate
- Left column contains concise labels.
- Right column contains short, specific statements.
- One contrarian annotation appears as a boundary stamp.

## States

- Default
- Row highlight on hover/focus

## Responsive

- Desktop table layout.
- Mobile stacked rows with row labels fixed above values.

## Accessibility

- Use real table semantics when possible.
- If implemented as div grid, provide equivalent headings and associations.

## 3) Orchestration Ledger Spine

## Purpose

Persistent structural wayfinding across sections.

## Visual rules

- 2px vertical spine.
- Numbered nodes and fork tabs.
- Tabs only where a decision or exception is introduced.

## States

- Neutral
- Active section
- Exception flagged

## Responsive

- Converts to horizontal chip strip on mobile.

## Accessibility

- Node labels are text in DOM.

## 4) Proof Metric Strip

## Purpose

Provide immediate, bounded credibility signals.

## Visual rules

- 3 to 4 metrics max.
- Large display numbers.
- Signal color only for one metric.

## States

- Static
- Optional enter animation

## Accessibility

- Full context in text, no number-only meaning.

## 5) Thesis Block

## Purpose

Give strong ideas a repeatable visual treatment.

## Visual rules

- Bracketed left edge.
- Upper mono label (`Thesis`, `Constraint`, `Observation`).
- Optional inverse variant for high contrast bands.

## States

- Default
- Inverse

## Responsive

- Same structure across breakpoints.

## Accessibility

- Ensure heading hierarchy remains valid.

## 6) Project Evidence Card

## Purpose

Expose project anatomy, not marketing summary.

## Required rows

- Problem pressure
- Ownership boundary
- Mechanism
- Outcome
- Constraint/failure note

## States

- Default
- Hover/focus detail reveal
- Failure Lens expanded

## Responsive

- Mixed-size desktop cards.
- Full-width mobile cards with expandable details.

## Accessibility

- Main card target keyboard focusable.
- Detail rows available without hover.

## 7) Before/After Flow

## Purpose

Make workflow change inspectable.

## Visual rules

- Three-lane layout: Before | Change Logic | After.
- Explicit owner handoff markers.

## States

- Default
- Human lane focus
- Automation lane focus
- Failure Lens on

## Interaction

- Lane toggles via button group.

## Accessibility

- Toggle buttons with `aria-pressed`.

## 8) System Diagram Block

## Purpose

Show architecture and boundaries as evidence.

## Visual rules

- SVG with boundary brackets and exception paths.
- IDs and labels visible, no mystery graphics.

## States

- Default
- Node highlight
- Failure Lens on (exceptions emphasized)

## Responsive

- Mobile simplified diagram + expandable legend.

## Accessibility

- `<title>` and `<desc>` in SVG.

## 9) Technical Meta Row

## Purpose

Expose constraints quickly.

## Visual rules

- Mono key + plain-language value.
- Fields: timeline, scope, confidence, domain, owners.

## Accessibility

- Definition list semantics.

## 10) Article Card

## Purpose

Summarize argument and relevance.

## Visual rules

- Title, thesis sentence, topic lane, read time.
- Optional boundary stamp for contrarian pieces.

## States

- Default
- Featured

## Interaction

- Hover/focus reveals "why this matters".

## 11) Case Study Section Frame

## Purpose

Chunk deep content into scannable evidence blocks.

## Visual rules

- Section index + stage label.
- Optional side notes tied to ledger node.

## Accessibility

- Anchorable headings and clear reading order.

## 12) Contact Handoff Block

## Purpose

Reduce ambiguity in starting a conversation.

## Visual rules

- One primary action.
- Mini ledger: submit workflow -> clarify constraints -> decide next step.

## Accessibility

- 44px minimum tap targets.

## 13) Footer Ledger Tail

## Purpose

Close with continuity, not a dead-end footer.

## Visual rules

- Short ledger tail ending in a "next conversation" stamp.
- Lightweight identity statement and route links.

## Accessibility

- `contentinfo` landmark and logical tab sequence.
