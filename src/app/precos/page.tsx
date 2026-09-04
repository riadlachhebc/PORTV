// @ts-nocheck
'use client';
import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Page() {
  const [devices, setDevices] = useState(1);

  const getPrice = (months) => {
    const basePrices = {
      3: 29.99,
      6: 44.99,
      12: 59.99
    };
    const total = basePrices[months] * devices;
    const monthly = (total / months).toFixed(2).replace('.', ',');
    const [whole, decimal] = total.toFixed(2).split('.');
    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };
  };

  const p3 = getPrice(3);
  const p6 = getPrice(6);
  const p12 = getPrice(12);

  return (
    <>

{/*  Main Navigation Header  */}

{/*  Page Main Content  */}
<main className="w-full pt-20 bg-surface">
<div className="flex flex-col w-full">
{/*  Hero Header Section with Ambient Glow  */}
<section className="relative w-full px-gutter-mobile lg:px-gutter-desktop pt-16 pb-14 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 blur-[130px] pointer-events-none rounded-full"></div>
<div className="absolute top-10 right-1/4 w-[280px] h-[280px] bg-secondary/10 blur-[120px] pointer-events-none rounded-full"></div>
<div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center">
{/*  Pill Tag  */}
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high/80 border border-white/[0.08] shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-[12px] font-semibold text-primary tracking-wider uppercase">Preços Transparentes • Sem Fidelização</span>
</div>
{/*  Main Title  */}
<h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl">
            Escolha o plano ideal <br className="hidden sm:inline"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">para o seu entretenimento.</span>
</h1>
<p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl mt-4 mb-10 leading-relaxed">
            Acesso ilimitado a todos os canais desportivos, filmes de estreia e séries em 4K UHD. Ativação imediata em menos de 10 minutos via WhatsApp ou e-mail.
          </p>
{/*  Billing Period Switcher  */}
<div className="inline-flex items-center p-1 rounded-2xl bg-surface-container-low border border-white/[0.08] shadow-xl mt-4">
            <button onClick={() => setDevices(1)} className={`px-5 py-2.5 rounded-xl font-label-md text-[14px] transition-all ${devices === 1 ? 'font-bold bg-primary text-on-primary shadow-lg' : 'font-medium text-on-surface-variant hover:text-white'}`}>
              1 Dispositivo
            </button>
            <button onClick={() => setDevices(2)} className={`px-5 py-2.5 rounded-xl font-label-md text-[14px] transition-all ${devices === 2 ? 'font-bold bg-primary text-on-primary shadow-lg' : 'font-medium text-on-surface-variant hover:text-white'}`}>
              2 Dispositivos
            </button>
            <button onClick={() => setDevices(3)} className={`px-5 py-2.5 rounded-xl font-label-md text-[14px] transition-all ${devices === 3 ? 'font-bold bg-primary text-on-primary shadow-lg flex items-center gap-2' : 'font-medium text-on-surface-variant hover:text-white'}`}>
              3 Dispositivos
            </button>
          </div>
</div>
</section>
{/*  Pricing Cards Bento / Grid  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
{/*  CARD 1: 3 Meses  */}
<div className="obsidian-card rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1">
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-md text-xl font-bold text-white">3 Meses</h3>
<p className="text-xs text-on-surface-variant mt-0.5">Flexibilidade trimestral</p>
</div>
<span className="font-label-sm text-xs font-semibold text-slate-300 bg-surface-container-highest/80 border border-white/[0.06] px-3 py-1 rounded-full">Trimestral</span>
</div>
<p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">
                Excelente para testar a estabilidade do serviço durante as fases decisivas da temporada sem compromissos longos.
              </p>
{/*  Price Box  */}
<div className="py-2 border-y border-white/[0.06]">
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-5xl font-extrabold text-white tracking-tight">{p3.whole}</span>
<span className="text-2xl font-bold text-white">,{p3.decimal}€</span>
<span className="font-body-sm text-sm text-on-surface-variant ml-1 font-normal">/ total</span>
</div>
<p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  Faturação trimestral (equivale a {p3.monthly}€ / mês)
                </p>
</div>
{/*  Features  */}
<div className="space-y-3.5 text-[14px] text-slate-200">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>+18.000 Canais de TV em Direto</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>+60.000 Filmes e Séries (VOD em 4K)</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Todos os canais de Desporto em Direto</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Qualidade Full HD &amp; 4K Ultra HD</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>{devices === 1 ? '1 Conexão simultânea' : devices + ' Conexões simultâneas'}</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Guia TV Eletrónico (EPG 7 dias)</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-slate-400 text-xl">support_agent</span>
<span>Apoio standard por WhatsApp</span>
</div>
</div>
</div>
{/*  CTA Button  */}
<div className="pt-8">
<a className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-label-md text-[15px] font-semibold bg-surface-container-high text-white hover:bg-surface-bright transition-all border border-white/[0.08]" href={getWhatsAppUrl(WA_MESSAGES.subscription(3, typeof devices !== "undefined" ? devices : 1))} target="_blank" rel="noopener noreferrer">
                Subscrever 3 Meses
              </a>
</div>
</div>
{/*  CARD 2: 6 Meses  */}
<div className="obsidian-card rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1">
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-md text-xl font-bold text-white">6 Meses</h3>
<p className="text-xs text-on-surface-variant mt-0.5">Semestre equilibrado</p>
</div>
<span className="font-label-sm text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">Poupe 30€</span>
</div>
<p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">
                A harmonia perfeita entre poupança económica e total estabilidade de servidor para não perder nenhum evento.
              </p>
{/*  Price Box  */}
<div className="py-2 border-y border-white/[0.06]">
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-5xl font-extrabold text-white tracking-tight">{p6.whole}</span>
<span className="text-2xl font-bold text-white">,{p6.decimal}€</span>
<span className="font-body-sm text-sm text-on-surface-variant ml-1 font-normal">/ total</span>
</div>
<p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Faturação semestral única de 59,99€
                </p>
</div>
{/*  Features  */}
<div className="space-y-3.5 text-[14px] text-slate-200">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="font-semibold text-white">Inclui tudo do plano de 3 Meses</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">bolt</span>
<span>Servidores VIP de Alta Velocidade</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">update</span>
<span>Atualizações automáticas diárias de listas</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>{devices === 1 ? '1 Conexão simultânea' : devices + ' Conexões simultâneas'} de máxima estabilidade</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">sports_soccer</span>
<span>Todos os Campeonatos Europeus em direto</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">verified</span>
<span>Tecnologia Anti-Buffering HLS adaptativo</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<span className="material-symbols-outlined text-primary text-xl">support_agent</span>
<span>Apoio prioritário 7 dias por semana</span>
</div>
</div>
</div>
{/*  CTA Button  */}
<div className="pt-8">
<a className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-label-md text-[15px] font-semibold bg-surface-container-high text-white hover:bg-surface-bright transition-all border border-white/[0.08]" href={getWhatsAppUrl(WA_MESSAGES.subscription(6, typeof devices !== "undefined" ? devices : 1))} target="_blank" rel="noopener noreferrer">
                Subscrever 6 Meses
              </a>
</div>
</div>
{/*  CARD 3: 12 Meses (DESTAQUE / MAIS POPULAR)  */}
<div className="obsidian-highlight-card rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2">
{/*  Top Light Ambient  */}
<div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="space-y-6 relative z-10">
{/*  Badge Row  */}
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-white font-label-sm text-[11px] font-extrabold tracking-wider uppercase shadow-sm">
<span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  Mais Popular • Melhor Escolha
                </div>
<span className="font-label-sm text-xs font-bold text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
                  Poupe 80€+
                </span>
</div>
{/*  Title & Tagline  */}
<div>
<div className="flex items-center justify-between">
<h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-white">12 Meses</h3>
<span className="font-label-sm text-xs text-amber-300 font-semibold flex items-center gap-1 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
<span className="material-symbols-outlined text-[15px]">star</span> Experiência VIP
                  </span>
</div>
<p className="font-body-sm text-[14px] text-slate-300 mt-2 leading-relaxed">
                  A experiência de entretenimento total com máxima fidelidade gráfica, 2 conexões simultâneas e prioridade de tráfego.
                </p>
</div>
{/*  Price Box  */}
<div className="py-2 border-y border-primary/20">
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-5xl font-extrabold text-primary tracking-tight">{p12.whole}</span>
<span className="text-2xl font-bold text-primary">,{p12.decimal}€</span>
<span className="font-body-sm text-sm text-slate-300 ml-1 font-normal">/ total</span>
</div>
<p className="text-xs text-emerald-300/90 mt-1.5 flex items-center gap-1.5 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Faturação anual (equivale a {p12.monthly}€ / mês)
                </p>
</div>
{/*  Features  */}
<div className="space-y-3.5 text-[14px] text-white">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">verified</span>
<span className="font-bold text-white">Acesso ilimitado 4K UHD + Dolby Atmos 50 FPS</span>
</div>
<div className="flex items-center gap-3 text-emerald-300 font-semibold bg-emerald-950/40 p-2 rounded-xl border border-primary/20">
<span className="material-symbols-outlined text-primary text-xl">devices</span>
<span>{devices === 1 ? '1 Conexão simultânea' : devices + ' Conexões simultâneas'} (Partilha de Casa)</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">shield</span>
<span>Servidores VIP Dedicados Anti-Freeze V4</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">lock_open</span>
<span>Todos os canais desportivos e filmes sem limites</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">rocket_launch</span>
<span>Atualizações VOD diárias com estreias de cinema</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">support_agent</span>
<span>Apoio VIP Dedicado 24/7 com resposta prioritária</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<span className="material-symbols-outlined text-primary text-xl">sync_saved_locally</span>
<span>Garantia de continuidade e reposição total</span>
</div>
</div>
</div>
{/*  CTA Button  */}
<div className="pt-8 relative z-10">
<a className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl font-label-md text-[16px] font-bold bg-gradient-to-r from-emerald-500 via-primary to-teal-400 text-slate-950 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(16,185,129,0.45)]" href={getWhatsAppUrl(WA_MESSAGES.subscription(12, typeof devices !== "undefined" ? devices : 1))} target="_blank" rel="noopener noreferrer">
                Começar com Desconto Anual
              </a>
