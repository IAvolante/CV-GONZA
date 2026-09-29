import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useLanguage } from '@/i18n/LanguageContext';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Spotlight } from '@/components/magicui/spotlight';
import {
  Bot,
  Zap,
  Satellite,
  CreditCard,
  ArrowRight,
  X,
  Copy,
  Check,
  Terminal,
  AlertCircle,
  Cpu,
  ShieldCheck,
  Gauge,
  Code2,
} from 'lucide-react';

type ProjectKey = 'publiProp' | 'edesa' | 'otbn' | 'notion';

interface ProjectConfig {
  key: ProjectKey;
  icon: React.ElementType;
  spanClass: string;
  isHero?: boolean;
  filename: string;
  language: 'typescript' | 'python';
  code: string;
}

const PROJECT_CONFIGS: ProjectConfig[] = [
  {
    key: 'publiProp',
    icon: Bot,
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2',
    isHero: true,
    filename: 'playwright-session-orchestrator.ts',
    language: 'typescript',
    code: `import { chromium, type BrowserContext } from 'playwright';
import path from 'path';

export async function createAuthenticatedContext(): Promise<BrowserContext> {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
  });

  const sessionPath = path.resolve('./storage/auth.json');

  // Reutilización determinista de sesión web persistida
  const context = await browser.newContext({
    storageState: sessionPath,
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });

  const page = await context.newPage();
  await page.goto('https://portal-inmobiliario.com/panel/publicaciones', {
    waitUntil: 'domcontentloaded'
  });

  // Espera determinística con selectores fiables de sesión activa
  const isSessionAlive = await page.waitForSelector('[data-session-user]', {
    timeout: 4500
  }).catch(() => null);

  if (!isSessionAlive) {
    // Si la cookie expiró, relanzar autenticación y actualizar storageState
    await performHeadlessLogin(page);
    await context.storageState({ path: sessionPath });
  }

  return context;
}`,
  },
  {
    key: 'edesa',
    icon: Zap,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    isHero: false,
    filename: 'energy_reconciliation_engine.py',
    language: 'python',
    code: `import re
import pdfplumber
from typing import Dict, Any, List

def reconcile_solar_vs_grid(pdf_path: str, solar_telemetry: List[Dict]) -> Dict[str, Any]:
    """Cruza facturación horaria EDESA con telemetría de inversores Growatt."""
    readings = {"PICO": 0.0, "VALLE": 0.0, "RESTO": 0.0}

    with pdfplumber.open(pdf_path) as pdf:
        layout_text = "\\n".join(page.extract_text(layout=True) or "" for page in pdf.pages)
        for match in re.finditer(r'(?P<banda>PICO|VALLE|RESTO)\\s+[\\d\\.,]+\\s+[\\d\\.,]+\\s+(?P<kwh>[\\d\\.,]+)', layout_text):
            readings[match.group("banda")] = float(match.group("kwh").replace(".", "").replace(",", "."))

    # Cruce de series temporales continuas (curva de generación vs consumo de red)
    total_grid_kwh = sum(readings.values())
    total_solar_kwh = sum(t["active_power_kwh"] for t in solar_telemetry)
    net_injected_kwh = max(0.0, total_solar_kwh - readings["RESTO"])
    
    return {
        "grid_kwh": readings,
        "solar_generated_kwh": total_solar_kwh,
        "net_injected_kwh": net_injected_kwh,
        "self_consumption_pct": round(((total_solar_kwh - net_injected_kwh) / total_solar_kwh) * 100, 2)
    }`,
  },
  {
    key: 'otbn',
    icon: Satellite,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    isHero: false,
    filename: 'otbn_sentinel_pipeline.py',
    language: 'python',
    code: `import ee
import geopandas as gpd

ee.Initialize()

def process_cadastral_parcel(parcel_geojson: dict, date_start: str, date_end: str):
    roi = ee.Geometry(parcel_geojson['geometry'])

    def mask_qa60_clouds(image):
        qa = image.select('QA60')
        cloud_bit_mask = 1 << 10
        cirrus_bit_mask = 1 << 11
        # Máscara binaria combinada de nubes opacas y cirros
        clear_mask = qa.bitwiseAnd(cloud_bit_mask).eq(0).And(
            qa.bitwiseAnd(cirrus_bit_mask).eq(0)
        )
        return image.updateMask(clear_mask).divide(10000)

    # Ingestión multitemporal satelital con colección Sentinel-2
    s2_collection = (ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                     .filterBounds(roi)
                     .filterDate(date_start, date_end)
                     .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                     .map(mask_qa60_clouds))

    composite = s2_collection.median()
    ndvi = composite.normalizedDifference(['B8', 'B4']).rename('NDVI')

    # Reducción zonal estadística a nivel de polígono catastral
    zonal_stats = ndvi.reduceRegion(
        reducer=ee.Reducer.mean().combine(ee.Reducer.stdDev(), '', True),
        geometry=roi,
        scale=10,
        maxPixels=1e9
    )
    return zonal_stats.getInfo()`,
  },
  {
    key: 'notion',
    icon: CreditCard,
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2',
    isHero: false,
    filename: 'notion_statement_importer.py',
    language: 'python',
    code: `import hashlib
from notion_client import Client
from typing import List, Dict

notion = Client(auth=NOTION_API_KEY)

def generate_tx_signature(date: str, desc: str, amount: float, currency: str) -> str:
    raw_payload = f"{date.strip()}|{desc.strip().lower()}|{amount:.2f}|{currency}"
    return hashlib.sha256(raw_payload.encode('utf-8')).hexdigest()

def batch_sync_bank_statements(database_id: str, transactions: List[Dict]):
    for tx in transactions:
        tx_hash = generate_tx_signature(tx['date'], tx['desc'], tx['amount'], tx['currency'])

        # Idempotencia estricta: consulta previa para prevenir duplicaciones
        query = notion.databases.query(
            database_id=database_id,
            filter={"property": "TxHash", "rich_text": {"equals": tx_hash}}
        )
        if query["results"]:
            continue  # Salteo determinista de transacción existente

        # Inserción por lotes estructurada en la base de datos Notion
        notion.pages.create(
            parent={"database_id": database_id},
            properties={
                "Concepto": {"title": [{"text": {"content": tx['desc']}}]},
                "Monto": {"number": tx['amount']},
                "Moneda": {"select": {"name": tx['currency']}},
                "Fecha": {"date": {"start": tx['date']}},
                "TxHash": {"rich_text": [{"text": {"content": tx_hash}}]}
            }
        ) `,
  },
];

