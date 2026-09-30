import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { Calculator, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectTypeOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
  basePriceUSD: number;
  basePriceARS: number;
  deliveryDays: string;
}

interface AddonOption {
  id: string;
  name: string;
  priceUSD: number;
  priceARS: number;
  desc: string;
}

export const BudgetCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['whatsapp', 'seo']);

  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'landing',
      name: 'Landing Page',
      badge: 'Más Vendido',
      desc: '1 página de alto impacto enfocada al 100% en captar clientes, validar un producto o lanzar un servicio.',
      basePriceUSD: 240,
      basePriceARS: 320000,
      deliveryDays: '5 - 7 días',
    },
    {
      id: 'business',
      name: 'Sitio Business',
      badge: 'Corporativo',
      desc: 'Hasta 5 secciones completas (Nosotros, Servicios, Portafolio, FAQ, Contacto) para empresas y profesionales.',
      basePriceUSD: 420,
      basePriceARS: 560000,
      deliveryDays: '10 - 14 días',
    },
    {
      id: 'ecommerce',
      name: 'E-commerce / Tienda',
      badge: 'Ventas 24/7',
      desc: 'Catálogo de productos, carrito de compras, pasarela de pago (MercadoPago/Stripe) y control de stock.',
      basePriceUSD: 680,
      basePriceARS: 890000,
      deliveryDays: '15 - 20 días',
    },
    {
      id: 'custom',
      name: 'App / SaaS a Medida',
      badge: 'A Medida',
      desc: 'Panel de clientes, base de datos en tiempo real, autenticación segura y lógica de negocio avanzada.',
      basePriceUSD: 950,
      basePriceARS: 1250000,
      deliveryDays: '20 - 30 días',
    },
  ];

  const addons: AddonOption[] = [
    {
      id: 'whatsapp',
      name: 'Automatización WhatsApp Directo',
      priceUSD: 40,
      priceARS: 50000,
      desc: 'Mensajería preformateada categorizada por servicio para cerrar ventas con 1 clic.',
    },
    {
      id: 'cms',
      name: 'Panel CMS Autoadministrable',
      priceUSD: 90,
      priceARS: 120000,
      desc: 'Edita textos, productos e imágenes fácilmente sin depender de un programador.',
    },
    {
      id: 'seo',
      name: 'SEO Pro & Velocidad Extrema (99+)',
      priceUSD: 60,
      priceARS: 80000,
      desc: 'Optimización de Core Web Vitals, metadatos enriquecidos e indexación prioritaria en Google.',
    },
    {
      id: 'rush',
      name: 'Entrega Prioritaria Express',
      priceUSD: 110,
      priceARS: 145000,
      desc: 'Tu proyecto terminado y publicado en la mitad del tiempo estándar.',
    },
  ];

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let min = currency === 'USD' ? currentType.basePriceUSD : currentType.basePriceARS;
    
    selectedAddons.forEach(id => {
      const addon = addons.find(a => a.id === id);
      if (addon) {
        min += currency === 'USD' ? addon.priceUSD : addon.priceARS;
      }
    });

    const max = Math.round(min * 1.25);
    return { min, max };
  };

  const total = calculateTotal();

  const handleSendQuote = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#000000', '#555555', '#AAAAAA', '#FFFFFF'],
    });

    const selectedAddonNames = selectedAddons
      .map(id => addons.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hola Nahuel! Estuve armando una cotización en tu web ${STUDIO_CONFIG.studioName}:\n\n` +
      `📌 Tipo de proyecto: ${currentType.name}\n` +
      `⚡ Plazo estimado: ${currentType.deliveryDays}\n` +
      `🧩 Adicionales: ${selectedAddonNames || 'Ninguno'}\n` +
      `💰 Rango estimado: ${currency === 'USD' ? `$${total.min} - $${total.max} USD` : `$${total.min.toLocaleString()} - $${total.max.toLocaleString()} ARS`}\n\n` +
      `¿Podemos coordinar una breve llamada para repasar detalles y arrancar?`;

    const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="presupuesto" className="py-24 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span className="font-bold">05 / 07</span>
              <span>•</span>
              <span>PRESUPUESTO TRANSPARENTE EN VIVO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              ¿CUÁNTO CUESTA <br />
              <span className="text-zinc-500 dark:text-zinc-400">UNA PÁGINA WEB?</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-500">MONEDA:</span>
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

        {/* Interactive Scope Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selections */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="text-xs font-mono text-zinc-500 uppercase block mb-3">
                PASO 1: ELEGÍ EL TIPO DE PROYECTO
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white dark:bg-[#15161A] border-zinc-950 dark:border-white ring-1 ring-zinc-950 dark:ring-white shadow-md'
                          : 'bg-white dark:bg-[#101114] border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 shadow-xs'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5">
                            {type.badge}
                          </span>
                          <span className="text-xs font-mono text-zinc-500">
                            ⏱ {type.deliveryDays}
                          </span>
                        </div>
                        <h4 className="font-display text-lg tracking-wide uppercase text-zinc-950 dark:text-white">
                          {type.name}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed font-normal">
                          {type.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-500">Base desde:</span>
                        <span className="text-zinc-950 dark:text-white font-bold">
                          {currency === 'USD' ? `$${type.basePriceUSD} USD` : `$${type.basePriceARS.toLocaleString()} ARS`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Add-ons Toggles */}
            <div>
              <label className="text-xs font-mono text-zinc-500 uppercase block mb-3">
                PASO 2: ADICIONALES & MEJORAS RECOMENDADAS
              </label>

              <div className="flex flex-col gap-2.5">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-zinc-50 dark:bg-[#15161A] border-zinc-900 dark:border-white/30 shadow-xs'
                          : 'bg-white dark:bg-[#101114] border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950' : 'border border-zinc-300 dark:border-white/20'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-zinc-950 dark:text-white block">
                            {addon.name}
                          </span>
                          <span className="text-xs text-zinc-500 font-normal">
                            {addon.desc}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-zinc-950 dark:text-white shrink-0 font-bold">
                        +{currency === 'USD' ? `$${addon.priceUSD}` : `$${addon.priceARS.toLocaleString()}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Box */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200/80 dark:border-white/10 p-6 sm:p-8 shadow-md relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/10 mb-6">
                <span className="text-xs font-mono text-zinc-900 dark:text-white uppercase tracking-widest font-semibold">
                  RESUMEN DE ESTIMACIÓN
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="mb-6">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">
                  PROYECTO SELECCIONADO:
                </span>
                <h3 className="font-display text-2xl text-zinc-950 dark:text-white uppercase tracking-wide">
                  {currentType.name}
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Entrega estimada: {currentType.deliveryDays}
                </span>
              </div>

              {/* Addons List */}
              <div className="py-4 border-y border-zinc-100 dark:border-white/10 mb-6">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2">
                  ADICIONALES INCLUIDOS ({selectedAddons.length}):
                </span>
                {selectedAddons.length === 0 ? (
                  <span className="text-xs text-zinc-400 italic font-normal">Ningún adicional seleccionado</span>
                ) : (
                  <ul className="space-y-1.5">
                    {selectedAddons.map(id => {
                      const item = addons.find(a => a.id === id);
                      if (!item) return null;
                      return (
                        <li key={id} className="flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                            {item.name}
                          </span>
                          <span className="text-zinc-950 dark:text-white font-medium">
                            +{currency === 'USD' ? `$${item.priceUSD}` : `$${item.priceARS.toLocaleString()}`}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Price Range Display */}
              <div className="mb-6">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">
                  RANGO ESTIMADO DE INVERSIÓN:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl text-zinc-950 dark:text-white tracking-tight">
                    {currency === 'USD' ? `$${total.min}` : `$${total.min.toLocaleString()}`}
                  </span>
                  <span className="text-zinc-400 font-display text-2xl">a</span>
                  <span className="font-display text-4xl sm:text-5xl text-zinc-950 dark:text-white tracking-tight">
                    {currency === 'USD' ? `$${total.max}` : `$${total.max.toLocaleString()}`}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase ml-1">
                    {currency}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 font-mono mt-2">
                  * Pago fraccionado: 50% al inicio y 50% contra entrega conforme.
                </p>
              </div>

              {/* Primary WhatsApp Dispatch Button */}
              <button
                onClick={handleSendQuote}
                className="tactile-btn w-full py-4 rounded-xl bg-zinc-950 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-display text-lg tracking-wider uppercase flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>SOLICITAR PROPUESTA POR WHATSAPP →</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
                <span>✓ Sin compromiso</span>
                <span>•</span>
                <span>✓ Respuesta directa con Nahuel</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
