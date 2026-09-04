import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Perguntas Frequentes (FAQ) | IPTV Portugal TV - Melhor IPTV Portugal',
  description: 'Centro de ajuda e respostas rápidas para todas as suas questões sobre IPTV.',
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
            Centro de Ajuda / FAQ
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium max-w-2xl">
            Encontre aqui as respostas às dúvidas mais comuns sobre o nosso serviço, organizadas por categorias.
          </p>
        </div>
      </section>

      {/* Main Content - Categories */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Categoria: Instalação e Aplicações */}
          <div>
            <h3 className="font-headline-sm text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-3xl">build</span>
              Instalação e Aplicações
            </h3>
            <div className="space-y-4">
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Onde coloco a lista M3U ou Xtream Codes?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Depende da aplicação. Recomendamos usar o método Xtream Codes (Host, Username, Password) em apps como TiviMate, IBO Player ou IPTV Smarters. Estes dados são enviados diretamente para o seu WhatsApp/E-mail após a compra.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Qual é a melhor aplicação para Smart TV LG ou Samsung?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Atualmente, recomendamos o IBO Player e o HotPlayer. Ambas têm excelente desempenho, suportam EPG (Guia de Programação) e oferecem um período de teste gratuito para experimentar a interface.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Posso usar o serviço em mais de um dispositivo ao mesmo tempo?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Isso depende do plano que escolher. Os planos base incluem 1 ecrã. Pode adicionar ecrãs extra (2 ou 3) no momento da compra na nossa página de Preços para visualizar em múltiplos dispositivos em simultâneo.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Funciona num computador (Windows ou Mac)?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sim. Para computadores, recomendamos o uso da aplicação IPTV Smarters Pro Desktop, ou do clássico VLC Media Player usando o seu link M3U pessoal.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  As aplicações de IPTV são gratuitas?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Muitas são gratuitas (como o SS IPTV ou VLC), mas as apps mais premium (como TiviMate Premium ou IBO Player) requerem o pagamento de uma licença (geralmente cerca de 7€ num pagamento único e vitalício) ao criador da aplicação.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Como posso aceder ao serviço no telemóvel?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Basta instalar a app IPTV Smarters Pro (para Android e iPhone) ou iPlayTV (para iPhone). Após a instalação, coloque os seus dados de Xtream Codes enviados por nós e a lista será descarregada.
                </div>
              </details>
            </div>
          </div>

          {/* Categoria: Pagamentos e Assinaturas */}
          <div>
            <h3 className="font-headline-sm text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-3xl">credit_card</span>
              Pagamentos e Assinaturas
            </h3>
            <div className="space-y-4">
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Quais são os métodos de pagamento aceites?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Aceitamos MB WAY (método mais rápido e popular), Referência Multibanco (Pagamento de Serviços), Cartão de Crédito/Débito (Visa, Mastercard) e Revolut.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Existe fidelização ou débito direto?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Não existe qualquer fidelização, contrato ou débito direto. Todos os pagamentos são pré-pagos. Paga o período escolhido (ex: 6 meses) e no fim é notificado para renovar manualmente se desejar continuar.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Quanto tempo demora a receber os dados após pagar?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  O nosso sistema é automatizado para pagamentos por MB WAY e Cartão, garantindo o envio do acesso para o seu e-mail ou WhatsApp em apenas 1 a 5 minutos.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Posso experimentar antes de comprar?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sim, oferecemos um teste totalmente gratuito de 24 horas. É a melhor forma de verificar a compatibilidade com a sua internet e explorar a qualidade de imagem e estabilidade do serviço.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  A mensalidade sofre alterações de preço no futuro?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Garantimos que o preço que contratou será o mesmo aplicado em futuras renovações. Mantemos uma política de transparência e estabilidade tarifária para os nossos clientes leais.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Posso cancelar a meio da assinatura e pedir reembolso?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Devido à natureza dos serviços digitais pré-pagos, as ativações são finais. Daí ser altamente recomendado o uso do nosso Teste Grátis de 24 horas antes de efetuar qualquer compromisso monetário.
                </div>
              </details>
            </div>
          </div>

          {/* Categoria: Qualidade e Estabilidade */}
          <div>
            <h3 className="font-headline-sm text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-3xl">speed</span>
              Qualidade e Estabilidade
            </h3>
            <div className="space-y-4">
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Qual é a velocidade de internet recomendada?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Para uma visualização fluida em Full HD e 4K, aconselhamos uma ligação mínima de 30 Mbps (idealmente por cabo Ethernet em vez de Wi-Fi, se for na televisão principal).
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  O que é a tecnologia Anti-Freeze 9.0?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  É a nossa tecnologia exclusiva de distribuição de carga. Os nossos servidores (situados em Lisboa, Porto e Madrid) criam múltiplas rotas de ligação para contornar afunilamentos ("traffic shaping") das operadoras.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  O serviço encrava (buffering) nos dias de clássico?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Graças aos nossos clusters redundantes dedicados, temos uma taxa de uptime de 99.9% durante os grandes eventos de futebol. Contudo, em alguns raros casos, poderá precisar de ativar uma VPN (fornecida gratuitamente no plano VIP) se a sua operadora (NOS/MEO/VDF) bloquear ativamente a porta na sua zona.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Posso e devo utilizar uma VPN?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Não é obrigatório, mas é altamente recomendado para clientes MEO e NOS. A nossa plataforma é 100% livre e compatível com SurfShark, NordVPN, CyberGhost e outras VPNs de renome.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Há desfasamento de imagem (Delay) em relação à TV normal?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Todos os serviços de streaming IPTV do mundo têm um atraso natural (cerca de 10 a 25 segundos) em relação ao satélite devido à codificação do sinal online. A nossa rede Ibérica minimiza isto para os limites do tecnologicamente possível.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  É melhor usar Cabo de Rede ou Wi-Fi?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sempre que possível, deve ligar a sua Smart TV ou Box ao router utilizando um cabo de rede (Ethernet). O Wi-Fi sofre de interferências (paredes, micro-ondas, telemóveis) que podem causar quebras microscópicas (micro-buffering) na transmissão.
                </div>
              </details>
            </div>
          </div>

          {/* Categoria: Canais e Conteúdo VOD */}
          <div>
            <h3 className="font-headline-sm text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-3xl">play_circle</span>
              Canais e Conteúdo VOD
            </h3>
            <div className="space-y-4">
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Têm os canais Sport TV, BTV e Eleven (DAZN)?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sim, todos os canais desportivos nacionais e internacionais Premium (incluindo Espanha, Inglaterra, Brasil) estão incluídos e transmitidos em alta qualidade e sem quebras.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  As séries e filmes são atualizados frequentemente?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Diariamente! A nossa secção VOD (Video on Demand) adiciona os últimos lançamentos do cinema mundial e os mais recentes episódios de séries nas plataformas Netflix, HBO, Disney+, etc.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Os filmes têm áudio e legendas em Português?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sim. Os filmes e séries dispõem de áudio original e/ou dobrado em português, bem como legendas rigorosas em PT-PT perfeitamente sincronizadas.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Posso organizar ou esconder certas categorias?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Exatamente. Nas aplicações mais recomendadas (TiviMate, IBO Player) pode gerir categorias inteiras. Se não quiser ver, por exemplo, canais árabes ou a categoria XXX (Adultos), basta desativar essa pasta na aplicação.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  A categoria de Adultos (XXX) tem controlo parental?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Sim. Por norma as aplicações têm um sistema nativo de PIN (Controlo Parental). Se preferir, pode também solicitar ao nosso suporte a remoção total da pasta Adultos da sua lista.
                </div>
              </details>
              <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                  Disponibilizam a opção de Gravação e Catch-Up (Gravações 7 dias)?
                  <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  Os nossos servidores incluem a funcionalidade de Catch-Up (Arquivo) nos canais mais importantes, permitindo-lhe puxar atrás no tempo. Além disso, a aplicação TiviMate permite-lhe gravar qualquer canal na sua pen USB pessoal conectada à sua Box.
                </div>
              </details>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
