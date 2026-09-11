import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import Footer from '../components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <Navbar />
      <main className="relative flex flex-col">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Selected Work (Professional Work & Selected Projects) */}
        <SelectedWork />

        {/* 3. Professional Experience (Structure anchor for Stage 2) */}
        <section id="experience" className="py-20 border-t border-slate-900/80 scroll-mt-20">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                02 / {t.nav.experience}
              </h2>
            </div>
            <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-950/40 text-slate-500 text-xs sm:text-sm font-mono leading-relaxed">
              [Professional Experience: Nuevas Energías — Especialista en TI / Software Solutions Developer — pendiente implementación en Etapa 2]
            </div>
          </div>
        </section>

        {/* 4. Technical Focus (Structure anchor for Stage 2) */}
        <section id="focus" className="py-20 border-t border-slate-900/80 scroll-mt-20">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                03 / {t.nav.focus}
              </h2>
            </div>
            <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-950/40 text-slate-500 text-xs sm:text-sm font-mono leading-relaxed">
              [Technical Focus: Frontend · Backend & Data · Automation & Integration · Applied AI — pendiente implementación en Etapa 2]
            </div>
          </div>
        </section>

        {/* 5. About (Structure anchor for Stage 2) */}
        <section id="about" className="py-20 border-t border-slate-900/80 scroll-mt-20">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                04 / {t.nav.about}
              </h2>
            </div>
            <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-950/40 text-slate-500 text-xs sm:text-sm font-mono leading-relaxed">
              [About: Enfoque de resolución de problemas operativos reales mediante software completo — pendiente implementación en Etapa 2]
            </div>
          </div>
        </section>

        {/* 6. Contact (Structure anchor for Stage 2) */}
        <section id="contact" className="py-20 border-t border-slate-900/80 scroll-mt-20">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                05 / {t.nav.contact}
              </h2>
            </div>
            <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-950/40 text-slate-500 text-xs sm:text-sm font-mono leading-relaxed">
              [Contact: Let's connect — Email, LinkedIn, GitHub, Resume — pendiente implementación en Etapa 2]
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
