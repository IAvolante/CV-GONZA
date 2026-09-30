import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2'
};

function serve(req, res) {
  let p = req.url.split('?')[0];
  if (p.startsWith('/CV-GONZA')) p = p.slice('/CV-GONZA'.length);
  if (p === '' || p === '/') p = '/index.html';
  let fp = path.join(distDir, p);
  if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) fp = path.join(fp, 'index.html');
  if (!fs.existsSync(fp)) fp = path.join(distDir, 'index.html');
  const ext = path.extname(fp).toLowerCase();
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  res.end(fs.readFileSync(fp));
}

async function snap() {
  const server = http.createServer(serve);
  await new Promise(r => server.listen(4174, '127.0.0.1', r));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  
  await page.goto('http://127.0.0.1:4174/CV-GONZA/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const el = await page.$('#engineering');
  if (el) {
    await el.screenshot({ path: 'scripts/playwright-audit-output/bento-new.png' });
    console.log('Saved bento screenshot to scripts/playwright-audit-output/bento-new.png');
  }

  await browser.close();
  server.close();
}

snap().catch(console.error);
