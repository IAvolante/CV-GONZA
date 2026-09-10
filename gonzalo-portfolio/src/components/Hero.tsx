import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AuroraBackground } from '@/components/magicui/aurora-background';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { TrendingUp, FileText, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AuroraBackground className="bg-gray-950 w-full relative">
      <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="section-container flex flex-col items-center text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="outline" className="bg-slate-900/50 backdrop-blur-sm border-white/10 text-slate-300 font-mono py-1.5 px-3 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.hero.status}
            </Badge>
          </motion.div>

          {/* Profile & Name - Responsive layout */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="md:hidden">
              <img
                src="/profile.jpg"
                alt="Gonzalo Volante"
                className="w-32 h-32 rounded-full object-cover ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/20"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-400 transition-all duration-300">
                {t.hero.name}
              </span>
            </h1>
            
            <div className="hidden md:block">
              <img
                src="/profile.jpg"
                alt="Gonzalo Volante"
                className="w-40 h-40 rounded-full object-cover ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/20"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              {t.hero.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
            {t.hero.description.split('**').map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-slate-200 font-semibold">{part}</strong> : 
              part.split('*').map((sub, j) => j % 2 === 1 ? <em key={`${i}-${j}`} className="text-cyan-400 not-italic">{sub}</em> : sub)
            )}
          </motion.p>

          {/* Metrics Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
            {[
              { val: 320, prefix: '+$', suffix: ' USD', label: t.hero.metric1Label },
              { val: 40, prefix: '+', suffix: ' Plantas', label: t.hero.metric2Label },
              { val: 28, prefix: '', suffix: ' Proyectos', label: t.hero.metric3Label },
            ].map((metric, i) => (
              <Card key={i} className="relative overflow-hidden bg-slate-900/60 backdrop-blur-sm border-white/10 p-6 flex flex-col items-center justify-center group min-h-[120px]">
                <BorderBeam size={100} duration={12} delay={i * 2} />
                <div className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-0.5">
                  <span>{metric.prefix}</span>
                  <NumberTicker value={metric.val} className="text-white" />
                  <span className="text-lg md:text-xl font-medium text-slate-300 ml-1">{metric.suffix}</span>
                </div>
                <div className="relative z-10 text-sm text-slate-400 font-medium text-center">
                  {metric.label}
                </div>
              </Card>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 shadow-lg shadow-cyan-500/20 gap-2 text-md h-12 px-8">
              <a href="#transformacion">
                <TrendingUp className="w-5 h-5" />
                {t.hero.ctaTransformation}
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2 text-md h-12 px-8">
              <a href="#projects">
                {t.hero.ctaProjects}
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-50 hover:text-cyan-400 gap-2 text-md h-12 px-8">
              <Link to="/cv">
                <FileText className="w-5 h-5" />
                {t.hero.ctaCV}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 text-slate-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>
    </AuroraBackground>
  );
}
