// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    type: 'tecnica',
    message: ''
  });

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    const waText = `*NOVO PEDIDO DE SUPORTE*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Dispositivo:* ${formData.device}\n*Tipo:* ${formData.type}\n\n*Mensagem:*\n${formData.message}`;
    const url = getWhatsAppUrl(waText);
    window.open(url, '_blank');
  };

  return (
    <>
<main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">
{/*  Decorative Ambient Glows  */}
<div className="relative w-full overflow-hidden">
<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary/10 via-primary-container/5 to-transparent blur-3xl opacity-70"></div>
<div className="pointer-events-none absolute top-96 -right-32 w-96 h-96 bg-secondary-container/10 blur-3xl rounded-full"></div>
<div className="pointer-events-none absolute top-[1100px] -left-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
{/*  1. Support Header & Live Search Bar  */}
<section className="relative z-10 pt-space-2xl pb-space-3xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">
{/*  Live Status Pill  */}
<div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-high shadow-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Apoio ao Cliente 24/7 • Centro de Ajuda</span>
<span className="hidden sm:inline-block text-outline-variant">•</span>
<span className="hidden sm:inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-sm text-primary">bolt</span> 
            Tempo Médio: &lt; 5 min
          </span>
</div>
{/*  Section Title & Lead  */}
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
          Como podemos <span className="text-primary">ajudar?</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Encontre respostas rápidas a dúvidas frequentes, consulte os nossos manuais de configuração ou fale em direto com a nossa equipa especializada em Portugal.
        </p>
{/*  Prominent Search Box  */}
<div className="w-full max-w-2xl pt-space-sm">
<div className="relative flex items-center bg-surface-container-highest/90 backdrop-blur-md rounded-xl shadow-xl transition-all duration-300 focus-within:shadow-[0_0_28px_rgba(104,219,169,0.25)] focus-within:bg-surface-container-high">
<div className="pl-space-md flex items-center pointer-events-none text-primary">
<span className="material-symbols-outlined text-2xl">search</span>
</div>
<input className="w-full py-space-md pl-space-sm pr-space-md bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none" id="supportSearchInput" placeholder="Escreva a sua dúvida (ex: configurar Smart TV, MB WAY, código Xtream)..." type="text"/>
<div className="pr-space-sm hidden sm:flex items-center">
<span className="px-space-xs py-1 rounded bg-surface-container text-outline font-label-sm text-label-sm">ESC</span>
</div>
</div>
{/*  Quick Search Tags  */}
<div className="flex flex-wrap items-center justify-center gap-space-xs pt-space-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm text-outline">Mais procurados:</span>
<button className="px-space-xs py-1 rounded bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-colors font-body-sm text-body-sm" data-onclick="filterFaq('Smart TV')" type="button">
              Samsung Tizen
            </button>
<button className="px-space-xs py-1 rounded bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-colors font-body-sm text-body-sm" data-onclick="filterFaq('LG webOS')" type="button">
              LG webOS
            </button>
<button className="px-space-xs py-1 rounded bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-colors font-body-sm text-body-sm" data-onclick="filterFaq('MB WAY')" type="button">
              MB WAY
            </button>
<button className="px-space-xs py-1 rounded bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-colors font-body-sm text-body-sm" data-onclick="filterFaq('Buffering')" type="button">
              Buffering / Travar
            </button>
</div>
</div>
</div>
</section>
{/*  2. High-Impact Quick Contact Channels  */}
<section className="relative z-10 pb-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/*  Card 1: WhatsApp (Featured Priority Channel)  */}
<div className="relative flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-high shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">chat</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded-full bg-primary/10 font-label-sm text-label-sm text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Em Direto Agora
              </span>
</div>
<div className="space-y-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">Suporte por WhatsApp</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Fale diretamente com um técnico em português de Portugal. Resposta média em menos de 5 minutos, ideal para apoio imediato em configuração.
              </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-lowest/80 flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary">schedule</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Todos os dias: 08h00 – 00h00</span>
<span className="font-body-sm text-body-sm text-outline">Inclui fins de semana e feriados em Portugal</span>
</div>
</div>
</div>
<div className="pt-space-lg">
<a className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200 shadow-[0_0_20px_rgba(37,164,117,0.35)]" href="https://wa.me/212763569826?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20IPTV Portugal TV%20TV" rel="noopener noreferrer" target="_blank">
<span>Iniciar Conversa no WhatsApp</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 2: Email & Support Ticket  */}
<div className="relative flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-high shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-2xl">mark_email_unread</span>
</div>
<span className="px-space-xs py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                Casos Complexos
              </span>
