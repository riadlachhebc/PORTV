"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function GlobalCTA() {
  const pathname = usePathname();

  // Pages that already have their own large Call To Action at the bottom
  const excludedPages = ['/', '/precos', '/o-que-e-iptv', '/funcionalidades'];

  if (excludedPages.includes(pathname)) {
    return null;
  }

  return (
    <section className="w-full bg-surface py-20 border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Pronto para cortar o cabo?
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
          Junte-se a milhares de portugueses e desfrute do melhor serviço de IPTV. Experimente primeiro ou escolha o seu plano agora.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">timer</span>
            Pedir Teste Grátis 24h
          </Link>
          <Link href="/precos" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            Ver Planos e Preços
          </Link>
        </div>
      </div>
    </section>
  );
}
