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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Assinatura IPTV Portugal Premium",
    "description": "Serviço IPTV Portugal com canais ao vivo em 4K Ultra HD, filmes e séries.",
    "brand": {
      "@type": "Brand",
      "name": "IPTV Portugal TV"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Plano Trimestral",
        "price": "29.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "description": "1 dispositivo, 3 meses"
      },
      {
        "@type": "Offer",
        "name": "Plano Semestral",
        "price": "44.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "description": "1 dispositivo, 6 meses"
      },
      {
        "@type": "Offer",
        "name": "Plano Anual",
        "price": "59.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "description": "1 dispositivo, 12 meses"
      }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que está incluído no serviço da IPTV Portugal TV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A subscrição dá acesso total a mais de 18.000 canais em direto (desporto nacional e internacional, canais infantis dobrados, notícias, documentários e cinema), mais de 40.000 filmes e séries on-demand com dobragem ou legendas em português de Portugal, bem como o Guia TV (EPG) de 7 dias e atualizações contínuas sem qualquer custo adicional."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o teste grátis de 24 horas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O teste grátis é 100% livre de compromissos. Não solicitamos cartão de crédito nem dados bancários para experimentar. Basta solicitar o teste no nosso formulário ou WhatsApp e receberá as credenciais em menos de 5 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "O sinal bloqueia ou congela em noites de clássico de futebol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Desenvolvemos o algoritmo Anti-Freeze 9.0 suportado por servidores dedicados instalados diretamente em centros de dados em Lisboa e Porto para garantir emissão ininterrupta a 60 quadros por segundo."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são os métodos de pagamento aceites em Portugal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Disponibilizamos métodos totalmente seguros para quem vive em Portugal: MB WAY, Referência Multibanco, Cartão de Crédito/Débito (Visa, Mastercard) e Revolut."
        }
      },
      {
        "@type": "Question",
        "name": "Tenho de pagar fidelização ou assinar contrato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A IPTV Portugal TV orgulha-se de ser um serviço pré-pago sem contratos de fidelização, sem débitos diretos e sem asteriscos."
        }
      }
    ]
  };

  return (
    <>
      <link rel="canonical" href="https://iptvportugaltv.net/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

<main className="w-full">
{/*  HERO SECTION  */}
<section className="relative min-h-[calc(100vh-5rem)] flex items-center pt-8 pb-20 overflow-hidden subtle-mesh" id="hero">
{/*  Ambient Glow Circles  */}
<div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px]"></div>
<div className="pointer-events-none absolute top-1/2 -right-32 w-[450px] h-[450px] bg-ruby-600/10 rounded-full blur-[160px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
{/*  Left Column: Copy & CTAs  */}
<div className="lg:col-span-7 flex flex-col items-start space-y-7">
{/*  Live Status Pill  */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] shadow-sm backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-500"></span>
</span>
<span className="text-xs font-semibold text-slate-200 tracking-wide">Transmissão 4K HDR • Mais de 25.000 Canais &amp; VOD</span>
</div>
{/*  Main Headline  */}
<h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] text-white tracking-tight leading-[1.08]">
              Melhor IPTV Portugal, <br className="hidden sm:inline" />
