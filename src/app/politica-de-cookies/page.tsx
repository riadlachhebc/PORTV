import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Cookies | IPTV Portugal TV - Melhor IPTV Portugal',
  description: 'Informações legais da IPTV Portugal TV.',
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
            Política de Cookies
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            Informações legais da IPTV Portugal TV.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400"><p>O nosso website utiliza cookies para melhorar a sua experiência enquanto navega pela plataforma.</p><p>Cookies são pequenos ficheiros de texto guardados no seu navegador que nos permitem analisar o tráfego do site, guardar as suas preferências (como manter o seu carrinho de compras de <strong>IPTV Portugal</strong>) e garantir a segurança do portal.</p><p>Pode a qualquer momento configurar o seu navegador de internet para recusar os cookies, no entanto, isso poderá afetar a funcionalidade de algumas partes do nosso website, como a área de finalização de compra.</p><p>Se continuar a utilizar o nosso site, assumimos o seu consentimento ativo para o uso destas tecnologias.</p></div>
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
                Existe alguma dúvida extra?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Pode contactar a nossa equipa de suporte técnico diretamente através do WhatsApp para qualquer questão legal ou técnica.
              </div>
            </details>
          
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Posso rejeitar os cookies?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Pode ajustar o seu navegador para recusar todos os cookies ou para ser notificado sempre que um cookie é enviado.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Usam cookies de publicidade?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Não utilizamos cookies para o bombardear com publicidade em outros sites. Focamo-nos em cookies essenciais e analíticos para melhorar a plataforma.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Os cookies afetam a reprodução IPTV?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Não. Os cookies aplicam-se apenas à navegação neste website (iptvportugaltv.tv). Não têm qualquer interferência com as transmissões no TiviMate, IBO ou outras apps.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Por quanto tempo são guardados?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Os cookies de sessão expiram quando fecha o navegador. Os persistentes, como lembrar as suas definições, poderão durar entre 30 dias a 1 ano.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
