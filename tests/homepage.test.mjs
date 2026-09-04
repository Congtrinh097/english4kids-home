import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('publishes all three product destinations over HTTPS', () => {
  for (const url of [
    'https://voca.english4kids.org/',
    'https://speak.english4kids.org/',
    'https://speakingtest.english4kids.org/',
  ]) {
    assert.match(html, new RegExp(`href=["']${url.replaceAll('.', '\\.')}["']`));
  }
  assert.equal((html.match(/class="product-card/g) ?? []).length, 3);
});

test('updates discovery and structured metadata for three products', () => {
  assert.match(html, /English Voca/);
  assert.match(html, /SpeakFlow/);
  assert.match(html, /Speaking Test/);
  assert.match(html, /"@type":\s*"ItemList"/);
  assert.match(html, /speakingtest\.english4kids\.org/);
  assert.doesNotMatch(html, /Hai ứng dụng/);
});

test('provides semantic navigation and keyboard-visible focus styling', () => {
  assert.match(html, /<nav[^>]+aria-label=/);
  assert.match(html, /<main[^>]+id="main-content"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /:focus-visible/);
  assert.match(html, /prefers-reduced-motion/);
});

test('keeps product links as crawlable anchors with clear calls to action', () => {
  assert.equal((html.match(/class="product-link/g) ?? []).length, 3);
  assert.match(html, />Khám phá từ vựng/);
  assert.match(html, />Bắt đầu luyện nói/);
  assert.match(html, />Thử Speaking Test/);
});
