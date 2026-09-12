# Dave Chapman Website

Static personal-brand site built with Astro.

Purpose: communicate a clear commercial position around redesigning business workflows with AI, automation, and modern software systems, then proving value through rapid prototypes.

## Stack

- Astro (static-first)
- Plain CSS
- Minimal JavaScript
- GitHub Actions for CI and deployment

## Local Setup

1. Install dependencies:

```bash
npm ci
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Verification Commands

```bash
npm run format:check
npm run check
npm run test
npm run build
```

## Repository Structure

```text
.
├── docs/
│   └── positioning-hypothesis.md
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── test/
└── .github/workflows/
```

## Content Editing Notes

- Core copy is centralized in `src/content/siteContent.ts`.
- Page assembly is in `src/pages/index.astro`.
- Reusable section frame is in `src/components/SectionBlock.astro`.
- Metadata and structured data are in `src/layouts/BaseLayout.astro`.

## SEO And Discovery

- Canonical tags and social metadata are set in `BaseLayout`.
- Structured Person metadata is emitted via JSON-LD.
- `public/sitemap.xml` is versioned directly for simplicity and portability.
- `public/robots.txt` is included.

## Deployment Overview

The GitHub Actions workflow:

1. Runs on pull requests and pushes to `main`.
2. Installs dependencies from lockfile with `npm ci`.
3. Runs formatting check, type/check validation, tests, and build.
4. Deploys only on successful pushes to `main`.

Deployment is intentionally isolated in the workflow so target-specific changes are easy to modify.

## Configuration Notes

`astro.config.mjs` is set to `https://davechapman.ai` for production.

`npm run check` currently requires Node 20+ in this repository due to upstream tooling constraints in `@astrojs/check`. Build and tests run on Node 18+, but CI is pinned to Node 20 to guarantee full verification.
