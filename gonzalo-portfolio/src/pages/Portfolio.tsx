import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';

const Portfolio = () => {
  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-slate-50 font-sans">
      <Navbar />
      <CommandPalette />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
