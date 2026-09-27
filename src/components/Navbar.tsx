import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '../data/config';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Antes/Después', href: '#comparativa' },
    { label: 'Calculadora ROI', href: '#roi' },
    { label: 'Planes', href: '#paquetes' },
    { label: 'Auditoría Gratis', href: '#auditoria' },
    { label: 'GitHub Live', href: '#github' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0C0D0E]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-[#16171A] border border-white/10 flex items-center justify-center group-hover:border-[#C6FF00] transition-colors">
              <span className="font-display text-xl text-[#C6FF00] tracking-tighter">nu</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider text-white group-hover:text-[#C6FF00] transition-colors">
                {STUDIO_CONFIG.studioName}
              </span>
              <span className="text-[10px] tracking-widest text-[#777777] uppercase font-mono">
                DESARROLLO & ESTRATEGIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C6FF00] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live Status Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse"></span>
              <span>Disponibilidad Q2</span>
            </div>

            {/* GitHub Quick Link */}
            <a
              href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#15161A] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#C6FF00] transition-all"
              title="Ver GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#presupuesto"
              className="tactile-btn flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF00] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d8ff33] transition-all glow-lime-sm"
            >
              <span>Cotizar Web</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(STUDIO_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#C6FF00] text-black"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#16171A] border border-white/10 text-[#A1A1AA] hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0D0E]/95 backdrop-blur-xl border-b border-white/10 px-4 py-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse"></span>
              <span>Disponibilidad inmediata</span>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display tracking-wide text-white hover:text-[#C6FF00] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#presupuesto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-md bg-[#C6FF00] text-black font-bold uppercase tracking-wider text-sm glow-lime-sm"
              >
                Cotizar Mi Web →
              </a>
              <a
                href={`https://github.com/${STUDIO_CONFIG.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#15161A] border border-white/10 text-white text-sm"
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
