import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Toaster } from 'sonner';
import { Toaster as SileoToaster } from 'sileo';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import 'sileo/styles.css';

import Portfolio from './pages/Portfolio';

const ResumeCV = lazy(() => import('./pages/ResumeCV'));
const BusinessResumeCV = lazy(() => import('./pages/BusinessResumeCV'));
const DigitalTransformationCaseStudy = lazy(() =>
  import('./pages/case-studies/DigitalTransformationCaseStudy').then((m) => ({
    default: m.DigitalTransformationCaseStudy,
  }))
);
const LisSaresaCaseStudy = lazy(() =>
  import('./pages/case-studies/LisSaresaCaseStudy').then((m) => ({
    default: m.LisSaresaCaseStudy,
  }))
);
const ModuleCaseStudy = lazy(() =>
  import('./pages/case-studies/ModuleCaseStudy').then((m) => ({
    default: m.ModuleCaseStudy,
  }))
);

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
          <Suspense
            fallback={
              <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] text-slate-400 gap-3">
                <div className="w-7 h-7 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
                <span className="font-mono text-xs text-slate-500 tracking-wider">SYSTEM_LOADING...</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/cv" element={<ResumeCV />} />
              <Route path="/cv-empresas" element={<BusinessResumeCV />} />
              <Route 
                path="/work/digital-transformation-nuevas-energias" 
                element={<DigitalTransformationCaseStudy />} 
              />
              <Route 
                path="/work/lis-saresa-v4" 
                element={<LisSaresaCaseStudy />} 
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
        <Toaster theme="dark" position="bottom-right" richColors />
        <SileoToaster position="top-center" theme="dark" />
      </LanguageProvider>
    </ReactLenis>
  );
}

export default App;

