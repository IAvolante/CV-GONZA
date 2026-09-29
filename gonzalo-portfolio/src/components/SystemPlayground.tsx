import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { sileo } from 'sileo';
import { 
  Play, 
  RotateCcw, 
  Database, 
  Cpu, 
  Send, 
  Layers, 
  Activity, 
  Clock, 
  Terminal as TerminalIcon, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

interface LogEntry {
  id: string;
  time: string;
  level: 'INFO' | 'SUCCESS' | 'OPTIMIZE';
  text: string;
}

export function SystemPlayground() {
  const { t, lang } = useLanguage();
  const sp = t.systemPlayground;

  const [activeNodeKey, setActiveNodeKey] = useState<'ingestion' | 'engine' | 'storage' | 'dispatch'>('engine');
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'init-1',
      time: '00:00.000',
      level: 'INFO',
      text: lang === 'es' ? 'Sistema en reposo. Listo para procesar flujo de datos.' : 'System standby. Ready to trigger pipeline simulation.',
    },
    {
      id: 'init-2',
      time: '00:00.042',
      level: 'OPTIMIZE',
      text: lang === 'es' ? 'Caché local en memoria activa: SQLite + SQLAlchemy sincronizado.' : 'In-memory local client cache active: SQLite + SQLAlchemy synchronized.',
    },
  ]);

  const nodes = [
    {
      key: 'ingestion' as const,
      index: 1,
      icon: Layers,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
      activeColor: 'border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]',
      data: sp.nodes.ingestion,
    },
    {
      key: 'engine' as const,
      index: 2,
      icon: Cpu,
      color: 'from-teal-500/20 to-emerald-500/10 border-teal-500/30',
      activeColor: 'border-teal-400 bg-teal-950/40 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.25)]',
      data: sp.nodes.engine,
    },
    {
      key: 'storage' as const,
      index: 3,
      icon: Database,
      color: 'from-indigo-500/20 to-cyan-500/10 border-indigo-500/30',
      activeColor: 'border-indigo-400 bg-indigo-950/40 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]',
      data: sp.nodes.storage,
    },
    {
      key: 'dispatch' as const,
      index: 4,
      icon: Send,
      color: 'from-blue-500/20 to-teal-500/10 border-blue-500/30',
      activeColor: 'border-blue-400 bg-blue-950/40 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.25)]',
      data: sp.nodes.dispatch,
    },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStep(1);
    setActiveNodeKey('ingestion');

    setLogs([
      {
        id: 'step-1',
        time: '00:00.120',
        level: 'INFO',
        text: lang === 'es' 
          ? '📥 [INGESTA ERP] Ingestando telemetría de inversores Growatt + parsing de bloques horarios de factura EDESA.'
          : '📥 [ERP INGEST] Ingesting Growatt solar telemetry + parsing EDESA time-of-use invoice blocks.',
      },
    ]);

    // Step 2
    setTimeout(() => {
      setCurrentStep(2);
      setActiveNodeKey('engine');
      setLogs((prev) => [
        ...prev,
        {
          id: 'step-2',
          time: '00:01.045',
          level: 'INFO',
          text: lang === 'es'
            ? '⚙️ [MOTOR DE CONCILIACIÓN] Cruce algorítmico: cálculo de autoconsumo real, inyección neta y auditoría de transgresión de potencia.'
            : '⚙️ [RECONCILIATION ENGINE] Algorithmic cross-referencing: self-consumption, net grid injection, and power breach audit.',
        },
      ]);
    }, 900);

    // Step 3
    setTimeout(() => {
      setCurrentStep(3);
      setActiveNodeKey('storage');
      setLogs((prev) => [
        ...prev,
        {
          id: 'step-3',
          time: '00:02.180',
          level: 'OPTIMIZE',
          text: lang === 'es'
            ? '⚡ [CACHÉ] Sincronización con cliente de solo lectura noCRM completada en 0.04s.'
            : '⚡ [CACHE] Read-only noCRM pipeline client synced with zero external API penalty.',
        },
      ]);
    }, 1800);

    // Step 4
    setTimeout(() => {
      setCurrentStep(4);
      setActiveNodeKey('dispatch');
      setLogs((prev) => [
        ...prev,
        {
          id: 'step-4',
          time: '00:03.200',
          level: 'SUCCESS',
          text: lang === 'es'
            ? '🚀 [DESPACHO] Enrutamiento a Chatwoot exitoso. Reporte PDF desatendido generado.'
            : '🚀 [DISPATCH] Omnichannel alert routed to Chatwoot. Headless periodic report ready.',
        },
        {
          id: 'step-summary',
          time: '00:03.210',
          level: 'SUCCESS',
          text: lang === 'es'
            ? '✅ [MÉTRICA FINAL] Tiempo total: 3.2s (Ahorro operativo estimado: 8.5 horas de ingeniería).'
            : '✅ [SUMMARY] Total execution: 3.2s (Estimated operational savings: 8.5 engineering hours).',
        },
      ]);
      setIsSimulating(false);

      // Trigger Sileo spring physics toast
      sileo.success({
        title: sp.toastTitle,
        description: sp.toastDesc,
        duration: 4500,
      });
    }, 2800);
  };

  const resetTelemetry = () => {
    setIsSimulating(false);
    setCurrentStep(0);
    setActiveNodeKey('engine');
    setLogs([
      {
        id: 'reset-1',
        time: '00:00.000',
        level: 'INFO',
        text: lang === 'es' ? 'Telemetría reiniciada. Sistema preparado.' : 'Telemetry reset. System ready.',
      },
    ]);
  };

  const selectedNode = nodes.find((n) => n.key === activeNodeKey) || nodes[1];

  return (
    <section id="playground" className="w-full py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{sp.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            {sp.title}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            {sp.subtitle}
          </p>
        </div>

        {/* The Interactive Control & Architecture Card */}
        <div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-2xl p-6 sm:p-8 overflow-hidden">
          <BorderBeam size={250} duration={12} delay={2} colorFrom="#06b6d4" colorTo="#3b82f6" />

          {/* Top Bar: Telemetry Status & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSimulating ? 'bg-amber-400' : 'bg-cyan-400'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isSimulating ? 'bg-amber-500' : 'bg-cyan-500'}`} />
              </span>
              <span className="font-mono text-xs text-slate-300 tracking-wider">
                {isSimulating ? 'PIPELINE_STATUS: EXECUTING' : 'PIPELINE_STATUS: LIVE_STANDBY'}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {sp.efficiencyBadge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={runSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSimulating ? (
                  <>
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>{sp.runningBtn}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{sp.triggerBtn}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={resetTelemetry}
                disabled={isSimulating}
                aria-label={sp.resetBtn}
                title={sp.resetBtn}
                className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architecture Node Flowchart */}
          <div className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = activeNodeKey === node.key;
                const isStepActive = isSimulating && currentStep === node.index;

                return (
                  <motion.div
                    key={node.key}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveNodeKey(node.key)}
                    className={`relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? node.activeColor
                        : 'border-slate-800/90 bg-slate-900/40 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    {isStepActive && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-slate-500">
                          NODE 0{node.index}
                        </span>
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm text-white mb-1">
                        {node.data.title}
                      </h4>
                      <p className="font-mono text-[11px] text-cyan-400/90 mb-2">
                        {node.data.tech}
                      </p>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {node.data.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{isSelected ? 'INSPECTING' : 'CLICK TO VIEW'}</span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : ''}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Lower Grid: Selected Node Detail & Live Terminal Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800/80">
            {/* Left Column: Node Architecture Deep-Dive */}
            <div className="lg:col-span-5 p-5 rounded-xl border border-slate-800/70 bg-slate-900/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ARCHITECTURE SPECIFICATION</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {selectedNode.data.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 pb-2 border-b border-slate-800">
                  {selectedNode.data.tech}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedNode.data.desc}
                </p>
              </div>

              {/* Performance Comparison Metric */}
              <div className="mt-6 p-4 rounded-lg bg-slate-950/70 border border-slate-800/90">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>BENCHMARK vs MANUAL PROCESS</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{sp.comparison.manualLabel}</span>
                    <span className="font-mono text-slate-400">{sp.comparison.manualValue}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-600 h-full w-[100%]" />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-cyan-400 font-medium">{sp.comparison.automatedLabel}</span>
                    <span className="font-mono text-cyan-300 font-bold">{sp.comparison.automatedValue}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full w-[4%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Trace Log */}
            <div className="lg:col-span-7 rounded-xl border border-slate-800/90 bg-[#020617] overflow-hidden flex flex-col font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] tracking-wider">{sp.liveTelemetry}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>

              <div className="p-4 h-64 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-slate-800">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-slate-600 shrink-0 select-none">[{log.time}]</span>
                    <span
                      className={`shrink-0 font-bold ${
                        log.level === 'SUCCESS'
                          ? 'text-emerald-400'
                          : log.level === 'OPTIMIZE'
                          ? 'text-cyan-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {log.level === 'SUCCESS' ? '✔' : log.level === 'OPTIMIZE' ? '⚡' : '•'}
                    </span>
                    <span
                      className={`${
                        log.level === 'SUCCESS'
                          ? 'text-emerald-300 font-medium'
                          : log.level === 'OPTIMIZE'
                          ? 'text-cyan-200'
                          : 'text-slate-300'
                      }`}
                    >
                      {log.text}
                    </span>
                  </div>
                ))}

                {isSimulating && (
                  <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
                    <span>&gt;</span>
                    <span className="inline-block w-2 h-3.5 bg-cyan-400" />
                  </div>
                )}
              </div>

              <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                <span>PRESS SIMULATE TO TRIGGER PIPELINE</span>
                <span>STATUS: 200 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SystemPlayground;