</div>
<div className="space-y-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">Apoio por Email &amp; Ticket</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Envie-nos uma mensagem detalhada para questões de conta, faturas com NIF português, migração de dispositivos ou dúvidas técnicas avançadas.
              </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-lowest/80 flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">mail</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-outline">Canal direto prioritário</span>
<span className="font-body-sm text-body-sm text-on-surface truncate font-semibold">suporte@iptvportugaltv.tv</span>
</div>
</div>
</div>
<div className="pt-space-lg">
<a className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md bg-surface-bright text-on-surface hover:bg-surface-container-highest transition-all duration-200" href="#contacto-formulario">
<span className="material-symbols-outlined text-lg">edit_note</span>
<span>Abrir Pedido de Apoio</span>
</a>
</div>
</div>
{/*  Card 3: Free 24h Trial Activation  */}
<div className="relative flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-high shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl"></div>
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-2xl">stars</span>
</div>
<span className="px-space-xs py-1 rounded bg-tertiary/20 text-tertiary font-label-sm text-label-sm">
                Sem Fidelização
              </span>
</div>
<div className="space-y-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">Ativação de Teste Grátis 24h</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ainda não é cliente? Peça a sua linha de teste gratuita sem necessidade de cartão de crédito e receba o acesso no seu email ou telemóvel em minutos.
              </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-lowest/80 flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">check_circle</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Acesso completo a canais 4K</span>
<span className="font-body-sm text-body-sm text-outline">Desporto, Cinema e Séries sem compromisso</span>
</div>
</div>
</div>
<div className="pt-space-lg">
<a className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-md" href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-lg">play_circle</span>
<span>Pedir Teste Rápido</span>
</a>
</div>
</div>
</div>
</section>
{/*  3. Telemetry / Health Indicator & Stats  */}
<section className="relative z-10 pb-space-3xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full">
<div className="bg-surface-container rounded-2xl p-space-lg lg:p-space-xl shadow-lg">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-inner">
<span className="material-symbols-outlined text-3xl">dns</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Estado da Rede &amp; Servidores: 100% Operacional</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nós de distribuição em Lisboa e Porto com latência média de 4.2ms.</p>
</div>
</div>
{/*  Micro Sparkline SVG & Telemetry Data  */}
<div className="flex items-center gap-space-xl flex-wrap">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-outline">Uptime (30 dias)</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">99.98%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-outline">Velocidade Mín.</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">15 Mbps (4K)</span>
</div>
{/*  Inline SVG Sparkline  */}
<div className="hidden sm:flex flex-col items-start">
<span className="font-label-sm text-label-sm uppercase text-outline mb-1">Estabilidade</span>
<svg className="text-primary overflow-visible" fill="none" height="28" viewBox="0 0 120 28" width="120">
<path d="M0 20 L20 18 L40 22 L60 14 L80 15 L100 8 L120 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
<circle cx="120" cy="10" fill="currentColor" r="3.5"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>
{/*  4. FAQ Categories Accordion & Guides  */}
<section className="relative z-10 pb-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full">
<div className="space-y-space-md text-left mb-space-2xl">
<div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">library_books</span>
          Base de Conhecimento
        </div>
<h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          Perguntas Frequentes &amp; Tutoriais de Apoio
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Selecione o tópico que procura. Criámos tutoriais passo-a-passo detalhados para cada televisor e sistema operativo.
        </p>
