// @ts-nocheck
'use client';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <>
      <main className="w-full pt-28 pb-20 bg-surface">
        {/*  Section 1: Hero Header  */}
        <header className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop mb-space-3xl text-center">
          <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full bg-surface-container-high border border-surface-container-highest mb-space-md shadow-sm">
            <span className="material-symbols-outlined text-sm text-primary">article</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Blog Oficial</span>
          </div>
          <h1 className="font-headline-display text-headline-display text-on-surface mb-space-md">
            Notícias, Guias e <span className="text-primary">Dicas IPTV</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Explore os nossos artigos detalhados para tirar o máximo partido da sua subscrição, poupar dinheiro e configurar a sua TV em minutos.
          </p>
        </header>

        {/*  Section 3: Recent Articles Grid  */}
        <section className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop mb-space-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1 block">Artigos Recentes</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Explore os Nossos Guias Técnicos</h2>
            </div>
            <div className="flex items-center gap-space-2xs text-on-surface-variant font-label-sm text-label-sm">
              <span>A mostrar</span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">3 publicações</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            
            {/*  Article 3 (Newest)  */}
            <article className="relative group flex flex-col rounded-xl bg-surface-container-low overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-surface-container">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <img src="/images/blog/iptv-premium-portugal-buffering-frustracao.jpg" alt="Fã de futebol irritado com as mãos na cabeça, a olhar para uma TV com buffering" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <span className="absolute top-space-sm left-space-sm px-space-xs py-1 rounded bg-surface-container-highest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm">
                  Tecnologia
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-2xs text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>23 min de leitura</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    <Link href="/blog/iptv-premium-portugal-vs-lista-gratis-falhas" className="focus:outline-none before:absolute before:inset-0">IPTV Premium Portugal: O Fim das Falhas e do Buffering</Link>
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    Cansado das listas IPTV grátis que travam a meio do jogo? Descubra por que o barato sai caro e como a nossa tecnologia resolve isso.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-label-md text-label-md text-primary">
                  <span>Ler artigo</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </article>

            {/*  Article 2  */}
            <article className="relative group flex flex-col rounded-xl bg-surface-container-low overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-surface-container">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <img src="/images/blog/comprar-iptv-portugal-fatura-chocada.jpg" alt="Fatura de operadora chocante" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <span className="absolute top-space-sm left-space-sm px-space-xs py-1 rounded bg-surface-container-highest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm">
                  Finanças
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-2xs text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>18 min de leitura</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    <Link href="/blog/comprar-iptv-portugal-poupar-fatura-tv" className="focus:outline-none before:absolute before:inset-0">Comprar IPTV Portugal: Poupe +500€/Ano na Fatura de TV</Link>
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    Cansado das faturas absurdas da MEO e NOS? Descubra por que comprar IPTV em Portugal é a melhor alternativa e poupe mais de 500€/ano.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-label-md text-label-md text-primary">
                  <span>Ler artigo</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </article>

            {/*  Article 1  */}
            <article className="relative group flex flex-col rounded-xl bg-surface-container-low overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-surface-container">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <img src="/images/blog/iptv-desporto-portugal-hero.jpg" alt="Adepto de futebol a ver um jogo da Liga Portugal na Smart TV com IPTV" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <span className="absolute top-space-sm left-space-sm px-space-xs py-1 rounded bg-surface-container-highest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm">
                  Desporto
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-2xs text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>5 min de leitura</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    <Link href="/blog/iptv-desporto-portugal-liga-champions" className="focus:outline-none before:absolute before:inset-0">IPTV Desporto Portugal: Como Ver a Liga e a Champions Sem Bloqueios</Link>
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    Cansado de pagar 56€/mês pela SportTV e DAZN? Descubra o melhor IPTV de desporto em Portugal. Futebol em 4K, sem cortes.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-label-md text-label-md text-primary">
                  <span>Ler artigo</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/*  Section 5: Direct WhatsApp Support Banner  */}
        <section className="relative z-10 mb-space-2xl">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-surface-container to-surface-container-high p-space-lg sm:p-space-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Apoio Técnico Disponível
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Precisa de ajuda imediata para configurar?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Os nossos técnicos em Portugal ajudam a configurar a sua televisão ou box em tempo real.</p>
              </div>
            </div>
            <a className="shrink-0 inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200 shadow-[0_0_20px_rgba(37,164,117,0.3)] hover:scale-105" href={getWhatsAppUrl(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Falar no WhatsApp (Suporte 24/7)</span>
            </a>
          </div>
        </section>

        {/*  Section 4: Newsletter & Community Engagement Box  */}
        <section className="relative z-10">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl p-space-xl md:p-space-3xl text-center max-w-4xl mx-auto">
            {/*  Subtle Glow Layer  */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 space-y-space-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-high mx-auto flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">mark_email_read</span>
              </div>
              <div className="space-y-space-xs">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Receba as últimas novidades e dicas no seu email</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
                  Seja o primeiro a saber das novas transmissões desportivas em 4K, guias de configuração e atualizações de canais.
                </p>
              </div>
              
              {/*  Subscription Form  */}
              <form className="max-w-md mx-auto pt-space-xs" id="newsletter-form" data-onsubmit="event.preventDefault(); handleNewsletterSubmit();">
                <div className="flex flex-col sm:flex-row gap-space-2xs">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined text-outline absolute left-space-sm top-1/2 -translate-y-1/2 text-lg">mail</span>
                    <input className="w-full bg-surface-container-high text-on-surface font-body-md text-body-md rounded-xl pl-10 pr-space-sm py-space-sm placeholder-outline focus:outline-none focus:bg-surface-bright transition-colors" id="newsletter-email" placeholder="O seu endereço de email" required type="email"/>
                  </div>
                  <button className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-xl font-label-md text-label-md bg-primary text-on-primary hover:bg-primary-fixed transition-all duration-200 shadow-md hover:scale-102 shrink-0" id="newsletter-btn" type="submit">
                    Subscrever Newsletter
                  </button>
                </div>
                <p className="hidden text-primary font-label-sm text-label-sm mt-space-xs" id="newsletter-status">
                  Obrigado! A sua subscrição foi confirmada com sucesso.
                </p>
              </form>
              <p className="font-body-sm text-body-sm text-outline flex items-center justify-center gap-space-2xs">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>Zero spam. Apenas atualizações de canais e ofertas exclusivas para subscritores.</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <script  dangerouslySetInnerHTML={{ __html: `
        function handleNewsletterSubmit() {
          const emailInput = document.getElementById('newsletter-email');
          const statusText = document.getElementById('newsletter-status');
          const submitBtn = document.getElementById('newsletter-btn');

          if (emailInput && emailInput.value) {
            submitBtn.innerText = 'Subscrito!';
            submitBtn.classList.add('bg-primary-container');
            statusText.classList.remove('hidden');
            emailInput.disabled = true;
            setTimeout(() => {
              emailInput.value = '';
            }, 2000);
          }
        }

        // Filter pills micro-interaction
        document.querySelectorAll('.filter-pill').forEach(pill => {
          pill.addEventListener('click', function() {
            document.querySelectorAll('.filter-pill').forEach(p => {
              p.classList.remove('bg-primary', 'text-on-primary', 'shadow-md');
              p.classList.add('bg-surface-container', 'text-on-surface-variant');
            });
            this.classList.remove('bg-surface-container', 'text-on-surface-variant');
            this.classList.add('bg-primary', 'text-on-primary', 'shadow-md');
          });
        });
      ` }} />
    </>
  );
}
