import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Canais Disponíveis | IPTV Portugal TV - Melhor IPTV Portugal',
  description: 'Conheça a grelha de canais mais completa e organizada do mercado IPTV em Portugal.',
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
            Canais Disponíveis
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            Conheça a grelha de canais mais completa e organizada do mercado IPTV em Portugal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          
<div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400">
  <p>Ao escolher a IPTV Portugal TV, está a <strong>comprar IPTV Portugal</strong> com a grelha de canais mais completa do mercado. A nossa <strong>lista IPTV</strong> é rigorosamente organizada e atualizada diariamente para garantir que nunca perde o seu conteúdo favorito.</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10 not-prose">
    <div className="p-6 rounded-2xl bg-surface-container border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>
      <span className="material-symbols-outlined text-4xl text-blue-400 mb-4 block">sports_soccer</span>
      <h3 className="font-bold text-lg text-white mb-2">Desporto em Direto</h3>
      <p className="text-sm text-slate-400">Todos os canais desportivos Premium de Portugal, Espanha, Inglaterra e muito mais. Liga Portugal, Champions League, Fórmula 1 e MotoGP em direto e em 4K.</p>
    </div>
    <div className="p-6 rounded-2xl bg-surface-container border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
      <span className="material-symbols-outlined text-4xl text-purple-400 mb-4 block">movie</span>
      <h3 className="font-bold text-lg text-white mb-2">Canais de Cinema</h3>
      <p className="text-sm text-slate-400">Canais dedicados a filmes de ação, comédia, drama e suspense. Emissão contínua dos canais premium de cinema nacionais e internacionais.</p>
    </div>
    <div className="p-6 rounded-2xl bg-surface-container border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full"></div>
      <span className="material-symbols-outlined text-4xl text-amber-400 mb-4 block">child_care</span>
      <h3 className="font-bold text-lg text-white mb-2">Conteúdo Infantil</h3>
      <p className="text-sm text-slate-400">Os canais mais adorados pelas crianças, com desenhos animados 24 horas por dia, totalmente dobrados em português de Portugal.</p>
    </div>
    <div className="p-6 rounded-2xl bg-surface-container border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full"></div>
      <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4 block">language</span>
      <h3 className="font-bold text-lg text-white mb-2">Internacional & VOD</h3>
      <p className="text-sm text-slate-400">Canais abertos e premium do Brasil, França, Suíça, Alemanha e UK. Além disso, uma biblioteca VOD com mais de 60.000 filmes e séries on-demand.</p>
    </div>
  </div>
  
  <p>A melhor <strong>assinatura IPTV Portugal</strong> oferece-lhe a liberdade de assistir ao que quer, quando quer, com tecnologia Anti-Freeze para eliminar bloqueios (buffering) durante os jogos grandes.</p>
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
                Têm canais para adultos (XXX)?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim, disponibilizamos uma categoria opcional para adultos com proteção por PIN, para garantir a privacidade e segurança da sua família.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                A grelha de canais é organizada?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Totalmente. A nossa lista IPTV vem perfeitamente organizada por países e categorias (Desporto, Filmes, Documentários, etc.), tornando a navegação intuitiva em qualquer aplicação.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Posso ocultar canais que não quero ver?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim. A maioria das aplicações IPTV que recomendamos permite ocultar categorias inteiras ou marcar os seus canais favoritos para acesso rápido.
              </div>
            </details>
          
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Têm canais de séries e novelas?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim. Dispomos de todos os canais nacionais de novelas, entretenimento e generalistas, além dos canais Fox, AXN e muitos outros em alta definição.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Os canais têm legendas em português?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Garantimos legendas em PT-PT em praticamente todos os canais premium internacionais e em todo o conteúdo VOD (filmes e séries).
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
