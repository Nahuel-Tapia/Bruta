import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Quiero cotizar una web",
      message: "Hola Nahuel! Me gustaría cotizar el desarrollo de una web para mi negocio.",
    },
    {
      title: "Tengo dudas sobre los planes",
      message: "Hola Nahuel! Tengo una consulta sobre los tiempos de entrega y métodos de pago.",
    },
    {
      title: "Pedir auditoría de mi sitio",
      message: "Hola Nahuel! Quiero solicitar la auditoría web gratuita para mi negocio.",
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
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-white dark:bg-[#15161A] border border-zinc-200 dark:border-white/10 p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-white/10 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center font-display text-zinc-950 dark:text-white text-base">
                  N
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute bottom-0 right-0 border-2 border-white dark:border-black animate-pulse" />
              </div>
              <div>
                <h4 className="font-display text-zinc-950 dark:text-white text-sm uppercase">Nahuel • Bruta Studio</h4>
                <span className="text-[11px] font-mono text-zinc-500 block">
                  En línea • Respuesta directa
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Bubble */}
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
            ¡Hola! 👋 ¿Buscás crear una web de alto impacto o rediseñar tu sitio actual? Elige una opción o escribime directo:
          </div>

          {/* Quick Option Pills */}
          <div className="flex flex-col gap-2 mb-4">
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleLaunchChat(q.message)}
                className="text-left px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{q.title}</span>
                <Send className="w-3 h-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {/* Direct CTA Button */}
          <button
            onClick={() => handleLaunchChat()}
            className="tactile-btn w-full py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-display text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Abrir WhatsApp Web / App →</span>
          </button>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tactile-btn group flex items-center gap-3 px-4 py-3 rounded-full bg-white text-zinc-950 border border-zinc-300 hover:border-zinc-900 dark:bg-[#15161A] dark:text-white dark:border-white/10 dark:hover:border-white/30 shadow-xl hover:scale-105 transition-all cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 border border-white dark:border-black animate-ping" />
        </div>

        <div className="hidden sm:flex flex-col items-start pr-1">
          <span className="text-xs font-display uppercase tracking-wide">
            ¿Hablamos por WhatsApp?
          </span>
          <span className="text-[10px] font-mono text-zinc-500">
            Respuesta promedio: &lt; 15 min
          </span>
        </div>
      </button>

    </div>
  );
};
