# Design System

## 1) System Intent

Build a visual system that feels authored and technical, not product-marketing polished. The site should read like an engineering ledger: decisions, boundaries, outcomes, and failure paths.

Primary motif: Orchestration Ledger.

## 2) Color Tokens

```css
:root {
  --color-bg: #f3f0e7;
  --color-bg-soft: #faf7ef;
  --color-bg-band: #e8e2d4;
  --color-bg-ink: #141c22;
  --color-bg-ink-2: #1c2831;

  --color-text: #1a252d;
  --color-text-soft: #4a5a66;
  --color-text-mute: #6f7d87;
  --color-text-on-ink: #edf2f2;

  --color-line: #b7beb8;
  --color-line-strong: #8d9891;

  --color-accent: #1f6f66;
  --color-accent-soft: #d5e6e1;
  --color-signal: #a64c2f;
  --color-signal-soft: #edd9d1;

  --color-proof: #2a6f4a;
  --color-warning: #94631e;
  --color-danger: #9b3f3f;
}
```

### Color usage rules
- No gradient blobs. Use flat, intentional surfaces and occasional high-contrast bands.
- Use `--color-signal` only for boundaries, exceptions, and contrarian statements.
- Never use accent and signal at equal visual weight in the same local block.

## 3) Typography

### Font families
- Display and essay headings: Newsreader Variable.
- Body and interface: Public Sans.
- Metadata, diagram labels, and IDs: IBM Plex Mono.

### Font tokens

```css
:root {
  --font-display: "Newsreader", "Iowan Old Style", "Times New Roman", serif;
  --font-body: "Public Sans", "Segoe UI", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", "Consolas", monospace;

  --fs-00: clamp(0.72rem, 0.69rem + 0.12vw, 0.8rem);
  --fs-0: clamp(0.85rem, 0.8rem + 0.18vw, 0.95rem);
  --fs-1: clamp(1rem, 0.95rem + 0.24vw, 1.12rem);
  --fs-2: clamp(1.18rem, 1.08rem + 0.55vw, 1.46rem);
  --fs-3: clamp(1.55rem, 1.3rem + 1.08vw, 2.25rem);
  --fs-4: clamp(2.15rem, 1.72rem + 2.1vw, 3.75rem);
  --fs-5: clamp(3.1rem, 2.1rem + 3.8vw, 5.9rem);

  --lh-tight: 1.03;
  --lh-heading: 1.13;
  --lh-body: 1.58;
}
```

### Typography rules
- First-screen heading max width: 9.5ch.
- Long-form content max width: 66ch.
- Meta labels uppercase with `0.08em` tracking.
- Use `text-wrap: balance` on all `h1` and primary `h2`.

## 4) Spacing And Layout

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 5.5rem;
  --space-10: 7rem;

  --container-main: 80rem;
  --container-wide: 92rem;
  --container-reading: 48rem;

  --gutter-mobile: 1rem;
  --gutter-desktop: 1.3rem;
}
```

### Grid rules
- Default desktop grid: 12 columns.
- First viewport composition: 4/8 split, where 8-column area is the Decision Review Board.
- Standard evidence sections: 8-column narrative plus 4-column ledger rail.
- Mobile: one column, ledger rail converts to top strip with stage chips.

## 5) Borders, Radius, Depth

```css
:root {
  --radius-xs: 0.2rem;
  --radius-sm: 0.45rem;
  --radius-md: 0.8rem;
  --radius-lg: 1.1rem;

  --border-soft: 1px solid var(--color-line);
  --border-strong: 1px solid var(--color-line-strong);

  --shadow-1: 0 8px 18px rgba(17, 28, 35, 0.06);
  --shadow-2: 0 16px 30px rgba(17, 28, 35, 0.1);
}
```

### Depth rules
- No glass effects.
- No floating card clouds.
- Elevation is used only for active inspection targets.

## 6) Signature Motif: Orchestration Ledger

### Motif tokens

```css
:root {
  --ledger-spine: var(--color-line-strong);
  --ledger-node: var(--color-bg-soft);
  --ledger-node-border: var(--color-accent);
  --ledger-fork: var(--color-signal);
  --ledger-stamp: var(--color-text-mute);
}
```

### Motif anatomy
- Spine: 2px vertical line, consistent across large layouts.
- Node: 10px circular checkpoint, 14px when active.
- Fork tab: 28px to 40px horizontal tab entering content block.
- Boundary stamp: squared corner stamp with mono label.
- Evidence seal: small filled badge for measured outcomes.

### Semantics rule
Each motif element must represent one of:
- signal,
- ownership,
- mechanism,
- proof,
- exception.

Never render motif-only decoration.

## 7) Diagram Styling

- Use semantic SVG with `<title>` and `<desc>`.
- Stroke widths allowed: `1.5`, `2`, `3`.
- Exception paths use dashed stroke plus explicit label.
- Boundary transitions must be labeled with ownership text.
- Diagram IDs use mono tokens, for example `D2`, `GATE-04`, `EXC-A`.

## 8) Failure Mode Lens (Global Interaction)

### Behavior
- UI control: two-state switch in global nav, `Off` by default.
- State storage: `localStorage` key `failure-lens`.
- Root attribute: `data-failure-lens="on|off"` on `html`.

### Visual response when `on`
- Reveal exception rows on project cards.
- Highlight override checkpoints in diagrams.
- Show "what can fail" callout row in process components.

### Performance and fallback
- JS required for toggle persistence.
- Without JS, all critical failure data is visible inline by default.
- No animation-heavy transitions; only opacity and border-color changes.

### Accessibility
- Switch implemented as button with `aria-pressed`.
- Label includes status text for screen readers.

## 9) Motion

```css
:root {
  --motion-fast: 130ms;
  --motion-mid: 240ms;
  --motion-slow: 380ms;
  --motion-ease: cubic-bezier(0.2, 0.9, 0.2, 1);
}
```

### Allowed motion
- Section reveal with 10px rise.
- Ledger node state transition.
- Diagram exception-path fade when Failure Lens toggles.

### Reduced motion
- Disable transforms.
- Keep visibility changes instantaneous.

## 10) Responsive Breakpoints

```css
:root {
  --bp-sm: 34rem;
  --bp-md: 48rem;
  --bp-lg: 68rem;
  --bp-xl: 84rem;
}
```

### Behavior by breakpoint
- Under `--bp-md`: remove side rails, render compact ledger chips.
- `--bp-md` to `--bp-lg`: first viewport stacks; Decision Review Board remains above fold.
- Above `--bp-lg`: full split composition and persistent spine.

## 11) Accessibility Requirements

- Maintain WCAG AA contrast minimum.
- Keyboard access for all hover-revealed details.
- Diagrams not color-dependent for meaning.
- Focus indicators at least 2px and always visible.
- Respect `prefers-reduced-motion` globally.
