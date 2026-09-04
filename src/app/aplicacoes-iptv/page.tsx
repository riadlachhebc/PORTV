import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Aplicações IPTV | IPTV Portugal TV - Melhor IPTV Portugal',
  description: 'As melhores aplicações para tirar o máximo partido do seu serviço IPTV.',
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
            Aplicações IPTV
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            As melhores aplicações para tirar o máximo partido do seu serviço IPTV.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          
<div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400">
  <p>Para desfrutar do <strong>melhor IPTV Portugal</strong>, é fundamental usar uma boa aplicação reprodutora. Ao comprar a sua assinatura connosco, nós fornecemos as credenciais (M3U ou Xtream Codes) que funcionam nas melhores apps do mercado.</p>
  
  <h2 className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-400">tv</span> Apps para Smart TVs (LG / Samsung)</h2>
  <ul className="not-prose space-y-4 my-6">
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=iboplayer.com&sz=128" alt="IBO Player Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">IBO Player</h4>
          <p className="text-xs text-slate-400 max-w-md">A app mais recomendada para Smart TVs. Interface rápida, não falha e suporta EPG perfeitamente.</p>
        </div>
      </div>
      <a href="https://iboplayer.com/" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=hotplayer.app&sz=128" alt="HotPlayer Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">HotPlayer</h4>
          <p className="text-xs text-slate-400 max-w-md">Um leitor multimédia moderno e rápido para Smart TVs, ideal para organizar a sua lista com facilidade.</p>
        </div>
      </div>
      <a href="https://hotplayer.app" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
  </ul>

  <h2 className="flex items-center gap-3 mt-10"><span className="material-symbols-outlined text-emerald-400">android</span> Apps para Android / FireStick</h2>
  <ul className="not-prose space-y-4 my-6">
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=tivimate.com&sz=128" alt="TiviMate Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">TiviMate IPTV Player</h4>
          <p className="text-xs text-slate-400 max-w-md">A melhor aplicação para Android TV. Interface ao estilo da box tradicional das operadoras, incrivelmente fluida.</p>
        </div>
      </div>
      <a href="https://tivimate.com/" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=iptvsmarters.com&sz=128" alt="IPTV Smarters Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">IPTV Smarters Pro</h4>
          <p className="text-xs text-slate-400 max-w-md">A app mais famosa e versátil. Organiza automaticamente TV, Filmes e Séries.</p>
        </div>
      </div>
      <a href="https://www.iptvsmarters.com/" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
  </ul>

  <h2 className="flex items-center gap-3 mt-10"><span className="material-symbols-outlined text-emerald-400">computer</span> Apps para PC (Windows / Mac)</h2>
  <ul className="not-prose space-y-4 my-6">
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=videolan.org&sz=128" alt="VLC Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">VLC Media Player</h4>
          <p className="text-xs text-slate-400 max-w-md">Reprodutor universal e open-source. Basta abrir a nossa lista M3U diretamente no leitor, compatível com qualquer sistema operativo.</p>
        </div>
      </div>
      <a href="https://www.videolan.org/vlc/" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-5 rounded-xl border border-white/5">
      <div className="flex items-center gap-4">
        <img src="https://www.google.com/s2/favicons?domain=iptvsmarters.com&sz=128" alt="IPTV Smarters Desktop Logo" className="w-12 h-12 rounded-lg shrink-0 object-contain bg-white p-1 shadow-sm" />
        <div>
          <h4 className="text-white font-bold text-base mb-1">IPTV Smarters Pro (Desktop)</h4>
          <p className="text-xs text-slate-400 max-w-md">A versão desktop da famosa app Android. Excelente para quem quer uma interface dedicada e organizada no Windows ou Mac.</p>
        </div>
      </div>
      <a href="https://www.iptvsmarters.com/#downloads" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs text-white bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-white/10">
        <span className="material-symbols-outlined text-[16px]">download</span> Site Oficial
      </a>
    </li>
  </ul>

  <p className="mt-8">Não se preocupe se não tem experiência: após a compra da sua <strong>assinatura IPTV Portugal</strong>, a nossa equipa de apoio envia-lhe um tutorial passo-a-passo no WhatsApp para configurar tudo em 5 minutos.</p>
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
                Como coloco a lista na aplicação?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Depende da app, mas o método habitual (Xtream Codes) apenas exige que insira 3 dados: o URL do servidor, o seu Username e a sua Password. Nós fornecemos estes dados imediatamente após a compra.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                A IPTV Portugal TV tem aplicação própria?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Recomendamos as apps oficiais do mercado (como IBO Player ou TiviMate) pois recebem atualizações constantes dos criadores, garantindo melhor segurança e estabilidade para o nosso serviço IPTV.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Posso ver no telemóvel e na TV?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim! As nossas aplicações recomendadas existem para Android, iOS (iPhone/iPad), Smart TVs e computadores. Lembre-se apenas do limite de ecrãs em simultâneo do seu plano.
              </div>
            </details>
          
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Tenho uma Apple TV, posso usar o IPTV?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Com certeza. Para a Apple TV, recomendamos fortemente a aplicação iPlayTV ou a IPTV Smarters, ambas funcionam de forma excelente com a nossa lista IPTV.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                A aplicação é gratuita ou paga?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Depende da app que escolher. Existem excelentes opções gratuitas, mas algumas das melhores aplicações (como TiviMate ou IBO) requerem um pagamento único (vitalício) ou anual ao desenvolvedor da app, algo que vale a pena para ter a melhor experiência possível.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
