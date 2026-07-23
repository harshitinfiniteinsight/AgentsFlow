import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUT_DIR = path.resolve(process.cwd(), 'pages-rendered');
const routes = [
  { route: '/', file: 'index.html' },
  { route: '/homepage-v2', file: 'homepage-v2.html' },
  { route: '/about', file: 'about.html' },
  { route: '/discover', file: 'discover.html' },
  { route: '/govern', file: 'govern.html' },
  { route: '/govern-v2', file: 'govern-v2.html' },
  { route: '/enforce', file: 'enforce.html' },
  { route: '/enforce-v2', file: 'enforce-v2.html' },
  { route: '/monitor', file: 'monitor.html' },
  { route: '/monitor-v2', file: 'monitor-v2.html' },
  { route: '/platform', file: 'platform.html' },
  { route: '/pricing', file: 'pricing.html' }
];

async function renderRoute(browser, route, file) {
  const url = `${BASE_URL}${route}`;
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 900 });
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    // small delay to allow client hydration/animations
    await page.evaluate(() => new Promise((res) => setTimeout(res, 400)));
    const html = await page.content();
    await fs.writeFile(path.join(OUT_DIR, file), html, 'utf8');
    console.log(`Saved ${url} -> ${file}`);
  } catch (err) {
    console.error(`Failed ${url}:`, err.message);
  } finally {
    await page.close();
  }
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  for (const r of routes) {
    await renderRoute(browser, r.route, r.file);
  }
  // index of links
  const links = routes.map((r) => `<li><a href="./${r.file}">${r.route}</a></li>`).join('\n');
  const indexHtml = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AgentsFlow Rendered Pages</title></head><body><h1>Rendered pages</h1><ul>${links}</ul></body></html>`;
  await fs.writeFile(path.join(OUT_DIR, 'index.html'), indexHtml, 'utf8');
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
