import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre a IPTV Portugal TV | IPTV Portugal TV - Melhor IPTV Portugal',
  description: 'Conheça a equipa e a tecnologia por trás do serviço IPTV mais estável de Portugal.',
};

export default function Page() {
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar ao Início
            </Link>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sobre a IPTV Portugal TV
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            Conheça a equipa e a tecnologia por trás do serviço IPTV mais estável de Portugal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          
<div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400">
  <p>A IPTV Portugal TV nasceu com um único objetivo: tornar-se o <strong>melhor IPTV Portugal</strong>. Num mercado saturado de revendedores de listas lentas e instáveis, decidimos criar a nossa própria infraestrutura premium, pensada de raiz para o público português.</p>
  
  <h2 className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-400">memory</span> A Nossa Infraestrutura</h2>
  <p>Os nossos datacenters principais operam diretamente na Península Ibérica, assegurando as latências mais baixas do mercado (ping) para clientes das redes MEO, NOS, Vodafone e NOWO. Esta é a razão principal pela qual a nossa <strong>lista IPTV</strong> não encrava, mesmo em dias de alta procura.</p>
  
  <div className="bg-surface-container-low border-l-4 border-emerald-500 p-6 rounded-r-xl my-8 not-prose">
    <p className="text-white italic">"Na IPTV Portugal TV, não vendemos apenas um acesso, vendemos estabilidade e paz de espírito. Quando a bola rola, os nossos clientes não ficam a olhar para ecrãs de carregamento."</p>
  </div>
  
  <h2 className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-400">support_agent</span> Suporte Humano em Português</h2>
  <p>Orgulhamo-nos do nosso serviço de apoio ao cliente. Disponível todos os dias da semana, a nossa equipa resolve qualquer dificuldade técnica de forma rápida e cordial via WhatsApp. É o suporte que diferencia um <strong>serviço IPTV</strong> medíocre do <strong>melhor serviço IPTV</strong>.</p>
  
  <p>Junte-se a milhares de portugueses que já cortaram o cabo das fidelizações abusivas. Experimente hoje a IPTV Portugal TV.</p>
</div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 relative">
        <div className="absolute inset-0 bg-surface-container-low/30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white mb-3">Perguntas Frequentes</h2>
            <p className="text-slate-400">Esclareça todas as suas dúvidas sobre o nosso serviço IPTV.</p>
          </div>
          <div className="space-y-4">
            
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                São uma empresa portuguesa?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                A equipa de suporte e gestão é portuguesa, compreendendo as necessidades exatas e os gostos do público nacional. Os nossos servidores encontram-se alojados em centros de dados europeus de alta segurança.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Garantem a devolução do dinheiro?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim, embora não ofereçamos reembolso se o seu serviço de internet for incompatível (daí aconselharmos sempre o teste grátis prévio). Resolvemos cada caso de forma humana e transparente.
              </div>
            </details>
          
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Têm revendedores?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Atualmente não trabalhamos com redes de revendedores externos, pois preferimos manter o controlo absoluto da qualidade dos nossos servidores e garantir suporte direto a todos os nossos utilizadores.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Desde quando estão no mercado?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                A nossa equipa conta com anos de experiência no mercado de streaming e administração de redes em Portugal, tendo lançado a IPTV Portugal TV para elevar o padrão da indústria.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Como posso entrar em contacto?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Poderá enviar-nos uma mensagem diretamente no WhatsApp através do botão de suporte no canto superior do site, 24 horas por dia, 7 dias por semana.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
