import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-grid-pattern border-b border-zinc-200/80 dark:border-white/10">
      {/* Ambient Radial Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-200/40 dark:bg-white/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium tracking-wide">DISPONIBLE PARA PROYECTOS</span>
          <span className="text-zinc-400 dark:text-white/20">•</span>
          <span className="text-zinc-500 dark:text-zinc-400">ESTUDIO INDEPENDIENTE</span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="max-w-5xl mb-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight text-zinc-950 dark:text-white uppercase">
            YOUR BUSINESS <br />
            DESERVES A <br />
            <span className="text-zinc-900 dark:text-zinc-100">
              BETTER WEBSITE.
            </span>
          </h1>
        </div>

        {/* Minimalist Subtitle */}
        <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 font-normal">
          Desarrollo web y software a medida para marcas que buscan diferenciarse.
          Arquitectura ultrarrápida, diseño de alto impacto sin plantillas genéricas y foco absoluto en convertir visitantes en ventas.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
          <a
            href="#presupuesto"
            className="tactile-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-950 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-display text-xl tracking-wider uppercase transition-all shadow-md text-center"
          >
            <span>COTIZAR MI PROYECTO</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <a
            href="#proyectos"
            className="tactile-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white dark:bg-transparent border border-zinc-300 hover:border-zinc-900 dark:border-white/15 dark:hover:border-white text-zinc-900 dark:text-white font-mono text-sm tracking-wide transition-all text-center shadow-xs"
          >
            <span>VER TRABAJOS REALES ↓</span>
          </a>
        </div>

        {/* Minimalist Credibility Metrics Strip */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-display text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">90+</div>
            <div className="text-xs font-mono text-zinc-500 uppercase mt-1">Google PageSpeed</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">100%</div>
            <div className="text-xs font-mono text-zinc-500 uppercase mt-1">Código a Medida</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">7-14 DÍAS</div>
            <div className="text-xs font-mono text-zinc-500 uppercase mt-1">Plazo de Entrega</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">DIRECTO</div>
            <div className="text-xs font-mono text-zinc-500 uppercase mt-1">Sin Intermediarios</div>
          </div>
        </div>

      </div>
    </section>
  );
};