</div>
</div>
</div>
</section>
{/*  Included in All Subscriptions (6 Value Propositions)  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[1440px] mx-auto obsidian-card rounded-3xl p-8 lg:p-12 space-y-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.08] pb-8">
<div>
<div className="inline-flex items-center gap-2 font-label-sm text-xs font-bold text-primary uppercase tracking-widest mb-2">
<span className="material-symbols-outlined text-sm">verified</span>
<span>Transparência e Qualidade Garantida</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white tracking-tight">
                O que está incluído em todas as subscrições:
              </h2>
</div>
<div className="inline-flex items-center gap-2.5 bg-surface-container-high/80 px-4 py-2 rounded-xl border border-white/[0.06] text-xs font-semibold text-slate-200">
<span className="material-symbols-outlined text-primary text-base">timer</span>
<span>Ativação em menos de 10 min • Suporte 100% PT-PT</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Item 1  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">live_tv</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Grelha Completa Sem Bloqueios</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Acesso imediato a canais de desporto nacional e internacional, canais generalistas e canais temáticos sem restrições territoriais.
                </p>
</div>
</div>
{/*  Item 2  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">movie</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Catálogo VOD Atualizado</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Mais de 60.000 títulos com legendas em português de Portugal e dobragens, atualizados diariamente com lançamentos de cinema.
                </p>
</div>
</div>
{/*  Item 3  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">devices</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Compatibilidade Total</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Compatível com Smart TV (LG, Samsung, Android TV), Fire TV Stick, Apple TV, MAG, Box Android, smartphones e computadores.
                </p>
</div>
</div>
{/*  Item 4  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">calendar_month</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Guia TV (EPG) em Tempo Real</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Programação semanal precisa e atualizada ao minuto para consultar horários e sinopses sem recorrer a fontes externas.
                </p>
</div>
</div>
{/*  Item 5  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">bolt</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Ativação em &lt; 10 Minutos</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Envio automático de credenciais Xtream Codes e links M3U diretamente pelo WhatsApp ou e-mail logo após confirmação bancária.
                </p>
</div>
</div>
{/*  Item 6  */}
<div className="p-6 rounded-2xl bg-surface-container/60 border border-white/[0.05] flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-300">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-white">Garantia 7 Dias de Devolução</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-1.5 leading-relaxed">
                  Se por qualquer motivo o serviço não corresponder às suas expetativas, reembolsamos 100% do valor sem complicações.
                </p>
