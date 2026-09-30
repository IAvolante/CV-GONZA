import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  Layers, 
  Terminal, 
  Sparkles, 
  FileSpreadsheet, 
  FileCode2, 
  Database, 
  Bot, 
  Palette, 
  Globe 
} from 'lucide-react';

export function Extras() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getProjectIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('otbn') || lower.includes('geospatial') || lower.includes('bosques')) {
      return <Layers className="w-5 h-5 text-emerald-400" />;
    }
    if (lower.includes('publi-prop')) {
      return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
    if (lower.includes('rag') || lower.includes('asistentes')) {
      return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
    if (lower.includes('factura') || lower.includes('edesa') || lower.includes('bill')) {
      return <FileSpreadsheet className="w-5 h-5 text-amber-400" />;
    }
    if (lower.includes('propuesta') || lower.includes('dimensionamiento') || lower.includes('proposal') || lower.includes('sizing')) {
      return <FileCode2 className="w-5 h-5 text-blue-400" />;
    }
    if (lower.includes('notion') || lower.includes('resúmenes') || lower.includes('statement')) {
      return <Database className="w-5 h-5 text-rose-400" />;
    }
    if (lower.includes('nuevi') || lower.includes('mantenimiento') || lower.includes('growth')) {
      return <Bot className="w-5 h-5 text-teal-400" />;
    }
    if (lower.includes('hairphoria')) {
      return <Palette className="w-5 h-5 text-pink-400" />;
    }
    if (lower.includes('corporativa') || lower.includes('website') || lower.includes('nuevas energías')) {
      return <Globe className="w-5 h-5 text-indigo-400" />;
    }
    return <Sparkles className="w-5 h-5 text-cyan-400" />;
  };

  const categories = [
    { key: 'all', label: t.extras.categories.all },
    { key: 'automation', label: t.extras.categories.automation },
    { key: 'integrations', label: t.extras.categories.integrations },
  ];

  const filteredItems = activeCategory === 'all'
    ? t.extras.items.map((item, idx) => ({ ...item, originalIdx: idx }))
    : t.extras.items
        .map((item, idx) => ({ ...item, originalIdx: idx }))
        .filter((item) => item.category === activeCategory);

  return (
    <section id="initiatives" className="py-20 border-t border-slate-900/80 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {t.extras.sectionTag}
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t.extras.sectionTitle}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.extras.sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                activeCategory === cat.key
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Extras Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0 transition-transform group-hover:scale-105">
                    {getProjectIcon(item.title)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Stack tags */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {item.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
