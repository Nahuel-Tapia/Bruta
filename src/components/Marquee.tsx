import React from 'react';
import { Zap, Sparkles, Smartphone, Code, ShieldCheck, Flame } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { text: "100% CÓDIGO A MEDIDA", icon: Code },
    { text: "DISEÑO EDITORIAL & BRUTALISTA", icon: Flame },
    { text: "LIGHTHOUSE SCORE 99+", icon: Zap },
    { text: "MOBILE FIRST RESPONSIVE", icon: Smartphone },
    { text: "WHATSAPP AUTOMATION", icon: Sparkles },
    { text: "REACT 19 & NEXT.JS ECOSYSTEM", icon: Code },
    { text: "SIN PLANTILLAS LENTAS", icon: ShieldCheck },
    { text: "ALTA CONVERSIÓN DE VENTAS", icon: Zap },
  ];

  return (
    <div className="w-full bg-zinc-100/70 dark:bg-[#121316] border-y border-zinc-200/80 dark:border-white/10 py-3.5 overflow-hidden relative select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double array for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <IconComponent className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              <span className="font-display text-sm tracking-wider text-zinc-900 dark:text-zinc-200 uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
