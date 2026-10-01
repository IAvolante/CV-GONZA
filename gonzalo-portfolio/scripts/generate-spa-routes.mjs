import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const routes = [
  'cv',
  'cv-empresas',
  'work/digital-transformation-nuevas-energias',
  'work/lis-saresa-v4',
  'work/pv-reporting-system',
  'work/operations-platform',
  'work/solar-quotation-system'
];

console.log('📦 Generating static route shells for GitHub Pages HTTP 200 response...');

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
  console.log(`  ✓ Created ${route}/index.html`);
}

console.log('✅ Static SPA route shells generated successfully.');
