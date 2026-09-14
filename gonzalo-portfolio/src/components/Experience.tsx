import { useLanguage } from '@/i18n/LanguageContext';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 border-t border-slate-900/80 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {t.experience.sectionTag}
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t.experience.sectionTitle}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {t.experience.items.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-950 transition-colors" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/90 transition-all space-y-5">
                {/* Header: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/60 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {item.company}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Impacto y entregas clave:
                  </span>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  {item.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