</div>
</div>
</div>
</div>
</section>
{/*  Detailed Feature Comparison Table  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[1440px] mx-auto">
<div className="text-center mb-12">
<h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comparação detalhada de funcionalidades
            </h2>
<p className="font-body-md text-base text-on-surface-variant mt-2 max-w-xl mx-auto">
              Analise detalhadamente todos os recursos incluídos em cada período contratual.
            </p>
</div>
<div className="overflow-x-auto rounded-2xl border border-white/[0.08] shadow-2xl bg-surface-container-low">
<table className="w-full text-left font-body-sm text-sm border-collapse min-w-[640px]">
<thead>
<tr className="bg-surface-container border-b border-white/[0.08]">
<th className="py-5 px-6 font-bold text-slate-200 w-2/5">Funcionalidade</th>
<th className="py-5 px-6 text-center font-bold text-slate-300 w-1/5">3 Meses</th>
<th className="py-5 px-6 text-center font-bold text-slate-300 w-1/5">6 Meses</th>
<th className="py-5 px-6 text-center font-bold text-primary bg-emerald-950/30 border-x border-primary/20 w-1/5">
<span className="block text-primary">12 Meses</span>
<span className="text-[11px] font-normal text-emerald-400/80">Recomendado</span>
</th>
</tr>
</thead>
<tbody className="divide-y divide-white/[0.04]">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 font-medium text-white">Canais Nacionais e Internacionais em Direto</td>
<td className="py-4 px-6 text-center text-on-surface-variant">+18.000</td>
<td className="py-4 px-6 text-center text-on-surface-variant">+18.000</td>
<td className="py-4 px-6 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">+18.000 (Canais VIP)</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
<td className="py-4 px-6 font-medium text-white">Filmes e Séries VOD Atualizados</td>
<td className="py-4 px-6 text-center text-on-surface-variant">+60.000</td>
<td className="py-4 px-6 text-center text-on-surface-variant">+60.000</td>
<td className="py-4 px-6 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">+60.000 (Lançamentos Semanais)</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 font-medium text-white">Resolução e Frame Rate</td>
<td className="py-4 px-6 text-center text-on-surface-variant">Full HD &amp; 4K</td>
<td className="py-4 px-6 text-center text-on-surface-variant">Full HD &amp; 4K</td>
<td className="py-4 px-6 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">4K Ultra HD + 50 FPS HDR</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
<td className="py-4 px-6 font-medium text-white">Conexões Simultâneas</td>
<td className="py-4 px-6 text-center text-on-surface-variant">1 Conexão</td>
<td className="py-4 px-6 text-center text-on-surface-variant">1 Conexão</td>
<td className="py-4 px-6 text-center font-bold text-primary bg-emerald-950/20 border-x border-primary/20">{devices === 1 ? '1 Conexão simultânea' : devices + ' Conexões simultâneas'}</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 font-medium text-white">Guia de TV Eletrónico (EPG PT-PT)</td>
<td className="py-4 px-6 text-center text-primary"><span className="material-symbols-outlined text-lg">check</span></td>
<td className="py-4 px-6 text-center text-primary"><span className="material-symbols-outlined text-lg">check</span></td>
<td className="py-4 px-6 text-center text-primary font-bold bg-emerald-950/20 border-x border-primary/20"><span className="material-symbols-outlined text-lg">check</span></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
<td className="py-4 px-6 font-medium text-white">Tecnologia de Servidor &amp; Anti-Freeze</td>
<td className="py-4 px-6 text-center text-on-surface-variant">Standard Balanceado</td>
<td className="py-4 px-6 text-center text-on-surface-variant">Avançado VIP</td>
<td className="py-4 px-6 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">Ultra Anti-Freeze V4 Dedicado</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 font-medium text-white">Canais de Desporto Premium</td>
<td className="py-4 px-6 text-center text-primary"><span className="material-symbols-outlined text-lg">check</span></td>
<td className="py-4 px-6 text-center text-primary"><span className="material-symbols-outlined text-lg">check</span></td>
<td className="py-4 px-6 text-center text-primary font-bold bg-emerald-950/20 border-x border-primary/20"><span className="material-symbols-outlined text-lg">check</span></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
<td className="py-4 px-6 font-medium text-white">Apoio ao Cliente e Ativação</td>
<td className="py-4 px-6 text-center text-on-surface-variant">WhatsApp Regular</td>
<td className="py-4 px-6 text-center text-on-surface-variant">WhatsApp Prioritário</td>
<td className="py-4 px-6 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">WhatsApp VIP 24/7 Dedicado</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 font-medium text-white">Garantia de Satisfação Total</td>
<td className="py-4 px-6 text-center text-on-surface-variant">7 Dias</td>
<td className="py-4 px-6 text-center text-on-surface-variant">7 Dias</td>
<td className="py-4 px-6 text-center font-bold text-emerald-300 bg-emerald-950/20 border-x border-primary/20">7 Dias (Devolução 100%)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Trust & Portuguese Payment Gateways Section  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[1440px] mx-auto obsidian-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
{/*  Left Details  */}
<div className="lg:col-span-7 space-y-6">
<div>
<div className="inline-flex items-center gap-2 font-label-sm text-xs font-bold text-primary uppercase tracking-widest mb-2">
<span className="material-symbols-outlined text-base">lock</span>
<span>Segurança Bancária Certificada</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Pagamento 100% Seguro e Sem Surpresas em Portugal 🇵🇹
                </h2>