<span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">A Revolução em 4K.</span>
</h1>
{/*  Subtitle  */}
<p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Desfrute do melhor serviço de IPTV em Portugal com qualidade 4K cristalina, tecnologia Anti-Freeze 9.0 para noites de clássico e zero fidelização. A melhor lista IPTV premium, instalada em menos de 5 minutos na sua Smart TV.
            </p>
{/*  Main Action Buttons  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
<a className="relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-semibold text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>play_circle</span>
<span className="">Começar Teste Grátis de 24 Horas</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-medium text-base text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] backdrop-blur-md transition-all" href="/precos">
<span className="material-symbols-outlined text-[20px] text-slate-400">tune</span>
<span className="">Ver Planos &amp; Preços</span>
</a>
</div>
{/*  Refined Trust Pillars with Emerald Icons  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 text-sm text-slate-300 font-medium w-full">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>check</span>
</div>
<span className="">Ativação imediata em &lt; 5 minutos</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>check</span>
</div>
<span className="">Sem fidelização ou surpresas no fim do mês</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>check</span>
</div>
<span className="">Compatível com Smart TVs Samsung, LG e Android</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>check</span>
</div>
<span className="">Suporte técnico dedicado via WhatsApp em Português</span>
</div>
</div>
</div>
{/*  Right Column: Ultra-Realistic 4K Streaming Mockup  */}
<div className="lg:col-span-5 relative">
{/*  Glow backdrop  */}
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 rounded-3xl blur-2xl opacity-60"></div>
{/*  TV Glass Frame Container  */}
<div className="relative rounded-2xl bg-charcoal border border-white/[0.12] p-2 sm:p-3 shadow-glass">
{/*  Screen Aspect Frame  */}
<div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-obsidian">
<img alt="Benfica vs FC Porto transmissão de futebol em direto em 4K HDR com interface IPTV Portugal TV" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADQan37UAxNcMghVfHM2jKRaLQiAcNTakrXqbnqCrm1yJaDE69qku2Ip8aZP4e6dubR9A8RjK31MSzllgxrHzJu7mcFLwGqYEGeb3780JiL9XUBCgL0nozPS9k1D1mNYwgXoRRuYyAmPOKiRks89cjoLltRGF68Kcs5NYKfnLMU7-SFTsBWcD563M-7GLN4x9YA-IvsSG-o4ymA9odRj_jlSIpwlAuRpO4astbj3iCZuyDNzRiAUEM" />
{/*  Screen Subtle Gradient  */}
<div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-transparent to-black/60 pointer-events-none"></div>
{/*  Top Streaming HUD Bar  */}
<div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
<div className="flex items-center gap-2 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-500"></span>
</span>
<span className="text-[11px] font-bold text-white tracking-wider uppercase">EM DIRETO</span>
<span className="text-[10px] font-semibold text-slate-300">4K HDR</span>
</div>
<div className="flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-medium text-emerald-400">
<span className="material-symbols-outlined text-[13px]">bolt</span>
<span className="">Anti-Freeze 9.0 • 60 FPS</span>
</div>
</div>
{/*  Bottom Screen Banner  */}
<div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-charcoal/85 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white">Benfica vs FC Porto</span>
<span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Liga Portugal</span>
</div>
<p className="text-[11px] text-slate-300 mt-0.5 flex items-center gap-2">
<span className="">Estádio da Luz</span>
<span className="text-slate-500">•</span>
<span className="text-emerald-400">Áudio Dolby 5.1</span>
</p>
</div>
<div className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.08] text-[11px] font-medium text-slate-200">
<span className="material-symbols-outlined text-[14px] text-emerald-400">broadcast_on_personal</span>
<span className="">Servidor VIP 01</span>
</div>
</div>
</div>
{/*  Sleek Mockup Bottom Shelf / App Indicators  */}
<div className="pt-2.5 px-2 flex items-center justify-between text-xs text-slate-300 font-medium">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-white text-[11px]">IPTV Portugal TV OS Engine</span>
</div>
<span className="text-[11px] text-slate-300">Compatível: LG webOS • Samsung Tizen • Android TV</span>
</div>
</div>
{/*  Overlapping Floating Card 1: VOD Badge  */}
<div className="absolute -bottom-6 -left-4 sm:-left-6 w-60 glass-panel p-2.5 rounded-xl shadow-glass flex items-center gap-3 z-20">
<div className="w-12 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10">
<img alt="Poster filme VOD em português" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqsbZYsN9Jyg8I1zO43xcaNPMRxHv3QrBJtdIuxm4V3oESn_S2Zy27j0r8eKbLL6bOmI_v-qBUNpaVf5pb-hIhYRUOBt24aQgjIkpzlWfLOTmVc3p79UGv-KFfoRO5NEW_DH7FIS63oZb7khP6KK3FV32ZEfFOiQK1qUcUIMU2sQIS7aztUpuJjn1uSVfSlVAcF9Pkxjgm9QoFUjS5bA06WTnXjxrhaalyafTrxRWSqA14V5iFQ4eR" />
</div>
<div className="min-w-0">
<span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Estreia Exclusiva</span>
<p className="text-xs font-semibold text-white truncate">Cinema &amp; Séries VOD</p>
<p className="text-[11px] text-slate-300">+40.000 Títulos em PT</p>
</div>
</div>
{/*  Overlapping Floating Card 2: Uptime / Channels Badge  */}
<div className="absolute -top-4 -right-2 sm:-right-4 glass-panel px-3.5 py-2 rounded-xl shadow-glass flex items-center gap-2.5 z-20">
<div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div>
<div className="text-xs font-bold text-white">99.9% Estabilidade</div>
<div className="text-[10px] text-slate-300">Cluster Redundante PT</div>
</div>
</div>
</div>
</div>
{/*  HERO STATS STRIP  */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[26px]">groups</span>
</div>
<div>
<div className="font-display font-bold text-2xl text-white">+45.000 Clientes</div>
<div className="text-xs text-slate-300">Em Portugal Continental e Ilhas</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[26px]">dns</span>
</div>
<div>
<div className="font-display font-bold text-2xl text-white">0% Buffer em Clássicos</div>
<div className="text-xs text-slate-300">Tecnologia Anti-Freeze 9.0 proprietária</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[26px]">chat</span>
</div>
<div>
<div className="font-display font-bold text-2xl text-white">&lt; 3 Minutos</div>
<div className="text-xs text-slate-300">Tempo médio de resposta via WhatsApp</div>
</div>
</div>
</div>
</div>
</section>
{/*  TESTIMONIALS / SOCIAL PROOF  */}

{/*  Pricing Section  */}
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
{/*  FAQ SECTION  */}


{/*  NEW: Conteúdos Premium Grid  */}
<section className="w-full py-24 relative overflow-hidden" id="conteudos">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
        O Mundo Inteiro no <span className="text-emerald-400">Seu Comando</span>
      </h2>
      <p className="text-slate-400 text-lg">
        Explore uma biblioteca infinita com mais de 18.000 canais e 60.000 filmes/séries on-demand. A melhor lista IPTV do mercado ibérico.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 */}
      <div className="group relative rounded-2xl bg-surface-container border border-white/10 overflow-hidden flex flex-col h-full hover:border-emerald-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high z-0 pointer-events-none"></div>
        <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative z-0">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/40 transition-colors"></div>
        </div>
        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 -mt-12 shadow-xl border border-emerald-500/30">
            <span className="material-symbols-outlined text-2xl">sports_soccer</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Desporto Premium</h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            Futebol em direto, Liga Portugal, Champions, Premier League, NBA, Fórmula 1, MotoGP e UFC. Tudo em 4K a 60FPS sem falhas.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative rounded-2xl bg-surface-container border border-white/10 overflow-hidden flex flex-col h-full hover:border-emerald-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high z-0 pointer-events-none"></div>
        <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative z-0">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/40 transition-colors"></div>
        </div>
        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <div className="w-12 h-12 rounded-full bg-ruby-500/20 text-ruby-400 flex items-center justify-center mb-4 -mt-12 shadow-xl border border-ruby-500/30">
            <span className="material-symbols-outlined text-2xl">movie</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Cinema & Séries</h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            Canais de cinema 24/7 e um VOD gigante com os últimos lançamentos da Netflix, HBO, Disney+ e Amazon Prime, totalmente legendados em PT-PT.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative rounded-2xl bg-surface-container border border-white/10 overflow-hidden flex flex-col h-full hover:border-emerald-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high z-0 pointer-events-none"></div>
        <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative z-0">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/40 transition-colors"></div>
        </div>
        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 -mt-12 shadow-xl border border-blue-500/30">
            <span className="material-symbols-outlined text-2xl">smart_toy</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Mundo Infantil</h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            As crianças não ficam de fora. Canais infantis premium 24h e um catálogo enorme de desenhos animados e filmes da Disney falados em Português de Portugal.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative rounded-2xl bg-surface-container border border-white/10 overflow-hidden flex flex-col h-full hover:border-emerald-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high z-0 pointer-events-none"></div>
        <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative z-0">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/40 transition-colors"></div>
        </div>
        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 -mt-12 shadow-xl border border-amber-500/30">
            <span className="material-symbols-outlined text-2xl">public</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Canais Internacionais</h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            Espanha, França, Inglaterra, Brasil, Suíça e muito mais. Ideal para emigrantes ou para quem quer acompanhar notícias e desporto de qualquer parte do mundo.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="w-full py-20 bg-charcoal/40 border-y border-white/[0.06] relative" id="testemunhos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*  Header with Rating Pill  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Opiniões Reais</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">Aprovado por milhares de portugueses</h2>
