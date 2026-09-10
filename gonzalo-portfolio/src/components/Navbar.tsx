import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Command, Globe } from 'lucide-react';

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
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: 'transformacion', label: t.nav.transformation },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl rounded-full border border-white/10 px-4 py-2 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
            GV
          </div>
          <span className="font-semibold text-white hidden md:block">Gonzalo Volante</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full text-slate-300 hover:text-white" title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
            <Globe className="w-4 h-4" />
            <span className="sr-only">Toggle Language</span>
          </Button>

          <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 gap-2">
            <Command className="w-4 h-4" />
            <span className="hidden lg:inline">{t.nav.cmdK}</span>
            <kbd className="hidden lg:inline-flex bg-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono text-slate-400">⌘K</kbd>
          </Button>

          <Button asChild className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
            <Link to="/cv">{t.nav.viewCV}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full text-slate-300 hover:text-white">
            <Globe className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col pt-20 px-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-semibold ${
                    activeSection === link.id ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-4">
              <Button variant="outline" className="w-full rounded-full border-white/10 bg-white/5 justify-start gap-2 h-12 text-white">
                <Command className="w-5 h-5" />
                {t.nav.cmdK}
              </Button>
              <Button asChild className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-12">
                <Link to="/cv" onClick={() => setMobileMenuOpen(false)}>{t.nav.viewCV}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