<p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                  Sabemos o quanto valoriza a comodidade e a privacidade. Na IPTV Portugal TV disponibilizamos os métodos oficiais e mais seguros do mercado português, sem débitos diretos automáticos.
                </p>
</div>
{/*  Payment Methods Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">MB WAY</span>
<span className="material-symbols-outlined text-primary text-xl">smartphone</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">Aprovação imediata no telemóvel</p>
</div>
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">Multibanco</span>
<span className="material-symbols-outlined text-primary text-xl">account_balance</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">Entidade e Referência oficiais</p>
</div>
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">Cartões</span>
<span className="material-symbols-outlined text-primary text-xl">credit_card</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">Visa, Mastercard e Revolut</p>
</div>
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">PayPal</span>
<span className="material-symbols-outlined text-primary text-xl">verified_user</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">Proteção total ao comprador</p>
</div>
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">Cripto</span>
<span className="material-symbols-outlined text-primary text-xl">currency_bitcoin</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">USDT, BTC e ETH com total privacidade</p>
</div>
<div className="p-4 rounded-xl bg-surface-container/70 border border-white/[0.06] hover:border-primary/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-bold text-white text-base">IBAN PT</span>
<span className="material-symbols-outlined text-primary text-xl">send</span>
</div>
<p className="text-xs text-on-surface-variant mt-1.5">Transferência SEPA Imediata</p>
</div>
</div>
</div>
{/*  Right: 7-Day Moneyback Badge Card  */}
<div className="lg:col-span-5">
<div className="rounded-2xl bg-surface-container/90 border border-white/[0.08] p-8 text-center flex flex-col items-center shadow-xl">
<div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-3xl">workspace_premium</span>
</div>
<h3 className="font-headline-md text-xl font-bold text-white">Garantia Incondicional de 7 Dias</h3>
<p className="font-body-sm text-[13.5px] text-on-surface-variant mt-2 mb-6 leading-relaxed">
                  Experimente qualquer plano sem riscos. Se nos primeiros 7 dias não estiver satisfeito com a rapidez, estabilidade e catálogo, garantimos a devolução do seu valor sem burocracias.
                </p>
