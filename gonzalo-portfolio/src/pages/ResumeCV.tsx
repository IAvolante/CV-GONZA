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
            SOFTWARE SOLUTIONS DEVELOPER | FULL STACK · AUTOMATION · SYSTEM INTEGRATION
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
            Perfil Profesional
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800 mb-2">
            Software Solutions Developer con experiencia diseñando y desarrollando sistemas internos, automatizaciones e integraciones orientadas a resolver problemas operativos reales. Experiencia end-to-end desde el relevamiento de procesos y requerimientos hasta el diseño, desarrollo, integración, despliegue y mantenimiento de soluciones en producción. He trabajado transversalmente con áreas comerciales, administrativas y operativas, transformando procesos manuales y herramientas dispersas en sistemas digitales centralizados, mantenibles y adaptados a las necesidades reales de la organización.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800">
            Stack principal: React, TypeScript, Python, Node.js, SQLite / PostgreSQL, REST APIs, n8n y herramientas de automatización e integración.
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
                React, TypeScript, Tailwind CSS, Responsive UI, Component Architecture.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-700">Backend & Data:</strong>
              <span className="text-slate-300 print:text-slate-700">
                Python, Node.js, SQLite / PostgreSQL, REST APIs, Webhooks, OCR / document processing.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-700">Automation & Infrastructure:</strong>
              <span className="text-slate-300 print:text-slate-700">
                n8n, VPS Linux (systemd, Gunicorn, Nginx), API integrations, webhook / Whaticket / Chatwoot, Git / GitHub.
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
              Especialista en TI | Software Solutions Developer
            </p>
            <p className="text-xs text-slate-300 print:text-slate-800 mb-2.5 leading-relaxed">
              Lideré el proceso de digitalización de distintos procesos internos de la empresa, partiendo de una operatoria basada en tareas manuales, planillas de cálculo y herramientas dispersas. Relevé necesidades junto a las áreas comercial, administrativa y operativa, y diseñé y desarrollé soluciones internas a medida para centralizar información, automatizar flujos y mejorar la trazabilidad operativa.
            </p>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                Diseño y desarrollo de una plataforma interna de gestión para centralizar clientes, operaciones, documentación, presupuestos y seguimiento de procesos.
              </li>
              <li>
                Desarrollo de herramientas para elaboración de presupuestos, dimensionamiento de soluciones fotovoltaicas y generación automatizada de documentación técnica y comercial.
              </li>
              <li>
                Implementación de sistemas para monitoreo y procesamiento de datos de instalaciones fotovoltaicas mediante integración con APIs externas.
              </li>
              <li>
                Automatización de flujos operativos mediante Python, APIs, webhooks, n8n y servicios self-hosted.
              </li>
              <li>
                Diseño y mantenimiento de bases de datos utilizando SQLite + SQLAlchemy (persistencia local y series temporales fotovoltaicas) para centralización de información operativa.
              </li>
              <li>
                Integración de canales de mensajería y soporte mediante webhook / n8n / Whaticket / Chatwoot.
              </li>
              <li>
                Trabajo transversal con Comercial, Administración y Operaciones para relevar requerimientos, traducir necesidades en soluciones técnicas y acompañar la adopción de nuevas herramientas.
              </li>
              <li>
                Desarrollo, despliegue y mantenimiento de soluciones en producción en VPS Linux utilizando systemd, Gunicorn y Nginx.
              </li>
            </ul>
          </div>

          {/* Smart Projects */}
          <div className="page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">Smart Projects</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2022 – Presente | Remoto / Salta
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-2">
              Software Solutions & Automation Consultant
            </p>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                Desarrollo de bots de automatización con Node.js y Playwright para navegación web, gestión de sesiones y publicación estructurada de contenidos.
              </li>
              <li>
                Implementación de asistentes basados en documentos y flujos de automatización mediante PostgreSQL / Supabase, REST APIs y WhatsApp API para consulta y triaje de información.
              </li>
              <li>
                Procesamiento y visualización de datos geoespaciales e imágenes satelitales utilizando Python, QGIS y Google Earth Engine en proyectos de análisis territorial.
              </li>
            </ul>
          </div>
        </section>

        {/* Formación Práctica & Simulación Profesional */}
        <section className="mb-6 print:mb-5 page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-3 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Formación Práctica & Simulación Profesional
          </h3>
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-1">
              <h4 className="text-sm font-bold text-white print:text-slate-950">iGrowker & Foo Talent Group</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2023 – 2024 | Remoto
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-1.5">
              Frontend Lead / Desarrollador Frontend
            </p>
            <p className="text-xs text-slate-300 print:text-slate-800 mb-2 leading-relaxed">
              Participación en programas de simulación profesional y aceleración técnica, trabajando en equipos multidisciplinarios bajo metodologías ágiles y dinámicas similares a entornos de software factory.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                Liderazgo del equipo frontend en YouCreate, plataforma para gestión de balances, facturación y liquidaciones.
              </li>
              <li>
                Desarrollo de interfaces para FastLab, sistema de información de laboratorio clínico.
              </li>
              <li>
                Trabajo con React, TypeScript, Tailwind CSS, REST APIs, Git, code reviews y sprints ágiles.
              </li>
            </ul>
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section className="mb-5 print:mb-4 page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Formación & Certificaciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certified Tech Developer Jr.</strong> - Digital House (2021 – 2023)
            </div>
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Simulación Laboral Full Stack</strong> - iGrowker (2024)
            </div>
            <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Aceleración de Software</strong> - Foo Talent Group (2024)
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
