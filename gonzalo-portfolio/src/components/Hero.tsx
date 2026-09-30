import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowDown, FileText, Mail, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BorderBeam } from './magicui/border-beam';
import { sileo } from 'sileo';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Hero() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'gonzavolante@gmail.com';
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    sileo.success({
      title: lang === 'es' ? 'Email copiado al portapapeles' : 'Email copied to clipboard',
      description: email,
      duration: 3500,
    });
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Subtle technical glow - Top Center (petrol blue & petrol green blend, very discreet) */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[360px] rounded-full bg-gradient-to-tr from-emerald-950/10 via-teal-900/10 to-blue-900/15 blur-[140px] -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mb-6 flex flex-col items-center"
        >
          <div 
            className="relative group cursor-pointer" 
            role="button"
            tabIndex={0}
            onClick={handleCopyEmail}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopyEmail();
              }
            }}
            aria-label={lang === 'es' ? 'Copiar email: gonzavolante@gmail.com' : 'Copy email: gonzavolante@gmail.com'}
            title={lang === 'es' ? 'Copiar email: gonzavolante@gmail.com' : 'Copy email: gonzavolante@gmail.com'}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-slate-900 border border-slate-700/60 shadow-lg shadow-black/40 overflow-hidden">
              <BorderBeam size={90} duration={8} colorFrom="#06b6d4" colorTo="#14b8a6" />
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Gonzalo Volante"
                className="relative z-10 w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* 1. Name */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            {t.hero.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 tracking-tight">
            {t.hero.title}
          </h2>
          {t.hero.subtitle && (
            <p className="text-sm sm:text-base md:text-lg font-mono text-cyan-400 font-medium tracking-tight">
              {t.hero.subtitle}
            </p>
          )}
        </motion.div>

        {/* 3. Value Proposition / Summary */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-6 font-normal"
        >
          {t.hero.summary}
        </motion.p>

        {/* 4. Focus Line: single discrete monospace text line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="font-mono text-xs text-slate-400 tracking-wider mb-10"
        >
          {t.hero.focusPills}
        </motion.p>

        {/* 5. CTAs with pure Tailwind utility classes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#work"
            aria-label={lang === 'es' ? 'Ver proyectos y casos de estudio destacados' : 'View featured work and case studies'}
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            <span>{t.hero.ctaWork}</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-950" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={lang === 'es' ? 'Copiar dirección de email gonzavolante@gmail.com' : 'Copy email address gonzavolante@gmail.com'}
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-100 font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm shadow-cyan-950/20 cursor-pointer group"
            title={lang === 'es' ? 'Copiar email: gonzavolante@gmail.com' : 'Copy email: gonzavolante@gmail.com'}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            )}
            <span>{copied ? (lang === 'es' ? 'Email copiado' : 'Email copied') : 'gonzavolante@gmail.com'}</span>
            <Copy className="w-3.5 h-3.5 text-cyan-500/60 group-hover:text-cyan-400 transition-colors" />
          </button>

          <a
            href="https://github.com/gonzalo-volante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub de Gonzalo Volante"
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-colors"
          >
            <GitHubIcon className="w-4 h-4 text-slate-400" />
            <span>{t.hero.ctaGithub}</span>
          </a>

          <a
            href="https://linkedin.com/in/gonzalo-volante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Gonzalo Volante"
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 text-slate-400" />
            <span>{t.hero.ctaLinkedin}</span>
          </a>

          <Link
            to="/cv"
            aria-label={lang === 'es' ? 'Ver Curriculum Vitae de Gonzalo Volante' : 'View Curriculum Vitae of Gonzalo Volante'}
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-colors"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>{t.hero.ctaResume}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
