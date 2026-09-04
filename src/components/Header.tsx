"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/[0.04] transition-colors ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
      isActive ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
    }`;
  };

  return (
    <>
      <div className="w-full bg-charcoal/90 border-b border-white/[0.06] text-center py-2 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-[11px] tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Servidores em Lisboa & Porto
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="hidden sm:inline text-slate-300">Transmissão 4K nativa com tecnologia Anti-Freeze 9.0 dedicada ao público português.</span>
        </div>
      </div>

      {/* STICKY MAIN HEADER */}
      <header className="sticky top-0 left-0 right-0 w-full z-50 bg-obsidian/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link className="flex items-center gap-3 shrink-0 group focus:outline-none" href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="h-10 sm:h-11 flex items-center">
              <img src="/logo.webp" alt="IPTV Portugal TV Logo" className="h-9 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link className={getLinkClass('/')} href="/">Início</Link>
            <Link className={getLinkClass('/funcionalidades')} href="/funcionalidades">Funcionalidades</Link>
            <Link className={getLinkClass('/aplicacoes-iptv')} href="/aplicacoes-iptv">Aplicações</Link>
            <Link className={getLinkClass('/precos')} href="/precos">Preços</Link>
            <Link className={getLinkClass('/blog')} href="/blog">Blog</Link>
            <Link className={getLinkClass('/suporte')} href="/suporte">Suporte</Link>
          </nav>

          {/* Header CTAs & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link className="hidden sm:inline-flex relative group items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-display text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all duration-300 active:scale-[0.98]" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
              <span className="">Começar Teste Grátis</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </Link>

            <Link className="sm:hidden relative group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-display text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all duration-300 active:scale-[0.98]" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
              <span className="">Teste Grátis</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-obsidian border-b border-white/[0.08] shadow-2xl">
            <nav className="flex flex-col p-4 gap-2">
              <Link className={getMobileLinkClass('/')} href="/" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
              <Link className={getMobileLinkClass('/funcionalidades')} href="/funcionalidades" onClick={() => setIsMobileMenuOpen(false)}>Funcionalidades</Link>
              <Link className={getMobileLinkClass('/aplicacoes-iptv')} href="/aplicacoes-iptv" onClick={() => setIsMobileMenuOpen(false)}>Aplicações</Link>
              <Link className={getMobileLinkClass('/precos')} href="/precos" onClick={() => setIsMobileMenuOpen(false)}>Preços</Link>
              <Link className={getMobileLinkClass('/blog')} href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link className={getMobileLinkClass('/suporte')} href="/suporte" onClick={() => setIsMobileMenuOpen(false)}>Suporte</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
