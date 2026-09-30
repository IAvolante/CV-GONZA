import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Layers,
  Check,
  CheckCircle2,
  AlertOctagon,
  Radio,
  Server,
  Database,
  Zap,
  Workflow,
  Microscope,
  Sparkles,
} from 'lucide-react';
import { Spotlight } from '@/components/magicui/spotlight';
import { BorderBeam } from '@/components/magicui/border-beam';

export function SelectedWork() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const umbrella = work.digitalTransformation;
  const saresa = work.lisSaresa;

  const energyArchitectureNodes = [
    {
      step: '01',
      data: umbrella.architectureFlow.nodes.inputs,
      icon: Radio,
    },
    {
      step: '02',
      data: umbrella.architectureFlow.nodes.api,
      icon: Server,
    },
    {
      step: '03',
      data: umbrella.architectureFlow.nodes.database,
      icon: Database,
    },
    {
      step: '04',
      data: umbrella.architectureFlow.nodes.cache,
      icon: Zap,
    },
    {
      step: '05',
      data: umbrella.architectureFlow.nodes.services,
      icon: Workflow,
    },
  ];

  const saresaArchitectureNodes = [
    {
      step: '01',
      data: saresa.architectureFlow.nodes.inputs,
      icon: Microscope,
    },
    {
      step: '02',
      data: saresa.architectureFlow.nodes.api,
      icon: Server,
    },
    {
      step: '03',
      data: saresa.architectureFlow.nodes.cache,
      icon: Zap,
    },
    {
      step: '04',
      data: saresa.architectureFlow.nodes.aiEngine,
      icon: Sparkles,
    },
    {
      step: '05',
      data: saresa.architectureFlow.nodes.database,
      icon: Database,
    },
  ];

  const pillars = [
    {
      number: '01',
      data: work.pillars.pillar1,
      featuredTechs: work.pillars.pillar1.stack.slice(0, 4),
      anchorPath: `/work/digital-transformation-nuevas-energias${work.pillars.pillar1.anchor}`,
    },
    {
      number: '02',
      data: work.pillars.pillar2,
      featuredTechs: work.pillars.pillar2.stack.slice(0, 4),
      anchorPath: `/work/digital-transformation-nuevas-energias${work.pillars.pillar2.anchor}`,
    },
    {
      number: '03',
      data: work.pillars.pillar3,
      featuredTechs: work.pillars.pillar3.stack.slice(0, 4),
      anchorPath: `/work/digital-transformation-nuevas-energias${work.pillars.pillar3.anchor}`,
    },
    {
      number: '04',
      data: work.pillars.pillar4,
      featuredTechs: work.pillars.pillar4.stack.slice(0, 4),
      anchorPath: `/work/digital-transformation-nuevas-energias${work.pillars.pillar4.anchor}`,
    },
    {
      number: '05',
      data: work.pillars.pillar5,
      featuredTechs: work.pillars.pillar5.stack.slice(0, 4),
      anchorPath: `/work/digital-transformation-nuevas-energias${work.pillars.pillar5.anchor}`,
    },
  ];

  return (
    <section id="work" className="py-24 border-t border-slate-900 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-slate-400 font-mono text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{work.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {work.sectionTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            {work.sectionSubtitle}
          </p>
        </div>

        {/* ========================================================
            BUQUE INSIGNIA 01: NUEVAS ENERGÍAS
           ======================================================== */}
        <div className="space-y-4">
          <article className="group relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/50 p-6 sm:p-9 shadow-xl shadow-cyan-950/20 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden space-y-6">
            <BorderBeam size={180} duration={12} delay={0} colorFrom="#06b6d4" colorTo="#3b82f6" />

            {/* Header info */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  {umbrella.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {umbrella.period}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-medium">
                {umbrella.role}
              </span>
            </div>

            {/* Title & Short Description */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>{umbrella.company}</span>
                <span>—</span>
                <span className="text-slate-300">{umbrella.domain}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                <Link to="/work/digital-transformation-nuevas-energias">
                  {umbrella.title}
                </Link>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {umbrella.shortDescription}
              </p>
            </div>

            {/* Matriz Visual "Antes vs. Después" */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-rose-900/30 bg-rose-950/10 p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                  <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{umbrella.beforeAfter.beforeTitle}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-rose-300 leading-relaxed font-normal">
                  {umbrella.beforeAfter.beforeItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-400/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{umbrella.beforeAfter.afterTitle}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-cyan-200 leading-relaxed font-normal">
                  {umbrella.beforeAfter.afterItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Diagrama de Arquitectura de Nodos en Producción */}
            <div className="relative z-10 rounded-xl border border-slate-800/90 bg-slate-950/80 p-5 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{umbrella.architectureFlow.tag}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                    {umbrella.architectureFlow.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 max-w-md sm:text-right font-normal">
                  {umbrella.architectureFlow.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative pt-1">
                {energyArchitectureNodes.map((node, index) => {
                  const NodeIcon = node.icon;
                  return (
                    <div
                      key={node.step}
                      className="relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-200 group/node"
                    >
                      {index < energyArchitectureNodes.length - 1 && (
                        <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none items-center justify-center text-cyan-500/50 group-hover/node:text-cyan-400 transition-colors">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </div>
                      )}

                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-slate-500 font-semibold tracking-wider">
                            NODE // {node.step}
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover/node:scale-105 transition-transform">
                            <NodeIcon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight group-hover/node:text-cyan-200 transition-colors">
                            {node.data.title}
                          </h5>
                          <p className="mt-1 font-mono text-[10px] text-cyan-300/90 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded leading-tight">
                            {node.data.tech}
                          </p>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed pt-1 font-normal">
                          {node.data.desc}
                        </p>
                      </div>

                      {index < energyArchitectureNodes.length - 1 && (
                        <div className="flex lg:hidden justify-center py-1 text-cyan-500/50">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Responsibility & Key Stack & CTA */}
            <div className="relative z-10 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300 font-medium">{umbrella.role}</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {umbrella.stack.slice(0, 6).map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to="/work/digital-transformation-nuevas-energias"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-cyan-950/30 transition-colors"
              >
                <span>{umbrella.architectureFlow.viewFullCaseStudy || work.viewCaseStudy}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>

        {/* ========================================================
            BUQUE INSIGNIA 02: LIS SARESA V4 (HEALTHCARE ERP)
           ======================================================== */}
        <div className="space-y-4">
          <article className="group relative rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/50 p-6 sm:p-9 shadow-xl shadow-emerald-950/20 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden space-y-6">
            <BorderBeam size={180} duration={12} delay={2} colorFrom="#10b981" colorTo="#06b6d4" />

            {/* Header info */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  {saresa.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {saresa.period}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-medium">
                {saresa.role}
              </span>
            </div>

            {/* Title & Short Description */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <Microscope className="w-4 h-4 text-emerald-400" />
                <span>{saresa.company}</span>
                <span>—</span>
                <span className="text-slate-300">{saresa.domain}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-200 transition-colors">
                <Link to="/work/lis-saresa-v4">
                  {saresa.title}
                </Link>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {saresa.shortDescription}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              {saresa.metrics.map((metric: { label: string; value: string }, idx: number) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl border border-slate-800/90 bg-slate-950/70 flex flex-col justify-center items-center text-center space-y-0.5"
                >
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Matriz Visual "Antes vs. Después" */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-rose-900/30 bg-rose-950/10 p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                  <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{saresa.beforeAfter.beforeTitle}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-rose-300 leading-relaxed font-normal">
                  {saresa.beforeAfter.beforeItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-400/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{saresa.beforeAfter.afterTitle}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-200 leading-relaxed font-normal">
                  {saresa.beforeAfter.afterItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Diagrama de Arquitectura LIS V4 */}
            <div className="relative z-10 rounded-xl border border-slate-800/90 bg-slate-950/80 p-5 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{saresa.architectureFlow.tag}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                    {saresa.architectureFlow.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 max-w-md sm:text-right font-normal">
                  {saresa.architectureFlow.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative pt-1">
                {saresaArchitectureNodes.map((node, index) => {
                  const NodeIcon = node.icon;
                  return (
                    <div
                      key={node.step}
                      className="relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-200 group/node"
                    >
                      {index < saresaArchitectureNodes.length - 1 && (
                        <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none items-center justify-center text-emerald-500/50 group-hover/node:text-emerald-400 transition-colors">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </div>
                      )}

                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-slate-500 font-semibold tracking-wider">
                            NODE // {node.step}
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover/node:scale-105 transition-transform">
                            <NodeIcon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight group-hover/node:text-emerald-200 transition-colors">
                            {node.data.title}
                          </h5>
                          <p className="mt-1 font-mono text-[10px] text-emerald-300/90 bg-emerald-950/40 border border-emerald-800/30 px-2 py-0.5 rounded leading-tight">
                            {node.data.tech}
                          </p>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed pt-1 font-normal">
                          {node.data.desc}
                        </p>
                      </div>

                      {index < saresaArchitectureNodes.length - 1 && (
                        <div className="flex lg:hidden justify-center py-1 text-emerald-500/50">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Responsibility & Key Stack & CTA */}
            <div className="relative z-10 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">{saresa.role}</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {saresa.stack.slice(0, 6).map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to="/work/lis-saresa-v4"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-emerald-950/30 transition-colors"
              >
                <span>{saresa.architectureFlow.viewFullCaseStudy || work.viewCaseStudy}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>

        {/* ========================================================
            PILARES FUNCIONALES DEL ERP NUEVAS ENERGÍAS
           ======================================================== */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              {work.pillarsTitle}
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {work.pillarsSubtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <Spotlight
                key={pillar.number}
                className="rounded-xl border border-slate-800/90 bg-slate-900/35 p-5 sm:p-6 space-y-4 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {pillar.data.tag}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    <Link to={pillar.anchorPath}>
                      {pillar.data.title}
                    </Link>
                  </h4>

                  <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
                    <p className="line-clamp-2">
                      <strong className="text-slate-300 font-medium">{work.labels.problem}: </strong>
                      {pillar.data.shortProblem}
                    </p>
                    <p className="line-clamp-2 text-slate-300">
                      {pillar.data.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.featuredTechs.map((tech: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={pillar.anchorPath}
                    className="inline-flex items-center justify-between w-full pt-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{work.viewPillar}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
