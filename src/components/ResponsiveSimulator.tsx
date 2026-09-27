import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, CheckCircle } from 'lucide-react';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ResponsiveSimulator: React.FC = () => {
  const [device, setDevice] = useState<DeviceMode>('desktop');

  return (
    <section id="responsive" className="py-24 bg-[#0C0D0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
              <span className="text-[#C6FF00] font-bold">04 / 09</span>
              <span>•</span>
              <span>ADAPTABILIDAD TOTAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              ¿QUÉ SIGNIFICA QUE UNA <br />
              <span className="text-[#C6FF00]">WEB SEA RESPONSIVE?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A1A1AA]">
            Más del <strong className="text-white">82% del tráfico en Latinoamérica</strong> proviene de teléfonos móviles. Una web que no responde al instante pierde clientes antes de que lean el título.
          </p>
        </div>

        {/* Device Switcher Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
              device === 'desktop'
                ? 'bg-[#C6FF00] text-black font-bold shadow-lg shadow-[#C6FF00]/20'
                : 'bg-[#15161A] text-[#A1A1AA] hover:text-white border border-white/10'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop</span>
            <span className="text-[10px] opacity-75">(1440px)</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
              device === 'tablet'
                ? 'bg-[#C6FF00] text-black font-bold shadow-lg shadow-[#C6FF00]/20'
                : 'bg-[#15161A] text-[#A1A1AA] hover:text-white border border-white/10'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
            <span className="text-[10px] opacity-75">(768px)</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
              device === 'mobile'
                ? 'bg-[#C6FF00] text-black font-bold shadow-lg shadow-[#C6FF00]/20'
                : 'bg-[#15161A] text-[#A1A1AA] hover:text-white border border-white/10'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Móvil</span>
            <span className="text-[10px] opacity-75">(390px)</span>
          </button>
        </div>

        {/* Viewport Frame with Dynamic Width */}
        <div className="bg-[#15161A] rounded-2xl border border-white/10 p-4 sm:p-8 flex justify-center items-center overflow-x-auto min-h-[560px]">
          <div
            className="transition-all duration-500 ease-out bg-[#0C0D0E] rounded-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col justify-between"
            style={{
              width: device === 'desktop' ? '100%' : device === 'tablet' ? '680px' : '360px',
              maxWidth: '100%',
              height: '460px',
            }}
          >
            {/* Simulated Browser / App Header */}
            <div className="bg-[#16171A] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-[#777777] ml-2 truncate max-w-[180px] sm:max-w-none">
                  https://inmobiliaria-luxury.com/propiedades
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-ping" />
                <span className="text-[10px] font-mono text-[#C6FF00]">LIVE PREVIEW</span>
              </div>
            </div>

            {/* Inner Content adapting seamlessly */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              
              {/* Mini Brand Nav */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <span className="font-display text-white text-base tracking-wider">
                  HABITAT <span className="text-[#C6FF00]">STUDIO</span>
                </span>
                <div className={`flex items-center gap-3 text-xs font-mono ${device === 'mobile' ? 'hidden' : 'flex'}`}>
                  <span className="text-[#A1A1AA]">Propiedades</span>
                  <span className="text-[#A1A1AA]">Inversión</span>
                  <span className="text-[#C6FF00]">Contacto</span>
                </div>
                {device === 'mobile' && (
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#15161A] text-white border border-white/10">
                    MENU ☰
                  </span>
                )}
              </div>

              {/* Dynamic Grid Layout according to device */}
              <div className={`grid gap-4 ${
                device === 'desktop' 
                  ? 'grid-cols-3' 
                  : device === 'tablet' 
                  ? 'grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {/* Card 1 */}
                <div className="p-4 rounded-lg bg-[#15161A] border border-white/5">
                  <div className="h-28 rounded bg-gradient-to-tr from-zinc-800 to-zinc-700 mb-3 flex items-end p-2 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                      alt="Villa moderna" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#C6FF00]">
                      USD 280.000
                    </span>
                  </div>
                  <h4 className="font-display text-sm text-white uppercase">Residencia Palermo Hollywood</h4>
                  <p className="text-[11px] text-[#A1A1AA] mt-1">3 Dormitorios • Piscina • Cochera Doble</p>
                  <button className="w-full mt-3 py-1.5 rounded bg-[#0C0D0E] hover:bg-[#C6FF00] hover:text-black border border-white/10 text-xs font-mono transition-colors">
                    Ver Ficha Técnica →
                  </button>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-lg bg-[#15161A] border border-white/5">
                  <div className="h-28 rounded bg-gradient-to-tr from-zinc-800 to-zinc-700 mb-3 flex items-end p-2 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" 
                      alt="Loft minimalista" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#C6FF00]">
                      USD 165.000
                    </span>
                  </div>
                  <h4 className="font-display text-sm text-white uppercase">Loft Industrial Belgrano</h4>
                  <p className="text-[11px] text-[#A1A1AA] mt-1">2 Ambientes • Balcón Terraza • Parrilla</p>
                  <button className="w-full mt-3 py-1.5 rounded bg-[#0C0D0E] hover:bg-[#C6FF00] hover:text-black border border-white/10 text-xs font-mono transition-colors">
                    Ver Ficha Técnica →
                  </button>
                </div>

                {/* Card 3 (Shows when desktop or tablet scroll) */}
                <div className={`p-4 rounded-lg bg-[#15161A] border border-white/5 ${device === 'tablet' ? 'hidden sm:block' : ''}`}>
                  <div className="h-28 rounded bg-gradient-to-tr from-zinc-800 to-zinc-700 mb-3 flex items-end p-2 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" 
                      alt="Penthouse" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#C6FF00]">
                      USD 390.000
                    </span>
                  </div>
                  <h4 className="font-display text-sm text-white uppercase">Penthouse Vista Río</h4>
                  <p className="text-[11px] text-[#A1A1AA] mt-1">4 Ambientes • Jacuzzi • Seguridad 24h</p>
                  <button className="w-full mt-3 py-1.5 rounded bg-[#0C0D0E] hover:bg-[#C6FF00] hover:text-black border border-white/10 text-xs font-mono transition-colors">
                    Ver Ficha Técnica →
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Bar in Simulator */}
            <div className="bg-[#15161A] px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#777777]">
              <span>Modo actual: <strong className="text-white uppercase">{device}</strong></span>
              <span className="text-[#C6FF00]">✓ Fluid Layout Clamp()</span>
            </div>
          </div>
        </div>

        {/* Feature Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            {
              title: "Mobile First Ergonomics",
              desc: "Botones principales en la zona natural del pulgar para navegar con una sola mano.",
            },
            {
              title: "Cero Desbordes Horizontales",
              desc: "Tipografía calculada con CSS clamp() para legibilidad matemática en cualquier pantalla.",
            },
            {
              title: "Optimización de Datos 4G/5G",
              desc: "Imágenes en WebP y SVG para que tu cliente no gaste datos esperando que cargue.",
            },
            {
              title: "Cross-Browser Verified",
              desc: "Probado en Safari iOS, Chrome Android, Firefox, Edge y MacOS.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#15161A] border border-white/5">
              <div className="flex items-center gap-2 mb-2 text-[#C6FF00]">
                <CheckCircle className="w-4 h-4" />
                <h4 className="font-display text-sm text-white tracking-wide">{item.title}</h4>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
