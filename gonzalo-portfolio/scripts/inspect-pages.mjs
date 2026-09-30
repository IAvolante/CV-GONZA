import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('scripts/playwright-audit-output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runAudit() {
  console.log('🚀 Starting Playwright Audit across live URLs...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  const auditTargets = [
    { name: 'case-study', url: 'https://iavolante.github.io/CV-GONZA/work/digital-transformation-nuevas-energias' },
    { name: 'home', url: 'https://iavolante.github.io/CV-GONZA/' },
    { name: 'cv', url: 'https://iavolante.github.io/CV-GONZA/cv' }
  ];

  const report = {};

  for (const target of auditTargets) {
    console.log(`\n======================================================`);
    console.log(`🔍 Inspecting [${target.name}]: ${target.url}`);
    console.log(`======================================================`);

    const consoleMessages = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on('console', msg => {
      consoleMessages.push({ type: msg.type(), text: msg.text() });
    });
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });
    page.on('requestfailed', req => {
      failedRequests.push({ url: req.url(), error: req.failure()?.errorText });
    });

    const start = Date.now();
    const response = await page.goto(target.url, { waitUntil: 'networkidle', timeout: 35000 }).catch(err => {
      console.error(`Navigation error for ${target.url}:`, err.message);
      return null;
    });
    const durationMs = Date.now() - start;

    const status = response ? response.status() : 'FAILED';
    console.log(`HTTP Status: ${status} in ${durationMs}ms`);

    // Screenshot
    const screenshotPath = path.join(outDir, `${target.name}-desktop.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);

    // Extract Page Metadata & Headings
    const metadata = await page.evaluate(() => {
      const h1s = Array.from(document.querySelectorAll('h1')).map(el => el.innerText.trim());
      const h2s = Array.from(document.querySelectorAll('h2')).map(el => el.innerText.trim());
      const h3s = Array.from(document.querySelectorAll('h3')).map(el => el.innerText.trim());
      const buttons = Array.from(document.querySelectorAll('button')).map(b => b.innerText.trim()).filter(Boolean);
      const links = Array.from(document.querySelectorAll('a')).map(a => ({
        text: a.innerText.trim(),
        href: a.href
      })).filter(a => a.href);

      // Check for broken images
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        isBroken: !img.complete || img.naturalWidth === 0
      }));

      // Check for horizontal overflow (responsiveness check)
      const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;

      return {
        title: document.title,
        h1s,
        h2s,
        h3s,
        totalButtons: buttons.length,
        buttonsSample: buttons.slice(0, 10),
        totalLinks: links.length,
        linksSample: links.slice(0, 10),
        images,
        hasHorizontalScroll,
        scrollWidth: document.documentElement.scrollWidth,
        windowWidth: window.innerWidth
      };
    });

    report[target.name] = {
      url: target.url,
      status,
      durationMs,
      metadata,
      consoleErrors: consoleMessages.filter(m => m.type === 'error'),
      pageErrors,
      failedRequests
    };

    console.log(`Title: ${metadata.title}`);
    console.log(`H1s:`, metadata.h1s);
    console.log(`Total H2s: ${metadata.h2s.length} | Total H3s: ${metadata.h3s.length}`);
    console.log(`Horizontal Scroll Overflow?: ${metadata.hasHorizontalScroll}`);
    console.log(`Broken Images:`, metadata.images.filter(img => img.isBroken));
    console.log(`Console Errors (${report[target.name].consoleErrors.length}):`, report[target.name].consoleErrors);
    console.log(`Page Errors (${pageErrors.length}):`, pageErrors);
    console.log(`Failed Requests (${failedRequests.length}):`, failedRequests);
  }

  // Also test mobile viewport for the case study
  console.log(`\n📱 Testing Mobile Viewport (375x667) on Case Study...`);
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://iavolante.github.io/CV-GONZA/work/digital-transformation-nuevas-energias', { waitUntil: 'networkidle' });
  const mobileScreenshotPath = path.join(outDir, 'case-study-mobile.png');
  await page.screenshot({ path: mobileScreenshotPath, fullPage: true });
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log(`Mobile Horizontal Overflow?: ${mobileOverflow}`);

  // Test mobile on CV
  console.log(`\n📱 Testing Mobile Viewport (375x667) on CV...`);
  await page.goto('https://iavolante.github.io/CV-GONZA/cv', { waitUntil: 'networkidle' });
  const cvMobileScreenshotPath = path.join(outDir, 'cv-mobile.png');
  await page.screenshot({ path: cvMobileScreenshotPath, fullPage: true });

  await browser.close();

  const reportPath = path.join(outDir, 'audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\nFull report written to: ${reportPath}`);
}

runAudit().catch(err => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
