import { useState } from 'react';
import { Terminal, Copy, Check, FileCode } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';

const codeSnippets = [
  {
    id: "nuevi-agent",
    filename: "NueviRAGAgent.py",
    language: "python",
    title: "Cerebro IA RAG & Triaje de Soporte",
    category: "AI & Agentes",
    description: "Pipeline RAG en Python con Supabase pgvector y OpenAI API para atención 24/7 y triaje de tickets a Trello.",
    code: `from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from supabase import create_client
import trello_api

class NueviRAGAgent:
    def __init__(self, supabase_url: str, supabase_key: str):
        self.vector_store = create_client(supabase_url, supabase_key)
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
        
    async def process_customer_query(self, query: str, user_phone: str) -> dict:
        # 1. Consulta vectorial RAG en pgvector
        docs = await self.vector_store.rpc("match_documents", {"query_text": query}).execute()
        context = "\\n".join([d['content'] for d in docs.data])
        
        # 2. Evaluación de intención & Triaje
        response = await self.llm.ainvoke(
            f"Contexto Técnico:\\n{context}\\n\\nConsulta Cliente: {query}"
        )
        
        # 3. Derivación automática a Trello si es reclamo técnico
        if "RECLAMO_INVERSOR" in response.content:
            trello_api.create_ticket(title=f"Reclamo {user_phone}", desc=query)
            
        return {"reply": response.content, "status": "triaged"}`
  },
  {
    id: "inverter-engine",
    filename: "pv_report_engine.py",
    language: "python",
    title: "Motor Asíncrono de Informes Solares",
    category: "Data & Automation",
    description: "Procesa 500+ lecturas de inversores solares, cruza cuadro tarifario EDESA y emite informes en 2 minutos para +40 plantas.",
    code: `import asyncio
import asyncpg
from matplotlib import pyplot as plt

async def generate_monthly_pv_report(plant_id: str, period: str):
    # 1. Conexión asíncrona a BD PostgreSQL
    conn = await asyncpg.connect(dsn=DATABASE_URL)
    gen_data = await conn.fetch("SELECT timestamp, kw_produced FROM pv_logs WHERE plant_id = $1", plant_id)
    
    # 2. Cruce con Cuadro Tarifario EDESA (pico, resto, valle)
    rates = await conn.fetchrow("SELECT rate_pico, rate_resto, rate_valle FROM edesa_rates WHERE current = TRUE")
    savings_usd = calculate_tariff_savings(gen_data, rates)
    
    # 3. Renderizado asíncrono de PDF técnico & envío por email
    pdf_bytes = render_pdf_report(plant_id, gen_data, savings_usd)
    await send_automated_email(plant_id, pdf_bytes)
    
    print(f"[OK] Reporte generado para Planta {plant_id} en 1.8 segundos.")`
  },
  {
    id: "publi-prop",
    filename: "PubliPropStealthBot.js",
    language: "javascript",
    title: "Bot Headless Facebook Marketplace",
    category: "Bots & Web Scraping",
    description: "Automatización con Playwright + n8n para publicación masiva de inmuebles con persistencia de sesiones y stealth evasion.",
    code: `const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);

async function publishRealEstateAd(propertyData) {
  // 1. Iniciar navegador con huella digital evadida y cookies de sesión
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: 'fb_session_cookies.json' });
  const page = await context.newPage();
  
  // 2. Navegación e inyección de datos de propiedad
  await page.goto('https://www.facebook.com/marketplace/create/item');
  await page.fill('input[aria-label="Título"]', propertyData.title);
  await page.fill('input[aria-label="Precio"]', propertyData.price);
  await page.setInputFiles('input[type="file"]', propertyData.images);
  
  // 3. Confirmación & Webhook de estado a n8n
  await page.click('div[aria-label="Publicar"]');
  await notifyN8nWebhook({ status: 'SUCCESS', id: propertyData.id });
  await browser.close();
}`
  }
];

export const CodeTerminal = () => {
  const [activeId, setActiveId] = useState(codeSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet = codeSnippets.find(s => s.id === activeId) || codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden my-12">
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between bg-slate-900 px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" /> GonzaloVolante/architecture-snippets
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="h-7 text-xs border-slate-700 hover:bg-slate-800 text-slate-300 gap-1.5"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "¡Copiado!" : "Copiar Código"}
        </Button>
      </div>

      {/* Snippet Tabs */}
      <div className="flex bg-slate-900/50 border-b border-slate-800/80 overflow-x-auto scrollbar-none">
        {codeSnippets.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`px-4 py-2.5 text-xs font-mono flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeId === item.id
                ? "border-sky-400 text-sky-400 bg-sky-950/20 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            {item.filename}
          </button>
        ))}
      </div>

      {/* Description Header */}
      <div className="p-4 bg-slate-900/30 border-b border-slate-900 flex flex-wrap justify-between items-center gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            {activeSnippet.title}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">{activeSnippet.description}</p>
        </div>
        <Badge variant="secondary">{activeSnippet.category}</Badge>
      </div>

      {/* Code Viewer */}
      <div className="p-4 overflow-x-auto bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed">
        <pre>
          <code>{activeSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
};
