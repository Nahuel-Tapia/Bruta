import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { Menu, X, ArrowUpRight, MessageCircle, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-[#09090B]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/10 py-3.5 shadow-xs' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 dark:bg-[#16171A] dark:border-white/10 flex items-center justify-center group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
              <span className="font-display text-xl text-zinc-950 dark:text-white tracking-tighter">nu</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider text-zinc-950 dark:text-white transition-colors">
                {STUDIO_CONFIG.studioName}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 dark:text-[#777777] uppercase font-mono">
                DESARROLLO & ESTRATEGIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-zinc-950 dark:after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Status Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Disponibilidad Q2</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 dark:bg-[#15161A] dark:hover:bg-white/10 dark:text-zinc-300 dark:border-white/10 transition-all cursor-pointer"
              title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* GitHub Quick Link */}
            <a
              href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 dark:bg-[#15161A] dark:hover:bg-white/10 dark:text-zinc-300 dark:border-white/10 transition-all"
              title="Ver GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#presupuesto"
              className="tactile-btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
            >
              <span>Cotizar Web</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-[#16171A] dark:text-zinc-300 dark:border-white/10"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            <a
              href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(STUDIO_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-[#16171A] dark:border-white/10 dark:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 px-4 py-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 dark:bg-[#15161A] dark:border-white/10 dark:text-zinc-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Disponibilidad inmediata</span>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display tracking-wide text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 py-2 border-b border-zinc-100 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#presupuesto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold uppercase tracking-wider text-sm shadow-xs"
              >
                Cotizar Mi Web →
              </a>
              <a
                href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 dark:bg-[#15161A] dark:border-white/10 dark:text-white text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Ver Mi Perfil de GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
