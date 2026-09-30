import { Mail, Phone, MapPin, Download, ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeCV = () => {
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
              font-size: 11px !important;
              line-height: 1.32 !important;
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
            h1 { font-size: 1.65rem !important; line-height: 1.15 !important; }
            h2 { font-size: 0.75rem !important; margin-bottom: 0.35rem !important; line-height: 1.25 !important; }
            h3 { font-size: 0.73rem !important; margin-bottom: 0.3rem !important; padding-bottom: 0.15rem !important; }
            h4 { font-size: 0.8rem !important; margin-bottom: 0.1rem !important; }
            p, li { font-size: 0.71rem !important; line-height: 1.32 !important; }
            ul { margin-top: 0.2rem !important; margin-bottom: 0.2rem !important; }
            li { margin-bottom: 0.15rem !important; }
            .section-gap { margin-bottom: 0.6rem !important; }
          }
        `}
      </style>

      {/* Floating Header Bar (Web view only) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
        >
          <ArrowLeft size={18} /> Volver al Portfolio Web
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}Gonzalo_Volante_CV.pdf`}
            download="Gonzalo_Volante_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-950/30 transition-all cursor-pointer"
          >
            <Download size={18} /> Descargar PDF Oficial
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
          >
            <Printer size={18} /> Imprimir / Guardar en PDF
          </button>
        </div>
      </div>

      {/* Main CV Container */}
      <div className="cv-wrapper max-w-4xl mx-auto bg-slate-950/90 border border-slate-800 rounded-xl p-8 sm:p-10 shadow-2xl print:bg-white print:border-none print:p-0 print:shadow-none print:text-slate-900">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-5 mb-5 print:border-slate-900 print:pb-3 print:mb-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5 print:text-slate-950">
                GONZALO VOLANTE
              </h1>
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 mb-2.5 print:text-blue-800">
                LEAD SOLUTIONS ARCHITECT & PRODUCT ENGINEER | FULL-STACK SYSTEMS · MISSION-CRITICAL ERPS · INDUSTRIAL AUTOMATION
              </h2>
            </div>
            <div className="hidden sm:inline-flex px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold self-start print:hidden">
              ● SISTEMAS EN PRODUCCIÓN ACTIVA
            </div>
          </div>
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
            <span className="flex items-center gap-1.5">
              <strong className="font-mono text-cyan-400 print:text-blue-700">[web]</strong>{' '}
              <a
                href="https://iavolante.github.io/CV-GONZA/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 print:text-slate-800 transition-colors underline-offset-2 hover:underline"
              >
                iavolante.github.io/CV-GONZA
              </a>
            </span>
          </div>
        </header>

        {/* Perfil Profesional */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Perfil Profesional
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800 mb-2">
            <strong>Lead Solutions Architect & Product Engineer</strong> especializado en el diseño, desarrollo y despliegue de plataformas de software empresariales de misión crítica y sistemas de automatización industrial. Con un enfoque riguroso de ingeniería de extremo a extremo, transformo problemáticas complejas de negocio en sistemas centralizados de alta confiabilidad y rendimiento.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800">
            Actualmente lidero en producción dos plataformas core activas en industrias exigentes: el <strong>ERP Operativo de Nuevas Energías</strong> (energía solar con conciliación de telemetría IoT y facturación de red eléctrica) y el <strong>LIS SARESA V4</strong> (sistema de información para laboratorio clínico con más de 1.4M de registros médicos migrados, IA multimodal Gemini Vision y respuesta analítica en 0 ms).
          </p>
        </section>

        {/* Competencias Clave */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Competencias Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 print:grid-cols-3 print:gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-800">Arquitectura & Datos:</strong>
              <span className="text-slate-300 print:text-slate-700">
                Domain-Driven Design, SQLite de alta concurrencia (better-sqlite3 sincrónico), PostgreSQL / Supabase, memorias intermedias en RAM (vrCache 0ms), migración y sanitización masiva (+1.4M registros).
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-800">Full-Stack & IA Multimodal:</strong>
              <span className="text-slate-300 print:text-slate-700">
                React 18, TypeScript, Tailwind CSS, Node.js / Express, Python, Electron Desktop, Gemini Vision AI (OCR de comprobantes), algoritmos de compensación financiera FIFO.
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-200">
              <strong className="block text-cyan-400 mb-1 print:text-blue-800">Infraestructura & Automatización:</strong>
              <span className="text-slate-300 print:text-slate-700">
                Linux VPS (Nginx, Gunicorn, systemd, Certbot SSL), Playwright RPA (evasión anti-bot), telemetría solar Growatt, parsing de facturación con pdfplumber, n8n, webhooks y Chatwoot.
              </span>
            </div>
          </div>
        </section>

        {/* Experiencia Profesional */}
        <section className="mb-5 print:mb-3 section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-3 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Experiencia Profesional (Sistemas en Producción Activa)
          </h3>

          {/* Nuevas Energías ERP (Buque Insignia) */}
          <div className="mb-4 print:mb-3 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">
                Nuevas Energías (Energía Solar & Renovables)
              </h4>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-600 font-mono">
                Sep 2024 – Presente | Producción Activa | Salta, Arg.
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-1.5">
              Lead Solutions Architect & Product Engineer | ERP Operativo & Plataforma de Balance Energético
            </p>
            <p className="text-xs text-slate-300 print:text-slate-800 mb-1.5 leading-relaxed">
              Liderazgo de la transformación digital de la compañía, reemplazando procesos manuales y planillas dispersas por un ERP modular integral que orquesta la ingeniería solar, atención al cliente, facturación contable y análisis de activos fotovoltaicos en producción.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>Módulo de Ingesta & Conciliación Energética (EDESA × Growatt):</strong> Pipeline de ingesta automatizada de facturas de red eléctrica mediante extracción programática (pdfplumber) y cruce algorítmico contra telemetría por cuarto de hora de inversores solares Growatt, generando balances netos y reportes de inyección para clientes industriales (Bodegas Etchart, Cendis, Tambo Martorell).
              </li>
              <li>
                <strong>Motor matemático de dimensionamiento fotovoltaico:</strong> Algoritmo de cálculo para instalaciones On-Grid y Off-Grid (radiación solar, potencias pico, bancos de baterías e inversores) con generación automatizada de presupuestos técnicos y memorias de cálculo.
              </li>
              <li>
                <strong>Integraciones operativas centrales:</strong> Canal omnicanal Chatwoot con pre-cotizaciones automatizadas mediante bot, cliente de lectura noCRM con réplica local en SQLite para contingencia de red, control de flota y taller en Supabase y facturación contable en Xubio.
              </li>
              <li>
                <strong>Infraestructura y confiabilidad:</strong> Mantenimiento de servicios en producción sobre VPS Linux utilizando systemd, Nginx, Gunicorn y persistencia relacional en SQLite con SQLAlchemy (almacenes especializados por dominio).
              </li>
            </ul>
          </div>

          {/* LIS SARESA V4 */}
          <div className="mb-4 print:mb-3 page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">
                Laboratorio Bioquímico SARESA
              </h4>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-600 font-mono">
                2024 – Presente | Producción Activa | Salta, Arg.
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-1.5">
              Lead Solutions Architect & Systems Developer | LIS SARESA V4 (Core Laboratory Information System)
            </p>
            <p className="text-xs text-slate-300 print:text-slate-800 mb-1.5 leading-relaxed">
              Diseño, desarrollo integral y despliegue del sistema central de gestión clínica y administrativa del laboratorio, modernizando una plataforma legacy hacia una arquitectura híbrida de alto rendimiento (Electron Desktop + Web SPA en Linux VPS DonWeb con Nginx y Certbot SSL).
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>Migración masiva de datos:</strong> Extracción, saneamiento e indexación sin pérdida de +1.400.000 resultados bioquímicos históricos, 86.000 órdenes de trabajo y 30.000 pacientes sobre SQLite embebido de alto rendimiento.
              </li>
              <li>
                <strong>Arquitectura de ultra-baja latencia (0 ms):</strong> Implementación de memoria intermedia en RAM (<code className="text-cyan-300 print:text-slate-900 font-mono">vrCache</code>) para resolución instantánea de valores de referencia analíticos en caliente, eliminando cuellos de botella N+1 en pantallas críticas.
              </li>
              <li>
                <strong>Gestión de compras con IA multimodal:</strong> Módulo de comprobantes con extracción automática mediante Google Gemini Vision AI (parseo estructurado de facturas PDF e imágenes con fallback a tesseract) y motor de resolución financiera de saldos por algoritmo FIFO.
              </li>
              <li>
                <strong>Operatividad clínica garantizada:</strong> Módulo de facturación médica a obras sociales, panel de trazabilidad de muestras, auditoría de logs y seguridad con bcrypt y mitigación de fallos de red en box de extracción.
              </li>
            </ul>
          </div>

          {/* Smart Projects */}
          <div className="page-break-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">
                Smart Projects (Consultoría de Automatización & Software)
              </h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2022 – Presente | Remoto / Salta
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-1.5">
              Consultor de Arquitectura de Soluciones & Automatización RPA
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>Publi-Prop (RPA Inmobiliario de Alto Rendimiento):</strong> Bot de automatización con Playwright en modo headless para navegación web programática, evasión de detección bot, persistencia de sesiones de usuario y publicación estructurada multicanal.
              </li>
              <li>
                <strong>Asistentes de Conocimiento & Flujos Conversacionales:</strong> Implementación de agentes basados en documentos vectoriales utilizando PostgreSQL con pgvector en Supabase, REST APIs y WhatsApp Cloud API para consulta de catálogos y derivación de leads.
              </li>
              <li>
                <strong>Análisis Geoespacial Satelital (OTBN Salta):</strong> Procesamiento de imágenes satelitales multiespectrales (NDVI/NDWI) y capas vectoriales catastrales con Python, QGIS y Google Earth Engine para la comisión de la Ley de Bosques Nativos.
              </li>
            </ul>
          </div>
        </section>

        {/* Ingeniería Colaborativa & Software Factory */}
        <section className="mb-5 print:mb-3 page-break-avoid section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Ingeniería Colaborativa & Software Factory
          </h3>
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <h4 className="text-sm font-bold text-white print:text-slate-950">iGrowker & Foo Talent Group</h4>
              <span className="text-xs font-medium text-slate-400 print:text-slate-600 font-mono">
                2023 – 2024 | Remoto
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 print:text-blue-800 mb-1">
              Frontend Lead & Full-Stack Developer (Equipos Multidisciplinarios)
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <li>
                <strong>YouCreate:</strong> Liderazgo técnico del equipo frontend en el desarrollo de una plataforma SaaS para creadores de contenido (liquidaciones, balance de cuentas, analítica financiera y pasarelas de pago).
              </li>
              <li>
                <strong>Aceleración de Software:</strong> Trabajo en squads ágiles bajo estándares de software factory con React, TypeScript, Tailwind CSS, revisiones de código exhaustivas, control de versiones Git/GitHub y entregas continuas en sprints de 2 semanas.
              </li>
            </ul>
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section className="mb-4 print:mb-3 page-break-avoid section-gap">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-2 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Formación & Certificaciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certified Tech Developer</strong> — Digital House (2021 – 2023)
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Full Stack Software Development</strong> — iGrowker (2024)
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Certificación Aceleración de Software</strong> — Foo Talent Group (2024)
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-slate-800">
              <strong>Diseño UX/UI</strong> — Coderhouse (2021)
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="page-break-avoid">
          <h3 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase pb-1.5 mb-1.5 border-b border-slate-800 print:border-slate-300 print:text-slate-900">
            Idiomas
          </h3>
          <p className="text-xs text-slate-300 print:text-slate-800">
            <strong>Español:</strong> Nativo | <strong>Inglés:</strong> B2 Profesional (Capacidad de lectura técnica avanzada, redacción de documentación de arquitectura y comunicación fluida en equipos internacionales).
          </p>
        </section>
      </div>
    </div>
  );
};

export default ResumeCV;
