import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, Zap, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="comparativa" className="py-24 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-3">
              <span className="font-bold">04 / 07</span>
              <span>•</span>
              <span>IMPACTO VISUAL REAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              EL DISEÑO TAMBIÉN <span className="text-zinc-500 dark:text-zinc-400">COMUNICA.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400 font-normal">
            Una buena web no solamente funciona: <strong className="text-zinc-950 dark:text-white font-medium">construye autoridad instantánea</strong> y transforma visitantes escépticos en clientes listos para comprar.
          </p>
        </div>

        {/* Drag Instructions Bar */}
        <div className="flex items-center justify-between mb-4 px-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-red-500">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>BEFORE: Web Genérica & Lenta</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-zinc-500">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Arrastrá el divisor para comparar</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AFTER: Bruta Studio (Alta Conversión)</span>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative h-[480px] sm:h-[540px] rounded-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden select-none cursor-ew-resize shadow-md bg-zinc-900"
        >
          {/* AFTER LAYER (FULL BACKGROUND) */}
          <div className="absolute inset-0 bg-[#0C0D0E] p-6 sm:p-10 flex flex-col justify-between overflow-hidden z-0">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#16171A] border border-white/20 flex items-center justify-center font-display text-white text-sm">
                    nu
                  </div>
                  <span className="font-display tracking-wider text-white text-base">AVENTURA EXPEDITIONS</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono">
                  ⚡ 0.5s Carga • WhatsApp Directo
                </div>
              </div>

              {/* 2-column layout for modern after preview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-3">
                <div className="md:col-span-7">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                    EXPERIENCIAS DE MONTAÑA & OUTDOOR
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none mb-3">
                    TU PRÓXIMA AVENTURA <br />
                    <span>EMPIEZA ACÁ.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 font-normal">
                    Expediciones guiadas por la Patagonia con reserva instantánea y asesoramiento por WhatsApp en menos de 5 minutos.
                  </p>
                  <button className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-xs">
                    RESERVAR CUPO POR WHATSAPP →
                  </button>
                </div>

                <div className="md:col-span-5 hidden sm:block">
                  <div className="rounded-xl bg-[#15161A] border border-white/10 p-3 shadow-xl">
                    <div className="h-32 rounded-lg bg-zinc-800 relative overflow-hidden mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" 
                        alt="Patagonia" 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white">
                        CUPOS 2026 ABIERTOS
                      </span>
                    </div>
                    <div className="text-xs font-display text-white uppercase">Trekking Fitz Roy 4D/3N</div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mt-1">
                      <span>Desde $180 USD</span>
                      <span className="text-white text-[10px]">⭐ 4.9 (120 reseñas)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-white">✓ Arquitectura moderna en React + Tailwind</span>
              <span>Tasa de conversión: 14.8%</span>
            </div>
          </div>

          {/* BEFORE LAYER (CLIPPED WITH HIGH Z-INDEX & INSET CLIP) */}
          <div 
            className="absolute inset-0 bg-[#F4F4F5] text-zinc-800 p-6 sm:p-10 flex flex-col justify-between overflow-hidden z-20 pointer-events-none"
            style={{ 
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
            }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-zinc-300 pb-3 mb-6">
                <span className="font-serif text-lg tracking-wide text-zinc-700">Aventura SRL - Inicio</span>
                <span className="text-xs font-mono text-red-600 bg-red-100 px-2 py-0.5 border border-red-300">
                  ⚠️ 6.8s Carga • No responsive
                </span>
              </div>

              <div className="max-w-xl">
                <span className="text-xs uppercase text-zinc-500 font-mono tracking-widest block mb-2">
                  PÁGINA WEB CORPORATIVA 2012
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-zinc-900 leading-tight mb-4 font-normal">
                  Bienvenidos a Nuestro Sitio Web Oficial
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
                  Somos una empresa dedicada al turismo y servicios afines desde 2008. Para consultas llene el formulario de 14 campos y le responderemos en 48 horas hábiles.
                </p>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 border border-zinc-400 bg-zinc-200 text-xs text-zinc-700 shadow-inner">
                    Enviar Consulta
                  </div>
                  <div className="px-4 py-2 border border-zinc-400 bg-zinc-100 text-xs text-zinc-600">
                    Descargar Folleto Word
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-300 text-xs text-zinc-600 font-mono flex items-center justify-between">
              <span className="text-red-600">✕ Plantilla obsoleta • Sin adaptación móvil real</span>
              <span>Tasa de conversión: 1.2%</span>
            </div>
          </div>

          {/* DRAGGABLE DIVIDER HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-white flex items-center justify-center shadow-lg">
              <ArrowLeftRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>

        {/* Quick Position Selectors */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button 
            onClick={() => setSliderPosition(15)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              sliderPosition < 30 
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 dark:bg-[#15161A] dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            Ver Solo Nuevo
          </button>
          <button 
            onClick={() => setSliderPosition(50)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              sliderPosition >= 30 && sliderPosition <= 70 
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 dark:bg-[#15161A] dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            50 / 50 Split
          </button>
          <button 
            onClick={() => setSliderPosition(85)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              sliderPosition > 70 
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs' 
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 dark:bg-[#15161A] dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            Ver Solo Antiguo
          </button>
        </div>

        {/* Impact Metrics Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
              <span>VELOCIDAD DE CARGA</span>
              <Zap className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-zinc-950 dark:text-white">0.6s</span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">(-91% vs 6.8s)</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-normal">
              Carga instantánea. El 53% de los usuarios abandona una web que tarda más de 3 segundos.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
              <span>CONVERSIÓN DE LEADS</span>
              <Sparkles className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-zinc-950 dark:text-white">+240%</span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">(De 1.2% a 14.8%)</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-normal">
              Botones claros a WhatsApp y propuestas de valor directas duplican tus ventas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
              <span>AUTORIDAD DE MARCA</span>
              <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-zinc-950 dark:text-white">100%</span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">DISEÑO EXCLUSIVO</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-normal">
              Tu marca se percibe como una empresa líder y moderna, justificando precios más altos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
