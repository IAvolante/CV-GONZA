import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Toaster } from 'sonner';
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
    <LanguageProvider>
      <Router>
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
    </LanguageProvider>
  );
}

export default App;
