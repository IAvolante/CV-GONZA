import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { CaseStudyLayout } from './CaseStudyLayout';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Terminal, 
  Workflow, 
  Cpu, 
  Network, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';

export function DigitalTransformationCaseStudy() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const cs = work.digitalTransformation;
  const partA = work.partA;

  const breadcrumbs = [
    { label: 'Portfolio', to: '/' },
    { label: 'Selected Work', to: '/#work' },
    { label: cs.company, to: '/#work' },
    { label: cs.title },
  ];

  const modules = [
    {
      id: 'pv-reporting-system',
      path: '/work/pv-reporting-system',
      data: partA.pvReporting,
      number: '01',
    },
    {
      id: 'operations-platform',
      path: '/work/operations-platform',
      data: partA.operationsPlatform,
      number: '02',
    },
    {
      id: 'solar-quotation-system',
      path: '/work/solar-quotation-system',
      data: partA.quotationSystem,
      number: '03',
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
              <span className="text-slate-500">{work.labels.responsibility}: </span>
              <span className="text-cyan-300 font-medium">{cs.role}</span>
            </div>
            <div>
              <span className="text-slate-500">Location: </span>
              <span className="text-slate-300">{cs.location}</span>
            </div>
          </div>

          {/* Overview Block */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-7 space-y-3 mt-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              1. Overview
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cs.overview}
            </p>
          </div>
        </header>

        {/* ========================================================
            2. CONTEXTO INICIAL & PROBLEMAS DETECTADOS
           ======================================================== */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              02 & 03 // DIAGNÓSTICO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Contexto Inicial & Problemas Operativos Detectados
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{cs.initialContext}</p>
          </div>

          {/* List of detected problems */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Inconsistencias y cuellos de botella identificados:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.operationalProblems.map((prob: string, idx: number) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-950/15 border border-red-900/30 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            VISUAL SECTION: ANTES vs. DESPUÉS
           ======================================================== */}
        <section className="space-y-6 pt-6">
          <div className="space-y-1 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              TRANSFORMACIÓN ESTRUCTURAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Matriz Comparativa: Antes vs. Después
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* ANTES */}
            <div className="rounded-xl border border-rose-900/40 bg-gradient-to-b from-rose-950/20 to-slate-950/80 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                  {cs.beforeAfter.beforeTitle}
                </span>
                <span className="text-[11px] font-mono text-rose-400/70">
                  Operación Manual & Dispersa
                </span>
              </div>
              <ul className="space-y-3">
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
              <ul className="space-y-3">
                {cs.beforeAfter.afterItems.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================
            FLUJO OPERATIVO VISUAL (RESPONSIVE)
           ======================================================== */}
        <section className="space-y-6 pt-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              PIPELINE DE NEGOCIO // TRAZABILIDAD
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cs.operationalFlow.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {cs.operationalFlow.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {cs.operationalFlow.steps.map((step: { title: string; description: string }, idx: number) => (
              <div
                key={idx}
                className="relative rounded-lg border border-slate-800/90 bg-slate-900/40 p-4 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Paso 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. ÁREAS INVOLUCRADAS
           ======================================================== */}
        <section className="space-y-6 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              04 // ALCANCE MULTIDISCIPLINARIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {work.labels.areasInvolved}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {cs.areasInvolved.map((area: { name: string; description: string }, idx: number) => (
              <div 
                key={idx} 
                className="rounded-lg border border-slate-800/80 bg-slate-900/30 p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="text-sm font-bold text-white font-mono">
                    {area.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. MI RESPONSABILIDAD
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              05 // LIDERAZGO TÉCNICO END-TO-END
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {work.labels.responsibility}
            </h2>
          </div>
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 leading-relaxed text-slate-300 text-sm sm:text-base">
            <p>{cs.myResponsibility}</p>
          </div>
        </section>

        {/* ========================================================
            6. ARQUITECTURA / ENFOQUE GENERAL
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              06 // INGENIERÍA DE SISTEMAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Network className="w-6 h-6 text-cyan-400" />
              <span>{work.labels.architecture}</span>
            </h2>
          </div>
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 leading-relaxed text-slate-300 text-sm sm:text-base">
            <p>{cs.architecture}</p>
          </div>
        </section>

        {/* ========================================================
            7. PROCESOS DIGITALIZADOS
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              07 // IMPACTO OPERATIVO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Workflow className="w-6 h-6 text-cyan-400" />
              <span>Procesos Digitalizados</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.digitalizedProcesses.map((proc: string, idx: number) => (
              <div 
                key={idx} 
                className="flex items-start gap-2.5 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{proc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. SISTEMAS DESARROLLADOS (MÓDULOS DEL ECOSISTEMA)
           ======================================================== */}
        <section className="space-y-6 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              08 // MÓDULOS DE LA PLATAFORMA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {work.modulesTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Cada módulo resuelve un proceso crítico específico y cuenta con su caso de estudio navegable:
            </p>
          </div>

          <div className="space-y-5">
            {modules.map((mod) => (
              <article 
                key={mod.id}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                    {mod.number} // {mod.data.tag}
                  </span>
                  <Link
                    to={mod.path}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{work.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    <Link to={mod.path} className="hover:text-cyan-300 transition-colors">
                      {mod.data.title}
                    </Link>
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium">
                    {mod.data.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {mod.data.shortDescription}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {mod.data.stack.map((tech: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={mod.path}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-colors"
                  >
                    <span>Ver detalle del módulo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================
            9. INTEGRACIONES & AUTOMATIZACIONES
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              09 // CONECTIVIDAD & FLUJOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span>Integraciones y Automatizaciones</span>
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.integrationsAutomations.map((item: string, idx: number) => (
              <li 
                key={idx} 
                className="flex items-start gap-2.5 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                <span className="text-cyan-400 font-mono text-sm leading-none mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ========================================================
            10. STACK PRINCIPAL
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              10 // TECNOLOGÍAS EN PRODUCCIÓN
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
            11. IMPACTO OPERATIVO
           ======================================================== */}
        <section className="space-y-4 pt-6 border-t border-slate-900">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              11 // RESULTADOS VERIFICABLES
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
