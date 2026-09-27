import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { TrendingUp, DollarSign, Users } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const RoiCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(2000);
  const [averageTicket, setAverageTicket] = useState<number>(currency === 'USD' ? 60 : 75000);

  // When currency changes, adapt default ticket
  const handleCurrencyChange = (curr: 'USD' | 'ARS') => {
    setCurrency(curr);
    setAverageTicket(curr === 'USD' ? 60 : 75000);
  };

  // Math
  const genericConversionRate = 0.01; // 1.0%
  const brutaConversionRate = 0.034;  // 3.4%

  const currentMonthlySales = Math.round(monthlyVisitors * genericConversionRate);
  const currentMonthlyRevenue = currentMonthlySales * averageTicket;

  const newMonthlySales = Math.round(monthlyVisitors * brutaConversionRate);
  const newMonthlyRevenue = newMonthlySales * averageTicket;

  const extraMonthlyRevenue = newMonthlyRevenue - currentMonthlyRevenue;
  const extraAnnualRevenue = extraMonthlyRevenue * 12;

  const formatPrice = (val: number) => {
    return currency === 'USD' ? `$${val.toLocaleString()} USD` : `$${val.toLocaleString()} ARS`;
  };

  return (
    <section id="roi" className="py-24 bg-[#0C0D0E] relative border-b border-white/10 scroll-mt-16">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#C6FF00]" />
              <span>CALCULADORA DE RETORNO (ROI)</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              UNA BUENA WEB NO ES UN GASTO. <br />
              <span className="text-[#C6FF00]">ES UNA INVERSIÓN.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#777777]">MONEDA:</span>
            <div className="flex rounded-lg bg-[#15161A] border border-white/10 p-1">
              <button
                onClick={() => handleCurrencyChange('USD')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                  currency === 'USD' ? 'bg-[#C6FF00] text-black font-bold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => handleCurrencyChange('ARS')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                  currency === 'ARS' ? 'bg-[#C6FF00] text-black font-bold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                ARS ($)
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <SpotlightCard className="p-6 sm:p-8">
              
              {/* Slider 1: Monthly Visitors */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono text-[#777777] uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C6FF00]" />
                    <span>VISITAS O SEGUIDORES MENSUALES:</span>
                  </label>
                  <span className="font-display text-2xl text-white">
                    {monthlyVisitors.toLocaleString()} <span className="text-xs text-[#777777] font-mono">visitas/mes</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="20000"
                  step="200"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-[#C6FF00] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-600 mt-1">
                  <span>200</span>
                  <span>10.000</span>
                  <span>20.000+</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono text-[#777777] uppercase flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#C6FF00]" />
                    <span>TICKET PROMEDIO DE TU PRODUCTO / SERVICIO:</span>
                  </label>
                  <span className="font-display text-2xl text-[#C6FF00]">
                    {formatPrice(averageTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === 'USD' ? 10 : 10000}
                  max={currency === 'USD' ? 500 : 600000}
                  step={currency === 'USD' ? 5 : 5000}
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-[#C6FF00] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-600 mt-1">
                  <span>{currency === 'USD' ? '$10' : '$10.000'}</span>
                  <span>{currency === 'USD' ? '$250' : '$300.000'}</span>
                  <span>{currency === 'USD' ? '$500+' : '$600.000+'}</span>
                </div>
              </div>

              {/* Conversion Benchmark note */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2 text-xs font-mono text-[#777777]">
                <div className="flex items-center justify-between">
                  <span>Tasa promedio plantilla estándar lenta:</span>
                  <span className="text-red-400 font-bold">1.0% de conversión</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tasa promedio web Bruta Studio optimizada:</span>
                  <span className="text-[#C6FF00] font-bold">3.4% de conversión (+240%)</span>
                </div>
              </div>

            </SpotlightCard>
          </div>

          {/* Results Projection Column */}
          <div className="lg:col-span-6">
            <SpotlightCard className="h-full p-6 sm:p-8 border-[#C6FF00]/40 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono text-[#C6FF00] uppercase tracking-widest">
                    PROYECCIÓN DE INGRESOS ADICIONALES
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#0C0D0E] border border-white/5">
                    <span className="text-[11px] font-mono text-[#777777] uppercase block mb-1">
                      CON WEB ACTUAL (1%):
                    </span>
                    <span className="font-display text-2xl text-zinc-400">
                      {formatPrice(currentMonthlyRevenue)}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-1">
                      ~{currentMonthlySales} ventas/mes
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0C0D0E] border border-[#C6FF00]/30 shadow-lg">
                    <span className="text-[11px] font-mono text-[#C6FF00] uppercase block mb-1">
                      CON BRUTA STUDIO (3.4%):
                    </span>
                    <span className="font-display text-2xl text-[#C6FF00]">
                      {formatPrice(newMonthlyRevenue)}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 block mt-1">
                      ~{newMonthlySales} ventas/mes
                    </span>
                  </div>
                </div>

                {/* Big Highlight Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#16171A] to-[#1F2228] border border-[#C6FF00]/50 mb-6">
                  <span className="text-xs font-mono text-[#777777] uppercase block mb-1">
                    INGRESO ADICIONAL ESTIMADO CADA MES:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl text-[#C6FF00] tracking-tight">
                      +{formatPrice(extraMonthlyRevenue)}
                    </span>
                    <span className="text-xs font-mono text-white/70">/ mes</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-2">
                    O un impacto acumulado de <strong className="text-white">+{formatPrice(extraAnnualRevenue)} al año</strong> sin gastar un solo peso más en publicidad, solo convirtiendo mejor a quienes ya te visitan.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hola Nahuel! Estuve probando el calculador de ROI en tu web con ${monthlyVisitors} visitas mensuales. Me gustaría charlar sobre cómo optimizar la conversión de mi negocio.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn w-full py-4 rounded-xl bg-[#C6FF00] text-black font-display text-lg tracking-wider uppercase hover:bg-[#d8ff33] flex items-center justify-center gap-2 glow-lime shadow-xl text-center"
                >
                  <span>QUIERO MULTIPLICAR MIS VENTAS →</span>
                </a>
                <p className="text-[11px] text-center font-mono text-[#777777] mt-3">
                  ✓ La inversión en una web optimizada suele recuperarse en los primeros 30 a 45 días.
                </p>
              </div>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
