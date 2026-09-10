import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SaaSImpactCalculator = () => {
  const [users, setUsers] = useState(10);
  const [noCrmRate, setNoCrmRate] = useState(15); // USD per user/month
  const [whaticketRate, setWhaticketRate] = useState(50); // USD per month base
  const [xubioRate, setXubioRate] = useState(120); // USD per month ERP/Finanzas SaaS

  const monthlySaasCost = (users * noCrmRate) + whaticketRate + xubioRate + 30; // + Zapier base

  // Custom Self-Hosted VPS cost (approx 20 USD/mo total for Chatwoot + n8n + Postgres)
  const selfHostedMonthly = 20;
  const monthlySavings = monthlySaasCost - selfHostedMonthly;
  const yearlySavings = monthlySavings * 12;

  return (
    <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-cyan-500/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-md my-12 md:my-16">
      <CardContent className="p-6 md:p-10">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 font-mono py-1 px-4 text-xs uppercase tracking-wider">
            💡 Caso de Éxito Interactivo · Nuevas Energías
          </Badge>
          <h3 className="text-2xl md:text-3xl font-extrabold mt-3 text-slate-50">
            Simulador de Ahorro por Reemplazo SaaS
          </h3>
          <p className="text-slate-400 text-base max-w-3xl mx-auto mt-3">
            Visualiza el impacto económico directo alcanzado al reemplazar plataformas de terceros (<strong>Xubio $120/mes</strong>, <strong>noCRM $150/mes</strong>, <strong>Whaticket $50/mes</strong>) por un sistema de gestión financiera, CRM y bot propio self-hosted.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Controls Column */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-200 font-semibold text-sm">
                  Usuarios del CRM / Ejecutivos Comercial:
                </label>
                <span className="text-cyan-400 font-extrabold font-mono text-sm">{users} usuarios</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="50" 
                value={users} 
                onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-200 font-semibold text-sm">
                  Costo promedio CRM (noCRM / SaaS):
                </label>
                <span className="text-cyan-400 font-extrabold font-mono text-sm">${noCrmRate} USD/usr</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="40" 
                value={noCrmRate} 
                onChange={(e) => setNoCrmRate(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-200 font-semibold text-sm">
                  Costo Sistema Financiero/ERP (Xubio SaaS):
                </label>
                <span className="text-cyan-400 font-extrabold font-mono text-sm">${xubioRate} USD/mes</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="250" 
                value={xubioRate} 
                onChange={(e) => setXubioRate(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-200 font-semibold text-sm">
                  Costo bot WhatsApp (Whaticket SaaS):
                </label>
                <span className="text-cyan-400 font-extrabold font-mono text-sm">${whaticketRate} USD/mes</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="150" 
                value={whaticketRate} 
                onChange={(e) => setWhaticketRate(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Dynamic ROI Metric Card */}
          <motion.div 
            key={yearlySavings}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-cyan-400 rounded-2xl p-6 md:p-8 text-center shadow-[0_10px_30px_rgba(56,189,248,0.2)]"
          >
            <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
              Ahorro Neto Directo para la Empresa
            </div>
            
            <div className="text-5xl font-black text-emerald-400 my-4 font-mono tracking-tighter">
              ${yearlySavings.toLocaleString()} <span className="text-xl text-slate-400 font-sans tracking-normal">USD/año</span>
            </div>

            <div className="flex justify-around my-6 pt-4 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs mb-1">Ahorro Mensual</span>
                <span className="text-cyan-400 font-bold text-lg font-mono">
                  ${monthlySavings.toLocaleString()} USD
                </span>
              </div>
              <div className="w-px bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs mb-1">Suscripciones Anteriores</span>
                <span className="text-rose-500 font-bold text-lg font-mono">
                  ${monthlySaasCost} USD/mes
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 py-1 px-2.5">
                <DollarSign size={14} /> Xubio + noCRM + Whaticket Reemplazados
              </Badge>
              <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 flex items-center gap-1.5 py-1 px-2.5">
                <ShieldCheck size={14} /> Datos 100% Propios
              </Badge>
              <Badge variant="outline" className="bg-violet-500/10 text-violet-400 border-violet-500/30 flex items-center gap-1.5 py-1 px-2.5">
                <Zap size={14} /> Sin Límites de Licencias
              </Badge>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SaaSImpactCalculator;
