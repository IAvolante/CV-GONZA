import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: 'work', label: t.nav.work },
    { id: 'engineering', label: t.nav.engineering },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.training },
    { id: 'initiatives', label: t.nav.initiatives },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-4">
      <nav
        className={`w-full max-w-5xl rounded-full border px-5 py-2.5 flex items-center justify-between transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-xl shadow-black/50'
            : 'bg-slate-950/70 backdrop-blur-sm border-slate-800/80'
        }`}
        aria-label="Main Navigation"
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 transition-colors tracking-wider">
            GV
          </span>
          <span className="text-slate-600 font-mono text-xs hidden sm:inline">/</span>
          <span className="font-medium text-sm text-slate-200 tracking-tight hidden sm:block group-hover:text-white transition-colors">
            Gonzalo Volante
          </span>
        </Link>

        {/* Desktop Navigation Links: clean typographic navigation with subtle active underline/glow */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400/80 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="h-7 px-2.5 text-slate-400 hover:text-slate-200 hover:bg-transparent text-xs font-mono gap-1"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3 h-3 text-slate-500" />
            <span className="text-[11px]">{lang.toUpperCase()}</span>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 text-xs font-medium gap-1 transition-colors rounded-md"
          >
            <Link to="/cv">
              <span>{t.nav.resume}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="h-8 w-8 rounded-full text-slate-400 hover:text-slate-200 text-xs font-mono"
          >
            {lang.toUpperCase()}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-200 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col pt-20 px-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-white/5 ${
                    activeSection === link.id
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-3">
              <Button
                asChild
                className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 h-11 text-sm font-medium gap-1.5"
              >
                <Link to="/cv" onClick={() => setMobileMenuOpen(false)}>
                  <span>{t.nav.resume}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
