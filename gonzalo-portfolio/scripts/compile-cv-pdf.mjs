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
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

function serveStatic(req, res) {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/CV-GONZA')) {
    reqPath = reqPath.slice('/CV-GONZA'.length);
  }
  if (reqPath === '' || reqPath === '/') {
    reqPath = '/index.html';
  }

  let filePath = path.join(distDir, reqPath);

  // If directory, try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Fallback to dist/index.html for client-side routing
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(500);
    res.end('Error loading ' + reqPath);
  }
}

async function generatePDF() {
  console.log('🚀 Starting Local Static Server for PDF Generation...');
  const server = http.createServer(serveStatic);
  await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
  console.log('Server running on http://127.0.0.1:4173/CV-GONZA/');

  console.log('🚀 Launching Playwright to render CV...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:4173/CV-GONZA/cv', { waitUntil: 'networkidle', timeout: 30000 });

  // Emulate print media
  await page.emulateMedia({ media: 'print' });

  // Wait a moment for any fonts/styles to settle
  await page.waitForTimeout(500);

  const outPublic = path.resolve('public/Gonzalo_Volante_CV.pdf');
  const outDist = path.resolve('dist/Gonzalo_Volante_CV.pdf');

  console.log('📄 Exporting A4 PDF...');
  await page.pdf({
    path: outPublic,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '8mm',
      bottom: '8mm',
      left: '10mm',
      right: '10mm'
    }
  });

  // Also copy directly to dist so it is immediately available
  fs.copyFileSync(outPublic, outDist);

  const size = fs.statSync(outPublic).size;
  console.log(`✅ PDF generated successfully: ${outPublic} (${(size / 1024).toFixed(1)} kB)`);
  console.log(`✅ PDF copied to: ${outDist}`);

  await browser.close();
  server.close();
  console.log('Done.');
}

generatePDF().catch(err => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
