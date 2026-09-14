import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TechMarquee } from '../components/TechMarquee';
import { SelectedWork } from '../components/SelectedWork';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Extras } from '../components/Extras';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <Navbar />
      <main className="relative flex flex-col">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Technologies & Tools Marquee (Infinite Leftward Scroll) */}
        <TechMarquee />

        {/* 3. Selected Work (Professional Work & Selected Projects) */}
        <SelectedWork />

        {/* 4. Professional Experience */}
        <Experience />

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
