import React from 'react';
import { Layout, ShoppingBag, Cpu, ArrowUpRight, Gauge } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/config';

export const ServicesBento: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-3">
              <span className="font-bold">03 / 07</span>
              <span>•</span>
              <span>SOLUCIONES DIGITALES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              DISEÑO & DESARROLLO <br />
              <span className="text-zinc-500 dark:text-zinc-400">SIN LÍMITES.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            No usamos plantillas genéricas. Cada proyecto se diseña desde cero con identidad visual contundente y arquitectura pensada para <strong className="text-zinc-950 dark:text-white font-medium">vender y posicionar tu marca</strong>.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Landing Pages (Span 7) */}
          <div className="md:col-span-7 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10">
                  ALTA CONVERSIÓN
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                LANDING PAGES DE ALTO IMPACTO
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                Diseñadas estratégicamente para captar leads y cerrar ventas. Estructura psicológica probada, tiempos de carga inferiores a 1 segundo y botones directos a WhatsApp para reducir la fricción a cero.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Mobile First • Copywriting persuasivo • SEO Ready</span>
              </div>
              <a
                href="#presupuesto"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-white hover:underline transition-colors font-bold"
              >
                <span>Cotizar Landing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: E-commerce (Span 5) */}
          <div className="md:col-span-5 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10">
                  VENTAS 24/7
                </span>
              </div>

              <h3 className="font-display text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                TIENDAS E-COMMERCE MODERNAS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                Catálogo interactivo, checkout ultrarrápido y cobros con MercadoPago, Stripe o transferencia bancaria automatizada.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Control de stock & cupones</span>
              <a
                href="#presupuesto"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-white hover:underline transition-colors font-bold"
              >
                <span>Cotizar Tienda</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Web Apps & Custom Software (Span 5) */}
          <div className="md:col-span-5 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-300 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10">
                  REACT & NEXT.JS
                </span>
              </div>

              <h3 className="font-display text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                APLICACIONES & PANELES A MEDIDA
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                Dashboards de gestión, portales de clientes, cotizadores interactivos y plataformas SaaS con TypeScript robusto.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Autenticación & Base de datos</span>
              <a
                href="#presupuesto"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-white hover:underline transition-colors font-bold"
              >
                <span>Consultar</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Performance & SEO (Span 7) */}
          <div className="md:col-span-7 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
                  <Gauge className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10">
                  CORE WEB VITALS 99+
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                OPTIMIZACIÓN & REDISEÑO DE WEBS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                ¿Ya tenés una web pero es lenta, desactualizada o no te genera consultas? La transformamos en una plataforma de alto rendimiento con diseño moderno, SEO técnico y velocidad garantizada.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span>✓ Auditoría técnica sin costo</span>
                <span>•</span>
                <span>Migración sin caídas de servicio</span>
              </div>
              <a
                href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola! Quiero una auditoría técnica de mi web actual.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-white hover:underline font-bold"
              >
                <span>Pedir Auditoría →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