<p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Descubra por que telespectadores de norte a sul trocaram faturas mensais pesadas de 80€ pela liberdade da IPTV Portugal TV.
            </p>
</div>
{/*  Overall Rating Widget  */}
<div className="glass-panel px-5 py-3 rounded-2xl flex items-center gap-4 self-start md:self-auto shrink-0">
<div className="flex flex-col">
<div className="flex items-center gap-1 text-emerald-400">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<span className="text-[11px] text-slate-300 mt-0.5">+3.420 avaliações verificadas</span>
</div>
<div className="border-l border-white/10 pl-4 font-display font-extrabold text-2xl text-white">
              4.9<span className="text-xs font-normal text-slate-400">/5</span>
</div>
</div>
</div>
{/*  4 Testimonial Cards (Lisboa, Porto, Coimbra, Braga)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Review 1: Lisboa  */}
<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-400 text-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
<span className="material-symbols-outlined text-[12px]">verified</span> Verificado
                </span>
</div>
<p className="text-sm text-slate-200 leading-relaxed italic">
                "Qualidade de imagem inacreditável para os jogos de futebol. Não falhou sequer um segundo na final e no dérbi. O teste grátis convenceu-me na primeira hora."
              </p>
</div>
<div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-xs text-emerald-400">
                MF
              </div>
