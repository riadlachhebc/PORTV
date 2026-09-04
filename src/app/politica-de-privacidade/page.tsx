import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidade | IPTV Portugal TV - Melhor IPTV Portugal',
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
            Política de Privacidade
          </h1>
          <p className="text-lg text-emerald-100/70 font-medium">
            Informações legais da IPTV Portugal TV.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400"><p>A proteção dos seus dados pessoais é uma prioridade fundamental para a IPTV Portugal TV.</p><p>Apenas recolhemos os dados estritamente necessários para o funcionamento e fornecimento da sua <strong>assinatura IPTV Portugal</strong> (e-mail, nome, detalhes técnicos básicos da app que utiliza). Não partilhamos, vendemos ou cedemos qualquer informação pessoal a terceiros.</p><p>Todos os pagamentos realizados no nosso site são processados através de gateways de pagamento encriptadas de terceiros (como referências MB/MBWAY ou gateways seguras de cartões), o que significa que nunca armazenamos os detalhes do seu cartão de crédito/débito nos nossos servidores.</p><p>Pode solicitar a eliminação total da sua conta e registos a qualquer momento contactando o nosso suporte.</p></div>
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
                Os meus dados são partilhados com quem?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Apenas partilhamos as informações mínimas estritamente necessárias com os nossos parceiros de processamento de pagamento seguros (para efeitos de validação da transação). Nunca com fins de marketing.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Como sei que o meu pagamento é seguro?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Utilizamos ligações encriptadas (SSL/TLS) e métodos locais oficiais, como referências MB, garantindo que não temos acesso direto a nenhuns dados bancários.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Quanto tempo guardam a minha conta?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                A sua conta permanece no nosso sistema para que possa renovar no futuro. Contudo, as contas inativas por mais de 12 meses poderão ser permanentemente eliminadas por razões de espaço.
              </div>
            </details>
            <details className="group bg-surface-container rounded-2xl border border-white/[0.05] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-headline-sm font-semibold text-white">
                Posso pedir para apagar os meus dados agora?
                <span className="material-symbols-outlined text-emerald-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                Sim. Se decidir não renovar a sua subscrição, basta contactar-nos e eliminaremos o seu e-mail e registo da nossa base de dados imediatamente após confirmação.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
