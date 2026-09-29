import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TechMarquee } from '../components/TechMarquee';
import { SelectedWork } from '../components/SelectedWork';
import { EngineeringBentoGrid } from '../components/EngineeringBentoGrid';
import { SystemPlayground } from '../components/SystemPlayground';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Extras } from '../components/Extras';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <CommandPalette />
      {/* Background Layer 1: Petrol Blue (top-right / center, soft opacity ~0.30) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_-10%,rgba(16,42,77,0.30),transparent_70%)]" 
        aria-hidden="true" 
      />
      {/* Background Layer 2: Petrol Green / Deep Teal (top-left / center, soft opacity ~0.28) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(13,59,62,0.28),transparent_70%)]" 
        aria-hidden="true" 
      />
      {/* Background Layer 3: Smooth ambient depth into deep darkness */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#06131c]/20 to-[#02050e]"
        aria-hidden="true"
      />

      <Navbar />
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Selected Work (Professional Work & Selected Projects) */}
        <SelectedWork />

        {/* 3. Engineering Bento Grid (Automation & Specialized Data Systems) */}
        <EngineeringBentoGrid />

        {/* 4. Live Architecture System Playground (Interactive Pipeline Simulator) */}
        <SystemPlayground />

        {/* 5. Professional Experience */}
        <Experience />

        {/* 4. Technologies & Tools Marquee (Summary of Demonstrated Stack) */}
        <TechMarquee />

        {/* 5. Training & Certifications */}
        <Education />

        {/* 6. Initiatives & Specialized Solutions */}
        <Extras />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
