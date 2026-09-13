# Review Workflow Checklist

This project follows a verification path aligned with the strategy-to-prototype philosophy.

1. Positioning critique and hypothesis: `docs/positioning-hypothesis.md`
2. Content architecture and copy model: `src/content/siteContent.ts`
3. Visual concept and implementation: `src/pages/index.astro`, `src/styles/global.css`
4. Automated verification: format check, Astro check, tests, build
5. Accessibility and responsive review: semantic HTML, skip link, keyboard focus, mobile layout checks
6. Performance review: static output, minimal JavaScript, lightweight dependency set
7. Independent AI critique and contrarian review: recorded in final delivery notes

## CSS Cleanup Regression Check (Mobile)

Run this quick visual pass after any stylesheet refactor.

1. Check tablet breakpoint (980px): hero, two-column grids, and section spacing collapse cleanly to one column.
2. Check mobile breakpoint (760px): floating hamburger toggle opens/closes, header panel includes name and tagline, and nav links remain tappable.
3. Verify Work Evidence cards: title, outcome, trace labels, and constraint text stay inside card borders with no horizontal overflow.
4. Verify footer and global horizontal safety: no clipped content and no horizontal scrolling on Home, Work, and Writing pages.