</div>
{/*  FAQ Category Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg" id="faqAccordionContainer">
{/*  Categoria 1: Configuração & Instalação  */}
<div className="faq-category-card bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm pb-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">tv_remote</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Configuração &amp; Instalação</h3>
<span className="font-body-sm text-body-sm text-outline">Smart TV, Box Android, Fire Stick e Apple TV</span>
</div>
</div>
{/*  Accordion Items  */}
<div className="space-y-space-xs pt-space-xs">
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como instalar em Smart TV Samsung (Tizen)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Basta aceder à loja de aplicações (Samsung Smart Hub), pesquisar por aplicações compatíveis como <strong className="text-on-surface">IBO Player Pro, Nanomid ou IPTV Smarters Pro</strong> e inserir as credenciais Xtream API enviadas no seu email após a ativação. O nosso suporte disponibiliza o guia visual em PDF.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como instalar em Smart TV LG (webOS)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Na LG Content Store, faça o download de aplicações recomendadas para webOS (ex: <strong className="text-on-surface">IBO Player, DuplexPlay ou Tivimate</strong>). Fornecemos a ativação da app e a sincronização automática da grelha de canais em direto sem precisar de ligar cabos adicionais.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Configurar na Xiaomi Mi Box ou Amazon Fire TV Stick?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Aceda à Google Play Store ou use a ferramenta Downloader na Fire TV. Recomendamos o <strong className="text-on-surface">TiviMate IPTV Player</strong> para a melhor experiência de navegação idêntica a uma box de operadora tradicional (com Guia TV EPG e zapping instantâneo).
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como carregar listas M3U e códigos Xtream API?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Os dados de acesso incluem: 1. URL do Servidor com proteção DNS nacional; 2. Nome de Utilizador; 3. Palavra-passe. Introduza estes 3 campos no menu "Xtream Codes API" da sua aplicação para descarregar canais e VOD automaticamente.
                </div>
</details>
</div>
</div>
</div>
{/*  Categoria 2: Problemas de Reprodução & Buffering  */}
<div className="faq-category-card bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm pb-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">speed</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Reprodução &amp; Buffering</h3>
<span className="font-body-sm text-body-sm text-outline">Otimização de rede e qualidade de transmissão</span>
</div>
</div>
{/*  Accordion Items  */}
<div className="space-y-space-xs pt-space-xs">
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>O que fazer se a transmissão parar ou encravar?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Recomendamos reiniciar o router da sua operadora (MEO, NOS, Vodafone) durante 30 segundos para renovar os túneis de rota. Se estiver por Wi-Fi de 2.4GHz, tente mudar para a banda de 5GHz ou ligar por cabo de rede Ethernet (RJ45).
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como alterar o leitor interno (VLC / ExoPlayer)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Nas definições (Settings) da aplicação, vá até "Player Settings" / "Stream Format" e selecione "Hardware Decoder" ou alterne entre o leitor nativo e o VLC. Isto resolve 95% de dessincronizações de áudio ou ecrã negro em canais 4K 50fps.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Recomendações de velocidade de internet mínima?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Para transmissões Full HD estáveis são necessários pelo menos 10 Mbps dedicados. Para eventos desportivos em direto 4K UHD com 50/60 fps recomendamos uma ligação estável com velocidade de pelo menos 25 Mbps e 'ping' inferior a 25ms.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como reiniciar a ligação com os servidores IPTV Portugal TV?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  No ecrã principal da sua app de televisão, selecione "Atualizar Lista" ou "Refresh Playlists". Caso o problema persista, contacte o suporte WhatsApp com o seu código de cliente para transferirmos a rota para um nó redundante.
                </div>
</details>
</div>
</div>
</div>
{/*  Categoria 3: Conta, Pagamentos & MB WAY  */}
<div className="faq-category-card bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm pb-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Conta, Pagamentos &amp; MB WAY</h3>
<span className="font-body-sm text-body-sm text-outline">Métodos de pagamento 100% seguros em Portugal</span>
</div>
</div>
{/*  Accordion Items  */}
<div className="space-y-space-xs pt-space-xs">
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como pagar com MB WAY com ativação imediata?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Basta selecionar a opção MB WAY no checkout e inserir o seu número de telemóvel português (+351). Irá receber de imediato uma notificação na app MB WAY do seu telemóvel para confirmar a transação. O serviço ativa automaticamente em segundos.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Pagamento por Multibanco (Entidade e Referência)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Geramos uma referência Multibanco oficial com Entidade, Referência e Montante exato, válida durante 48 horas. Poderá liquidar através do homebanking de qualquer banco português ou em qualquer caixa Multibanco da rede SIBS.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como renovar a minha subscrição existente?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Não é necessário configurar novamente as suas televisões. Basta solicitar a renovação com o seu nome de utilizador ou email. Os dias adicionais serão somados à sua validade atual sem interrupção de sinal.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Política de reembolso e cancelamento?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Oferecemos 7 dias de garantia incondicional de satisfação. Se o serviço não funcionar de acordo com os padrões prometidos no seu equipamento, devolvemos a totalidade do valor pago via transferência bancária ou MB WAY.
                </div>