<div>
<div className="font-display font-semibold text-sm text-white">Miguel Ferreira</div>
<div className="text-xs text-slate-400">Lisboa • Cliente há 14 meses</div>
</div>
</div>
</div>
{/*  Review 2: Porto  */}
<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-400 text-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
<span className="material-symbols-outlined text-[12px]">verified</span> Verificado
                </span>
</div>
<p className="text-sm text-slate-200 leading-relaxed italic">
                "Instalei na minha Smart TV LG em menos de 3 minutos. O suporte por WhatsApp foi excecional e tirou todas as dúvidas. O catálogo de séries é infinito."
              </p>
</div>
<div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-xs text-emerald-400">
                SR
              </div>
<div>
<div className="font-display font-semibold text-sm text-white">Sofia Ramos</div>
<div className="text-xs text-slate-400">Porto • Cliente há 9 meses</div>
</div>
</div>
</div>
{/*  Review 3: Coimbra  */}
<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-400 text-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
<span className="material-symbols-outlined text-[12px]">verified</span> Verificado
                </span>
</div>
<p className="text-sm text-slate-200 leading-relaxed italic">
                "Cancelei a fatura de 78€ que pagava na MEO. Agora tenho muito mais canais de desporto e filmes por uma fração do preço, sem contratos nem fidelizações."
              </p>
</div>
<div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-xs text-emerald-400">
                DC
              </div>
<div>
<div className="font-display font-semibold text-sm text-white">Duarte Carvalho</div>
<div className="text-xs text-slate-400">Coimbra • Cliente há 6 meses</div>
</div>
</div>
</div>
{/*  Review 4: Braga  */}
<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-400 text-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
<span className="material-symbols-outlined text-[12px]">verified</span> Verificado
                </span>
</div>
<p className="text-sm text-slate-200 leading-relaxed italic">
                "O guia TV (EPG) de 7 dias funciona lindamente. A minha família vê os desenhos animados com dobragem portuguesa e eu não perco nada de Fórmula 1 e Liga dos Campeões."
              </p>
</div>
<div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-xs text-emerald-400">
                AM
              </div>
<div>
<div className="font-display font-semibold text-sm text-white">André Matos</div>
<div className="text-xs text-slate-400">Braga • Cliente há 2 anos</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  WHY CHOOSE US / COMPARISON & FEATURES  */}
<section className="w-full py-24 relative" id="vantagens">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Tecnologia Europeia de Vanguarda</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Porquê escolher o nosso Serviço IPTV?
          </h2>
<p className="text-sm sm:text-base text-slate-300 mt-3">
            Infraestrutura de alta disponibilidade com servidores em Lisboa e Porto, concebida especificamente para garantir que nunca perde um golo nem espera por carregamentos.
          </p>
</div>
{/*  6 Minimalist Feature Grid with Custom SVG / Material Badges  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
{/*  Card 1  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">sports_soccer</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">Desporto em Direto em 4K e 60 FPS</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Acesso total às principais ligas europeias, Liga Portugal, Premier League, Champions League, Fórmula 1 e MotoGP com fluidez cristalina sem atrasos no sinal.
            </p>
</div>
{/*  Card 2  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">video_library</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">+40.000 Filmes &amp; Séries On-Demand</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Catálogo cinematográfico atualizado semanalmente com estreias de bilheteira, temporadas completas e opções de áudio ou legendas em português de Portugal.
            </p>
</div>
{/*  Card 3  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">speed</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">Anti-Freeze 9.0 Inteligente</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Balanceamento automático de carga por inteligência de rede. Mesmo quando 200.000 pessoas assistem ao mesmo clássico, o seu sinal permanece 100% estável.
            </p>
</div>
{/*  Card 4  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">calendar_today</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">Guia TV (EPG) de 7 Dias</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Consulte a grelha de programação detalhada das principais emissoras nacionais e internacionais com informação completa sobre cada transmissão.
            </p>
</div>
{/*  Card 5  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">devices</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">Sem Boxes ou Equipamento Alugado</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Utilize a televisão que já tem na sala. Basta instalar a aplicação oficial na sua Samsung, LG, Android TV ou Apple TV em poucos cliques.
            </p>
</div>
{/*  Card 6  */}
<div className="glass-panel p-7 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">support_agent</span>
</div>
<h3 className="font-display font-bold text-lg text-white mb-2">Apoio Técnico Humano 24/7</h3>
<p className="text-sm text-slate-300 leading-relaxed">
              Sem bots robóticos nem linhas de valor acrescentado. Os nossos especialistas ajudam-no via WhatsApp com linguagem simples e resposta imediata.
            </p>
