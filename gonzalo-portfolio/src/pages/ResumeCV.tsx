import { Mail, Phone, MapPin, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeCV = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 font-sans text-slate-100 print:bg-white print:text-slate-900 print:p-0 print:m-0">
      {/* High-Contrast Print & PDF Export Styling */}
      <style>
        {`
          @page {
            size: A4;
            margin: 12mm 14mm;
          }
          @media print {
            .no-print {
              display: none !important;
            }
            body, html {
              background: #ffffff !important;
              color: #0f172a !important;
            }
            .cv-wrapper {
              background: #ffffff !important;
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              margin: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-break-avoid {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
          }
        `}
      </style>

      {/* Floating Header Bar (Web view only) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex justify-between items-center px-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
        >
          <ArrowLeft size={18} /> Volver al Portfolio Web
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm shadow-lg shadow-cyan-950/30 transition-all cursor-pointer"
        >
          <Download size={18} /> Imprimir / Guardar en PDF
        </button>
      </div>

      {/* Main CV Container */}
      <div className="cv-wrapper max-w-4xl mx-auto bg-slate-950/90 border border-slate-800 rounded-xl p-8 sm:p-10 shadow-2xl print:bg-white print:border-none print:p-0 print:shadow-none print:text-slate-900">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-5 mb-6 print:border-slate-900 print:pb-4 print:mb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5 print:text-slate-950">
            GONZALO VOLANTE
          </h1>
          <h2 className="text-sm font-semibold tracking-wider text-cyan-400 mb-3 print:text-blue-700">
            FULL STACK DEVELOPER | AI & AUTOMATION SOLUTIONS DEVELOPER | DIGITAL TRANSFORMATION
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate-400 print:text-slate-700">
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> gonzavolante@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> +54 3876 111118
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Salta Capital, Argentina
            </span>
            <span className="flex items-center gap-1.5">
              <strong className="font-mono text-cyan-400 print:text-blue-700">[in]</strong> linkedin.com/in/gonzalo-volante
            </span>
          </div>
        </header>

        {/* Perfil Profesional */}
        <section className="mb-6 print:mb-5">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Perfil Profesional & Liderazgo Digital
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800">
            Desarrollador Full Stack (Certified Tech Developer) especializado en el <strong>diseño de arquitectura web, automatización de procesos e integración de Inteligencia Artificial (Agentes / RAG / LLMs)</strong>. Amplia experiencia transformando requerimientos de negocio en software escalable (<strong>React, Next.js, TypeScript, Python, Node.js, PostgreSQL, n8n</strong>). Destacado por liderar la digitalización completa en la empresa <em>Nuevas Energías</em>, reemplazando herramientas SaaS costosas en USD por sistemas a medida self-hosted y guiando la tecnología de la empresa como referente técnico y Project Manager sobre más de 28 iniciativas.
          </p>
        </section>

        {/* Competencias Clave */}
        <section className="mb-6 print:mb-5">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Competencias Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 print:grid-cols-3 print:gap-2">
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-700">Frontend & UI:</strong>
              <span className="text-slate-300 print:text-slate-700">
                React, Next.js, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI, Responsive & High Performance.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-700">Backend & Data:</strong>
              <span className="text-slate-300 print:text-slate-700">
                Python (Flask/FastAPI), Node.js, PostgreSQL, Supabase (pgvector), REST APIs, Webhooks, OCR, pdfplumber.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-700">Automatización & Herramientas:</strong>
              <span className="text-slate-300 print:text-slate-700">
                REST APIs, Webhooks, n8n, Playwright/Puppeteer, Docker, Linux/Ubuntu, Meta WhatsApp API, Chatwoot.
              </span>
            </div>
          </div>
        </section>

        {/* Experiencia Profesional */}
        <section className="mb-6 print:mb-5">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-4 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Experiencia Profesional
          </h3>

          {/* Nuevas Energías */}
          <div className="mb-5 print:mb-4">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">Nuevas Energías</h4>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-600 font-mono">
                Sep 2025 – Presente | Salta, Argentina
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-2">
              Especialista en TI | Software Solutions Developer & Digital Transformation Lead
            </p>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>Sistema de Gestión Financiera & Reemplazo SaaS:</strong> Desarrollé el módulo a medida de gestión financiera y cuentas por pagar/cobrar, <strong>reemplazando Xubio ($120 USD/mes), noCRM ($150 USD/mes) y Whaticket ($50 USD/mes)</strong> por un ecosistema propio self-hosted integrando <strong>Chatwoot, WhatsApp Meta API, Notion API, Python y PostgreSQL (Ahorro de +$320 USD/mes)</strong>.
              </li>
              <li>
                <strong>Cerebro IA "Nuevi":</strong> Agente conversacional y automatización inteligente para atención 24/7 de ventas y triaje automático de tickets de soporte técnico derivando directamente a Trello.
              </li>
              <li>
                <strong>Motor de Informes Fotovoltaicos:</strong> Sistema asíncrono en Python que consulta APIs de inversores solares y cruza consumos horariales EDESA (pico/resto/valle). <strong>Redujo la emisión de reportes de 1 día a 2 minutos por planta para +40 plantas activas</strong>.
              </li>
              <li>
                <strong>Analizador de Facturas con IA:</strong> Ingesta de datos (OCR + pdfplumber + OpenAI API) para detección automática de excesos de potencia contratada y prospección de clientes industriales.
              </li>
              <li>
                <strong>Cotizador & Dimensionador Solar:</strong> Motores de cálculo en React + Flask para proyecciones On-Grid / Off-Grid y emisión instantánea de propuestas comerciales en PDF.
              </li>
              <li>
                <strong>Gestión de Proyectos (Tech Lead & PM):</strong> Planificación y liderazgo técnico transversal sobre un pipeline de 28 proyectos digitales coordinando a las áreas comercial, operativa y de soporte.
              </li>
            </ul>
          </div>

          {/* iGrowker & Foo Talent Group */}
          <div className="mb-5 print:mb-4 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">iGrowker & Foo Talent Group</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2023 – 2024 | Remoto
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-2">
              Frontend Lead / Desarrollador Frontend
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>FastLab (LIS SARESA):</strong> Desarrollo de interfaces reactivas para Sistema de Información de Laboratorio clínico (React, TypeScript, Tailwind CSS, Docker) para gestión de historias clínicas y resultados diagnósticos.
              </li>
              <li>
                <strong>YouCreate 2.0:</strong> Liderazgo del equipo frontend y desarrollo de módulos de interfaz para gestión de balances de ingresos, facturación y liquidaciones de usuarios (React, TypeScript, Tailwind CSS).
              </li>
              <li>
                <strong>Metodología de Aceleración:</strong> Trabajo colaborativo en sprints de 2 semanas bajo metodologías ágiles (Scrum, CI/CD, Code Reviews integrados).
              </li>
            </ul>
          </div>

          {/* Smart Projects */}
          <div className="mb-5 print:mb-4 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">Smart Projects</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2022 – Presente | Remoto
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-2">
              Software Solutions & AI Automation Consultant
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>Publi-Prop:</strong> Bot headless en Node.js y Playwright para publicación masiva en Facebook Marketplace con almacenamiento de sesiones y evasión de huellas digitales.
              </li>
              <li>
                <strong>Agentes RAG & Automatización:</strong> Creación de asistentes con Supabase (pgvector), REST APIs y WhatsApp API para triaje de consultas sobre documentos y catálogos.
              </li>
              <li>
                <strong>Visor OTBN & GIS (Ley de Bosques):</strong> Miembro del Comité Técnico OTBN Salta. Desarrollo de visor georreferenciado e imágenes satelitales (NDVI/NDWI) en Python, QGIS y Google Earth Engine.
              </li>
            </ul>
          </div>

          {/* Digital House */}
          <div className="page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">Digital House</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2021 – 2023 | Remoto
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800">
              Certified Tech Developer - Desarrollador Full Stack
            </p>
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section className="mb-5 print:mb-4 page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Formación & Certificaciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Simulación Laboral Full Stack</strong> - iGrowker (2024)
            </div>
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Aceleración de Software</strong> - Foo Talent Group (2024)
            </div>
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certified Tech Developer Jr.</strong> - Digital House (2023)
            </div>
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Diseño UX/UI</strong> - Coderhouse (2021)
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Idiomas
          </h3>
          <p className="text-xs text-slate-300 print:text-slate-800">
            <strong>Español:</strong> Nativo | <strong>Inglés:</strong> Intermedio (Lectura técnica avanzada, documentación y conversación de desarrollo).
          </p>
        </section>
      </div>
    </div>
  );
};

export default ResumeCV;