<div className="w-full py-3 px-4 rounded-xl bg-surface-container-high/80 border border-white/[0.06] flex items-center justify-center gap-2 text-xs font-semibold text-primary">
<span className="material-symbols-outlined text-base">check_circle</span>
<span>Reembolso direto sem questionários</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[920px] mx-auto">
<div className="text-center mb-10">
<span className="font-label-sm text-xs font-bold text-primary uppercase tracking-widest">Esclarecimento Imediato</span>
<h2 className="font-headline-xl text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Perguntas Frequentes sobre Preços
            </h2>
<p className="font-body-md text-sm text-on-surface-variant mt-2">
              Respostas claras às dúvidas mais frequentes antes de subscrever.
            </p>
</div>
<div className="space-y-3.5" id="pricing-faq-list">
<div className="obsidian-card rounded-2xl overflow-hidden transition-all duration-200">
<button className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-base font-semibold text-white hover:text-primary transition-colors" data-onclick="toggleFaq(this)" type="button">
<span>Como recebo os meus dados de acesso após efetuar o pagamento?</span>
<span className="material-symbols-outlined faq-icon transition-transform duration-300 text-slate-400">expand_more</span>
</button>
<div className="faq-content hidden px-6 pb-6 font-body-sm text-[14px] text-on-surface-variant leading-relaxed border-t border-white/[0.04] pt-4">
                Assim que o pagamento for concluído (instantâneo por MB WAY ou Cartão), o nosso sistema gera e envia automaticamente para o seu e-mail e WhatsApp os dados de acesso (Utilizador, Senha, URL do Servidor e linha M3U), acompanhados por manuais simples passo a passo para a sua TV ou telemóvel.
              </div>
