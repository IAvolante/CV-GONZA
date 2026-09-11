import { useLanguage } from '@/i18n/LanguageContext';
import { Layers, Terminal } from 'lucide-react';

export function SelectedWork() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const partA = work.partA;
  const partB = work.partB;

  const primarySystem = partA.pvReporting;
  const secondarySystems = [
    partA.operationsPlatform,
    partA.quotationSystem,
  ];

  return (
    <section id="work" className="py-24 border-t border-slate-900 scroll-mt-20">
      <div className="section-container max-w-5xl mx-auto space-y-20">
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
            PART A: PROFESSIONAL WORK (NUEVAS ENERGÍAS)
           ======================================================== */}
        <div className="space-y-12">
          {/* Case Study Overview Card */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  {partA.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {partA.period}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {partA.role}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {partA.company}
                </h3>
                <span className="text-slate-400 font-medium text-base sm:text-lg">
                  — {partA.domain}
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {partA.overview}
              </p>
            </div>

            {/* Scope & Responsibilities */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>{partA.responsibilitiesTitle}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {partA.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400/80 mt-1 font-mono text-xs">›</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subheading: Selected Systems */}
          <div className="pt-4 border-b border-slate-800 pb-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {partA.systemsTitle}
            </h3>
          </div>

          {/* ========================================================
              CASE 01: PRIMARY CASE STUDY (DEEPEST TECHNICAL TREATMENT)
             ======================================================== */}
          <div className="space-y-10">
            <article className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 space-y-6 hover:border-slate-700/80 transition-colors">
              {/* Primary Case Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    01 // {primarySystem.tag}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {primarySystem.title}
                </h4>
                <p className="text-slate-400 text-sm sm:text-base font-medium">
                  {primarySystem.subtitle}
                </p>
              </div>

              {/* Editorial Flow: Full Depth */}
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-300 pt-2 border-t border-slate-900">
                {/* Context & Problem */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Problema Operativo / Operational Problem
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {primarySystem.contextProblem}
                  </p>
                </div>

                {/* What I Built */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Solución Desarrollada / What I Built
                  </h5>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {primarySystem.whatIBuilt}
                  </p>
                </div>

                {/* Technical Approach */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Enfoque Técnico / Technical Approach
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {primarySystem.technicalApproach}
                  </p>
                </div>

                {/* My Responsibility */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Responsabilidad Directa / My Responsibility
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {primarySystem.myResponsibility}
                  </p>
                </div>

                {/* Outcome */}
                <div className="space-y-1.5 pt-1">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Resultado / Outcome
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {primarySystem.outcome}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-900/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-slate-500" /> Stack:
                </span>
                {primarySystem.stack.map((tech: string, sIdx: number) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* ========================================================
                CASES 02 & 03: SECONDARY SYSTEMS (COMPACT EDITORIAL FLOW)
               ======================================================== */}
            <div className="space-y-8">
              {secondarySystems.map((system, idx) => (
                <article
                  key={idx}
                  className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-6 sm:p-7 space-y-5 hover:border-slate-700/60 transition-colors"
                >
                  {/* Case Header */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">
                        0{idx + 2} // {system.tag}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {system.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {system.subtitle}
                    </p>
                  </div>

                  {/* Compact Editorial Content */}
                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-900/80">
                    {/* Problem & Solution in cohesive flow */}
                    <div className="space-y-1.5">
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Contexto & Solución / Context & Solution
                      </h5>
                      <p className="text-slate-300 leading-relaxed">
                        {system.contextProblem}
                      </p>
                      <p className="text-slate-200 pt-1 leading-relaxed">
                        {system.whatIBuilt}
                      </p>
                    </div>

                    {/* Technical Approach & Responsibility */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          Enfoque Técnico / Implementation
                        </h5>
                        <p className="text-slate-400 text-xs leading-relaxed font-normal">
                          {system.technicalApproach}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          Responsabilidad / Responsibility
                        </h5>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {system.myResponsibility}
                        </p>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-1 pt-1 border-t border-slate-900/60">
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                        Resultado / Outcome
                      </h5>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {system.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 border-t border-slate-900/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-slate-500" /> Stack:
                    </span>
                    {system.stack.map((tech: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART B: SELECTED PROJECTS (TRAINING & SIMULATIONS)
           ======================================================== */}
        <div className="pt-12 border-t border-slate-900 space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">
              {partB.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {partB.title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {partB.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouCreate */}
            <article className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-6 space-y-4 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                    {partB.youCreate.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-0.5">
                    iGrowker
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {partB.youCreate.title}
                </h4>
                <p className="text-xs font-mono text-cyan-300/90 font-medium">
                  {partB.youCreate.role}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {partB.youCreate.context}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {partB.youCreate.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                {partB.youCreate.stack.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* FastLab */}
            <article className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-6 space-y-4 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                    {partB.fastLab.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-0.5">
                    iGrowker
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {partB.fastLab.title}
                </h4>
                <p className="text-xs font-mono text-cyan-300/90 font-medium">
                  {partB.fastLab.role}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {partB.fastLab.context}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {partB.fastLab.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                {partB.fastLab.stack.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
