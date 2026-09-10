import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Spotlight } from '@/components/magicui/spotlight';
import SaaSImpactCalculator from './SaaSImpactCalculator';

const neModules = [
  {
    id: "saas-replace",
    title: "Reemplazo SaaS & Chatwoot Self-Hosted",
    subtitle: "Ahorro Directo de +$320 USD/mes",
    problem: "Pagar suscripciones costosas en USD (Xubio $120/mes, noCRM $150/mes, Whaticket $50/mes) que limitaban la integración interna.",
    solution: "Desarrollo del módulo financiero propio y migración a infraestructura propia self-hosted utilizando Chatwoot, WhatsApp Meta API, Notion API y PostgreSQL. Eliminó licencias SaaS recurrentes.",
    result: "Ahorro neto de más de $320+ USD mensuales (+ $3.800 USD/año), manteniendo la soberanía total de la base de datos de facturación y prospectos.",
    tech: ["Chatwoot Self-Hosted", "Meta WhatsApp API", "Notion API", "n8n", "PostgreSQL", "Python"],
    badge: "Ahorro +$320 USD/mes"
  },
  {
    id: "informes",
    title: "Motor de Informes Fotovoltaicos",
    subtitle: "Gestoría Energética Automática para +40 Plantas",
    problem: "Cruzar la producción solar diaria con la tarifa eléctrica consumida (pico, resto, valle) tomaba de medio día a un día entero de transcripción manual en Excel por planta.",
    solution: "Desarrollé un motor asíncrono en Python que consulta en tiempo real las APIs de los inversores solares (Growatt), almacena datos en PostgreSQL y genera automáticamente reportes técnicos en PDF con diagnósticos de recupero de inversión.",
    result: "Redujo el tiempo de generación de informe de 1 día a solo 2 minutos por planta. Habilitó el monitoreo escalable de más de 40 plantas solares activas.",
    tech: ["Python", "PostgreSQL", "Inverter APIs", "Matplotlib", "PDF Engine"],
    badge: "2 Minutos por Reporte"
  },
  {
    id: "nuevi-ai",
    title: "Cerebro IA 'Nuevi' & Agente Conversacional",
    subtitle: "RAG & Triaje Automático 24/7",
    problem: "Atención al cliente y triaje de soporte post-venta dependiente de carga manual humana, produciendo demoras fuera del horario comercial.",
    solution: "Creé a 'Nuevi', un cerebro conversacional basado en IA (RAG + LangChain + OpenAI API) entrenado con todos los manuales y productos de la empresa. Atiende consultas comerciales y realiza triaje técnico derivando tickets calificados a Trello.",
    result: "Atención comercial automatizada 24/7 y eliminación de tickets perdidos en soporte post-venta.",
    tech: ["OpenAI API", "RAG", "LangChain", "WhatsApp API", "Trello API"],
    badge: "Atención IA 24/7"
  },
  {
    id: "facturas",
    title: "Analizador de Facturas con IA",
    subtitle: "OCR, Diagnóstico Tarifario y Prospección",
    problem: "La carga de consumos desde facturas impresas o PDFs desalineados tomaba tiempo y causaba errores en cotizaciones de paneles solares.",
    solution: "Algoritmos de ingesta (OCR y pdfplumber) para extraer consumos históricos, NIS y categorías tarifarias. Evalúa cobros de potencia contratada y recomienda la tarifa óptima del distribuidor (EDESA) utilizando la API de OpenAI.",
    result: "Automatizó el análisis de pre-factibilidad y la prospección masiva de clientes comerciales e industriales.",
    tech: ["Python", "pdfplumber", "OpenAI API", "OCR", "Data Engineering"],
    badge: "Pre-Factibilidad Instantánea"
  },
  {
    id: "cotizador",
    title: "Cotizador & Dimensionador Solar",
    subtitle: "Ingeniería On-Grid y Off-Grid en la Web",
    problem: "Dimensionar paneles y baterías dependía de plantillas Excel locales propensas a errores y desactualizadas con el tipo de cambio USD.",
    solution: "Migré la lógica matemática compleja a un motor web (Flask + React). Realiza dimensionamiento Off-Grid (baterías) y proyecciones On-Grid (Autoconsumo/Balance Neto), calculando el Bill of Materials (BOM) y generando propuestas.",
    result: "Cotizaciones precisas y emisión de propuestas comerciales en formato PDF en cuestión de minutos.",
    tech: ["React (Vite)", "Flask", "Python", "Business Logic"],
    badge: "Emisión en Minutos"
  }
];