/**
 * Tokenizador sintáctico para visualización dark technical developer sin librerías pesadas.
 */
function renderSyntaxHighlight(code: string) {
  const tokenRegex =
    /(\/\/.*$|#.*$|'(?:\\.|[^'])*'|"(?:\\.|[^"])*"|`[\s\S]*?`|\b(?:def|class|import|from|return|if|else|elif|for|in|while|try|except|as|with|async|await|const|let|var|function|type|interface|continue|break)\b|\b(?:True|False|None|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|[a-zA-Z_]\w*(?=\()|[{}()[\].,:;])/gm;

  const lines = code.split('\n');

  return lines.map((line, lineIdx) => {
    const trimmed = line.trimStart();
    if (trimmed.startsWith('//') || trimmed.startsWith('#')) {
      return (
        <div key={lineIdx} className="table-row">
          <span className="table-cell pr-4 text-right select-none text-slate-600 text-[11px] font-mono">
            {lineIdx + 1}
          </span>
          <span className="table-cell text-slate-500 italic font-mono whitespace-pre">
            {line}
          </span>
        </div>
      );
    }

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    const regex = new RegExp(tokenRegex);

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={`${lineIdx}-${lastIndex}`} className="text-slate-300">
            {line.slice(lastIndex, match.index)}
          </span>
        );
      }

      const token = match[0];
      let colorClass = 'text-slate-200';

      if (token.startsWith('//') || token.startsWith('#')) {
        colorClass = 'text-slate-500 italic';
      } else if (
        token.startsWith("'") ||
        token.startsWith('"') ||
        token.startsWith('`')
      ) {
        colorClass = 'text-emerald-400';
      } else if (
        /^(?:def|class|import|from|return|if|else|elif|for|in|while|try|except|as|with|async|await|const|let|var|function|type|interface|continue|break)$/.test(
          token
        )
      ) {
        colorClass = 'text-cyan-400 font-semibold';
      } else if (/^(?:True|False|None|true|false|null|undefined)$/.test(token)) {
        colorClass = 'text-purple-400 font-semibold';
      } else if (/^\d+(?:\.\d+)?$/.test(token)) {
        colorClass = 'text-amber-300';
      } else if (line[match.index + token.length] === '(') {
        colorClass = 'text-sky-300';
      } else if (/^[{}()[\].,:;]$/.test(token)) {
        colorClass = 'text-slate-400';
      }

      elements.push(
        <span key={`${lineIdx}-${match.index}`} className={colorClass}>
          {token}
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      elements.push(
        <span key={`${lineIdx}-${lastIndex}`} className="text-slate-300">
          {line.slice(lastIndex)}
        </span>
      );
    }

    return (
      <div key={lineIdx} className="table-row">
        <span className="table-cell pr-4 text-right select-none text-slate-600 text-[11px] font-mono">
          {lineIdx + 1}
        </span>
        <span className="table-cell whitespace-pre font-mono">
          {elements.length > 0 ? elements : '\u00A0'}
        </span>
      </div>
    );
  });
}

