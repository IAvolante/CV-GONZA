import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Toaster } from 'sonner';
import { Toaster as SileoToaster } from 'sileo';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import 'sileo/styles.css';

import Portfolio from './pages/Portfolio';
import ResumeCV from './pages/ResumeCV';
import { DigitalTransformationCaseStudy } from './pages/case-studies/DigitalTransformationCaseStudy';
import { ModuleCaseStudy } from './pages/case-studies/ModuleCaseStudy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <LanguageProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/cv" element={<ResumeCV />} />
            <Route 
              path="/work/digital-transformation-nuevas-energias" 
              element={<DigitalTransformationCaseStudy />} 
            />
            <Route 
              path="/work/pv-reporting-system" 
              element={<ModuleCaseStudy moduleId="pvReporting" />} 
            />
            <Route 
              path="/work/operations-platform" 
              element={<ModuleCaseStudy moduleId="operationsPlatform" />} 
            />
            <Route 
              path="/work/solar-quotation-system" 
              element={<ModuleCaseStudy moduleId="quotationSystem" />} 
            />
          </Routes>
        </Router>
        <Toaster theme="dark" position="bottom-right" richColors />
        <SileoToaster position="top-center" theme="dark" />
      </LanguageProvider>
    </ReactLenis>
  );
}

export default App;

