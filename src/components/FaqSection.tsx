import React, { useState } from 'react';
import { FAQS } from '../data/config';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
            PREGUNTAS <span className="text-zinc-500 dark:text-zinc-400">FRECUENTES.</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 font-normal">
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#15161A] border-zinc-950 dark:border-white/30 shadow-md'
                    : 'bg-white dark:bg-[#101114] border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl text-zinc-950 dark:text-white uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen 
                      ? 'rotate-180 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950' 
                      : 'bg-zinc-100 text-zinc-600 dark:bg-white/10 dark:text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/5 animate-in fade-in duration-200 font-normal">
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
