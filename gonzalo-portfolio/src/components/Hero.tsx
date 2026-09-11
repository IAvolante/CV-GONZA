import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 md:px-8 relative"
    >
      <div className="section-container max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Availability / Location: discrete line, no badge styling */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex items-center gap-2 text-slate-400 font-mono text-xs tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
          <span>{t.hero.location}</span>
        </motion.div>

        {/* 1. Name */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="space-y-3 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            {t.hero.name}
          </h1>
          {/* 2. Software Solutions Developer */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 tracking-tight">
            {t.hero.title}
          </h2>
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

        {/* 4. Focus Line: single discrete monospace line, no boxes/borders/background */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="font-mono text-xs text-slate-500 tracking-wider mb-10 selection:bg-cyan-500/20"
        >
          {t.hero.focusPills}
        </motion.p>

        {/* 5. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Button
            asChild
            className="h-10 px-5 rounded-md bg-white hover:bg-slate-200 text-slate-950 font-medium text-xs sm:text-sm transition-colors gap-2"
          >
            <a href="#work">
              <span>{t.hero.ctaWork}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-10 px-4 rounded-md border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors gap-2"
          >
            <a
              href="https://github.com/gonzalo-volante"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-4 h-4 text-slate-400" />
              <span>{t.hero.ctaGithub}</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-10 px-4 rounded-md border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors gap-2"
          >
            <a
              href="https://linkedin.com/in/gonzalo-volante"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-4 h-4 text-slate-400" />
              <span>{t.hero.ctaLinkedin}</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-10 px-4 rounded-md border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors gap-2"
          >
            <Link to="/cv">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>{t.hero.ctaResume}</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
