import { useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Globe, Mail, FileText } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Footer from '@/components/Footer';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface CaseStudyLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
}

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function CaseStudyLayout({ breadcrumbs, children }: CaseStudyLayoutProps) {
  const { t, lang, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  const cta = t.selectedWork.caseStudyCta;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Layer 1: Petrol Blue */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_-10%,rgba(16,42,77,0.30),transparent_70%)]" 
        aria-hidden="true" 
      />
      {/* Background Layer 2: Deep Teal */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(13,59,62,0.28),transparent_70%)]" 
        aria-hidden="true" 
      />
      {/* Background Layer 3: Smooth ambient depth */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#06131c]/20 to-[#02050e]"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back link */}
          <div className="flex items-center gap-3">
            <Link
              to="/#work"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.selectedWork.backToWork}</span>
            </Link>
          </div>

          {/* Controls: Language toggle + CV link */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 text-xs font-mono transition-all cursor-pointer"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <Link
              to="/cv"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </Link>
          </div>
        </div>

        {/* Discrete Breadcrumb line */}
        <div className="max-w-5xl mx-auto pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 overflow-x-auto whitespace-nowrap">
          {breadcrumbs.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <span className="text-slate-600">/</span>}
              {item.to ? (
                <Link to={item.to} className="hover:text-slate-300 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-300 font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </header>

      {/* Main Case Study Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {children}

        {/* Reusable Case Study CTA Section */}
        <section className="mt-20 pt-12 border-t border-slate-800/80">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-slate-900/40 p-8 sm:p-10 text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              NEXT STEPS // COLLABORATION
            </span>
            <div className="space-y-2 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {cta.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {cta.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="mailto:gonzavolante@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-950/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{cta.contactBtn}</span>
              </a>
              <a
                href="https://linkedin.com/in/gonzalo-volante"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                <span>{cta.linkedinBtn}</span>
              </a>
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs sm:text-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>{cta.cvBtn}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
