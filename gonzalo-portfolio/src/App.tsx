import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Toaster } from 'sonner';
import Portfolio from './pages/Portfolio';
import ResumeCV from './pages/ResumeCV';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/cv" element={<ResumeCV />} />
        </Routes>
      </Router>
      <Toaster theme="dark" position="bottom-right" richColors />
    </LanguageProvider>
  );
}

export default App;
