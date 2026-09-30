import React from 'react';
import { FEATURED_PROJECTS, STUDIO_CONFIG } from '../data/config';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SpotlightCard } from './SpotlightCard';

export const GithubShowcase: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 sm:py-32 bg-transparent relative border-b border-zinc-200/80 dark:border-white/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 mb-4">
              <span className="font-bold">02 / 07</span>
              <span>•</span>
              <span>PORTAFOLIO DE DESARROLLO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              TRABAJOS REALES. <br />
              <span className="text-zinc-500 dark:text-zinc-400">CÓDIGO EN PRODUCCIÓN.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Proyectos reales desarrollados con arquitecturas modernas y código abierto. Sin plantillas prefabricadas ni maquetas ficticias.
          </p>
        </div>

        {/* Minimalist Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {FEATURED_PROJECTS.map((project) => (
            <SpotlightCard key={project.id} className="p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-zinc-200/80 dark:border-white/10 bg-zinc-100 dark:bg-[#0C0D0E]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#0C0D0E]/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-900 dark:text-zinc-200 uppercase tracking-wider shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl text-zinc-950 dark:text-white uppercase tracking-tight mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title.split('|')[0].trim()}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[11px] font-mono text-zinc-700 dark:bg-white/5 dark:border-white/5 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Ver Código</span>
                </a>

                {project.demoUrl && project.demoUrl !== project.githubUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-transparent dark:border-white/10 text-xs font-mono transition-all shadow-xs"
                  >
                    <span>Demo en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Minimalist GitHub Banner CTA */}
        <div className="rounded-2xl bg-zinc-100/70 border border-zinc-200 dark:bg-[#15161A] dark:border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 text-zinc-900 dark:bg-black dark:border-white/10 dark:text-white flex items-center justify-center shrink-0 shadow-xs">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl text-zinc-950 dark:text-white uppercase tracking-tight">
                Repositorios Abiertos en GitHub
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                Explora el historial de commits, arquitectura limpia y código fuente de @{STUDIO_CONFIG.githubUsername}
              </p>
            </div>
          </div>

          <a
            href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white font-mono text-xs tracking-wider uppercase transition-all shrink-0 shadow-xs"
          >
            <span>Ver Perfil en GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