</div>
<div className="obsidian-card rounded-2xl overflow-hidden transition-all duration-200">
<button className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-base font-semibold text-white hover:text-primary transition-colors" data-onclick="toggleFaq(this)" type="button">
<span>Posso pagar diretamente por MB WAY através do telemóvel?</span>
<span className="material-symbols-outlined faq-icon transition-transform duration-300 text-slate-400">expand_more</span>
</button>
<div className="faq-content hidden px-6 pb-6 font-body-sm text-[14px] text-on-surface-variant leading-relaxed border-t border-white/[0.04] pt-4">
                Sim! O MB WAY é o método mais rápido e escolhido por mais de 85% dos nossos utilizadores em Portugal. Basta indicar o seu contacto telefónico no checkout para receber de imediato o pedido de confirmação na aplicação do seu banco.
              </div>
</div>
<div className="obsidian-card rounded-2xl overflow-hidden transition-all duration-200">
<button className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-base font-semibold text-white hover:text-primary transition-colors" data-onclick="toggleFaq(this)" type="button">
<span>Existe algum período de fidelização obrigatório?</span>
<span className="material-symbols-outlined faq-icon transition-transform duration-300 text-slate-400">expand_more</span>
</button>
<div className="faq-content hidden px-6 pb-6 font-body-sm text-[14px] text-on-surface-variant leading-relaxed border-t border-white/[0.04] pt-4">
                Não, nunca. Todos os planos da IPTV Portugal TV são 100% pré-pagos e sem qualquer fidelização. Não renovamos automaticamente nem realizamos débitos surpresa na sua conta. Quando o período terminar, decide se pretende continuar.
              </div>
</div>
<div className="obsidian-card rounded-2xl overflow-hidden transition-all duration-200">
<button className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-base font-semibold text-white hover:text-primary transition-colors" data-onclick="toggleFaq(this)" type="button">
<span>Posso renovar antes do termo do plano sem perder dias?</span>
<span className="material-symbols-outlined faq-icon transition-transform duration-300 text-slate-400">expand_more</span>
</button>
<div className="faq-content hidden px-6 pb-6 font-body-sm text-[14px] text-on-surface-variant leading-relaxed border-t border-white/[0.04] pt-4">
                Sim, com total conveniência. Os novos meses contratados são somados diretamente ao saldo da sua conta atual, sem alterar utilizador ou lista de canais e garantindo zero interrupções.
              </div>
