import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const slugs = [
  'test-trinh-do-noi-tieng-anh-mien-phi',
  'cach-biet-trinh-do-speaking',
  'bai-mau-speaking-a1-b2',
  '10-cau-hoi-kiem-tra-phan-xa-tieng-anh',
];

test('publishes four SEO posts under /post/<slug>', async () => {
  for (const slug of slugs) {
    const html = await readFile(new URL(`../post/${slug}.html`, import.meta.url), 'utf8');
    assert.match(html, new RegExp(`<link rel="canonical" href="https://english4kids\\.org/post/${slug}">`));
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.match(html, /<h1>[^<]+/);
    assert.match(html, /https:\/\/speakingtest\.english4kids\.org\//);
    assert.match(html, /"@type":"FAQPage"/);
  }
});

test('adds every post to the sitemap using clean URLs', async () => {
  const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
  for (const slug of slugs) {
    assert.match(sitemap, new RegExp(`<loc>https://english4kids\\.org/post/${slug}</loc>`));
  }
});

test('links the post cluster from the Speaking Test hub', async () => {
  const hub = await readFile(new URL('../speaking-test.html', import.meta.url), 'utf8');
  for (const slug of slugs) assert.match(hub, new RegExp(`href="post/${slug}\\.html"`));
});
