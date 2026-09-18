import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { CaseStudyLayout } from './CaseStudyLayout';
import { 
  Building2, 
  Terminal, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Workflow, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

interface ModuleCaseStudyProps {
  moduleId: 'pvReporting' | 'operationsPlatform' | 'quotationSystem';
}

export function ModuleCaseStudy({ moduleId }: ModuleCaseStudyProps) {
  const { t } = useLanguage();
  const work = t.selectedWork;
  const partA = work.partA;
  const umbrella = work.digitalTransformation;

  const system = partA[moduleId];

  const modulesNav = [
    {
      id: 'pvReporting',
      path: '/work/pv-reporting-system',
      title: partA.pvReporting.title,
    },
    {
      id: 'operationsPlatform',
      path: '/work/operations-platform',
      title: partA.operationsPlatform.title,
    },
    {
      id: 'quotationSystem',
      path: '/work/solar-quotation-system',
      title: partA.quotationSystem.title,
    },
  ];

  const currentIndex = modulesNav.findIndex((m) => m.id === moduleId);
  const prevModule = currentIndex > 0 ? modulesNav[currentIndex - 1] : null;
  const nextModule = currentIndex < modulesNav.length - 1 ? modulesNav[currentIndex + 1] : null;

  const breadcrumbs = [
    { label: 'Portfolio', to: '/' },
    { label: 'Selected Work', to: '/#work' },
    { label: umbrella.title, to: '/work/digital-transformation-nuevas-energias' },
    { label: system.title },
  ];

  return (
    <CaseStudyLayout breadcrumbs={breadcrumbs}>
      <article className="space-y-12">
        {/* Navigation back to umbrella project */}
        <div className="flex items-center justify-between">
          <Link
            to="/work/digital-transformation-nuevas-energias"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{work.backToUmbrella}</span>
          </Link>
          <span className="text-xs font-mono text-slate-500">
            0{currentIndex + 1} / 03
          </span>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-slate-800/80 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              {system.tag}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {partA.company} · {partA.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {system.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
            {system.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{work.labels.partOfPlatform}: </span>
            <Link 
              to="/work/digital-transformation-nuevas-energias" 
              className="text-cyan-300 hover:underline inline-flex items-center gap-0.5"
            >
              <span>{umbrella.title}</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Section 1: Problema Operativo */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <h2 className="font-bold text-slate-300">{work.labels.problem}</h2>
          </div>
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-5 sm:p-6 text-slate-300 text-sm sm:text-base leading-relaxed pl-5 border-l-2 border-l-rose-400/60">
            <p>{system.contextProblem}</p>
          </div>
        </section>

        {/* Section 2: Solución Desarrollada */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <h2 className="font-bold text-slate-300">{work.labels.solution}</h2>
          </div>
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-5 sm:p-6 text-slate-200 text-sm sm:text-base leading-relaxed pl-5 border-l-2 border-l-cyan-400/70">
            <p>{system.whatIBuilt}</p>
          </div>
        </section>

        {/* Section 3 & 4: Proceso que digitaliza & Integraciones */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Proceso que digitaliza */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <h3 className="font-bold">{work.labels.processDigitalized}</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {system.processDigitalized}
            </p>
          </div>

          {/* Integraciones */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <h3 className="font-bold">{work.labels.integrations}</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {system.integrations}
            </p>
          </div>
        </section>

        {/* Section 5: Enfoque Técnico & Responsabilidad Directa */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-cyan-400" />
              <h3 className="font-semibold text-slate-300">{work.labels.technicalApproach}</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {system.technicalApproach}
            </p>
          </div>

          <div className="space-y-2 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <h3 className="font-semibold text-slate-300">{work.labels.responsibility}</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {system.myResponsibility}
            </p>
          </div>
        </section>

        {/* Section 6: Resultado Obtenido */}
        <section className="rounded-xl border border-emerald-800/30 bg-emerald-950/20 p-6 space-y-2.5">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <h2 className="font-bold">{work.labels.outcome}</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {system.outcome}
          </p>
        </section>

        {/* Section 7: Stack */}
        <section className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-cyan-400" /> {work.labels.stack}:
          </span>
          {system.stack.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 rounded bg-slate-800/90 border border-slate-700/60 text-slate-200 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </section>

        {/* Sibling Modules Navigation */}
        <nav className="pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          {prevModule ? (
            <Link
              to={prevModule.path}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>{prevModule.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              to={nextModule.path}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
            >
              <span>{nextModule.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          ) : (
            <Link
              to="/work/digital-transformation-nuevas-energias"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-colors"
            >
              <span>{work.backToUmbrella}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </nav>
      </article>
    </CaseStudyLayout>
  );
}
