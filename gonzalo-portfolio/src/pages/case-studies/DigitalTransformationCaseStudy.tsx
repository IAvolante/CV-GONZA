import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { CaseStudyLayout } from './CaseStudyLayout';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Terminal, 
  Network, 
  ShieldCheck, 
  ArrowUpRight,
  Layers,
  Lock,
  Sparkles,
  Server,
  Zap,
  FileText,
  Activity,
  MessageSquare,
  Globe,
  Layout,
  Cpu,
  Database
} from 'lucide-react';

const metricAccents = [
  { text: 'text-cyan-400', border: 'hover:border-cyan-500/40' },
  { text: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
  { text: 'text-cyan-400', border: 'hover:border-cyan-500/40' },
  { text: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
];

export function DigitalTransformationCaseStudy() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const cs = work.digitalTransformation;

  const breadcrumbs = [
    { label: 'Portfolio', to: '/' },
    { label: work.sectionTitle, to: '/#work' },
    { label: cs.company, to: '/#work' },
    { label: cs.title },
  ];

  const pillarCards = [
    {
      ...work.pillars.pillar1,
      icon: Zap,
      linkToModule: '/work/solar-quotation-system',
    },
    {
      ...work.pillars.pillar2,
      icon: FileText,
      linkToModule: null,
    },
    {
      ...work.pillars.pillar3,
      icon: Activity,
      linkToModule: '/work/pv-reporting-system',
    },
    {
      ...work.pillars.pillar4,
      icon: MessageSquare,
      linkToModule: '/work/operations-platform',
    },
    {
      ...work.pillars.pillar5,
      icon: Server,
      linkToModule: null,
    },
  ];

  const architectureSteps = [
    {
      step: '01',
      role: 'Client / Interface',
      name: cs.architectureDiagram.user,
      badge: 'HTTPS / REST',
      icon: Globe,
      desc: 'Acceso seguro vía navegador y terminales autorizadas en campo',
    },
    {
      step: '02',
      role: 'Single Page Application',
      name: cs.architectureDiagram.frontend,
      badge: 'React SPA',
      icon: Layout,
      desc: 'UI reactiva con Tailwind CSS y sincronización de estado',
    },
    {
      step: '03',
      role: 'Application Server',
      name: cs.architectureDiagram.backend,
      badge: 'Flask Blueprints',
      icon: Server,
      desc: 'Enrutamiento modular en Blueprints y control de acceso RBAC',
    },
    {
      step: '04',
      role: 'Calculation Engines',
      name: cs.architectureDiagram.engines,
      badge: 'Python Engine',
      icon: Cpu,
      desc: 'Modelado solar matemático, parsers PDF y algoritmos de balance',
    },
    {
      step: '05',
      role: 'Persistent Storage',
      name: cs.architectureDiagram.database,
      badge: 'SQLite Especializado',
      icon: Database,
      desc: 'Almacenes SQLite dedicados por dominio con concurrencia aislada',
    },
    {
      step: '06',
      role: 'External Ecosystem',
      name: cs.architectureDiagram.integrations,
      badge: 'Webhooks & Cloud',
      icon: Layers,
      desc: 'APIs de telemetría IoT Growatt, webhooks, Chatwoot y servicios cloud',
    },
  ];

  return (
    <CaseStudyLayout breadcrumbs={breadcrumbs}>
      <article className="space-y-16">
        {/* ========================================================
            1. HEADER & OVERVIEW
           ======================================================== */}
        <header className="space-y-6 border-b border-slate-800/80 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              {cs.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {cs.period}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>{cs.company}</span>
              <span>—</span>
              <span className="text-slate-300 font-medium">{cs.domain}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {cs.title}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              {cs.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-slate-900">
            <div>
              <span className="text-slate-500">{work.labels.role}: </span>
              <span className="text-cyan-300 font-medium">{cs.role}</span>
            </div>
            <div>
              <span className="text-slate-500">{work.labels.location}: </span>
              <span className="text-slate-300">{cs.location}</span>
            </div>
          </div>

          {/* Overview Block */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-7 space-y-3 mt-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Overview
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cs.overview}
            </p>
          </div>

          {/* High-Impact KPI Metrics Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {cs.metrics?.map((metric: { label: string; value: string }, idx: number) => {
              const accent = metricAccents[idx % metricAccents.length];
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col justify-center items-center text-center space-y-1.5 ${accent.border} transition-all duration-200`}
                >
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${accent.text}`}>
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider leading-snug">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </header>

        {/* ========================================================
            2. CONTEXTO INICIAL & MATRIZ ANTES VS. DESPUÉS
           ======================================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              DIAGNÓSTICO // CONTEXTO OPERATIVO
            </span>
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{cs.initialContext}</p>
            </div>
          </div>

          {/* Comparative Matrix: Before vs After */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold text-center">
              Matriz Comparativa de Transformación
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* ANTES */}
              <div className="rounded-xl border border-rose-900/40 bg-gradient-to-b from-rose-950/20 to-slate-950/80 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                    {cs.beforeAfter.beforeTitle}
                  </span>
                  <span className="text-[11px] font-mono text-rose-400/70">
                    Operación Manual & Desarticulada
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {cs.beforeAfter.beforeItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DESPUÉS */}
              <div className="rounded-xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/25 to-slate-950/80 p-6 space-y-4 shadow-lg shadow-cyan-950/20">
                <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    {cs.beforeAfter.afterTitle}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    Plataforma Centralizada & Automatizada
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {cs.beforeAfter.afterItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. ARQUITECTURA DE SISTEMAS & FLUJO TÉCNICO
           ======================================================== */}
        <section className="space-y-6 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              ARQUITECTURA // DISEÑO TÉCNICO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Network className="w-6 h-6 text-cyan-400" />
              <span>{work.labels.architectureDiagramTitle}</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              {work.labels.architectureDiagramSubtitle}
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 leading-relaxed text-slate-300 text-sm sm:text-base">
            <p>{cs.architectureOverview}</p>
          </div>

          {/* Layered Architecture Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {architectureSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-xl border border-slate-800/90 bg-gradient-to-br from-slate-900/70 via-slate-950/80 to-slate-900/40 p-5 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-950/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                  <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                        <span className="text-cyan-500 font-bold">{step.step}</span>
                        <span className="text-slate-600">//</span>
                        <span className="text-slate-300 truncate">{step.role}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700/80 text-cyan-300 font-mono text-[10px] tracking-tight shrink-0 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-colors">
                        {step.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all shrink-0 mt-0.5">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-cyan-200 transition-colors">
                          {step.name}
                        </h3>
                        <p className="text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors relative z-10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 group-hover:bg-cyan-400 transition-colors" />
                      {idx < 5 ? `PASO ${step.step} › INTERCONEXIÓN` : 'SISTEMA INTEGRADO'}
                    </span>
                    {idx < 5 ? (
                      <span className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-300 transition-colors">
                        <span>Siguiente capa</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Producción Activa
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. LOS 5 PILARES FUNCIONALES DE LA PLATAFORMA
           ======================================================== */}
        <section className="space-y-8 pt-6 border-t border-slate-900">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              MÓDULOS EN PRODUCCIÓN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {work.labels.keyPillarsTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {work.pillarsSubtitle}
            </p>

            {/* Quick In-Page Pillar Navigation Bar */}
            <div className="flex flex-wrap gap-2 pt-2">
              {pillarCards.map((p, idx) => (
                <a
                  key={idx}
                  href={p.anchor}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                  <span>{p.title.split('&')[0].trim()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-8 pt-2">
            {pillarCards.map((pillar) => {
              const IconComponent = pillar.icon;
              const anchorCleanId = pillar.anchor.replace('#', '');

              return (
                <div
                  key={pillar.id}
                  id={anchorCleanId}
                  className="scroll-mt-24 rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/50 via-slate-950 to-slate-900/30 p-6 sm:p-8 space-y-6 hover:border-slate-700 transition-all shadow-lg shadow-black/20"
                >
                  {/* Pillar Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                        {pillar.tag}
                      </span>
                    </div>

                    {pillar.linkToModule && (
                      <Link
                        to={pillar.linkToModule}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-colors"
                      >
                        <span>{work.viewCaseStudy}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                  {/* Title & Short Problem */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    
                    <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-semibold shrink-0 uppercase text-[11px] mt-0.5">
                        {work.labels.problem}:
                      </span>
                      <span>{pillar.shortProblem}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm sm:leading-relaxed pt-1">
                      {pillar.fullDescription}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Capacidades y Lógica Implementada:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.capabilities.map((cap: string, cIdx: number) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pillar Dedicated Stack */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-slate-500 mr-1.5">Stack:</span>
                      {pillar.stack.map((tech: string, sIdx: number) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700/60 text-slate-200 font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {pillar.linkToModule && (
                      <Link
                        to={pillar.linkToModule}
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Detalle técnico completo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. RESPONSABILIDAD PERSONAL DIRECTA
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              ROL & ALCANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>{work.labels.responsibility}</span>
            </h2>
          </div>
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 leading-relaxed text-slate-300 text-sm sm:text-base">
            <p>{cs.myResponsibility}</p>
          </div>
        </section>

        {/* ========================================================
            6. SEGURIDAD & CONTROL DE ACCESO
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              AUTORIZACIÓN & PROTECCIÓN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Lock className="w-6 h-6 text-cyan-400" />
              <span>{cs.security.title}</span>
            </h2>
          </div>
          
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{cs.security.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cs.security.items.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. EXPERIMENTACIÓN & AUTOMATIZACIÓN AVANZADA
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              {cs.advancedAutomation.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span>{cs.advancedAutomation.title}</span>
            </h2>
          </div>

          <div className="rounded-xl border border-purple-900/30 bg-purple-950/10 p-6 sm:p-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{cs.advancedAutomation.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cs.advancedAutomation.items.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-purple-900/30 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="text-purple-400 font-mono text-sm leading-none mt-0.5">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. STACK TECNOLÓGICO GLOBAL VERIFICADO
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              TECNOLOGÍAS DEL SISTEMA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span>{work.labels.stack}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 p-5 rounded-xl border border-slate-800 bg-slate-950/60">
            {cs.stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 font-mono text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================
            9. IMPACTO OPERATIVO VERIFICABLE
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              RESULTADOS OPERATIVOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span>{work.labels.operationalImpact}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.operationalImpact.map((item: string, idx: number) => (
              <div 
                key={idx} 
                className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-950/15 border border-emerald-800/30 text-xs sm:text-sm text-slate-200 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </CaseStudyLayout>
  );
}