</div>
</div>
{/*  Sleek Comparison Matrix Table  */}
<div className="glass-panel rounded-3xl p-6 sm:p-8 overflow-x-auto">
<div className="mb-6">
<h3 className="font-display font-bold text-xl text-white">Comparativo direto com as operadoras tradicionais</h3>
<p className="text-xs sm:text-sm text-slate-300 mt-1">Veja quanto poupa e o que ganha ao mudar para a IPTV Portugal TV.</p>
</div>
<table className="w-full text-left border-collapse min-w-[620px]">
<thead>
<tr className="border-b border-white/[0.08]">
<th className="pb-4 font-display font-bold text-sm text-slate-300">Funcionalidade / Serviço</th>
<th className="pb-4 font-display font-bold text-sm text-emerald-400 text-center bg-white/[0.03] rounded-t-xl px-4">IPTV Portugal TV</th>
<th className="pb-4 font-display font-semibold text-sm text-slate-400 text-center px-4">Operadoras Convencionais em PT</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/[0.06]">
<tr>
<td className="py-4 font-medium text-white">Canais de Desporto Premium (Nacionais &amp; Internacionais)</td>
<td className="py-4 text-center bg-white/[0.03] px-4 font-semibold text-emerald-400">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">check_circle</span> Incluídos em 4K
                  </span>
</td>
<td className="py-4 text-center text-slate-400 px-4">+35€ a 55€ extra por mês</td>
</tr>
<tr>
<td className="py-4 font-medium text-white">Contrato de Fidelização Obrigatória</td>
<td className="py-4 text-center bg-white/[0.03] px-4 font-semibold text-emerald-400">
                  Zero (0 Meses)
                </td>
<td className="py-4 text-center text-ruby-400 px-4 font-semibold">24 Meses com penalizações pesadas</td>
</tr>
<tr>
<td className="py-4 font-medium text-white">Aluguer Mensal de Boxes Adicionais</td>
<td className="py-4 text-center bg-white/[0.03] px-4 font-semibold text-emerald-400">
                  Grátis (Usa a app na sua TV)
                </td>
<td className="py-4 text-center text-slate-400 px-4">+3,50€ a 6€ / mês por TV</td>
</tr>
<tr>
<td className="py-4 font-medium text-white">Filmes Recentes e Séries On-Demand</td>
<td className="py-4 text-center bg-white/[0.03] px-4 font-semibold text-emerald-400">
                  +40.000 títulos incluídos
                </td>
<td className="py-4 text-center text-slate-400 px-4">Cobrança de videoclube individual</td>
</tr>
<tr>
<td className="py-4 font-medium text-white">Ativação e Envio de Credenciais</td>
<td className="py-4 text-center bg-white/[0.03] px-4 font-semibold text-emerald-400 rounded-b-xl">
                  Em 2 a 5 minutos online
                </td>
<td className="py-4 text-center text-slate-400 px-4">Espera de técnico (3 a 8 dias úteis)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  DEVICE COMPATIBILITY ECOSYSTEM  */}
<section className="w-full py-20 bg-charcoal/30 border-y border-white/[0.06]" id="dispositivos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Compatibilidade Total</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
          Funciona com todos os seus aparelhos
        </h2>
<p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 mb-12">
          Não precisa de comprar novos dispositivos. Disponibilizamos manuais passo a passo adaptados a cada sistema operativo.
        </p>
{/*  6 Devices Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">tv</span>
<div className="font-display font-bold text-sm text-white">Smart TV</div>
<div className="text-[11px] text-slate-300 mt-0.5">Samsung • LG</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">developer_board</span>
<div className="font-display font-bold text-sm text-white">Android TV</div>
<div className="text-[11px] text-slate-300 mt-0.5">Sony • TCL • Philips</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">live_tv</span>
<div className="font-display font-bold text-sm text-white">Apple TV</div>
<div className="text-[11px] text-slate-300 mt-0.5">tvOS 14 ou superior</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">cast</span>
<div className="font-display font-bold text-sm text-white">Fire TV Stick</div>
<div className="text-[11px] text-slate-300 mt-0.5">Amazon 4K / Lite</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">smartphone</span>
<div className="font-display font-bold text-sm text-white">Smartphones</div>
<div className="text-[11px] text-slate-300 mt-0.5">iPhone &amp; Android</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all">
<span className="material-symbols-outlined text-3xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform">laptop_mac</span>
<div className="font-display font-bold text-sm text-white">PC &amp; Mac</div>
<div className="text-[11px] text-slate-300 mt-0.5">Web • VLC • Windows</div>
</div>
</div>
</div>
</section>
{/*  PRICING CARDS SECTION  */}