</div>
<div className="obsidian-card rounded-2xl overflow-hidden transition-all duration-200">
<button className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-base font-semibold text-white hover:text-primary transition-colors" data-onclick="toggleFaq(this)" type="button">
<span>O serviço funciona fora de Portugal (Emigrantes e viagens)?</span>
<span className="material-symbols-outlined faq-icon transition-transform duration-300 text-slate-400">expand_more</span>
</button>
<div className="faq-content hidden px-6 pb-6 font-body-sm text-[14px] text-on-surface-variant leading-relaxed border-t border-white/[0.04] pt-4">
                Sim! A nossa infraestrutura europeia de alta capacidade está distribuída por França, Suíça, Alemanha, Reino Unido e Luxemburgo. Não necessita de VPN para aceder aos seus canais portugueses no estrangeiro.
              </div>
</div>
</div>
</div>
</section>
{/*  Bottom Free Trial Callout  */}
<section className="w-full px-gutter-mobile lg:px-gutter-desktop pb-24">
<div className="max-w-[1440px] mx-auto obsidian-card rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20">
<div className="max-w-2xl text-center md:text-left space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Sem Cartão de Crédito Obrigatório
            </div>
<h2 className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ainda tem dúvidas? Experimente 24 Horas Grátis.
            </h2>
<p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Comprove a estabilidade dos servidores em direto, a velocidade de zapping e a qualidade 4K no seu próprio televisor antes de subscrever.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-label-md text-sm font-bold bg-primary text-on-primary hover:bg-primary-fixed transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)]" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
              Pedir Teste Grátis de 24h
            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-label-md text-sm font-semibold bg-surface-container-high text-white hover:bg-surface-bright transition-colors border border-white/[0.08]" href="https://wa.me/212763569826" target="_blank">
<span className="material-symbols-outlined text-primary text-lg">chat</span>
<span>Falar no WhatsApp</span>
</a>
</div>
</div>
</section>
</div>
</main>
{/*  Cohesive Footer Section  */}

{/*  Vanilla JS Interactive Scripts  */}
<script  dangerouslySetInnerHTML={{ __html: `
    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');
      const isHidden = content.classList.contains('hidden');

      document.querySelectorAll('#pricing-faq-list .faq-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('#pricing-faq-list .faq-icon').forEach(el => el.style.transform = 'rotate(0deg)');

      if (isHidden) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    }

    function switchBilling(mode) {
      const btnMonthly = document.getElementById('toggle-monthly');
      const btnAnnual = document.getElementById('toggle-annual');

      if (mode === 'monthly') {
        btnMonthly.className = 'px-6 py-2.5 rounded-xl font-label-md text-[14px] font-bold bg-primary text-on-primary shadow-lg transition-all';
        btnAnnual.className = 'relative px-6 py-2.5 rounded-xl font-label-md text-[14px] font-medium text-on-surface-variant hover:text-white transition-all flex items-center gap-2.5';
      } else {
        btnAnnual.className = 'relative px-6 py-2.5 rounded-xl font-label-md text-[14px] font-bold bg-primary text-on-primary shadow-lg flex items-center gap-2.5 transition-all';
        btnMonthly.className = 'px-6 py-2.5 rounded-xl font-label-md text-[14px] font-medium text-on-surface-variant hover:text-white transition-all';
      }
    }
  ` }} />


    <script dangerouslySetInnerHTML={{ __html: `
      if (typeof window !== 'undefined') {
        window.addEventListener('load', function() {
          document.querySelectorAll('[data-onclick]').forEach(el => {
            el.onclick = function(event) {
              const code = el.getAttribute('data-onclick');
              const func = new Function('event', 'button', 'this', code);
              func.call(el, event, el, el);
            };
          });
          document.querySelectorAll('[data-onsubmit]').forEach(el => {
            el.onsubmit = function(event) {
              event.preventDefault();
              const code = el.getAttribute('data-onsubmit');
              const func = new Function('event', 'this', code);
              func.call(el, event, el);
            };
          });
        });
      }
    `}} />
    
    </>
  );
}