export function EngineeringBentoGrid() {
  const { t, lang } = useLanguage();
  const bento = t.engineeringBento;
  const items = bento.items;
  const drawer = bento.drawer;

  const [selectedKey, setSelectedKey] = useState<ProjectKey | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedConfig = selectedKey
    ? PROJECT_CONFIGS.find((p) => p.key === selectedKey) || null
    : null;

  const selectedData = selectedKey ? items[selectedKey] : null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="engineering" className="py-24 border-t border-slate-900 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-slate-400 font-mono text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{bento.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {bento.sectionTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            {bento.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid Asimétrico (3 columnas / 2 filas armoniosas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_CONFIGS.map((config) => {
            const data = items[config.key];
            const Icon = config.icon;
            const stackArray = (data.stack as unknown as string[]) || [];

            return (
              <Spotlight
                key={config.key}
                className={`${config.spanClass} rounded-2xl border border-slate-800/90 ${
                  config.isHero
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/50 shadow-xl shadow-cyan-950/20'
                    : 'bg-slate-900/35 hover:bg-slate-900/50'
                } p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 relative group overflow-hidden`}
              >
                {config.isHero && (
                  <BorderBeam
                    size={220}
                    duration={14}
                    delay={0}
                    colorFrom="#06b6d4"
                    colorTo="#3b82f6"
                  />
                )}

                <div className="relative z-10 space-y-4">
                  {/* Card Header: Badge & Metric Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                      {data.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200 font-mono text-xs font-medium">
                      <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                      {data.metric}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-mono text-xs text-slate-400">
                        {config.filename}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                      {data.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {data.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Stack Tags & Open Drawer CTA */}
                <div className="relative z-10 pt-5 mt-6 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {stackArray.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedKey(config.key)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-mono text-xs font-medium transition-all duration-200 group/btn cursor-pointer shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      {bento.viewDetails}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </Spotlight>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          DRAWER / SHEET LATERAL CON RADIX UI DIALOG
         ======================================================== */}
      <DialogPrimitive.Root
        open={Boolean(selectedKey && selectedData && selectedConfig)}
        onOpenChange={(open) => !open && setSelectedKey(null)}
      >
        <DialogPrimitive.Portal>
          {/* Backdrop con blur */}
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300" />

          {/* Slide-over Content desde la derecha */}
          <DialogPrimitive.Content
            className="fixed inset-y-0 right-0 z-50 h-full w-full max-w-xl bg-slate-950/95 border-l border-slate-800 p-6 sm:p-8 overflow-y-auto backdrop-blur-md shadow-2xl transition-transform duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
            aria-describedby="bento-drawer-description"
          >
            {selectedData && selectedConfig && (
              <div className="space-y-6">
                {/* Drawer Top Bar & Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                      {selectedData.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono text-xs">
                      <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                      {selectedData.metric}
                    </span>
                  </div>

                  <DialogPrimitive.Close className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer">
                    <X className="w-5 h-5" />
                    <span className="sr-only">{drawer.close}</span>
                  </DialogPrimitive.Close>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-2">
                  <DialogPrimitive.Title className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedData.title}
                  </DialogPrimitive.Title>
                  <p
                    id="bento-drawer-description"
                    className="text-sm text-slate-300 leading-relaxed font-normal"
                  >
                    {selectedData.shortDesc}
                  </p>
                </div>

                {/* Section 1: Problema Operativo Inicial */}
                <div className="rounded-xl border border-rose-950/40 bg-rose-950/15 p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{drawer.problemLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedData.problem}
                  </p>
                </div>

                {/* Section 2: Solución de Arquitectura */}
                <div className="rounded-xl border border-cyan-950/40 bg-cyan-950/15 p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                    <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{drawer.solutionLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedData.solution}
                  </p>
                </div>

                {/* Section 3: Reto de Ingeniería Resuelto */}
                <div className="rounded-xl border border-amber-950/40 bg-amber-950/15 p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{drawer.challengeLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedData.challenge}
                  </p>
                </div>

                {/* Section 4: Stack Técnico Verificado */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {drawer.stackLabel}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {((selectedData.stack as unknown as string[]) || []).map(
                      (tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Section 5: Snippet de Código / Patrón Arquitectónico Real */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Terminal className="w-4 h-4" />
                      {selectedConfig.filename}
                    </span>
                    <span className="text-slate-500 uppercase">
                      {selectedConfig.language}
                    </span>
                  </div>

                  <div className="relative rounded-xl border border-slate-800 bg-[#02050c] p-4 font-mono text-xs overflow-hidden shadow-2xl">
                    {/* Console Header Bar */}
                    <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        <span className="ml-2 text-[11px] text-slate-500">
                          {selectedConfig.language === 'typescript'
                            ? 'TypeScript · Strict'
                            : 'Python 3.11+'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(selectedConfig.code)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {copied
                            ? lang === 'es'
                              ? 'Copiado'
                              : 'Copied'
                            : lang === 'es'
                            ? 'Copiar Código'
                            : 'Copy Code'}
                        </span>
                      </button>
                    </div>

                    {/* Syntax Highlighted Lines */}
                    <div className="overflow-x-auto text-xs leading-relaxed font-mono py-1">
                      <div className="table w-full">
                        {renderSyntaxHighlight(selectedConfig.code)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
