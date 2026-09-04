import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Termos e Condições | IPTV Portugal TV - Melhor IPTV Portugal',
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
            Termos e Condições
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            Informações legais da IPTV Portugal TV.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400"><p>Bem-vindo à IPTV Portugal TV. Ao adquirir o nosso <strong>serviço IPTV</strong>, concorda com os seguintes termos:</p><p>1. Uso Pessoal: O serviço é estritamente para uso pessoal e não comercial. A partilha de listas M3U ou credenciais na internet ou com terceiros resultará no bloqueio automático da conta, sem direito a reembolso, pela nossa firewall de segurança.</p><p>2. Conexões Simultâneas: O limite de ecrãs simultâneos estipulado no plano que escolheu deve ser respeitado. O uso em dispositivos extra que ultrapassem este limite causará quebras no serviço de ambos os ecrãs.</p><p>3. Qualidade do Serviço: Fornecemos o melhor esforço para garantir 99.9% de uptime. No entanto, o streaming depende muito da qualidade da sua operadora de internet (ISP) local. Aconselhamos a realização do nosso teste gratuito antes de efetuar qualquer pagamento.</p><p>Reservamo-nos o direito de atualizar e alterar estes Termos e Condições sem aviso prévio.</p></div>
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
                E se não renovar a mensalidade?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Se não efetuar o pagamento de renovação até ao fim do seu plano, a subscrição será simplesmente desativada sem quaisquer juros, dívidas ou penalizações. Não existe fidelização.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                O serviço é garantido a 100%?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Trabalhamos com os melhores datacenters. No entanto, por a tecnologia depender diretamente da internet pública e do seu operador, garantimos um uptime de 99%, excluindo manutenções ou problemas da sua rede.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Existem reembolsos após ativação?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Devido à natureza digital e de ativação imediata do nosso serviço, não emitimos reembolsos depois de a conta IPTV ter sido gerada. Por isso, aconselhamos vivamente o nosso teste de 24 horas grátis.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Posso utilizar VPN?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim, a IPTV Portugal TV é 100% compatível com a maioria das VPNs comerciais. Recomendamos o uso de VPNs caso o seu fornecedor de internet aplique 'Traffic Shaping' (bloqueios) em horas de jogos.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
