import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { Check, Server } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PricingPackages: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [billingMode, setBillingMode] = useState<'onetime' | 'maintenance'>('onetime');

  const onetimePackages = [
    {
      id: 'landing',
      name: 'LANDING STARTER',
      tag: 'Lanzamiento Rápido',
      priceUSD: 240,
      priceARS: 320000,
      deliveryTime: '5 a 7 días hábiles',
      popular: false,
      desc: 'Ideal para validar una idea de negocio, lanzar un servicio o captar leads calificados con mínima fricción.',
      features: [
        '1 Página de alto impacto orientada a conversión',
        'Diseño 100% exclusivo en React + Tailwind',
        'Botones directos con mensaje dinámico a WhatsApp',
        'Velocidad de carga < 1s (Lighthouse 95+)',
        '100% Adaptada a celulares (Mobile First)',
        'Configuración de dominio y hosting gratis el 1º año',
      ],
    },
    {
      id: 'business',
      name: 'BUSINESS SCALE',
      tag: 'EL MÁS ELEGIDO',
      priceUSD: 420,
      priceARS: 560000,
      deliveryTime: '10 a 14 días hábiles',
      popular: true,
      desc: 'Para negocios, empresas y marcas que quieren proyectar máxima autoridad y superar a su competencia.',
      features: [
        'Hasta 5 secciones completas (Nosotros, Servicios, Portafolio, FAQ, Contacto)',
        'Estructura de copywriting persuasivo incluida',
        'Micro-interacciones y animaciones fluidas de autor',
        'SEO Técnico para indexación prioritaria en Google',
        'Integración con WhatsApp y formulario de contacto',
        'Garantía técnica de satisfacción 100%',
        'Soporte prioritario post-lanzamiento por 30 días',
      ],
    },
    {
      id: 'ecommerce',
      name: 'E-COMMERCE & PLATAFORMA',
      tag: 'Ventas 24/7',
      priceUSD: 680,
      priceARS: 890000,
      deliveryTime: '15 a 20 días hábiles',
      popular: false,
      desc: 'Para tiendas de indumentaria, productos físicos o digitales que buscan cobrar automáticamente sin comisiones.',
      features: [
        'Catálogo de productos interactivo con filtros dinámicos',
        'Carrito de compras y checkout optimizado en 2 pasos',
        'Cobros integrados (MercadoPago, Stripe, Transferencia)',
        'Panel de administración autoadministrable (CMS)',
        'Gestión de stock, pedidos y cupones de descuento',
        'Seguridad SSL grado bancario para transacciones',
        'Capacitación en video personalizada de uso',
      ],
    },
  ];

  const maintenancePlans = [
    {
      name: 'PLAN CARE & HOSTING',
      priceUSD: 35,
      priceARS: 45000,
      period: '/ mes',
      desc: 'Tranquilidad total. Nosotros nos encargamos de que tu web esté siempre rápida, segura y actualizada.',
      features: [
        'Hosting de ultra velocidad en Vercel / Cloudflare',
        'Certificado de seguridad SSL permanente',
        'Copias de seguridad semanales en la nube',
        'Hasta 2 horas mensuales de cambios menores (textos, precios, fotos)',
        'Monitoreo de caídas 24/7 (99.9% Uptime)',
        'Soporte directo por WhatsApp con Nahuel',
      ],
    },
    {
      name: 'PLAN GROWTH & SEO',
      priceUSD: 65,
      priceARS: 85000,
      period: '/ mes',
      desc: 'Para marcas que buscan escalar activamente, publicar novedades mensuales y optimizar su posición en Google.',
      features: [
        'Todo lo del Plan Care & Hosting incluido',
        'Hasta 5 horas mensuales de modificaciones y nuevas secciones',
        'Auditoría mensual de posicionamiento SEO y PageSpeed',
        'Subida y optimización de nuevos productos / posts de blog',
        'Reporte mensual de rendimiento y visitas',
        'Canal prioritario de emergencias',
      ],
    },
  ];

  const formatPrice = (usd: number, ars: number) => {
    return currency === 'USD' ? `$${usd} USD` : `$${ars.toLocaleString()} ARS`;
  };

  return (
    <section id="precios" className="py-24 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-3">
              <span className="font-bold">06 / 07</span>
              <span>•</span>
              <span>PAQUETES LLAVE EN MANO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              PLANES TRANSPARENTES. <br />
              <span className="text-zinc-500 dark:text-zinc-400">SIN COSTOS OCULTOS.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Currency selector */}
            <div className="flex rounded-lg bg-zinc-100 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10 p-1">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                  currency === 'USD' 
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('ARS')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                  currency === 'ARS' 
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                ARS ($)
              </button>
            </div>
          </div>
        </div>

        {/* Tab switch between One-Time and Maintenance */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10">
            <button
              onClick={() => setBillingMode('onetime')}
              className={`px-5 py-2.5 rounded-xl font-display text-sm tracking-wider uppercase transition-all cursor-pointer ${
                billingMode === 'onetime'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              Proyectos Web Llave en Mano
            </button>
            <button
              onClick={() => setBillingMode('maintenance')}
              className={`px-5 py-2.5 rounded-xl font-display text-sm tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                billingMode === 'maintenance'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Mantenimiento & Soporte Mensual</span>
            </button>
          </div>
        </div>

        {/* ONE-TIME PROJECTS GRID */}
        {billingMode === 'onetime' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {onetimePackages.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <SpotlightCard
                  key={pkg.id}
                  className={`p-6 sm:p-8 flex flex-col justify-between ${
                    isPopular 
                      ? 'border-zinc-950 dark:border-white ring-1 ring-zinc-950 dark:ring-white shadow-lg' 
                      : 'border-zinc-200/80 dark:border-white/10'
                  }`}
                >
                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase font-bold tracking-wider ${
                        isPopular
                          ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                          : 'bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-black/50 dark:text-zinc-300 dark:border-white/10'
                      }`}>
                        {pkg.tag}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        ⏱ {pkg.deliveryTime}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed font-normal">
                      {pkg.desc}
                    </p>

                    {/* Price display */}
                    <div className="py-4 border-y border-zinc-100 dark:border-white/5 mb-6">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">
                        INVERSIÓN ÚNICA:
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl sm:text-5xl text-zinc-950 dark:text-white">
                          {formatPrice(pkg.priceUSD, pkg.priceARS)}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 mt-1 block">
                        50% al inicio y 50% contra entrega conforme
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 font-normal">
                          <Check className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hola Nahuel! Me interesa contratar el paquete ${pkg.name} (${formatPrice(pkg.priceUSD, pkg.priceARS)}). ¿Podemos coordinar para arrancar?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tactile-btn w-full py-3.5 rounded-xl font-display text-base tracking-wider uppercase flex items-center justify-center gap-2 text-center transition-all shadow-xs ${
                      isPopular
                        ? 'bg-zinc-950 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold'
                        : 'bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 dark:bg-transparent dark:border-white/15 dark:text-white dark:hover:bg-white/5'
                    }`}
                  >
                    <span>ELEGIR ESTE PAQUETE →</span>
                  </a>
                </SpotlightCard>
              );
            })}
          </div>
        )}

        {/* MONTHLY MAINTENANCE GRID */}
        {billingMode === 'maintenance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {maintenancePlans.map((plan, idx) => (
              <SpotlightCard key={idx} className="p-8 flex flex-col justify-between border-zinc-200/80 dark:border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-black/50 dark:border-white/10 dark:text-zinc-300 mb-4">
                    <Server className="w-3.5 h-3.5" />
                    <span>INGRESO RECURRENTE & TRANQUILIDAD</span>
                  </div>

                  <h3 className="font-display text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-normal">
                    {plan.desc}
                  </p>

                  <div className="py-4 border-y border-zinc-100 dark:border-white/5 mb-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl text-zinc-950 dark:text-white">
                      {formatPrice(plan.priceUSD, plan.priceARS)}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 font-normal">
                        <Check className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hola Nahuel! Me gustaría contratar el ${plan.name} para mantener mi sitio web.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn w-full py-3.5 rounded-xl bg-zinc-950 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-display text-base tracking-wider uppercase text-center shadow-xs"
                >
                  <span>SUSCRIBIR PLAN POR WHATSAPP →</span>
                </a>
              </SpotlightCard>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
