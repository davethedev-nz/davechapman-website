import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const copyFile = readFileSync(new URL('../src/content/siteContent.ts', import.meta.url), 'utf8');
const pageFile = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const footerFile = readFileSync(
  new URL('../src/components/SiteFooter.astro', import.meta.url),
  'utf8',
);

test('headline emphasizes proof and practical use', () => {
  assert.match(copyFile, /Find the work AI should be doing\. Then prove it\./);
});

test('site includes core sections needed for commercial clarity', () => {
  assert.match(pageFile, /id="problems"/);
  assert.match(pageFile, /id="approach"/);
  assert.match(pageFile, /id="capabilities"/);
  assert.match(pageFile, /id="why-dave"/);
  assert.match(footerFile, /id="contact"/);
});

test('hero establishes stronger visual hierarchy and proof strip', () => {
  assert.match(pageFile, /class="hero-shell hero-shell-v1"/);
  assert.match(pageFile, /class="metrics"/);
  assert.match(pageFile, /Inspect work logs/);
});

test('copy keeps anti-hype framing', () => {
  assert.match(
    copyFile,
    /If standard automation is better than AI for a task, use standard automation\./,
  );
});
