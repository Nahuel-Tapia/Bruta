import React, { useState } from 'react';
import { FAQS } from '../data/config';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0C0D0E] relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C6FF00]" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            PREGUNTAS <span className="text-[#C6FF00]">FRECUENTES.</span>
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Todo lo que necesitas saber antes de empezar a trabajar con nosotros.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#15161A] border-[#C6FF00]/40 shadow-lg'
                    : 'bg-[#0C0D0E] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full bg-white/5 border border-white/10 text-[#C6FF00] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#C6FF00] text-black' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#A1A1AA] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
