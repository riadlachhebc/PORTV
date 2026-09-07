'use client';
import React, { useState } from 'react';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Pricing() {
  const [devices, setDevices] = useState(1);

  const getPrice = (months: 3 | 6 | 12) => {
    const basePrices = { 3: 29.99, 6: 44.99, 12: 59.99 };
    const total = basePrices[months] * devices;
    const monthly = (total / months).toFixed(2).replace('.', ',');
    const [whole, decimal] = total.toFixed(2).split('.');
    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };
  };

  const p3 = getPrice(3);
  const p6 = getPrice(6);
  const p12 = getPrice(12);

  return (
<section className="w-full py-24 relative" id="planos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Preços Transparentes em Euros</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Preços da Assinatura IPTV Portugal
          </h2>
<p className="text-sm sm:text-base text-slate-300 mt-2">
              Todos os planos incluem acesso instantâneo. Pague de forma segura.
            </p>
            <div className="inline-flex items-center p-1 rounded-2xl bg-white/[0.05] border border-white/[0.08] shadow-xl mt-6">
              <button onClick={() => setDevices(1)} className={`px-5 py-2.5 rounded-xl font-display text-[14px] transition-all ${devices === 1 ? 'font-bold bg-emerald-600 text-white shadow-lg' : 'font-medium text-slate-300 hover:text-white'}`}>
                1 Dispositivo
              </button>
              <button onClick={() => setDevices(2)} className={`px-5 py-2.5 rounded-xl font-display text-[14px] transition-all ${devices === 2 ? 'font-bold bg-emerald-600 text-white shadow-lg' : 'font-medium text-slate-300 hover:text-white'}`}>
                2 Dispositivos
              </button>
              <button onClick={() => setDevices(3)} className={`px-5 py-2.5 rounded-xl font-display text-[14px] transition-all ${devices === 3 ? 'font-bold bg-emerald-600 text-white shadow-lg flex items-center gap-2' : 'font-medium text-slate-300 hover:text-white'}`}>
                3 Dispositivos
              </button>
            </div>
</div>
{/*  3 Pricing Cards  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
{/*  Plan 1: 1 Mês  */}
<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all">
<div>
<div className="mb-4">
<span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Acesso Mensal</span>
<h3 className="font-display font-bold text-2xl text-white mt-1">3 Meses</h3>
<p className="text-xs text-slate-400 mt-1">Ideal para experimentar ou acompanhar um evento específico.</p>
</div>
<div className="my-6">
<div className="flex items-baseline gap-1">
<span className="font-display font-extrabold text-4xl text-white">{p3.whole},{p3.decimal}€</span>
<span className="text-xs text-slate-400 font-medium">/ mês</span>
</div>
<span className="text-[11px] text-slate-400">Faturação trimestral (equivale a {p3.monthly}€ / mês)</span>
</div>
<ul className="space-y-3 text-sm text-slate-300 pt-2 border-t border-white/[0.06]">
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Todos os canais em 4K &amp; Full HD</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Biblioteca Filmes &amp; Séries On-Demand</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Guia TV (EPG) de 7 Dias</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">{devices === 1 ? "1 Dispositivo simultâneo" : devices + " Dispositivos simultâneos"}</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Suporte via WhatsApp</span>
</li>
</ul>
</div>
<div className="pt-8">
<a className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold font-display text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all" href={getWhatsAppUrl(WA_MESSAGES.subscription(3, devices))} target="_blank" rel="noopener noreferrer">
                Subscrever 3 Meses
              </a>
</div>
</div>
{/*  Plan 2: 12 Meses (FEATURED VIP)  */}
<div className="relative glass-panel rounded-3xl p-8 flex flex-col justify-between border-2 border-emerald-500 shadow-glow-emerald bg-charcoal/90 transform lg:-translate-y-3">
{/*  Most Popular Badge  */}
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white font-display font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">star</span>
<span className="">Recomendado • Poupe 45%</span>
</div>
<div>
<div className="mb-4 pt-1">
<span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">Anual VIP</span>
<h3 className="font-display font-bold text-2xl text-white mt-1">12 Meses</h3>
<p className="text-xs text-slate-300 mt-1">A escolha preferida das famílias portuguesas.</p>
</div>
<div className="my-6">
<div className="flex items-baseline gap-1">
<span className="font-display font-extrabold text-4xl text-white">{p12.whole},{p12.decimal}€</span>
<span className="text-xs text-slate-400 font-medium">/ mês</span>
</div>
<span className="text-xs font-semibold text-emerald-400">Faturação anual (equivale a {p12.monthly}€ / mês)</span>
</div>
<ul className="space-y-3 text-sm text-slate-200 pt-2 border-t border-white/[0.08]">
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="font-medium">Servidor VIP com prioridade de débito</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="">Todos os canais em 4K nativo &amp; 60 FPS</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="">Catálogo VIP Filmes &amp; Séries completo</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="">Anti-Freeze 9.0 dedicado</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="">Troca gratuita de dispositivo a qualquer altura</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
<span className="font-medium text-emerald-300">Apoio prioritário por WhatsApp</span>
</li>
</ul>
</div>
<div className="pt-8">
<a className="w-full inline-flex items-center justify-center py-4 px-4 rounded-xl text-sm font-bold font-display text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all duration-300 hover:scale-[1.02]" href={getWhatsAppUrl(WA_MESSAGES.subscription(12, devices))} target="_blank" rel="noopener noreferrer">
                Aderir ao Plano Anual VIP
              </a>
</div>
</div>
{/*  Plan 3: 6 Meses  */}
<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all">
<div>
<div className="mb-4">
<span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Semestral</span>
<h3 className="font-display font-bold text-2xl text-white mt-1">6 Meses</h3>
<p className="text-xs text-slate-400 mt-1">Excelente equilíbrio de poupança e conveniência.</p>
</div>
<div className="my-6">
<div className="flex items-baseline gap-1">
<span className="font-display font-extrabold text-4xl text-white">{p6.whole},{p6.decimal}€</span>
<span className="text-xs text-slate-400 font-medium">/ mês</span>
</div>
<span className="text-[11px] text-slate-400">Faturação semestral (equivale a {p6.monthly}€ / mês)</span>
</div>
<ul className="space-y-3 text-sm text-slate-300 pt-2 border-t border-white/[0.06]">
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Todos os canais em 4K &amp; Full HD</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Biblioteca Filmes &amp; Séries On-Demand</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Guia TV (EPG) de 7 Dias</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Tecnologia Anti-Freeze ativada</span>
</li>
<li className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span className="">Suporte via WhatsApp</span>
</li>
</ul>
</div>
<div className="pt-8">
<a className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold font-display text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all" href={getWhatsAppUrl(WA_MESSAGES.subscription(6, devices))} target="_blank" rel="noopener noreferrer">
                Subscrever 6 Meses
              </a>
</div>
</div>
</div>
{/*  Payment Badges / Trust Footnote  */}
<div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 text-center">
<span className="inline-flex items-center gap-1.5 text-slate-300">
<span className="material-symbols-outlined text-emerald-400 text-[16px]">lock</span>
<span className="">Pagamento Encriptado SSL de 256 bits</span>
</span>
<span className="hidden sm:inline text-slate-600">•</span>
<span className="font-semibold text-slate-200">MB WAY • Entidade e Referência Multibanco • Visa / Mastercard • Revolut</span>
<span className="hidden sm:inline text-slate-600">•</span>
<span className="text-emerald-400 font-semibold">Ativação Imediata</span>
</div>
</div>
</section>
  );
}