import { Mail, Phone, MapPin, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeCV = () => {
  return (
    <div className="print-bg" style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '2rem 0', fontFamily: "'Inter', sans-serif" }}>
      
      {/* High-Contrast Print & PDF Export Styling */}
      <style>
        {`
          @page {
            size: A4;
            margin: 10mm 12mm;
          }
          @media print {
            .no-print { display: none !important; }
            body, html, .print-bg, .cv-container { 
              background: white !important; 
              color: #0f172a !important; 
              box-shadow: none !important; 
              margin: 0 !important; 
              padding: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            header {
              border-bottom: 2px solid #0f172a !important;
              padding-bottom: 0.75rem !important;
              margin-bottom: 1rem !important;
            }
            h1, h1 * { color: #0f172a !important; }
            h2, h2 *, .cv-subtitle { color: #1d4ed8 !important; font-weight: 700 !important; }
            h3, h3 *, .cv-section-title { 
              color: #0f172a !important; 
              border-bottom: 1.5px solid #0f172a !important; 
              margin-bottom: 0.5rem !important;
              padding-bottom: 0.2rem !important;
            }
            h4, h4 * { color: #0f172a !important; font-weight: 700 !important; }
            p, li, span, div, strong { color: #1e293b !important; }
            .cv-text-muted, .cv-text-muted * { color: #334155 !important; font-weight: 600 !important; }
            .cv-card { 
              background: #f8fafc !important; 
              border: 1px solid #cbd5e1 !important; 
              color: #0f172a !important; 
              padding: 0.5rem 0.75rem !important;
            }
            .cv-badge { 
              background: #f1f5f9 !important; 
              border: 1px solid #cbd5e1 !important; 
              color: #0f172a !important; 
              padding: 0.4rem 0.6rem !important;
            }
            section {
              margin-bottom: 1rem !important;
            }
            .job-block {
              margin-bottom: 1rem !important;
            }
            .avoid-break {
              page-break-inside: avoid;
              break-inside: avoid;
            }
          }
        `}
      </style>
      
      {/* Floating Header Bar (Web view only) */}
      <div className="no-print" style={{ maxWidth: '850px', margin: '0 auto 1.5rem auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
        <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
          <ArrowLeft size={18} /> Volver al Portfolio Web
        </Link>
        <button 
          onClick={() => window.print()}
          style={{ 
            backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.75rem 1.4rem', 
            borderRadius: '50px', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)', display: 'flex', alignItems: 'center', gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Download size={18} /> Imprimir / Guardar en PDF
        </button>
      </div>

      {/* Main CV Container */}
      <div className="cv-container" style={{ maxWidth: '850px', margin: '0 auto', background: '#1e293b', padding: '3rem 2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid #334155' }}>
        
        {/* Header */}
        <header style={{ borderBottom: '2px solid #334155', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <h1 className="cv-header-title" style={{ fontSize: '2.4rem', margin: 0, fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#f8fafc', letterSpacing: '-0.5px' }}>
            GONZALO VOLANTE
          </h1>
          <h2 className="cv-subtitle" style={{ fontSize: '1rem', color: '#38bdf8', margin: '0.4rem 0 0.8rem 0', fontWeight: 700, letterSpacing: '0.5px' }}>
            FULL STACK DEVELOPER | AI & AUTOMATION SOLUTIONS DEVELOPER | DIGITAL TRANSFORMATION
          </h2>
          <div className="cv-text-muted" style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: '#94a3b8', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={14}/> gonzavolante@gmail.com</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Phone size={14}/> +54 3876 111118</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14}/> Salta Capital, Argentina</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><strong>[in]</strong> linkedin.com/in/gonzalo-volante</span>
          </div>
        </header>

        {/* Perfil Profesional */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 className="cv-section-title" style={{ fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem', color: '#38bdf8', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '0.3rem' }}>
            Perfil Profesional & Liderazgo Digital
          </h3>
          <p className="cv-text-body" style={{ fontSize: '0.9rem', lineHeight: 1.55, color: '#cbd5e1', margin: 0 }}>
            Desarrollador Full Stack (Certified Tech Developer) especializado en el <strong>diseño de arquitectura web, automatización de procesos e integración de Inteligencia Artificial (Agentes / RAG / LLMs)</strong>. Amplia experiencia transformando requerimientos de negocio en software escalable (<strong>React, Next.js, TypeScript, Python, Node.js, PostgreSQL, n8n</strong>). Destacado por liderar la digitalización completa en la empresa <em>Nuevas Energías</em>, reemplazando herramientas SaaS costosas en USD por sistemas a medida self-hosted y guiando la tecnología de la empresa como referente técnico y Project Manager sobre más de 28 iniciativas.
          </p>
        </section>

        {/* Competencias Técnicas Clave */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 className="cv-section-title" style={{ fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem', color: '#38bdf8', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '0.3rem' }}>
            Competencias Clave
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.6rem', fontSize: '0.85rem' }}>
            <div className="cv-card" style={{ background: '#0f172a', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.2rem' }}>Frontend & UI:</strong>
              React, Next.js, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI, Responsive & High Performance.
            </div>
            <div className="cv-card" style={{ background: '#0f172a', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.2rem' }}>Backend & Data:</strong>
              Python (Flask/FastAPI), Node.js, PostgreSQL, Supabase (pgvector), REST APIs, Webhooks, OCR, pdfplumber.
            </div>
            <div className="cv-card" style={{ background: '#0f172a', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.2rem' }}>IA & Automatización:</strong>
              OpenAI API, RAG, LangChain, n8n, Playwright/Puppeteer, Meta WhatsApp API, Chatwoot self-hosted.
            </div>
          </div>
        </section>

        {/* Experiencia Profesional */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 className="cv-section-title" style={{ fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', color: '#38bdf8', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '0.3rem' }}>
            Experiencia Profesional
          </h3>
          
          {/* Nuevas Energías */}
          <div className="job-block avoid-break" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>Nuevas Energías</h4>
              <span className="cv-text-muted" style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600 }}>Sep 2024 – Presente | Salta, Argentina</span>
            </div>
            <p className="cv-subtitle" style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, margin: '0.15rem 0 0.5rem 0' }}>
              Especialista en TI | Software Solutions Developer & Digital Transformation Lead
            </p>
            <ul className="cv-text-body" style={{ fontSize: '0.86rem', paddingLeft: '1.1rem', margin: 0, lineHeight: 1.5, color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Sistema de Gestión Financiera & Reemplazo SaaS:</strong> Desarrollé el módulo a medida de gestión financiera y cuentas por pagar/cobrar, <strong>reemplazando Xubio ($120 USD/mes), noCRM ($150 USD/mes) y Whaticket ($50 USD/mes)</strong> por un ecosistema propio self-hosted integrando <strong>Chatwoot, WhatsApp Meta API, Notion API, Python y PostgreSQL (Ahorro de +$320 USD/mes)</strong>.
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Cerebro IA "Nuevi":</strong> Agente conversacional e IA (RAG + LangChain + OpenAI API) para atención 24/7 de ventas y triaje automático de tickets de soporte técnico derivando directamente a Trello.
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Motor de Informes Fotovoltaicos:</strong> Sistema asíncrono en Python que consulta APIs de inversores solares y cruza consumos horariales EDESA (pico/resto/valle). <strong>Redujo la emisión de reportes de 1 día a 2 minutos por planta para +40 plantas activas</strong>.
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Analizador de Facturas con IA:</strong> Ingesta de datos (OCR + pdfplumber + OpenAI API) para detección automática de excesos de potencia contratada y prospección de clientes industriales.
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Cotizador & Dimensionador Solar:</strong> Motores de cálculo en React + Flask para proyecciones On-Grid / Off-Grid y emisión instantánea de propuestas comerciales en PDF.
              </li>
              <li>
                <strong>Gestión de Proyectos (Tech Lead & PM):</strong> Planificación y liderazgo técnico transversal sobre un pipeline de 28 proyectos digitales coordinando a las áreas comercial, operativa y de soporte.
              </li>
            </ul>
          </div>

          {/* iGrowker & Foo Talent Group */}
          <div className="job-block avoid-break" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>iGrowker & Foo Talent Group</h4>
              <span className="cv-text-muted" style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>2023 – 2024 | Remoto</span>
            </div>
            <p className="cv-subtitle" style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, margin: '0.15rem 0 0.5rem 0' }}>
              Frontend Lead & Full Stack Developer (Aceleradoras & Simulaciones Laborales)
            </p>
            <ul className="cv-text-body" style={{ fontSize: '0.86rem', paddingLeft: '1.1rem', margin: 0, lineHeight: 1.5, color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.3rem' }}>
                <strong>FastLab (LIS SARESA):</strong> Liderazgo Frontend en un Sistema de Información de Laboratorio clínico de alta disponibilidad (React, TypeScript, Tailwind CSS, Docker, Nginx) optimizando ingesta de resultados médicos y turnos.
              </li>
              <li style={{ marginBottom: '0.3rem' }}>
                <strong>YouCreate 2.0:</strong> Desarrollo Fullstack y liderazgo de equipo frontend en plataforma FinTech para creadores de contenido (React, TypeScript, PostgreSQL).
              </li>
              <li>
                <strong>Metodología de Aceleración:</strong> Trabajo colaborativo en sprints de 2 semanas bajo metodologías ágiles (Scrum, CI/CD, Code Reviews integrados).
              </li>
            </ul>
          </div>

          {/* Smart Projects */}
          <div className="job-block avoid-break" style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>Smart Projects</h4>
              <span className="cv-text-muted" style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>2022 – Presente | Remoto</span>
            </div>
            <p className="cv-subtitle" style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, margin: '0.15rem 0 0.5rem 0' }}>
              Software Solutions & AI Automation Consultant
            </p>
            <ul className="cv-text-body" style={{ fontSize: '0.86rem', paddingLeft: '1.1rem', margin: 0, lineHeight: 1.5, color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.3rem' }}>
                <strong>Publi-Prop:</strong> Bot headless en Node.js y Playwright para publicación masiva en Facebook Marketplace con almacenamiento de cookies y evasión de huellas digitales.
              </li>
              <li style={{ marginBottom: '0.3rem' }}>
                <strong>Agentes RAG & OdontIA:</strong> Creación de asistentes conversacionales con Supabase (pgvector), LangChain y WhatsApp API para triaje de pacientes y respuestas sobre PDFs.
              </li>
              <li>
                <strong>Visor OTBN & GIS (Ley de Bosques):</strong> Miembro del Comité Técnico OTBN Salta. Desarrollo de visor georreferenciado e imágenes satelitales (NDVI/NDWI) en Python, QGIS y Google Earth Engine.
              </li>
            </ul>
          </div>

          {/* Digital House */}
          <div className="job-block avoid-break">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>Digital House</h4>
              <span className="cv-text-muted" style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>2021 – 2023 | Remoto</span>
            </div>
            <p className="cv-subtitle" style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, margin: '0.15rem 0 0.4rem 0' }}>
              Certified Tech Developer - Desarrollador Full Stack
            </p>
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section className="avoid-break" style={{ marginBottom: '1.25rem' }}>
          <h3 className="cv-section-title" style={{ fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem', color: '#38bdf8', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '0.3rem' }}>
            Formación & Certificaciones
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.5rem', fontSize: '0.83rem' }}>
            <div className="cv-badge" style={{ background: '#0f172a', padding: '0.45rem 0.75rem', borderRadius: '4px', border: '1px solid #334155', color: '#cbd5e1' }}>
              <strong>Certificación Simulación Laboral Full Stack</strong> - iGrowker (2024)
            </div>
            <div className="cv-badge" style={{ background: '#0f172a', padding: '0.45rem 0.75rem', borderRadius: '4px', border: '1px solid #334155', color: '#cbd5e1' }}>
              <strong>Certificación Aceleración de Software</strong> - Foo Talent Group (2024)
            </div>
            <div className="cv-badge" style={{ background: '#0f172a', padding: '0.45rem 0.75rem', borderRadius: '4px', border: '1px solid #334155', color: '#cbd5e1' }}>
              <strong>Certified Tech Developer Jr.</strong> - Digital House (2023)
            </div>
            <div className="cv-badge" style={{ background: '#0f172a', padding: '0.45rem 0.75rem', borderRadius: '4px', border: '1px solid #334155', color: '#cbd5e1' }}>
              <strong>Diseño UX/UI</strong> - Coderhouse (2021)
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="avoid-break">
          <h3 className="cv-section-title" style={{ fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#38bdf8', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '0.3rem' }}>
            Idiomas
          </h3>
          <p className="cv-text-body" style={{ fontSize: '0.86rem', margin: 0, color: '#cbd5e1' }}>
            <strong>Español:</strong> Nativo | <strong>Inglés:</strong> Intermedio (Lectura técnica avanzada, documentación y conversación fluida de negocios/desarrollo).
          </p>
        </section>

      </div>
    </div>
  );
};

export default ResumeCV;
