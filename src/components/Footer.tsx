import React from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-transparent pt-20 pb-12 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Final Conversion Banner */}
        <div className="rounded-3xl bg-zinc-950 text-white dark:bg-[#121316] border border-zinc-800 dark:border-white/10 p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4">
                <span className="font-bold">BRUTA STUDIO</span>
                <span>•</span>
                <span>CONTACTO DIRECTO</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none mb-6">
                ¿HACEMOS LA WEB DE <br />
                <span className="text-zinc-400">TU NEGOCIO?</span>
              </h2>

              <p className="text-zinc-400 text-base sm:text-lg mb-6 max-w-xl font-normal">
                Dejá de perder potenciales clientes con sitios lentos o perfiles de redes desactualizados. Creemos juntos una plataforma que posicione tu marca y multiplique tus ventas.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Diseño 100% personalizado",
                  "Adaptada a celular (Responsive)",
                  "Desarrollo con código a medida",
                  "Integración con WhatsApp",
                  "Carga en menos de 1 segundo",
                  "Dominio y certificado SSL seguro",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(STUDIO_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-display text-xl uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ESCRIBINOS POR WHATSAPP →</span>
                </a>

                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="tactile-btn flex items-center gap-2 px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>{STUDIO_CONFIG.email}</span>
                </a>
              </div>
            </div>

            {/* Right Graphic/Isotype */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                  <span className="font-display text-8xl sm:text-9xl text-white tracking-tighter select-none">
                    nu
                  </span>
                </div>
                <div className="absolute -bottom-3 -right-3 px-4 py-1.5 rounded-full bg-white text-zinc-950 font-mono text-xs font-bold shadow-md">
                  {STUDIO_CONFIG.studioName}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Meta & Links */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-display text-xl text-zinc-950 dark:text-white tracking-wider">
              {STUDIO_CONFIG.studioName}
            </span>
            <span className="hidden sm:inline text-zinc-300 dark:text-white/20">|</span>
            <span className="text-xs font-mono text-zinc-500">
              DISEÑO & DESARROLLO WEB FREELANCE
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={STUDIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={STUDIO_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Location */}
          <div className="text-xs font-mono text-zinc-500 text-center md:text-right">
            <span>© {new Date().getFullYear()} {STUDIO_CONFIG.studioName}. Todos los derechos reservados.</span>
            <div className="mt-1 text-[11px] text-zinc-500">
              Hecho con código limpio, React & Tailwind CSS
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
