import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight, ArrowUpRight, Building2, Layers } from 'lucide-react';

export function SelectedWork() {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const umbrella = work.digitalTransformation;
  const partB = work.partB;

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

  const simulationProjects = [
    {
      data: partB.youCreate,
      entity: 'iGrowker',
      featuredTechs: partB.youCreate.stack.slice(0, 4),
    },
    {
      data: partB.fastLab,
      entity: 'iGrowker',
      featuredTechs: partB.fastLab.stack.slice(0, 4),
    },
  ];

  return (
    <section id="work" className="py-24 border-t border-slate-900 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
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
            PROYECTO PARAGUAS PRINCIPAL: NUEVAS ENERGÍAS
           ======================================================== */}
        <div className="space-y-4">
          <article className="group relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/50 p-6 sm:p-9 shadow-xl shadow-cyan-950/20 hover:border-cyan-500/60 transition-all duration-300">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
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
            <div className="py-6 space-y-3">
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

            {/* Responsibility & Key Stack & CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300 font-medium">{umbrella.role}</span>
              </div>

              {/* Technologies */}
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

              {/* Action Button */}
              <Link
                to="/work/digital-transformation-nuevas-energias"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-cyan-950/30 transition-colors"
              >
                <span>{work.viewCaseStudy}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>

        {/* ========================================================
            5 PILARES FUNCIONALES (TARJETAS COMPACTAS)
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
              <article
                key={pillar.number}
                className="group rounded-xl border border-slate-800/90 bg-slate-900/35 p-5 sm:p-6 space-y-4 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/50 transition-all"
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
              </article>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART B: PROYECTOS DE ENTRENAMIENTO & SIMULACIÓN
           ======================================================== */}
        <div className="pt-10 border-t border-slate-900 space-y-6">
          <div className="space-y-1.5 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              {partB.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {partB.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {partB.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {simulationProjects.map((sim, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      {sim.data.badge}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {sim.entity}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {sim.data.title}
                  </h4>

                  <p className="text-xs font-mono text-cyan-300 font-medium">
                    {sim.data.role}
                  </p>

                  <p className="text-xs text-slate-400 italic">
                    {sim.data.context}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {sim.data.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {sim.featuredTechs.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 text-slate-300 font-mono text-[11px]"
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
    </section>
  );
}