{/*  NEW: Como Funciona (3 Steps)  */}
<section className="w-full py-20 relative bg-surface" id="como-funciona">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
        Comece a assistir em <span className="text-emerald-400">3 Passos Simples</span>
      </h2>
      <p className="text-slate-400 text-lg">
        Sem instalações complicadas ou visitas de técnicos a sua casa. O melhor IPTV Portugal à distância de um clique.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"></div>
      
      <div className="relative flex flex-col items-center text-center group">
        <div className="w-24 h-24 rounded-2xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-emerald-400">shopping_cart</span>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">1</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Escolha o seu Plano</h3>
        <p className="text-slate-400 text-sm">Selecione o plano ideal para si (3, 6 ou 12 meses) e o número de dispositivos. Sem fidelizações ou contratos.</p>
      </div>

      <div className="relative flex flex-col items-center text-center group">
        <div className="w-24 h-24 rounded-2xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-emerald-400">mail</span>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">2</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Receba os Dados</h3>
        <p className="text-slate-400 text-sm">O sistema processa o pagamento e envia imediatamente a sua lista M3U e dados Xtream Codes para o email.</p>
      </div>

      <div className="relative flex flex-col items-center text-center group">
        <div className="w-24 h-24 rounded-2xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-emerald-400">play_circle</span>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">3</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Ligue e Assista</h3>
        <p className="text-slate-400 text-sm">Coloque os dados na sua aplicação favorita (TiviMate, IBO, VLC) e comece a ver imediatamente os melhores canais e VOD.</p>
      </div>
    </div>
  </div>
</section>

{/*  NEW: Comparison Table  */}
<section className="w-full py-24 relative overflow-hidden" id="comparacao">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
        Porquê escolher a <span className="text-emerald-400">IPTV Portugal TV?</span>
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Veja como nos comparamos com revendedores amadores e pacotes de operadoras de satélite e cabo tradicionais. O melhor IPTV Portugal ganha em todos os aspetos.
      </p>
    </div>

    <div className="overflow-hidden rounded-2xl border border-white/[0.05] bg-surface-container-low shadow-2xl">
      <div className="grid grid-cols-3 bg-charcoal/80 border-b border-white/[0.05] p-4 sm:p-6 text-sm sm:text-base font-bold text-white text-center">
        <div className="text-left">Funcionalidade</div>
        <div className="text-emerald-400">IPTV Portugal TV</div>
        <div className="text-slate-500">Outros Provedores</div>
      </div>
      
      <div className="grid grid-cols-3 border-b border-white/[0.02] p-4 sm:p-6 text-sm items-center text-center">
        <div className="text-left font-medium text-slate-300">Preço Médio Anual</div>
        <div className="text-emerald-400 font-bold">~ 60€</div>
        <div className="text-slate-500">400€ - 600€</div>
      </div>
      
      <div className="grid grid-cols-3 border-b border-white/[0.02] p-4 sm:p-6 text-sm items-center text-center">
        <div className="text-left font-medium text-slate-300">Canais de Desporto Premium</div>
        <div className="text-emerald-400 flex justify-center"><span className="material-symbols-outlined">check_circle</span></div>
        <div className="text-ruby-400 flex justify-center"><span className="material-symbols-outlined">cancel</span></div>
      </div>
      
      <div className="grid grid-cols-3 border-b border-white/[0.02] p-4 sm:p-6 text-sm items-center text-center bg-white/[0.02]">
        <div className="text-left font-medium text-slate-300">Servidores Anti-Freeze Locais</div>
        <div className="text-emerald-400 flex justify-center"><span className="material-symbols-outlined">check_circle</span></div>
        <div className="text-ruby-400 flex justify-center"><span className="material-symbols-outlined">cancel</span></div>
      </div>
      
      <div className="grid grid-cols-3 border-b border-white/[0.02] p-4 sm:p-6 text-sm items-center text-center">
        <div className="text-left font-medium text-slate-300">Catálogo VOD (Filmes/Séries)</div>
        <div className="text-emerald-400 font-bold">+60.000</div>
        <div className="text-slate-500">Nenhum / Limitado</div>
      </div>

      <div className="grid grid-cols-3 border-b border-white/[0.02] p-4 sm:p-6 text-sm items-center text-center bg-white/[0.02]">
        <div className="text-left font-medium text-slate-300">Suporte Técnico Dedicado</div>
        <div className="text-emerald-400 flex justify-center"><span className="material-symbols-outlined">check_circle</span></div>
        <div className="text-ruby-400 flex justify-center"><span className="material-symbols-outlined">cancel</span></div>
      </div>

      <div className="grid grid-cols-3 p-4 sm:p-6 text-sm items-center text-center">
        <div className="text-left font-medium text-slate-300">Fidelização ou Contratos</div>
        <div className="text-emerald-400 font-bold">ZERO</div>
        <div className="text-ruby-400 font-bold">12 a 24 Meses</div>
      </div>
    </div>
  </div>
