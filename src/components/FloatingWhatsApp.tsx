import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "⚡ Quiero cotizar una web",
      message: "Hola Nahuel! Me gustaría cotizar el desarrollo de una web para mi negocio.",
    },
    {
      title: "🔍 Pedir auditoría gratuita",
      message: "Hola Nahuel! Quiero solicitar la auditoría web gratuita para mi negocio.",
    },
    {
      title: "💬 Tengo dudas sobre los planes",
      message: "Hola Nahuel! Tengo una consulta sobre los tiempos de entrega y métodos de pago.",
    },
  ];

  const handleLaunchChat = (customMsg?: string) => {
    const text = customMsg || STUDIO_CONFIG.whatsappMessage;
    const url = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Mini Chat Card Dialog */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-[#15161A] border border-[#C6FF00]/40 p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#0C0D0E] border border-[#C6FF00] flex items-center justify-center font-display text-white text-base">
                  N
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] absolute bottom-0 right-0 border border-black animate-pulse" />
              </div>
              <div>
                <h4 className="font-display text-white text-sm uppercase">Nahuel • Bruta Studio</h4>
                <span className="text-[11px] font-mono text-[#C6FF00] block">
                  🟢 En línea • Respuesta en &lt; 15 min
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#777777] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Bubble */}
          <div className="p-3 rounded-xl bg-[#0C0D0E] border border-white/5 text-xs text-[#A1A1AA] leading-relaxed mb-4">
            ¡Hola! 👋 ¿Buscás crear una web de alto impacto o mejorar tu sitio actual? Elige una opción rápida o escribime directo:
          </div>

          {/* Quick Option Pills */}
          <div className="flex flex-col gap-2 mb-4">
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleLaunchChat(q.message)}
                className="text-left px-3 py-2 rounded-lg bg-[#1F2126] hover:bg-[#C6FF00] hover:text-black text-xs font-mono text-white transition-all flex items-center justify-between group"
              >
                <span>{q.title}</span>
                <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {/* Direct CTA Button */}
          <button
            onClick={() => handleLaunchChat()}
            className="tactile-btn w-full py-2.5 rounded-xl bg-[#C6FF00] text-black font-display text-xs tracking-wider uppercase flex items-center justify-center gap-2 glow-lime-sm"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Abrir WhatsApp Web / App →</span>
          </button>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tactile-btn group flex items-center gap-3 px-4 py-3 rounded-full bg-[#15161A] border border-[#C6FF00]/60 hover:border-[#C6FF00] shadow-2xl shadow-black/80 hover:scale-105 transition-all"
        aria-label="Abrir WhatsApp"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-[#C6FF00] flex items-center justify-center text-black">
            <MessageCircle className="w-4 h-4 fill-black" />
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] absolute -top-0.5 -right-0.5 border border-black animate-ping" />
        </div>

        <div className="hidden sm:flex flex-col items-start pr-1">
          <span className="text-xs font-display text-white uppercase tracking-wide group-hover:text-[#C6FF00] transition-colors">
            ¿Hablamos por WhatsApp?
          </span>
          <span className="text-[10px] font-mono text-[#A1A1AA]">
            Respuesta promedio: &lt; 15 min
          </span>
        </div>
      </button>

    </div>
  );
};
