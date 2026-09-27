import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import confetti from 'canvas-confetti';
import { Search, Send, CheckCircle2, Sparkles, Clock, Check } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const FreeAuditSection: React.FC = () => {
  const [siteUrl, setSiteUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [mainIssue, setMainIssue] = useState('lenta');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteUrl.trim()) return;

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#C6FF00', '#FFFFFF', '#303030'],
    });

    const issuesMap: Record<string, string> = {
      lenta: 'Es muy lenta en celulares',
      ventas: 'No genera consultas ni ventas',
      diseño: 'El diseño se ve viejo y anticuado',
      rediseño: 'Quiero rediseñarla por completo',
    };

    const text = `Hola Nahuel! Quiero solicitar la AUDITORÍA WEB GRATUITA para mi negocio:\n\n` +
      `🌐 Mi sitio / Instagram: ${siteUrl}\n` +
      `📱 Mi WhatsApp: ${phone || 'Mismo número'}\n` +
      `⚠️ Principal problema: ${issuesMap[mainIssue] || mainIssue}\n\n` +
      `¿Podrías revisar qué está frenando mis ventas y cómo mejorarlo?`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }, 400);
  };

  return (
    <section id="auditoria" className="py-24 bg-[#0C0D0E] relative border-b border-white/10 scroll-mt-16">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SpotlightCard className="p-8 sm:p-12 lg:p-16 border-[#C6FF00]/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D0E] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
                <span className="text-[#C6FF00] font-bold">100% GRATIS</span>
                <span>•</span>
                <span>SIN COMPROMISO</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight leading-none mb-4">
                ¿YA TENÉS WEB PERO <br />
                <span className="text-[#C6FF00]">NO TE TRAE CLIENTES?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                Pegá el enlace de tu web actual (o de tu Instagram si no tenés sitio aún). Analizamos tu velocidad de carga, tu estructura visual y te enviamos <strong className="text-white">un video personalizado de 3 minutos</strong> con los 3 errores críticos que están espantando a tus clientes.
              </p>

              {/* Benefit badges */}
              <div className="flex flex-col gap-2.5 text-xs font-mono text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                  <span>Auditoría de Core Web Vitals en Google PageSpeed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                  <span>Diagnóstico de UX y fricción de compra en celulares</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C6FF00] shrink-0" />
                  <span>Respuesta rápida en menos de 2 horas hábiles</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#0C0D0E] border border-white/10 flex flex-col gap-4 shadow-xl">
                
                <div>
                  <label className="text-xs font-mono text-[#777777] uppercase block mb-1.5">
                    1. URL DE TU SITIO WEB O INSTAGRAM *
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      placeholder="ejemplo.com o instagram.com/tu-marca"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#15161A] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#777777] uppercase block mb-1.5">
                    2. TU WHATSAPP (DONDE ENVIARTE EL VIDEO) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 0000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#15161A] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#777777] uppercase block mb-1.5">
                    3. ¿QUÉ ES LO QUE MÁS TE PREOCUPA HOY?
                  </label>
                  <select
                    value={mainIssue}
                    onChange={(e) => setMainIssue(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#15161A] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                  >
                    <option value="lenta">Tarda mucho en cargar en celulares</option>
                    <option value="ventas">Recibo visitas pero nadie escribe ni compra</option>
                    <option value="diseño">El diseño luce viejo comparado con mi competencia</option>
                    <option value="rediseño">Quiero un rediseño total con identidad propia</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="tactile-btn mt-2 w-full py-4 rounded-xl bg-[#C6FF00] text-black font-display text-base tracking-wider uppercase hover:bg-[#d8ff33] flex items-center justify-center gap-2 glow-lime shadow-xl"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>¡ABRIENDO WHATSAPP...!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-black" />
                      <span>PEDIR MI AUDITORÍA GRATIS →</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center font-mono text-[#777777]">
                  🔒 Cero spam. Solo un análisis técnico honesto en video.
                </p>

              </form>
            </div>

          </div>

        </SpotlightCard>

      </div>
    </section>
  );
};
