import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/config';
import { Lightbulb, Palette, Code, CheckCircle, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return Lightbulb;
      case 1: return Palette;
      case 2: return Code;
      case 3: return ShieldCheck;
      case 4: return Rocket;
      default: return CheckCircle;
    }
  };

  return (
    <section id="proceso" className="py-24 bg-[#0C0D0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
              <span className="text-[#C6FF00] font-bold">06 / 09</span>
              <span>•</span>
              <span>METODOLOGÍA ÁGIL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              ASÍ HACEMOS <span className="text-[#C6FF00]">TU WEB.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A1A1AA]">
            Un proceso transparente y ordenado en <strong className="text-white">5 etapas claras</strong>. Sabes exactamente qué ocurre en cada momento, sin retrasos inesperados ni sorpresas.
          </p>
        </div>

        {/* 5-Step Timeline Interactive Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Selection Cards (01 to 05) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = getStepIcon(idx);
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#15161A] border-[#C6FF00] shadow-xl shadow-[#C6FF00]/10 scale-[1.01]'
                      : 'bg-[#0C0D0E] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Step Pill */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-lg tracking-wider shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#C6FF00] text-black font-bold'
                        : 'bg-[#15161A] text-white/50 border border-white/10'
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-display text-lg sm:text-xl uppercase tracking-wide transition-colors ${
                        isActive ? 'text-[#C6FF00]' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#C6FF00]' : 'text-zinc-600'}`} />
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Deep-Dive Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl bg-[#15161A] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6FF00]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-[#C6FF00] uppercase tracking-widest">
                  FASE {PROCESS_STEPS[activeStep].step} EN DETALLE
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0C0D0E] border border-white/10 text-xs font-mono text-white/70">
                  Paso {activeStep + 1} de 5
                </span>
              </div>

              <h4 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h4>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-[#0C0D0E] border border-white/10 mb-8">
                <span className="text-[11px] font-mono text-[#777777] uppercase block mb-1">
                  ENTREGABLE DE ESTA FASE:
                </span>
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C6FF00] shrink-0" />
                  <span>{PROCESS_STEPS[activeStep].deliverable}</span>
                </div>
              </div>

              {/* Bottom Nav inside Step Box */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
                    activeStep === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-black text-white hover:border-[#C6FF00] border border-white/10'
                  }`}
                >
                  ← Fase Anterior
                </button>

                {activeStep < 4 ? (
                  <button
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="px-4 py-2 rounded-lg bg-[#C6FF00] text-black font-semibold text-xs font-mono hover:bg-[#d8ff33] transition-colors flex items-center gap-1.5"
                  >
                    <span>Siguiente Fase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#presupuesto"
                    className="px-5 py-2 rounded-lg bg-[#C6FF00] text-black font-semibold text-xs font-mono hover:bg-[#d8ff33] transition-colors glow-lime-sm"
                  >
                    Comenzar Ahora →
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
