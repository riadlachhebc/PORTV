import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'O Que É IPTV? Guia Completo do Serviço IPTV em Portugal',
  description: 'Descubra o que é IPTV Portugal, como funciona o serviço, dispositivos compatíveis, internet necessária e porque o IPTV é o futuro face à TV por cabo e satélite.',
  keywords: 'o que é iptv, iptv portugal, como funciona iptv, serviço iptv, iptv legal portugal, protocolo iptv, iptv vs cabo, iptv vs satélite',
  openGraph: {
    title: 'O Que É IPTV? Guia Completo do Serviço IPTV em Portugal',
    description: 'Descubra o que é IPTV Portugal, como funciona o serviço, dispositivos compatíveis e porque o IPTV é o futuro.',
    type: 'article',
    url: 'https://iptvportugaltv.net/o-que-e-iptv',
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "O Que É IPTV? Guia Completo do Serviço IPTV em Portugal",
      "description": "Explicação completa do serviço IPTV Portugal — como funciona, dispositivos compatíveis e vantagens face ao cabo e satélite.",
      "author": {
        "@type": "Organization",
        "name": "IPTV Portugal TV",
        "url": "https://iptvportugaltv.net"
      },
      "wordCount": 1850,
      "keywords": "iptv portugal, o que é iptv, como funciona iptv, iptv vs cabo, iptv legal portugal"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://iptvportugaltv.net" },
        { "@type": "ListItem", "position": 2, "name": "O Que É IPTV", "item": "https://iptvportugaltv.net/o-que-e-iptv" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "O que é IPTV?", "acceptedAnswer": { "@type": "Answer", "text": "IPTV (Internet Protocol Television) é a transmissão de sinais de televisão através da internet em vez de antenas ou cabos tradicionais. Permite ver canais ao vivo, filmes e séries em qualquer dispositivo inteligente." } },
        { "@type": "Question", "name": "O IPTV é diferente de serviços como a Netflix?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A Netflix oferece apenas conteúdo a pedido (VOD). O IPTV oferece, para além de um vasto catálogo de VOD, canais de televisão em direto, como desporto e notícias em tempo real." } },
        { "@type": "Question", "name": "Qual a internet necessária para o IPTV?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos uma ligação estável de pelo menos 15 Mbps para emissões em HD e 30 Mbps para conteúdo em 4K. Ligações por cabo de rede (Ethernet) são preferíveis ao Wi-Fi." } },
        { "@type": "Question", "name": "É legal usar IPTV em Portugal?", "acceptedAnswer": { "@type": "Answer", "text": "A tecnologia IPTV é 100% legal, sendo a mesma utilizada pelas operadoras nacionais (MEO, NOS, Vodafone). A legalidade do serviço depende sempre dos direitos de transmissão dos conteúdos visualizados." } }
      ]
    }
  ]
};