</details>
</div>
</div>
</div>
{/*  Categoria 4: Lista de Canais & Conteúdo VOD  */}
<div className="faq-category-card bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm pb-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">movie</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Canais &amp; Filmes VOD</h3>
<span className="font-body-sm text-body-sm text-outline">Grelha nacional, EPG e catálogo de estreias</span>
</div>
</div>
{/*  Accordion Items  */}
<div className="space-y-space-xs pt-space-xs">
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Como solicitar a adição de um canal ou filme?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Os subscritores têm acesso ao canal de pedidos da comunidade. Se existir um filme, documentário ou temporada recente que pretenda ver, informe o apoio técnico que a nossa equipa procede à importação no prazo de 24 a 48 horas.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Atualização do Guia de Programação TV (EPG)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  O nosso Guia EPG é sincronizado automaticamente a cada 6 horas com os horários oficiais de emissão dos operadores em Portugal (RTP, SIC, TVI, canais desportivos e temáticos infantis).
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Ativar ou desativar canais de adultos (controlo parental)?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Por defeito, todas as linhas vêm com PIN de segurança de 4 dígitos ou com a categoria de adultos completamente bloqueada. Pode solicitar a remoção permanente ou alteração do PIN a qualquer momento no suporte.
                </div>
</details>
<details className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-space-sm cursor-pointer list-none select-none text-on-surface font-label-md text-label-md hover:text-primary transition-colors">
<span>Legendas em português nos filmes e séries?</span>
<span className="material-symbols-outlined text-outline group-open:rotate-180 group-open:text-primary transition-transform">expand_more</span>
</summary>
<div className="px-space-sm pb-space-sm text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                  Mais de 95% do nosso catálogo de Video-on-Demand inclui legendagem nativa em Português de Portugal (PT-PT) ou dobragem oficial para cinema em animação infantil.
                </div>
</details>
</div>
</div>
</div>
</div>
</section>
{/*  5. Interactive Contact Form Section  */}
<section className="relative z-10 pb-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full" id="contacto-formulario">
<div className="bg-surface-container-low rounded-3xl p-space-lg lg:p-space-3xl shadow-2xl relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
{/*  Left Col: Trust Points & Context  */}
<div className="lg:col-span-5 space-y-space-lg">
<div className="space-y-space-xs">
<span className="px-space-xs py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider inline-block">
                Apoio Personalizado
              </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Não encontrou o que procurava?
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Preencha o formulário com a sua questão. Um técnico de apoio dedicado analisará o seu pedido e responderá em menos de 15 minutos úteis.
              </p>
</div>
{/*  Trust Badge Box  */}
<div className="p-space-md rounded-2xl bg-surface-container space-y-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">verified</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Atendimento 100% em Português</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Sem respostas automáticas genéricas de robôs. Acompanhamos passo a passo até ter o seu serviço a correr perfeitamente na sua televisão.
              </p>
