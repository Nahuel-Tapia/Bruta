import React from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { ShieldCheck, Zap, HeartHandshake, CheckCircle2, MessageCircle, Terminal, MapPin } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const AboutFounder: React.FC = () => {
  const guarantees = [
    {
      icon: Zap,
      title: "Garantía de Velocidad 90+ PageSpeed",
      desc: "Tu web superará los 90 puntos en la auditoría oficial de Google en móvil y escritorio. Si no lo logra, la optimizamos sin costo hasta alcanzarlo.",
    },
    {
      icon: ShieldCheck,
      title: "Presupuesto Cerrado Sin Sorpresas",
      desc: "El valor acordado en el scope inicial es el precio final definitivo. Sin costos ocultos, sin sorpresas ni cobros imprevistos.",
    },
    {
      icon: HeartHandshake,
      title: "Revisiones de Diseño Ilimitadas",
      desc: "Diseñamos la propuesta visual y ajustamos cada detalle hasta tu completa satisfacción antes de programar la primera línea de código.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-[#0C0D0E] relative border-b border-white/10 scroll-mt-16">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
              <span className="text-[#C6FF00] font-bold">03 / 09</span>
              <span>•</span>
              <span>EL DESARROLLADOR DETRÁS DE TU PROYECTO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              TRATO DIRECTO. <br />
              <span className="text-[#C6FF00]">SIN INTERMEDIARIOS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A1A1AA]">
            En las agencias tradicionales hablas con vendedores y tu proyecto pasa de becario en becario. En Bruta Studio, <strong className="text-white">hablas directamente con quien programa y diseña cada píxel</strong>.
          </p>
        </div>

        {/* Founder Bio Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Profile Header & Terminal Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#777777]">
                    <Terminal className="w-3.5 h-3.5 text-[#C6FF00]" />
                    <span>nahuel@brutastudio:~$ whoami</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#C6FF00] border border-white/10">
                    LEAD DEV
                  </span>
                </div>

                {/* Avatar & Badges */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#16171A] to-[#25272F] border-2 border-[#C6FF00] flex items-center justify-center overflow-hidden shadow-lg shadow-[#C6FF00]/10">
                      <span className="font-display text-4xl text-white tracking-tighter">N</span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#C6FF00] border-2 border-black" title="En línea" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                      Nahuel
                    </h3>
                    <p className="text-xs font-mono text-[#C6FF00]">
                      Fullstack Developer & UI Specialist
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#777777] font-mono mt-1">
                      <MapPin className="w-3 h-3 text-[#A1A1AA]" />
                      <span>{STUDIO_CONFIG.location}</span>
                    </div>
                  </div>
                </div>

                {/* Founder Statement */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  "Creé Bruta Studio cansado de ver a marcas y profesionales pagar cientos de dólares por plantillas lentas y genéricas de WordPress que tardan 8 segundos en cargar. Programo cada sitio a medida con <strong className="text-white">React, TypeScript y Tailwind</strong> para que tu negocio tenga una identidad que no se confunda con nadie y convierta visitas en ventas."
                </p>

                {/* Quick Skills Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React 19", "TypeScript", "Tailwind CSS", "Next.js", "CRO & Copywriting", "SEO Técnico"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Founder CTA Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#777777]">¿Coordinamos tu proyecto?</span>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola Nahuel! Me gustaría consultar por la creación de mi web.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF00] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d8ff33]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>Hablar con Nahuel</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: 3 Strict Anti-Risk Guarantees */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#777777] uppercase block mb-3">
                NUESTRO COMPROMISO DE CALIDAD (CERO RIESGO)
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                GARANTÍAS TÉCNICAS <br />
                <span className="text-[#C6FF00]">QUE NADIE MÁS TE DA.</span>
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-6">
                Comprar una web suele generar incertidumbre. Por eso eliminamos todo el riesgo de tu lado con compromisos contractuales claros:
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {guarantees.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <SpotlightCard key={idx} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-black border border-white/10 text-[#C6FF00] shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg text-white uppercase tracking-wide mb-1 flex items-center gap-2">
                          <span>{item.title}</span>
                          <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
                        </h4>
                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
