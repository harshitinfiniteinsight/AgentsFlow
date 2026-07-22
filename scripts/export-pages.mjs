import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.resolve(process.cwd(), 'pages');

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

async function exportRoute(route, file) {
  const url = `${BASE_URL}${route}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  const html = await res.text();
  const outputPath = path.join(OUTPUT_DIR, file);
  await fs.writeFile(outputPath, html, 'utf8');
  console.log(`Saved ${route} -> ${outputPath}`);
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const item of routes) {
    try {
      await exportRoute(item.route, item.file);
    } catch (err) {
      console.error(`Error exporting ${item.route}:`, err.message);
    }
  }

  const links = routes
    .map((item) => `<li><a href="./${item.file}">${item.route}</a></li>`)
    .join('\n');

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>AgentsFlow Exported Pages</title>
  <style>body{font-family:Inter,system-ui,Arial,sans-serif;background:#0b1220;color:#e6eefc;padding:32px}a{color:#6ee7b7}</style>
</head>
<body>
  <h1>AgentsFlow Exported Pages</h1>
  <p>Snapshot generated from ${BASE_URL}</p>
  <ul>
    ${links}
  </ul>
</body>
</html>`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.html'), indexHtml, 'utf8');
  console.log(`Saved index -> ${path.join(OUTPUT_DIR, 'index.html')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