</div>
<div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-sm">lock</span>
<span>Dados encriptados sob o Regulamento Geral de Proteção de Dados (RGPD).</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-sm">schedule_send</span>
<span>Prioridade atribuída automaticamente a pedidos com telemóvel/WhatsApp.</span>
</div>
</div>
{/*  Visual Decorative Trust Card  */}
<div className="hidden lg:block relative rounded-2xl overflow-hidden h-44 bg-surface-container-high shadow-lg">
<div className="bg-cover bg-center w-full h-full" data-alt="A modern, high-tech customer support room with dual-monitor setups displaying glowing network metrics and customer tickets, shot with cinematic mood, deep obsidian shadows, and soft jade-green lighting highlights, representing reliable European streaming operations." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAHLu19_2Oz48dphMWbwLTxYRlyMksQGAYIqWWV6m19w6hpiGk3lDUntNdy2UVeaL8-GsFCOEgsdybddR4AmRQXmfwI0fgE9YSjIgmhTLtg_fVLscjWj-vxq74ZkkNK937SsZlkR2xSTNHGq0r_MB8xiMbmwnVZjNtc-ExEelkKDPBuAZ-e_F7I4OfBX-NQ4aL111tAp7wCfEc_a2fH2ssRfEPfLBe1lyW_23wCHCYl57XJjjqQdk9O\')' }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent p-space-md flex flex-col justify-end">
<span className="font-label-sm text-label-sm text-primary uppercase">Infraestrutura Nacional</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Monitorização ativa 24 horas por dia em território nacional</span>
</div>
</div>
</div>
{/*  Right Col: Contact Form  */}
<div className="lg:col-span-7 bg-surface-container rounded-2xl p-space-lg lg:p-space-xl shadow-xl">
<form className="space-y-space-md" id="supportContactForm" onSubmit={handleSupportSubmit}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Nome Completo  */}
<div className="space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="contactName">Nome Completo <span className="text-primary">*</span></label>
<input className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-bright transition-all" id="contactName" placeholder="ex: João Silva" required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
</div>
{/*  Email de Contacto  */}
<div className="space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="contactEmail">Email de Contacto <span className="text-primary">*</span></label>
<input className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-bright transition-all" id="contactEmail" placeholder="joao.silva@exemplo.pt" required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
</div>
</div>
<div className="grid grid-cols-1 gap-space-md">
{/*  Dispositivo Utilizado  */}
<div className="space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="contactDevice">Dispositivo Principal <span className="text-primary">*</span></label>
<select className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-bright transition-all cursor-pointer" id="contactDevice" required value={formData.device} onChange={(e) => setFormData({...formData, device: e.target.value})}>
<option className="text-outline" disabled value="">Selecione o seu aparelho</option>
<option className="bg-surface-container-high" value="samsung">Smart TV Samsung (Tizen)</option>
<option className="bg-surface-container-high" value="lg">Smart TV LG (webOS)</option>
<option className="bg-surface-container-high" value="firestick">Amazon Fire TV Stick</option>
<option className="bg-surface-container-high" value="androidtv">Box Android / Xiaomi Mi Box</option>
<option className="bg-surface-container-high" value="appletv">Apple TV / iPhone / iPad</option>
<option className="bg-surface-container-high" value="computador">Computador (Windows / Mac / Web)</option>
<option className="bg-surface-container-high" value="outro">Outro equipamento</option>
</select>
</div>
</div>
{/*  Tipo de Pedido  */}
<div className="space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="contactType">Tipo de Pedido <span className="text-primary">*</span></label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-1">
<label className={`flex items-center gap-2 p-space-xs rounded-lg text-on-surface font-body-sm text-body-sm cursor-pointer hover:bg-surface-bright transition-colors ${formData.type === 'tecnica' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high'}`}>
<input checked={formData.type === 'tecnica'} onChange={(e) => setFormData({...formData, type: e.target.value})} className="hidden" name="supportType" type="radio" value="tecnica"/>
<span className="material-symbols-outlined text-sm">build</span>
<span>Dúvida Técnica</span>
</label>
<label className={`flex items-center gap-2 p-space-xs rounded-lg text-on-surface font-body-sm text-body-sm cursor-pointer hover:bg-surface-bright transition-colors ${formData.type === 'faturacao' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high'}`}>
<input checked={formData.type === 'faturacao'} onChange={(e) => setFormData({...formData, type: e.target.value})} className="hidden" name="supportType" type="radio" value="faturacao"/>
<span className="material-symbols-outlined text-sm">receipt_long</span>
<span>Faturação</span>
</label>
<label className={`flex items-center gap-2 p-space-xs rounded-lg text-on-surface font-body-sm text-body-sm cursor-pointer hover:bg-surface-bright transition-colors ${formData.type === 'teste' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high'}`}>
<input checked={formData.type === 'teste'} onChange={(e) => setFormData({...formData, type: e.target.value})} className="hidden" name="supportType" type="radio" value="teste"/>
<span className="material-symbols-outlined text-sm">timer</span>
<span>Teste Grátis</span>
</label>
<label className={`flex items-center gap-2 p-space-xs rounded-lg text-on-surface font-body-sm text-body-sm cursor-pointer hover:bg-surface-bright transition-colors ${formData.type === 'outro' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high'}`}>
<input checked={formData.type === 'outro'} onChange={(e) => setFormData({...formData, type: e.target.value})} className="hidden" name="supportType" type="radio" value="outro"/>
<span className="material-symbols-outlined text-sm">help</span>
<span>Outro Assunto</span>
</label>
</div>
</div>
{/*  Mensagem detalhada  */}
<div className="space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="contactMessage">Mensagem Detalhada <span className="text-primary">*</span></label>
<textarea className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-bright transition-all" id="contactMessage" placeholder="Descreva o que está a acontecer com o máximo de pormenor (nome da aplicação, mensagem de erro ou código recebido)..." required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
</div>
{/*  Form Feedback Message (hidden by default)  */}
<div className="hidden p-space-sm rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center gap-space-sm" id="formSuccessMessage">
<span className="material-symbols-outlined">task_alt</span>
<span>Obrigado! O seu pedido foi registado com sucesso. Verifique o seu email ou WhatsApp dentro de instantes.</span>
</div>
{/*  Privacy Notice & Submit Button  */}
<div className="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
<p className="font-body-sm text-body-sm text-outline">
                  Os seus dados são confidenciais e nunca serão partilhados com terceiros.
                </p>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200 shadow-[0_0_20px_rgba(37,164,117,0.35)] shrink-0" type="submit">