</section>


{/*  NEW: SEO Article Block  */}
<section className="w-full py-24 bg-surface border-t border-white/[0.05]" id="guia-iptv">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white">
      <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-8 text-center">
        O Guia Definitivo sobre <span className="text-emerald-400">IPTV em Portugal</span>
      </h2>
      
      <p>
        A procura pelo <strong>melhor serviço IPTV em Portugal</strong> cresceu exponencialmente nos últimos anos. Com os pacotes tradicionais de cabo e satélite a tornarem-se cada vez mais caros e limitados, os portugueses procuram alternativas viáveis, fiáveis e económicas para não perderem os seus programas e jogos de futebol favoritos.
      </p>
      
      <h3>O que deve procurar ao comprar uma assinatura IPTV?</h3>
      <p>
        A internet está cheia de revendedores que oferecem listas IPTV extremamente baratas. O problema dessas listas é que estão sobrecarregadas num servidor não otimizado, o que causa o temido <em>"buffering"</em> ou congelamento da imagem, especialmente em dias de grandes transmissões desportivas ou derbys. Ao escolher a <strong>IPTV Portugal TV</strong>, está a adquirir acesso a um <strong>serviço premium IPTV</strong> com a tecnologia <strong className="text-emerald-400">Anti-Freeze 9.0</strong>, projetada especificamente para evitar cortes (traffic shaping) das principais operadoras de internet portuguesas (MEO, NOS e Vodafone).
      </p>

      <h3>Compatibilidade Total</h3>
      <p>
        Ao contrário das boxs da operadora que ficam presas à televisão da sua sala, o nosso serviço IPTV acompanha-o para todo o lado. Seja numa viagem de férias no Algarve, ou emigrado na Suíça ou França, a sua lista IPTV funciona perfeitamente em qualquer dispositivo. Apoiamos todas as plataformas modernas: Smart TVs (com aplicações como <strong>IBO Player</strong>, <strong>TiviMate</strong>, <strong>Smarters Pro</strong>), smartphones Android e iOS, Apple TV, e dispositivos Windows ou Mac.
      </p>
      
      <div className="bg-charcoal p-6 rounded-2xl border border-white/10 mt-8">
        <h4 className="mt-0 text-emerald-400">Teste o IPTV Grátis</h4>
        <p className="mb-0 text-sm">
          Acreditamos tanto na nossa estabilidade que somos dos únicos fornecedores no mercado a oferecer um teste de IPTV de 24 horas 100% gratuito e sem qualquer compromisso de fidelização. Não confie apenas na nossa palavra; peça o teste grátis agora mesmo, instale na sua televisão e veja a diferença na qualidade da imagem 4K UHD.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-20 bg-charcoal/20 border-t border-white/[0.06]" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-14">
<span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Tire as Suas Dúvidas</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">Perguntas Frequentes</h2>
<p className="text-sm sm:text-base text-slate-300 mt-2">
            Tudo o que precisa de saber de forma clara e transparente antes de começar o seu teste.
          </p>
