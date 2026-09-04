import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal border-t border-white/[0.08] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
{/*  Col 1: Brand & Bio  */}
<div className="space-y-4">
<div className="h-10 flex items-center"><img src="/logo.webp" alt="IPTV Portugal TV Logo" className="h-9 w-auto object-contain" /></div>
<p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
            A IPTV Portugal TV é o serviço de streaming premium de referência em Portugal. Transmissão com estabilidade garantida, milhares de canais em direto e biblioteca VOD atualizada para toda a família.
          </p>
<div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
<span className="inline-flex items-center gap-1 text-emerald-400">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">Cluster Redundante Lisboa/Porto</span>
</span>
</div>
</div>
{/*  Col 2: NAVEGAÇÃO  */}
<div className="space-y-4">
<h4 className="font-display font-bold text-sm tracking-widest text-[#d59858] uppercase">Navegação</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/o-que-e-iptv">O que é IPTV</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/canais-disponiveis">Canais Disponíveis</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/precos">Planos e Preços</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/funcionalidades">Vantagens</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/aplicacoes-iptv">Aplicações IPTV</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/faq">FAQ</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/sobre-nos">Sobre Nós</Link></li>
</ul>
</div>
{/*  Col 3: LEGAL  */}
<div className="space-y-4">
<h4 className="font-display font-bold text-sm tracking-widest text-[#d59858] uppercase">Legal</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/politica-de-privacidade">Política de Privacidade</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/termos-e-condicoes">Termos e Condições</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/politica-de-cookies">Política de Cookies</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href={getWhatsAppUrl(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer">Contacto</Link></li>
</ul>
</div>
{/*  Col 4: PLANOS  */}
<div className="space-y-4">
<h4 className="font-display font-bold text-sm tracking-widest text-[#d59858] uppercase">Planos</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/precos">Trimestral — 20€/3 meses</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/precos">Básico — 44.79€/ano</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/precos">Premium — 69€/ano</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href="/precos">Família — 90€/ano</Link></li>
<li className=""><Link className="hover:text-emerald-400 transition-colors" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">Teste Grátis 24h</Link></li>
</ul>
</div>
</div>
{/*  Bottom Credits Bar  */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p className="">© 2026 IPTV Portugal TV Serviços de Streaming. Todos os direitos reservados. Feito com orgulho para Portugal 🇵🇹</p>
<div className="flex items-center gap-4">
<span className="text-slate-300">MB WAY • Multibanco • Visa • Mastercard • Revolut</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span className="text-emerald-400">4K Ultra HD • 60 FPS</span>
</div>
</div>
</div>
</footer>
  );
}