const acceleratorProjects = [
  {
    title: "FastLab (LIS SARESA)",
    subtitle: "iGrowker · Sistema de Información de Laboratorio Clínico",
    description: "Lideré el desarrollo Frontend de un LIS de alta disponibilidad para la gestión de historias clínicas, muestras de laboratorio y consulta de resultados médicos.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Docker", "Nginx", "Node.js"],
    metrics: "Frontend Lead / Alta Disponibilidad"
  },
  {
    title: "YouCreate 2.0",
    subtitle: "iGrowker · Plataforma FinTech para Creadores de Contenido",
    description: "Colaboración Full-stack y liderazgo frontend en la arquitectura para resolver flujos administrativos, fiscales y de liquidación para creadores digitales.",
    tech: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST API"],
    metrics: "FinTech Architecture / Full Stack"
  },
  {
    title: "Foo Talent Group Acceleration",
    subtitle: "Foo Talent Group · Simulación Laboral Intensiva",
    description: "Participación en dinámicas aceleradas de desarrollo ágil de software, testing unitario, refactorización de código e integración continua (CI/CD).",
    tech: ["React", "Node.js", "Git / GitHub Flow", "Scrum", "CI/CD"],
    metrics: "Aceleración de Software Certificada"
  }
];

const smartProjects = [
  {
    title: 'Auto-Poster Inmobiliario (Publi-Prop)',
    description: 'Bot headless automatizado para publicación masiva en Facebook Marketplace. Implementa persistencia de cookies de sesión activa, evasión de huellas digitales de navegador y orquestación con n8n.',
    tech: ['Node.js', 'Playwright', 'Puppeteer', 'n8n', 'Stealth Plugin'],
    type: 'Bot & Web Scraping'
  },
  {
    title: 'Agentes IA RAG & OdontIA',
    description: 'Asistentes conversacionales autónomos con arquitectura RAG para lectura de PDFs y triaje de turnos dentales con derivación humana.',
    tech: ['Python', 'Supabase (pgvector)', 'LangChain', 'WhatsApp API', 'OpenAI'],
    type: 'AI & Vector DB'
  },
  {
    title: 'Visor OTBN & Procesamiento Satelital',
    description: 'Visor georreferenciado oficial para la Ley de Bosques Nativos en Salta y scripts automáticos de índices satelitales (NDVI/NDWI) para detección de deforestación.',
    tech: ['Python', 'Google Earth Engine', 'GIS / QGIS', 'Comité Técnico'],
    type: 'Spatial Data & Python'
  },
  {
    title: 'Plataforma de Ticketing & Acceso QR',
    description: 'Sistema completo para venta de entradas a eventos con pasarela de pagos (MercadoPago), emisión de credenciales QR dinámicas y panel organizador.',
    tech: ['React', 'Node.js', 'MercadoPago API', 'QR Code Engine'],
    type: 'Full Stack & FinTech'
  }
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 scroll-mt-24">
      <div className="section-container">
        
        {/* SECTION 1: Transformación Digital */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-cyan-500 font-mono font-bold text-xl">01.</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50 tracking-tight">
              {t?.projects?.sectionTitle || "Transformación Digital & Hiperautomatización"}
            </h2>
          </div>

          <Spotlight className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6">
                <Badge variant="outline" className="mb-3 text-cyan-400 border-cyan-500/30 font-mono text-xs">
                  {t?.projects?.caseStudyLabel || "Caso de Éxito de Impacto Real"}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
                  {t?.projects?.caseStudyTitle || "Ecosistema ERP Nuevas Energías"}
                </h3>
                <p className="text-sm text-cyan-400 font-mono">
                  {t?.projects?.caseStudyRole || "Lead Tech & Digital PM (28 Proyectos)"}
                </p>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-4xl">
                {t?.projects?.caseStudyDesc || "Lideré la digitalización completa de la compañía en el sector de energías renovables: reemplacé suscripciones SaaS costosas, automaticé reportes para más de 40 plantas solares y construí a 'Nuevi', el agente cerebro de IA de la empresa."}
              </p>

              <Tabs defaultValue={neModules[0].id} className="w-full">
              <TabsList className="flex w-full h-auto bg-slate-950/50 border border-white/5 p-1.5 mb-8 rounded-xl overflow-x-auto gap-1 scrollbar-hide">
                  {neModules.map((mod) => (
                    <TabsTrigger
                      key={mod.id}
                      value={mod.id}
                      className="whitespace-nowrap px-3 md:px-4 py-2 data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 data-[state=active]:shadow-sm text-slate-400 text-xs md:text-sm font-medium rounded-lg transition-all shrink-0"
                    >
                      {{ 'saas-replace': '💰 Reemplazo SaaS', 'informes': '📊 Informes FV', 'nuevi-ai': '🤖 Cerebro IA', 'facturas': '📄 Analizador IA', 'cotizador': '☀️ Cotizador' }[mod.id] || mod.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {neModules.map((mod) => (
                  <TabsContent key={mod.id} value={mod.id} className="mt-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                          <h4 className="text-lg md:text-xl font-bold text-slate-100">{mod.subtitle}</h4>
                          <Badge className="w-fit bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs shrink-0">
                            {mod.badge}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <Card className="bg-black/40 border-l-4 border-l-red-500 border-y-white/5 border-r-white/5">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-xs uppercase font-bold text-red-500 tracking-wider">
                                El Problema
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <p className="text-slate-300 text-sm leading-relaxed">{mod.problem}</p>
                            </CardContent>
                          </Card>

                          <Card className="bg-black/40 border-l-4 border-l-cyan-500 border-y-white/5 border-r-white/5">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-xs uppercase font-bold text-cyan-500 tracking-wider">
                                La Solución
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <p className="text-slate-300 text-sm leading-relaxed">{mod.solution}</p>
                            </CardContent>
                          </Card>

                          <Card className="bg-black/40 border-l-4 border-l-emerald-500 border-y-white/5 border-r-white/5">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-xs uppercase font-bold text-emerald-500 tracking-wider">
                                Resultado
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <p className="text-slate-300 text-sm leading-relaxed">{mod.result}</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-slate-400 mr-2">Stack:</span>
                          {mod.tech.map((techItem, idx) => (
                            <Badge key={idx} variant="outline" className="font-mono text-cyan-400 border-cyan-500/30 bg-cyan-500/5">
                              {techItem}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Spotlight>
          
          <div className="mt-12">
            <SaaSImpactCalculator />
          </div>
        </motion.div>

        {/* SECTION 2: Aceleradoras */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-cyan-500 font-mono font-bold text-xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50 tracking-tight">
              {t?.projects?.acceleratorsTitle || "Aceleradoras & Simulaciones"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acceleratorProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-colors flex flex-col">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-4 text-cyan-400 border-cyan-500/30 font-mono text-xs">
                      {p.metrics}
                    </Badge>
                    <CardTitle className="text-xl text-slate-100">{p.title}</CardTitle>
                    <CardDescription className="text-cyan-400 font-medium">
                      {p.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {p.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Smart Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-cyan-500 font-mono font-bold text-xl">03.</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50 tracking-tight">
              {t?.projects?.smartTitle || "Smart Projects & IA"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smartProjects.map((sp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-full"
              >
                <Spotlight className="h-full">
                  <Card className="relative z-10 h-full bg-slate-900/60 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all flex flex-col">
                    <CardHeader>
                      <Badge className="w-fit mb-4 bg-violet-500/10 text-violet-400 border-violet-500/30 hover:bg-violet-500/20 font-mono">
                        {sp.type}
                      </Badge>
                      <CardTitle className="text-xl text-slate-100">{sp.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-slate-300 text-sm leading-relaxed">{sp.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {sp.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-white/5 text-slate-300 border-white/10 font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </Spotlight>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