<span className="material-symbols-outlined text-lg">send</span>
<span>Enviar Mensagem para o Suporte</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
{/*  6. Reassurance Banner & Satisfaction Pledge  */}
<section className="relative z-10 pb-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-[1440px] mx-auto w-full">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-surface-container-highest via-surface-container to-surface-container-lowest p-space-xl lg:p-space-2xl shadow-xl">
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex items-center gap-space-lg">
<div className="hidden md:flex w-20 h-20 rounded-2xl bg-primary-container/20 items-center justify-center text-primary shrink-0 shadow-lg">
<span className="material-symbols-outlined text-4xl">workspace_premium</span>
</div>
<div className="space-y-space-2xs text-center md:text-left">
<div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-sm">shield</span>
                Garantia IPTV Portugal TV
              </div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">
                A sua satisfação é a nossa prioridade número um.
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Equipa 100% portuguesa pronta para o ajudar em qualquer etapa da instalação. Do primeiro teste à televisão da sua sala de estar, nunca fica sozinho.
              </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200 shadow-lg" href="https://wa.me/212763569826" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-lg">forum</span>
<span>Apoio em Tempo Real</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl font-label-md text-label-md bg-surface-bright text-on-surface hover:bg-surface-container-highest transition-all duration-200" href="/precos">
<span>Ver Planos &amp; Preços</span>
<span className="material-symbols-outlined text-lg">arrow_outward</span>
</a>
</div>
</div>
</div>
</section>
</div>
{/*  Client-side Interactive Behaviors  */}
<script  dangerouslySetInnerHTML={{ __html: `
    // Live Search Filter for FAQs
    function setupFaqSearch() {
      const searchInput = document.getElementById('supportSearchInput');
      if (!searchInput) return;

      searchInput.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase().trim();
        const detailsList = document.querySelectorAll('#faqAccordionContainer details');
        
        detailsList.forEach(function(detail) {
          const summaryText = detail.querySelector('summary').textContent.toLowerCase();
          const contentText = detail.querySelector('div').textContent.toLowerCase();
          
          if (term === '' || summaryText.includes(term) || contentText.includes(term)) {
            detail.style.display = '';
            if (term !== '' && (summaryText.includes(term) || contentText.includes(term))) {
              detail.open = true;
            }
          } else {
            detail.style.display = 'none';
          }
        });
      });
    }

    // Quick tag search trigger
    window.filterFaq = function(keyword) {
      const searchInput = document.getElementById('supportSearchInput');
      if (searchInput) {
        searchInput.value = keyword;
        searchInput.dispatchEvent(new Event('input'));
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Form Submission Simulation
    window.handleSupportSubmit = function(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const successMsg = document.getElementById('formSuccessMessage');
      
      if (!submitBtn || !successMsg) return;

      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70');
      submitBtn.innerHTML = '<span className="material-symbols-outlined animate-spin text-lg">progress_activity</span><span>A enviar pedido...</span>';

      setTimeout(function() {
        submitBtn.style.display = 'none';
        successMsg.classList.remove('hidden');
        document.getElementById('supportContactForm').reset();
      }, 1200);
    };

    // ESC key clears search
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const searchInput = document.getElementById('supportSearchInput');
        if (searchInput && searchInput.value !== '') {
          searchInput.value = '';
          searchInput.dispatchEvent(new Event('input'));
        }
      }
    });

    // Initialize search listener
    setupFaqSearch();
  ` }} />
</div></main>

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
