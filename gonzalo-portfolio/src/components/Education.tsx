import { useLanguage } from '@/i18n/LanguageContext';
import { Award, Calendar, GraduationCap, Users } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 border-t border-slate-900/80 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {t.training.sectionTag}
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t.training.sectionTitle}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.training.sectionSubtitle}
          </p>
        </div>

        {/* Practical Training / Simulation Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Users className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-300">
              {t.training.practicalSectionTitle}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {t.training.practicalItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400/90 px-2.5 py-0.5 rounded-full bg-slate-800/70 border border-slate-700/60">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs font-medium text-cyan-300 mt-0.5">
                      {item.issuer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Training Section */}
        <div className="space-y-4 pt-4 border-t border-slate-900/60">
          <div className="flex items-center gap-2 text-slate-300">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-300">
              {t.training.academicSectionTitle}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {t.training.academicItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400/90 px-2.5 py-0.5 rounded-full bg-slate-800/70 border border-slate-700/60">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {item.issuer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