export default function Page() {
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar à página inicial
            </Link>
          </div>
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-4 block">Guia Definitivo 2026</span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            O Que É IPTV? Explicamos o Futuro da TV em Portugal
          </h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Desde o seu funcionamento básico até à comparação direta com as operadoras tradicionais de cabo e satélite. Descubra porque milhares de portugueses estão a mudar para o IPTV.
          </p>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          
          <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400 prose-li:text-slate-300">
            
            <p className="text-xl leading-relaxed font-medium text-slate-200">
              Se tem prestado atenção ao mundo da tecnologia e do entretenimento nos últimos anos, certamente já ouviu falar da revolução do <strong>IPTV Portugal</strong>. Com a crescente insatisfação relativamente aos preços das mensalidades das operadoras de cabo, e a flexibilidade procurada pelas novas gerações, a televisão tradicional está a perder terreno para a transmissão via internet.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O que significa IPTV? A definição simples</h2>
            <p>
              A sigla <strong>IPTV</strong> significa <em>Internet Protocol Television</em> (Televisão por Protocolo de Internet). Em termos simples, ao invés de receber os canais de televisão através de um cabo de fibra ótica dedicado à operadora ou através de uma antena parabólica no telhado, recebe a transmissão televisiva em direto <strong>através da sua ligação comum à internet</strong>.
            </p>
            <p>
              Sempre que assiste a um vídeo no YouTube ou vê um filme na Netflix, está a utilizar a transmissão de dados pela internet (streaming). O IPTV pega nessa exata tecnologia e aplica-a à <strong>televisão em direto</strong>. Os sinais de televisão tradicionais são convertidos em dados digitais comprimidos, enviados pela internet, e descodificados na sua televisão em milissegundos.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como Funciona a Arquitetura do IPTV?</h2>
            <p>
              Numa emissão de TV tradicional, todos os canais são transmitidos simultaneamente pelo cabo ou satélite. A sua box de TV simplesmente "afina" para a frequência do canal que escolheu, descartando os outros. Isto requer uma enorme largura de banda física.
            </p>
            <p>
              Com o IPTV, a abordagem é muito mais inteligente e eficiente:
            </p>
            <ul>
              <li><strong>Armazenamento Central:</strong> O fornecedor de IPTV recebe o sinal original via satélite ou fibra e codifica-o num servidor central.</li>
              <li><strong>Transmissão a Pedido (Multicast/Unicast):</strong> Apenas o canal que o utilizador seleciona é enviado pela internet para o seu ecrã. Quando muda de canal, o sistema IPTV para de enviar o canal A e passa a enviar o canal B.</li>
              <li><strong>Descodificação na Ponta:</strong> O seu dispositivo (Smart TV, PC, Telemóvel) usa uma app para descodificar os dados e mostrar o vídeo em 4K.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">IPTV vs. TV por Cabo e Satélite: Porquê Mudar?</h2>
            <p>Muitos portugueses perguntam-se se vale a pena cancelar os seus caros pacotes de operadora para aderir a um serviço IPTV. Aqui está um comparativo detalhado:</p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse min-w-[600px] not-prose">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.02]">
                    <th className="p-4 font-bold text-slate-200">Funcionalidade</th>
                    <th className="p-4 font-bold text-emerald-400 bg-emerald-500/10">IPTV Premium</th>
                    <th className="p-4 font-bold text-slate-400">TV por Cabo/Satélite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  <tr>
                    <td className="p-4 text-slate-300">Necessidade de Equipamento</td>
                    <td className="p-4 text-emerald-300 bg-emerald-500/5">Nenhum (usa a sua Smart TV)</td>
                    <td className="p-4 text-slate-400">Instalação de Box obrigatória</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Canais Internacionais e Premium</td>
                    <td className="p-4 text-emerald-300 bg-emerald-500/5">Geralmente Incluídos (Milhares)</td>
                    <td className="p-4 text-slate-400">Pagos como pacotes adicionais</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Mobilidade Geográfica</td>
                    <td className="p-4 text-emerald-300 bg-emerald-500/5">Funciona em qualquer parte do mundo</td>
                    <td className="p-4 text-slate-400">Preso à morada de instalação</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Fidelização e Contratos</td>
                    <td className="p-4 text-emerald-300 bg-emerald-500/5">Sem fidelização (pago a pedido)</td>
                    <td className="p-4 text-slate-400">Contratos rígidos de 24 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Três Grandes Vantagens de Comprar IPTV Portugal</h2>
            
            <h3>1. VOD Integrado (Video on Demand)</h3>
            <p>Um dos fatores mais atrativos de assinar o <strong>melhor serviço IPTV Portugal</strong> é a combinação de canais ao vivo com plataformas VOD. Não precisa de mudar de aplicação para aceder aos filmes acabados de sair no cinema ou às séries das plataformas de streaming de renome (Netflix, HBO, Disney). Fica tudo reunido num único catálogo massivo.</p>

            <h3>2. Visualização Multidispositivo</h3>
            <p>Se a televisão da sala está ocupada, não há problema. O IPTV pode ser acedido através do seu telemóvel Android, do seu iPad, ou do seu computador portátil no quarto. Pode, inclusive, pedir planos com ecrãs simultâneos para que toda a família desfrute ao mesmo tempo.</p>

            <h3>3. EPG (Guia TV Eletrónico)</h3>
            <p>Muitas pessoas receiam perder o famoso "Guia de TV" quando mudam para o IPTV. A realidade é que os sistemas IPTV modernos incluem um EPG altamente detalhado, permitindo saber exatamente o que está a passar, o que vem a seguir, e até agendar gravações se a app o permitir.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O Que Preciso para Começar?</h2>
            <p>A beleza da televisão por protocolo de internet é que a barreira de entrada é virtualmente nula se já possui tecnologia em casa. Precisa de três elementos essenciais:</p>
            <ol>
              <li><strong>Ligação à Internet:</strong> A velocidade é rei. Para canais Standard Definition (SD), 10 Mbps bastam. Contudo, hoje em dia, quase todos os canais são transmitidos em <strong>Full HD ou 4K</strong>. Recomendamos uma ligação estável (idealmente por cabo) superior a 30 Mbps para garantir zero "buffers".</li>
              <li><strong>Dispositivo:</strong> Uma Smart TV (Samsung Tizen, LG WebOS, Android TV), um computador, um telemóvel, ou uma box dedicada como a Apple TV ou Fire Stick.</li>
              <li><strong>Aplicação IPTV:</strong> Existem centenas de opções nas lojas de aplicações, como TiviMate, IBO Player, IPTV Smarters Pro, entre outras.</li>
            </ol>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 mt-12 mb-12">
              <h3 className="text-emerald-400 mt-0">O Futuro Chegou</h3>
              <p className="mb-0">
                Resumindo: <strong>O que é IPTV?</strong> É, sem dúvida, o modelo standard que definirá a televisão nas próximas décadas. A flexibilidade, aliada a custos reduzidos e catálogos vastos, torna os modelos de cabo obsoletos. Se quer descobrir esta revolução tecnológica na primeira pessoa, experimente a <strong>IPTV Portugal TV</strong> através do nosso teste gratuito.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 relative bg-surface-container-low border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto pt-16">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-3xl font-bold text-white mb-3">Perguntas Frequentes sobre IPTV</h2>
            <p className="text-slate-400">As dúvidas mais comuns respondidas diretamente pela nossa equipa de especialistas.</p>
          </div>
          <div className="space-y-4">
            
            <details className="group bg-surface rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                O IPTV é legal em Portugal?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/[0.05] mt-4 pt-4">
                A tecnologia IPTV é 100% legal, sendo a mesma utilizada pelas operadoras nacionais (MEO, NOS, Vodafone). A legalidade do serviço depende sempre dos direitos de transmissão dos conteúdos visualizados.
              </div>
            </details>
            
            <details className="group bg-surface rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                O IPTV é diferente de serviços como a Netflix?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/[0.05] mt-4 pt-4">
                Sim. A Netflix oferece apenas conteúdo a pedido (VOD). O IPTV oferece, para além de um vasto catálogo de VOD, canais de televisão em direto, como desporto e notícias em tempo real.
              </div>
            </details>
            
            <details className="group bg-surface rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                O sinal bloqueia em jogos de futebol importantes?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/[0.05] mt-4 pt-4">
                Com servidores de fraca qualidade, sim. Contudo, se escolher o nosso serviço premium, tem acesso a servidores com tecnologia Anti-Freeze 9.0 em Portugal, que efetuam um balanceamento de carga automático para garantir emissões estáveis independentemente da quantidade de visualizadores simultâneos.
              </div>
            </details>

            <details className="group bg-surface rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Preciso de ser perito em informática para instalar?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/[0.05] mt-4 pt-4">
                De forma alguma. O processo de instalação envolve apenas descarregar uma aplicação para a sua televisão ou telemóvel e introduzir os dados de acesso (Nome de Utilizador e Palavra-passe) que nós enviamos por e-mail. Disponibilizamos tutoriais e apoio via WhatsApp.
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* Call to Action Footer */}
      <section className="w-full py-16 bg-emerald-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Pronto para a Revolução IPTV?</h2>
          <p className="text-emerald-100 mb-8">Experimente o nosso serviço sem qualquer custo durante 24 horas. Verifique por si próprio a estabilidade do 4K.</p>
          <Link href={getWhatsAppUrl(WA_MESSAGES.freeTest)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-obsidian hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:scale-105">
            <span className="material-symbols-outlined">play_arrow</span>
            Pedir Teste Gratuito Agora
          </Link>
        </div>
      </section>
      
    </main>
  );
}
