import React from 'react';
import { ArrowRight, Code2, CheckCircle2, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Card Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#C6FF00] font-bold">01 / 09</span>
            <span className="text-white/20">•</span>
            <span className="text-white font-medium">ESTUDIO DE DESARROLLO DIGITAL</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#777777]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]"></span>
            <span>DISEÑO • DESARROLLO • ESTRATEGIA</span>
          </div>
        </div>

        {/* Massive Headline */}
        <div className="max-w-5xl mb-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white uppercase">
            YOUR BUSINESS <br />
            DESERVES A <br />
            <span className="text-[#C6FF00] drop-shadow-[0_0_35px_rgba(198,255,0,0.35)]">
              BETTER WEBSITE.
            </span>
          </h1>
        </div>

        {/* Subtitle & CRO Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-normal mb-4">
              Instagram es importante, <strong className="text-white font-medium">pero tu negocio necesita su propio territorio en internet.</strong> Diseñamos y programamos sitios web ultrarrápidos, con estética brutalista de alto impacto y orientados 100% a convertir visitantes en ventas.
            </p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#777777] font-mono">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF00]" />
                Sin plantillas lentas
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF00]" />
                100% código a medida
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF00]" />
                Integración directa con WhatsApp
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#presupuesto"
              className="tactile-btn flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C6FF00] text-black font-display text-xl tracking-wider uppercase hover:bg-[#d8ff33] transition-all glow-lime shadow-xl text-center"
            >
              <span>COTIZAR MI PROYECTO</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            <a
              href="#github"
              className="tactile-btn flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#15161A] border border-white/10 hover:border-white/30 text-white font-mono text-sm tracking-wide transition-all text-center"
            >
              <Code2 className="w-4 h-4 text-[#C6FF00]" />
              <span>EXPLORAR REPOSITORIOS (GITHUB)</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Showcase Mockup (Card 03/09 Style) */}
        <div className="relative rounded-2xl bg-[#15161A] border border-white/10 p-4 sm:p-6 lg:p-8 overflow-hidden group">
          {/* Mockup Header Bar */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-[#777777] hidden sm:inline">
                https://specialty-coffee.concept.dev
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#0C0D0E] border border-white/10 text-[11px] font-mono text-[#C6FF00]">
                ⚡ 99/100 SPEED
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0C0D0E] border border-white/10 text-[11px] font-mono text-white/70">
                03 / 09 WEB CONCEPT
              </span>
            </div>
          </div>

          {/* Inner Grid Demo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Desktop Mockup Preview */}
            <div className="md:col-span-8 bg-[#0C0D0E] rounded-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF00]/10 rounded-full blur-2xl" />
              
              <div className="max-w-md">
                <span className="text-xs font-mono tracking-widest text-[#C6FF00] uppercase block mb-2">
                  CAFETERÍA & SPECIALTY COFFEE
                </span>
                <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4 leading-none">
                  GOOD COFFEE <br />BETTER DAYS.
                </h3>
                <p className="text-sm text-[#A1A1AA] mb-6">
                  Menú digital interactivo, reserva de mesas y pedidos instantáneos directamente al WhatsApp del barista.
                </p>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase">
                    PEDIR EN LÍNEA
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono">
                    VER MENÚ
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile First Concept (Card 03/09 Sidephone) */}
            <div className="md:col-span-4 bg-[#0C0D0E] rounded-xl border border-white/10 p-5 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase text-[#777777]">MOBILE FIRST PREVIEW</span>
                <Smartphone className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="aspect-[9/14] rounded-lg bg-[#15161A] border border-white/10 p-4 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-3" />
                  <div className="text-xs font-display text-white uppercase tracking-wider mb-1">
                    NOMAD COFFEE
                  </div>
                  <div className="text-[10px] text-[#A1A1AA] mb-3">
                    Granos tostados de especialidad.
                  </div>
                  <div className="h-16 rounded bg-white/5 border border-white/5 p-2 flex items-center justify-center text-center">
                    <span className="text-[11px] font-mono text-[#C6FF00]">
                      ☕ Flat White $3.800
                    </span>
                  </div>
                </div>
                <div className="w-full py-2 rounded bg-[#C6FF00] text-black text-center font-display text-xs tracking-wider uppercase">
                  PEDIR POR WHATSAPP →
                </div>
              </div>
            </div>

          </div>

          {/* Micro Footer bar inside card */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#777777]">
            <div className="flex items-center gap-4">
              <span>DISEÑO + DESARROLLO</span>
              <span>•</span>
              <span>RESPONSIVE / MOBILE FIRST</span>
            </div>
            <a
              href="#proyectos"
              className="text-[#C6FF00] hover:underline flex items-center gap-1"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
