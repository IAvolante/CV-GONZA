import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { CaseStudyLayout } from './CaseStudyLayout';
import { 
  Building2, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Lock, 
  Sparkles 
} from 'lucide-react';

export function LisSaresaCaseStudy() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const cs = work.lisSaresa;

  const breadcrumbs = [
    { label: 'Portfolio', to: '/' },
    { label: work.sectionTitle, to: '/#work' },
    { label: cs.company, to: '/#work' },
    { label: cs.title },
  ];

  const architectureSteps = [
    {
      role: 'Usuarios & Periféricos',
      name: cs.architectureDiagram.user,
      desc: 'Acceso dual Desktop (Electron) y Web SPA',
    },
    {
      role: 'Frontend SPA (React 18)',
      name: cs.architectureDiagram.frontend,
      desc: 'Lazy Loading, Code Splitting y UI reactiva',
    },
    {
      role: 'Application Server (Node.js)',
      name: cs.architectureDiagram.backend,
      desc: 'Router modular Express y auditoría médica',
    },
    {
      role: 'In-Memory Cache & IA',
      name: cs.architectureDiagram.engines,
      desc: 'vrCache 0ms + Gemini Vision + Algoritmo FIFO',
    },
    {
      role: 'Persistencia Atómica',
      name: cs.architectureDiagram.database,
      desc: 'SQLite sincrónico en-proceso better-sqlite3',
    },
    {
      role: 'Despliegue & Producción',
      name: cs.architectureDiagram.integrations,
      desc: 'VPS Linux DonWeb, Nginx, Certbot SSL y CI/CD',
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
            <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
              {cs.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {cs.period}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
              <Building2 className="w-4 h-4 text-emerald-400" />
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
              <span className="text-emerald-300 font-medium">{cs.role}</span>
            </div>
            <div>
              <span className="text-slate-500">{work.labels.location}: </span>
              <span className="text-slate-300">{cs.location}</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
            {cs.metrics.map((metric: { label: string; value: string }, idx: number) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex flex-col justify-center items-center text-center space-y-1 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overview Block */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-7 space-y-3 mt-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Overview del Sistema
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cs.overview}
            </p>
          </div>
        </header>

        {/* ========================================================
            2. CONTEXTO INICIAL & MATRIZ ANTES VS. DESPUÉS
           ======================================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              DIAGNÓSTICO // CONTEXTO CLÍNICO & OPERATIVO
            </span>
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-7 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{cs.initialContext}</p>
            </div>
          </div>

          {/* Comparative Matrix: Before vs After */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold text-center">
              Matriz Comparativa de Transformación Hospitalaria
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* ANTES */}
              <div className="rounded-xl border border-rose-900/40 bg-gradient-to-b from-rose-950/20 to-slate-950/80 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                    {cs.beforeAfter.beforeTitle}
                  </span>
                  <span className="text-[11px] font-mono text-rose-400/70">
                    Operación Heredada & Fragmentada
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {cs.beforeAfter.beforeItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-rose-300/90 leading-relaxed">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DESPUÉS */}
              <div className="rounded-xl border border-emerald-900/40 bg-gradient-to-b from-emerald-950/20 to-slate-950/80 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-900/30 pb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    {cs.beforeAfter.afterTitle}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400/70">
                    Sistema Clínico en Producción Activa
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {cs.beforeAfter.afterItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. RESPONSABILIDAD DIRECTA & ROL TÉCNICO
           ======================================================== */}
        <section className="space-y-4 border-t border-slate-900 pt-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Responsabilidad Técnica Directa</span>
          </div>
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 sm:p-7 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{cs.myResponsibility}</p>
          </div>
        </section>

        {/* ========================================================
            4. ARQUITECTURA DE SISTEMAS & RENDIMIENTO A 0MS
           ======================================================== */}
        <section className="space-y-8 border-t border-slate-900 pt-10">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              DISEÑO DE SISTEMAS // ALTO RENDIMIENTO MÉDICO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Arquitectura Desacoplada y Resolución a 0ms
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {cs.architectureOverview}
            </p>
          </div>

          {/* Sequential Flow Nodes */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Pipeline de Ejecución y Persistencia en Producción
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 space-y-3 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                      Fase 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {step.role}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">
                      {step.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. INNOVACIÓN EN IA MULTIMODAL & FINANZAS (FIFO)
           ======================================================== */}
        <section className="space-y-6 border-t border-slate-900 pt-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                {cs.advancedAutomation.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cs.advancedAutomation.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {cs.advancedAutomation.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.advancedAutomation.items.map((item: string, idx: number) => (
              <div 
                key={idx} 
                className="p-5 rounded-xl border border-purple-900/30 bg-purple-950/10 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
              >
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            6. SEGURIDAD, TRAZABILIDAD & AUDITORÍA CLÍNICA
           ======================================================== */}
        <section className="space-y-6 border-t border-slate-900 pt-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              NORMATIVA & PRIVACIDAD // INTEGRIDAD DE DATOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cs.security.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {cs.security.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {cs.security.items.map((item: string, idx: number) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex items-start gap-3 text-xs sm:text-sm text-slate-300"
              >
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            7. STACK TECNOLÓGICO VERIFICADO
           ======================================================== */}
        <section className="space-y-4 border-t border-slate-900 pt-10">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            TECNOLOGÍA VERIFICADA EN PRODUCCIÓN
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {cs.stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-200 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. IMPACTO OPERATIVO COMPROBADO
           ======================================================== */}
        <section className="space-y-6 border-t border-slate-900 pt-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              RESULTADOS CUANTITATIVOS & CUALITATIVOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Impacto en la Actividad Diaria del Laboratorio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.operationalImpact.map((item: string, idx: number) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation back */}
        <div className="border-t border-slate-900 pt-8 flex items-center justify-between">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← Volver a Sistemas en Producción
          </Link>
          <Link
            to="/work/digital-transformation-nuevas-energias"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Ver Plataforma Nuevas Energías →
          </Link>
        </div>
      </article>
    </CaseStudyLayout>
  );
}