</div>
<div className="space-y-4">
{/*  Accordion Item 1  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">O que está incluído no serviço da IPTV Portugal TV?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              A subscrição dá acesso total a mais de 18.000 canais em direto (desporto nacional e internacional, canais infantis dobrados, notícias, documentários e cinema), mais de 40.000 filmes e séries on-demand com dobragem ou legendas em português de Portugal, bem como o Guia TV (EPG) de 7 dias e atualizações contínuas sem qualquer custo adicional.
            </div>
</details>
{/*  Accordion Item 2  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Como funciona o teste grátis de 24 horas?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              O teste grátis é 100% livre de compromissos. Não solicitamos cartão de crédito nem dados bancários para experimentar. Basta solicitar o teste no nosso formulário ou WhatsApp e receberá as credenciais e o guia passo a passo adaptado à sua televisão ou aparelho em menos de 5 minutos.
            </div>
</details>
{/*  Accordion Item 3  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Como é feita a instalação na minha Smart TV?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              A instalação é extremamente simples. Enviamos um guia ilustrado com fotos e texto em português. Em Smart TVs Samsung ou LG, basta descarregar uma aplicação oficial recomendada (como IBO Player ou SmartOne) diretamente da loja de apps da TV e inserir o código de utilizador que nós fornecemos.
            </div>
</details>
{/*  Accordion Item 4  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">O sinal bloqueia ou congela em noites de clássico de futebol?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Não. Desenvolvemos o algoritmo Anti-Freeze 9.0 suportado por servidores dedicados instalados diretamente em centros de dados em Lisboa e Porto. Em noites com enorme tráfego simultâneo, o tráfego é rebalanceado em frações de milissegundo para garantir emissão ininterrupta a 60 quadros por segundo.
            </div>
</details>
{/*  Accordion Item 5  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Quais são os métodos de pagamento aceites em Portugal?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Disponibilizamos métodos totalmente familiares e seguros para quem vive em Portugal: MB WAY (aprovação imediata por notificação no telemóvel), Referência Multibanco (emissão de Entidade e Referência pagável em qualquer caixa ou Homebanking), Cartão de Crédito/Débito (Visa, Mastercard) e Revolut.
            </div>
</details>

{/*  Accordion Item 6  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Posso usar o serviço em mais de um ecrã ao mesmo tempo?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Sim! Ao contrário de muitos serviços limitados, os nossos planos permitem-lhe adicionar "Ecrãs Extra" na página de checkout. Pode assistir simultaneamente na TV da sala, no quarto ou até no telemóvel enquanto está fora de casa, sem bloqueios de IP.
            </div>
</details>

{/*  Accordion Item 7  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Preciso de uma Box Android ou basta a minha televisão?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Se tem uma Smart TV (Samsung, LG, Hisense, etc.) dos últimos 6-7 anos, não precisa de comprar qualquer equipamento extra. A lista é instalada diretamente na televisão através de apps especializadas. Se tem uma TV antiga (não-Smart), aí sim precisará de ligar uma Box Android ou um Chromecast.
            </div>
</details>

{/*  Accordion Item 8  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Qual é a velocidade de internet recomendada para ver em 4K?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Recomendamos uma ligação mínima de 30 Mbps para garantir que os canais em resolução 4K rodam com fluidez total. Idealmente, a sua televisão deve estar ligada ao router através de um cabo de rede (Ethernet) para evitar as instabilidades naturais da rede Wi-Fi.
            </div>
</details>

{/*  Accordion Item 9  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Os filmes do videoclube (VOD) são atualizados com frequência?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              A nossa equipa atualiza o catálogo diariamente! Os últimos filmes do cinema e os novos episódios de séries das plataformas mais famosas (Netflix, HBO Max, Disney+, Prime Video) são adicionados quase sempre em menos de 24 horas após o seu lançamento oficial, sempre com legendas em PT-PT.
            </div>
</details>

{/*  Accordion Item 10  */}
<details className="group glass-panel rounded-2xl p-5 open:bg-charcoal/80 transition-all cursor-pointer">
<summary className="flex items-center justify-between font-display font-semibold text-base text-white list-none select-none">
<span className="">Tenho de pagar fidelização ou assinar contrato?</span>
<span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
</summary>
<div className="pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] mt-4">
              Não. A IPTV Portugal TV orgulha-se de ser um serviço pré-pago sem contratos de fidelização, sem débitos diretos e sem asteriscos. Paga apenas pelos meses que quer usar. Quando o período acabar, é totalmente livre para decidir se quer renovar ou não.
            </div>
</details>
</div>
</div>
</section>
{/*  FINAL HIGH-IMPACT CONVERSION BANNER  */}
<section className="w-full py-24 relative overflow-hidden">
{/*  Glow ambient background  */}
<div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="glass-panel rounded-3xl p-8 sm:p-14 text-center border border-white/[0.12] shadow-glass relative overflow-hidden">
{/*  Micro pill  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-6">
<span className="material-symbols-outlined text-[15px]">bolt</span>
<span className="">Ativação em menos de 5 minutos • Sem Cartão</span>
</div>
{/*  Conversion Title  */}
<h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white max-w-3xl mx-auto tracking-tight leading-tight">
            Pronto para transformar a forma como vê televisão?
          </h2>
<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
            Experimente gratuitamente durante 24 horas sem qualquer compromisso. Veja os canais em 4K no seu ecrã antes de tomar qualquer decisão.
          </p>
{/*  Buttons  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-semibold text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all duration-300 hover:scale-[1.02]" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>play_circle</span>
<span className="">Pedir Teste Grátis de 24h</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-medium text-base text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all" href={getWhatsAppUrl(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span className="">Falar no WhatsApp</span>
</a>
</div>
{/*  Micro guarantees  */}
<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span>
<span className="">Sem fidelização contratual</span>
</span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span>
<span className="">Suporte técnico em português 365 dias/ano</span>
</span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span>
<span className="">Compatível com a sua Smart TV atual</span>
</span>
</div>
</div>
</div>
</section>
</main>
{/*  PROFESSIONAL FOOTER  */}





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
