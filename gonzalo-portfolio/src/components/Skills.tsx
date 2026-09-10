import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Code2, Server, Bot, Cpu, Globe, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & Web Architecture",
    icon: Code2,
    description: "Desarrollo de interfaces reactivas, accesibles y de alto rendimiento con renderizado optimizado.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI", "HTML5 / CSS3", "State Management", "Performance & SEO"]
  },
  {
    id: "backend",
    title: "Backend & Systems Integration",
    icon: Server,
    description: "Construcción de APIs RESTful escalables, microservicios y procesamiento asíncrono.",
    skills: ["Python (Flask / FastAPI)", "Node.js (Express)", "PostgreSQL", "Supabase (BaaS)", "APIs RESTful", "Webhooks", "Background Workers", "Docker", "Linux / Nginx"]
  },
  {
    id: "ai",
    title: "Inteligencia Artificial & RAG",
    icon: Cpu,
    description: "Diseño de asistentes conversacionales, bases vectoriales y pipelines agénticos.",
    skills: ["OpenAI API (GPT-4o)", "Arquitecturas RAG", "Supabase (pgvector)", "LangChain", "Agentes Conversacionales", "Generative Coding", "Embeddings Vectoriales"]
  },
  {
    id: "automation",
    title: "Hiperautomatización & Scraping",
    icon: Bot,
    description: "Orquestación de flujos de trabajo sin fricción, bots headless y automatización financiera.",
    skills: ["n8n (Avanzado)", "Make", "Zapier", "Playwright / Puppeteer", "WhatsApp API (Meta/Chatwoot)", "Trello API", "Notion API", "OCR / Data Extraction"]
  },
  {
    id: "gis",
    title: "GIS & Análisis Espacial",
    icon: Globe,
    description: "Procesamiento de datos satelitales y visores georreferenciados para análisis ambiental.",
    skills: ["Google Earth Engine", "QGIS", "Python GIS (Pandas, GeoPandas)", "Cálculo NDVI / NDWI", "Comité Técnico OTBN"]
  }
];

const Skills = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filteredCategories = filter === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === filter);

  return (
    <section id="skills" className="py-20 md:py-32 relative z-10 scroll-mt-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 font-mono font-bold text-xl">04.</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
                {t?.skills?.sectionTitle || "Stack Tecnológico & Competencias"}
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-mono text-slate-400">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-cyan-400" />
              Especialización Frontend & Full Stack
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5 relative">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-mono font-medium transition-all duration-300",
                filter === "all" ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {filter === "all" && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Todos</span>
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-mono font-medium transition-all duration-300",
                  filter === c.id ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {filter === c.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c.title.split("&")[0].trim()}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="group h-full flex flex-col justify-between bg-slate-900/60 backdrop-blur-xl border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden relative">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 transition-transform duration-500 group-hover:scale-110">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                            {cat.skills.length} Skills
                          </span>
                        </div>
                        <CardTitle className="text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {cat.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between pt-0 pb-0">
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {cat.description}
                        </p>
                      </CardContent>
                      
                      <div className="mt-auto p-5 border-t border-white/5 bg-black/20">
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 border border-white/10 rounded-lg whitespace-nowrap"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
