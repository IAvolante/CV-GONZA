import { Mail, Phone, MapPin, Download, ArrowLeft, Printer, Globe, Languages, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const BusinessResumeCV = () => {
  const { t, lang, toggleLanguage } = useLanguage();

  const pdfFileName = lang === 'en' ? 'Gonzalo_Volante_Business_Resume_EN.pdf' : 'Gonzalo_Volante_CV_Empresas.pdf';
  const cv = t.businessResume;

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 font-sans text-slate-100 print:bg-white print:text-slate-900 print:p-0 print:m-0">
      {/* High-Contrast Print & PDF Export Styling */}
      <style>
        {`
          @page {
            size: A4;
            margin: 8mm 10mm;
          }
          @media print {
            .no-print {
              display: none !important;
            }
            body, html {
              background: #ffffff !important;
              color: #0f172a !important;
              font-size: 10.5px !important;
              line-height: 1.3 !important;
              word-spacing: 0.085em !important;
              letter-spacing: 0.005em !important;
            }
            .cv-wrapper {
              background: #ffffff !important;
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              margin: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
              word-spacing: 0.085em !important;
              letter-spacing: 0.005em !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-break-avoid {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
            h1 { font-size: 1.55rem !important; line-height: 1.15 !important; word-spacing: normal !important; }
            h2 { font-size: 0.75rem !important; margin-bottom: 0.3rem !important; line-height: 1.25 !important; }
            h3 { font-size: 0.72rem !important; margin-bottom: 0.25rem !important; padding-bottom: 0.15rem !important; }
            h4 { font-size: 0.78rem !important; margin-bottom: 0.1rem !important; }
            p, li { font-size: 0.7rem !important; line-height: 1.3 !important; word-spacing: 0.085em !important; letter-spacing: 0.005em !important; }
            ul { margin-top: 0.15rem !important; margin-bottom: 0.15rem !important; }
            li { margin-bottom: 0.12rem !important; }
            .section-gap { margin-bottom: 0.5rem !important; }
          }
        `}
      </style>

      {/* Floating Header Bar (Web view only) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
          >
            <ArrowLeft size={18} /> {cv.backToPortfolio}
          </Link>
          <Link
            to="/cv"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-medium text-xs transition-all cursor-pointer shadow-sm"
            title={lang === 'es' ? 'Ver versión de arquitectura y código fuente' : 'View architecture and source code version'}
          >
            <Cpu size={14} className="text-cyan-400" />
            <span>{cv.switchToTechCv}</span>
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Languages size={15} className="text-cyan-400" />
            <span>{lang === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
          </button>
          <a
            href={`${import.meta.env.BASE_URL}${pdfFileName}`}
            download={pdfFileName}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-950/30 transition-all cursor-pointer"
          >
            <Download size={18} /> {cv.downloadPdf}
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
          >
            <Printer size={18} /> {cv.printPdf}
          </button>
        </div>
      </div>

      {/* Main Business CV Container */}
      <div className="cv-wrapper max-w-4xl mx-auto bg-slate-950/90 border border-slate-800 rounded-xl p-6 sm:p-10 md:p-12 shadow-2xl [word-spacing:0.085em] [letter-spacing:0.005em] print:bg-white print:border-none print:p-0 print:shadow-none print:text-slate-900">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-5 mb-5 print:border-slate-900 print:pb-3 print:mb-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5 print:text-slate-950">
                {cv.header.title.toUpperCase()}
              </h1>
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 mb-2.5 print:text-amber-800 uppercase">
                {cv.header.role}
              </h2>
            </div>
            <div className="hidden sm:inline-flex px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold self-start print:hidden">
              ● {cv.header.liveBadge}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate-400 print:text-slate-700">
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> {cv.header.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> {cv.header.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> {cv.header.location}
            </span>
            <span className="flex items-center gap-1.5">
              <strong className="font-mono text-amber-400 print:text-amber-800">[in]</strong> {cv.header.linkedin}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={13} className="text-amber-400 print:text-amber-800" />
              <a
                href={`https://${cv.header.website}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 print:text-slate-800 transition-colors underline-offset-2 hover:underline font-mono"
              >
                {cv.header.website}
              </a>
            </span>
          </div>
        </header>

        {/* Perfil Profesional & Enfoque de Negocio */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.summary.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800">
            {cv.summary.text}
          </p>
        </section>

        {/* Áreas de Solución para Empresas */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.coreAreas.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 print:grid-cols-3 print:gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-amber-400 mb-1 print:text-amber-800">
                {cv.coreAreas.automation.title}:
              </strong>
              <span className="text-slate-300 print:text-slate-700">
                {cv.coreAreas.automation.desc}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-amber-400 mb-1 print:text-amber-800">
                {cv.coreAreas.customSystems.title}:
              </strong>
              <span className="text-slate-300 print:text-slate-700">
                {cv.coreAreas.customSystems.desc}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-amber-400 mb-1 print:text-amber-800">
                {cv.coreAreas.appliedAi.title}:
              </strong>
              <span className="text-slate-300 print:text-slate-700">
                {cv.coreAreas.appliedAi.desc}
              </span>
            </div>
          </div>
        </section>

        {/* Experiencia Profesional & Casos de Éxito */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-3 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.experience.title}
          </h3>

          {/* 1. Nuevas Energías */}
          <div className="mb-4 print:mb-3 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">
                {cv.experience.nuevasEnergias.company}
              </h4>
              <span className="text-xs font-medium text-amber-400 print:text-slate-600 font-mono">
                {cv.experience.nuevasEnergias.period}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-amber-800 mb-1.5">
              <strong>{cv.experience.nuevasEnergias.role}</strong> | {cv.experience.nuevasEnergias.subtitle}
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              {cv.experience.nuevasEnergias.highlights.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* 2. SARESA */}
          <div className="mb-4 print:mb-3 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">
                {cv.experience.saresa.company}
              </h4>
              <span className="text-xs font-medium text-amber-400 print:text-slate-600 font-mono">
                {cv.experience.saresa.period}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-amber-800 mb-1.5">
              <strong>{cv.experience.saresa.role}</strong> | {cv.experience.saresa.subtitle}
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              {cv.experience.saresa.highlights.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Soluciones & Herramientas Aplicadas */}
        <section className="mb-5 print:mb-3 page-break-avoid section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.projects.title}
          </h3>
          <div className="space-y-2 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
            <div>
              <strong className="text-white print:text-slate-950">{cv.projects.publiProp.title}</strong> —{' '}
              <span className="font-medium text-amber-400 print:text-amber-800">{cv.projects.publiProp.subtitle}</span>. {cv.projects.publiProp.desc}
            </div>
            <div>
              <strong className="text-white print:text-slate-950">{cv.projects.edesa.title}</strong> —{' '}
              <span className="font-medium text-amber-400 print:text-amber-800">{cv.projects.edesa.subtitle}</span>. {cv.projects.edesa.desc}
            </div>
            <div>
              <strong className="text-white print:text-slate-950">{cv.projects.notion.title}</strong> —{' '}
              <span className="font-medium text-amber-400 print:text-amber-800">{cv.projects.notion.subtitle}</span>. {cv.projects.notion.desc}
            </div>
            <div>
              <strong className="text-white print:text-slate-950">{cv.projects.otbn.title}</strong> —{' '}
              <span className="font-medium text-amber-400 print:text-amber-800">{cv.projects.otbn.subtitle}</span>. {cv.projects.otbn.desc}
            </div>
          </div>
        </section>

        {/* Formación y Habilidades */}
        <section className="mb-4 print:mb-3 page-break-avoid section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.education.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {cv.education.items.map((item, idx) => (
              <div
                key={idx}
                className="p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800"
              >
                <strong>{item.title}</strong> | {item.issuer}
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section className="page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase pb-1.5 mb-1.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            {cv.languages.title}
          </h3>
          <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
            {cv.languages.text}
          </p>
        </section>
      </div>
    </div>
  );
};

export default BusinessResumeCV;
