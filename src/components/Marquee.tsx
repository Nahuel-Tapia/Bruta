import React from 'react';
import { Zap, Sparkles, Smartphone, Code, ShieldCheck, Flame } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { text: "100% CÓDIGO A MEDIDA", icon: Code },
    { text: "DISEÑO BRUTALISTA ÚNICO", icon: Flame },
    { text: "LIGHTHOUSE SCORE 99+", icon: Zap },
    { text: "MOBILE FIRST RESPONSIVE", icon: Smartphone },
    { text: "WHATSAPP AUTOMATION", icon: Sparkles },
    { text: "REACT & NEXT.JS ECOSYSTEM", icon: Code },
    { text: "SIN PLANTILLAS LENTAS", icon: ShieldCheck },
    { text: "ALTA CONVERSIÓN DE VENTAS", icon: Zap },
  ];

  return (
    <div className="w-full bg-[#15161A] border-y border-white/10 py-3.5 overflow-hidden relative select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double array for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00]" />
              <IconComponent className="w-4 h-4 text-[#C6FF00]" />
              <span className="font-display text-sm tracking-wider text-white uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
