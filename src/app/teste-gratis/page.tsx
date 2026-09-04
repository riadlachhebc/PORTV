// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    message: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `*PEDIDO DE TESTE GRÁTIS 24H*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Dispositivo:* ${formData.device}\n*Notas/App:* ${formData.message || 'N/A'}`;
    const url = getWhatsAppUrl(waText);
    window.open(url, '_blank');
  };
  return (
    <>
<main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">
{/*  Hero Section  */}
<section className="relative w-full overflow-hidden pb-space-3xl" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(104, 219, 169, 0.12) 0%, rgba(5, 20, 36, 0.95) 45%, #040911 100%)' }}>
{/*  Ambient Radial Glows  */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-48 right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-96 left-10 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10 pt-space-xl">
{/*  Breadcrumb / Badge Status  */}
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-2xl">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-high shadow-md mb-space-md">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">✦ Ativação rápida em menos de 10 minutos • Suporte dedicado</span>
</div>
<h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-tight mb-space-md">
          Experimente grátis <span className="text-primary">antes de subscrever</span>.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
          Peça o seu teste gratuito e descubra a estabilidade, a fluidez e a qualidade suprema da nossa experiência de televisão antes de escolher o seu plano.
        </p>
{/*  Trust Signals Bar  */}
<div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs text-on-surface-variant font-label-md text-label-md"><div className="inline-flex items-center gap-space-2xs px-3 py-1 rounded-full bg-surface-container-high/60 border border-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="text-on-surface font-medium">Sem cartão de crédito</span>
</div>
<div className="inline-flex items-center gap-space-2xs px-3 py-1 rounded-full bg-surface-container-high/60 border border-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">timer</span>
<span className="text-on-surface font-medium">Ativação em &lt; 10 min</span>
</div>
<div className="inline-flex items-center gap-space-2xs px-3 py-1 rounded-full bg-surface-container-high/60 border border-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
<span className="text-on-surface font-medium">Apoio nacional em português 🇵🇹</span>
</div>
<div className="inline-flex items-center gap-space-2xs px-3 py-1 rounded-full bg-surface-container-high/60 border border-surface-variant">
<span className="material-symbols-outlined text-secondary text-[18px]">4k</span>
<span className="text-on-surface font-medium">4K UHD 60FPS</span>
</div></div>
</div>
{/*  Main Form Container  */}
<div className="relative max-w-2xl mx-auto">
{/*  Decorative Ambient Underglow  */}
<div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-xl pointer-events-none opacity-70"></div>
{/*  Form Card Wrapper  */}
<div className="relative bg-surface-container-low rounded-xl p-space-lg md:p-space-2xl shadow-xl shadow-black/60" style={{ background: 'rgba(11, 21, 36, 0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(104, 219, 169, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(37, 164, 117, 0.15)' }}>
{/*  State: Active Form  */}
<div className="transition-all duration-300" id="trial-form-container">
<div className="mb-space-lg text-center md:text-left">
<div className="flex items-center justify-between gap-space-md mb-space-2xs">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Peça o seu teste grátis</h2>
<span className="hidden sm:inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  24 Horas Livres
                </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Preencha os dados abaixo e entraremos em contacto consigo com as credenciais imediatas para iniciar a emissão.
              </p>
</div>
<form className="space-y-space-md" id="free-trial-form" onSubmit={handleSubmit}>
{/*  Field 1 & 2: Nome e Email  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="nome">
<span>Nome Completo</span>
<span className="text-primary font-label-sm text-label-sm">*</span>
</label>
<div className="relative">
<input className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md" id="nome" name="nome" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Ex.: Rodrigo Silva" required style={{ backgroundColor: '#07101c', border: '1px solid #1E293B' }} type="text"/>
</div>
<p className="hidden font-body-sm text-body-sm text-secondary pt-1 flex items-center gap-1" id="error-nome">
<span className="material-symbols-outlined text-[14px]">error</span> Por favor, introduza o seu nome completo.
                  </p>
</div>
<div className="flex flex-col space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="email">
<span>Endereço de Email</span>
<span className="text-primary font-label-sm text-label-sm">*</span>
</label>
<div className="relative">
<input className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="nome@exemplo.pt" required style={{ backgroundColor: '#07101c', border: '1px solid #1E293B' }} type="email"/>
</div>
<p className="hidden font-body-sm text-body-sm text-secondary pt-1 flex items-center gap-1" id="error-email">
<span className="material-symbols-outlined text-[14px]">error</span> Introduza um endereço de email válido.
                  </p>
</div>
</div>
{/*  Field 3 & 4: Telemóvel e Dispositivo  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="dispositivo">
<span>Dispositivo Principal</span>
<span className="text-primary font-label-sm text-label-sm">*</span>
</label>
<div className="relative">
<select className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md appearance-none cursor-pointer" id="dispositivo" name="dispositivo" required style={{ backgroundColor: '#07101c', border: '1px solid #1E293B' }} value={formData.device} onChange={(e) => setFormData({...formData, device: e.target.value})}>
<option className="text-outline" disabled value="">Selecione o seu equipamento...</option>
<option className="bg-surface text-on-surface" value="smart-tv">Smart TV (Samsung Tizen / LG webOS)</option>
<option className="bg-surface text-on-surface" value="android-tv">Android TV / Xiaomi Box / Google TV</option>
<option className="bg-surface text-on-surface" value="fire-tv">Amazon Fire TV Stick</option>
<option className="bg-surface text-on-surface" value="apple-tv">Apple TV</option>
<option className="bg-surface text-on-surface" value="smartphone">Telemóvel (iPhone / Android)</option>
<option className="bg-surface text-on-surface" value="tablet">Tablet (iPad / Galaxy Tab)</option>
<option className="bg-surface text-on-surface" value="pc">Computador (Windows PC / Mac)</option>
<option className="bg-surface text-on-surface" value="outro">Outro Dispositivo</option>
</select>
<span className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                      expand_more
                    </span>
</div>
<p className="hidden font-body-sm text-body-sm text-secondary pt-1 flex items-center gap-1" id="error-dispositivo">
<span className="material-symbols-outlined text-[14px]">error</span> Por favor, escolha um dispositivo compatível.
                  </p>
</div>
</div>
{/*  Field 5: Mensagem Opcional  */}
<div className="flex flex-col space-y-space-2xs">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="mensagem">
<span>Notas Adicionais ou Aplicação Preferida</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Opcional</span>
</label>
<textarea className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md resize-none" id="mensagem" name="mensagem" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Ex.: Já tenho instalada a aplicação IPTV Smarters Pro na minha TV da sala..." rows="3" style={{ backgroundColor: '#07101c', border: '1px solid #1E293B' }}></textarea>
</div>
{/*  Checkbox: Termos  */}
<div className="pt-space-2xs">
<label className="flex items-start gap-space-sm cursor-pointer group select-none">
<input className="mt-1 w-4 h-4 rounded text-primary bg-surface-container focus:ring-0 focus:outline-none accent-primary cursor-pointer shrink-0" id="termos" name="termos" required type="checkbox" checked={formData.acceptTerms} onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}/>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors leading-relaxed">
                    Li e aceito a <a className="text-primary hover:underline font-label-sm" href="#">Política de Privacidade</a> e os <a className="text-primary hover:underline font-label-sm" href="#">Termos de Utilização</a> do serviço IPTV Portugal TV.
                  </span>
</label>
<p className="hidden font-body-sm text-body-sm text-secondary pt-1 flex items-center gap-1" id="error-termos">
<span className="material-symbols-outlined text-[14px]">error</span> É obrigatório aceitar os termos de serviço para prosseguir.
                </p>
</div>
{/*  Submit Button  */}
<div className="pt-space-sm">
<button className="w-full relative inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-xl font-label-md text-label-md bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:bg-primary-fixed transition-all duration-200 cursor-pointer" id="submit-btn" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }} type="submit">
<span className="material-symbols-outlined text-[20px]">bolt</span>
<span>Solicitar Teste Grátis de 24 Horas</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
{/*  Security Subtext  */}
<div className="pt-space-xs flex items-center justify-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant text-center">
<span className="material-symbols-outlined text-primary text-[18px]">lock</span>
<span>Os seus dados estão 100% protegidos e confidenciais. Nunca enviamos spam.</span>
</div>
</form>
</div>
{/*  State: Dynamic Success Feedback Card (Hidden by Default)  */}
<div className="hidden text-center py-space-lg space-y-space-lg" id="trial-success-container">
<div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/30 relative">
<span className="w-full h-full absolute rounded-full bg-primary/10 animate-ping"></span>
<span className="material-symbols-outlined text-primary text-[48px] relative z-10 font-bold">check_circle</span>
</div>
<div className="space-y-space-xs max-w-md mx-auto">
<h3 className="font-headline-lg text-headline-lg text-on-surface">Pedido enviado com sucesso!</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Obrigado pelo seu contacto. A nossa equipa técnica está a preparar as suas credenciais de streaming personalizadas.
              </p>
</div>
{/*  Next Steps Bento  */}
<div className="bg-surface-container rounded-xl p-space-md text-left space-y-space-sm">
<div className="font-label-md text-label-md text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">hourglass_top</span>
<span>O que vai acontecer a seguir?</span>
</div>
<ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
<span>Verifique o seu <strong>WhatsApp</strong> ou caixa de <strong>Email</strong> dentro de sensivelmente 10 minutos.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
<span>Receberá as instruções de configuração com URL do servidor, utilizador e palavra-passe dedicada.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
<span>O teste de 24 horas só começa a contar a partir do momento em que faz o primeiro login.</span>
</li>
</ul>
</div>
{/*  Action CTAs  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-xs">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200" href="https://wa.me/212763569826?text=Ol%C3%A1%2C%20acabei%20de%20pedir%20o%20meu%20teste%20gr%C3%A1tis%20na%20IPTV Portugal TV%20TV%21" rel="noopener noreferrer" target="_blank">
<img alt="Consultora de Apoio" className="w-6 h-6 rounded-full object-cover" src="/logo.webp"/>
<span>Falar no WhatsApp Agora</span>
</a>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" id="reset-form-btn" type="button">
<span className="material-symbols-outlined text-[18px]">refresh</span>
<span>Fazer Outro Pedido</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Value & Peace of Mind Highlights  */}
<section className="w-full py-space-2xl bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Benefit Card 1  */}
<div className="bg-surface-container-low rounded-xl p-space-lg flex items-start gap-space-md hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[28px]">flash_on</span>
</div>
<div className="space-y-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ativação Imediata</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Peça o seu acesso em poucos passos simples. Os dados chegam de forma rápida sem burocracias ou espera prolongada.
            </p>
</div>
</div>
{/*  Benefit Card 2  */}
<div className="bg-surface-container-low rounded-xl p-space-lg flex items-start gap-space-md hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[28px]">devices</span>
</div>
<div className="space-y-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Qualquer Ecrã</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Compatível com televisões Smart TV, boxes Android, Fire Sticks, telemóveis, tablets e computadores pessoais.
            </p>
</div>
</div>
{/*  Benefit Card 3  */}
<div className="bg-surface-container-low rounded-xl p-space-lg flex items-start gap-space-md hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[28px]">headset_mic</span>
</div>
<div className="space-y-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Apoio em Português</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              A nossa equipa nacional está disponível em tempo real para auxiliar no processo de instalação e esclarecer questões.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  How It Works Section  */}
<section className="w-full py-space-3xl bg-surface">
<div className="max-w-[1440px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center max-w-2xl mx-auto mb-space-2xl space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Simplicidade de Processo</span>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">Como funciona?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Comece a assistir aos seus conteúdos favoritos em alta definição com apenas três passos elementares.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl relative">{/*  Step 1  */}
<div className="relative bg-surface-container-low p-space-xl rounded-xl space-y-space-md flex flex-col justify-between border border-surface-container-high/50 hover:border-primary/30 transition-colors shadow-lg">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-display-hero text-headline-xl text-primary/30 font-extrabold">01</span>
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[24px]">edit_document</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Preencha o formulário</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      Indique o seu contacto de WhatsApp ou email e selecione o seu dispositivo principal de visualização em menos de um minuto.
    </p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">schedule</span> Tempo estimado: 1 min
    </span>
</div>
</div>
{/*  Step 2  */}
<div className="relative bg-surface-container-low p-space-xl rounded-xl space-y-space-md flex flex-col justify-between border border-surface-container-high/50 hover:border-primary/30 transition-colors shadow-lg">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-display-hero text-headline-xl text-primary/30 font-extrabold">02</span>
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[24px]">mark_email_read</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Receba as credenciais</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      A nossa equipa gera a sua conta de teste e envia os dados de acesso diretos via WhatsApp ou correio eletrónico com o guia de configuração.
    </p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">bolt</span> Ativação em menos de 10 min
    </span>
</div>
</div>
{/*  Step 3  */}
<div className="relative bg-surface-container-low p-space-xl rounded-xl space-y-space-md flex flex-col justify-between border border-surface-container-high/50 hover:border-secondary/30 transition-colors shadow-lg">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-display-hero text-headline-xl text-secondary/30 font-extrabold">03</span>
<div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[24px]">tv</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Teste em 4K no seu ecrã</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      Inicie sessão na sua Smart TV ou dispositivo e desfrute de 24 horas completas com estabilidade ininterrupta em 4K a 60 FPS.
    </p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-semibold">
<span className="material-symbols-outlined text-[16px]">lock_open</span> 24h de acesso sem compromisso
    </span>
</div>
</div></div>
</div>
</section>
{/*  Frequently Asked Questions (Accordion)  */}
<section className="w-full py-space-3xl bg-surface-container-lowest">
<div className="max-w-[960px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center mb-space-2xl space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Respostas Claras</span>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">Dúvidas Frequentes sobre o Teste</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Saiba tudo o que precisa sobre o nosso período de demonstração gratuito.
        </p>
</div>
{/*  Accordion Stack  */}
<div className="space-y-space-sm">
{/*  Item 1  */}
<div className="faq-item bg-surface-container-low rounded-xl overflow-hidden transition-colors">
<button className="faq-toggle w-full p-space-md md:p-space-lg flex items-center justify-between text-left group" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Quanto tempo dura o teste grátis?
            </span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-200 text-[24px]">
              expand_more
            </span>
</button>
<div className="faq-content hidden px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            O teste tem a duração de <strong>24 horas completas</strong> com acesso total e ilimitado ao catálogo de canais desportivos, generalistas, filmes e séries em resolução 4K e Full HD. Não existe qualquer fidelização nem cobrança automática ao fim do prazo.
          </div>
</div>
{/*  Item 2  */}
<div className="faq-item bg-surface-container-low rounded-xl overflow-hidden transition-colors">
<button className="faq-toggle w-full p-space-md md:p-space-lg flex items-center justify-between text-left group" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Que dispositivos são compatíveis com o serviço?
            </span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-200 text-[24px]">
              expand_more
            </span>
</button>
<div className="faq-content hidden px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            O serviço IPTV Portugal TV funciona em praticamente qualquer dispositivo moderno com acesso à internet:
            <ul className="list-disc list-inside mt-2 space-y-1">
<li>Smart TV Samsung (Tizen OS) e LG (webOS)</li>
<li>Dispositivos Android TV (Xiaomi Mi Box, Mecool, Nvidia Shield, TCL, Sony)</li>
<li>Amazon Fire TV Stick e Cube</li>
<li>Smartphones e tablets (Apple iOS e Android)</li>
<li>Computadores com Windows ou macOS (via reprodutor dedicado ou browser)</li>
</ul>
</div>
</div>
{/*  Item 3  */}
<div className="faq-item bg-surface-container-low rounded-xl overflow-hidden transition-colors">
<button className="faq-toggle w-full p-space-md md:p-space-lg flex items-center justify-between text-left group" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Como recebo os dados para começar a ver?
            </span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-200 text-[24px]">
              expand_more
            </span>
</button>
<div className="faq-content hidden px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Assim que enviar o formulário nesta página, a nossa equipa gera a sua conta temporária e envia as credenciais (utilizador, palavra-passe e URL do portal, ou link M3U se preferir) diretamente via <strong>WhatsApp</strong> ou <strong>Email</strong> em menos de 10 minutos, acompanhadas de um tutorial simples em vídeo ou texto.
          </div>
</div>
{/*  Item 4  */}
<div className="faq-item bg-surface-container-low rounded-xl overflow-hidden transition-colors">
<button className="faq-toggle w-full p-space-md md:p-space-lg flex items-center justify-between text-left group" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Preciso de instalar alguma aplicação específica?
            </span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-200 text-[24px]">
              expand_more
            </span>
</button>
<div className="faq-content hidden px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Sim, necessita de uma aplicação de reprodução de conteúdos multimédia. Apoiamos e aconselhamos as opções mais estáveis e simples da loja oficial da sua televisão (como o <strong>IPTV Smarters Pro</strong>, <strong>IBO Player</strong>, <strong>XCIPTV</strong> ou <strong>TiviMate</strong>). Todas as instruções e links diretos são fornecidos na mensagem de boas-vindas.
          </div>
</div>
{/*  Item 5  */}
<div className="faq-item bg-surface-container-low rounded-xl overflow-hidden transition-colors">
<button className="faq-toggle w-full p-space-md md:p-space-lg flex items-center justify-between text-left group" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              O teste obriga-me a subscrever algum plano no final?
            </span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-200 text-[24px]">
              expand_more
            </span>
</button>
<div className="faq-content hidden px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed">
<strong>Não, de forma alguma.</strong> O teste é 100% gratuito e não solicitamos dados de pagamento (nem cartão de crédito nem débito direto). Se gostar da estabilidade do serviço e quiser subscrever, poderá então escolher um plano mensal, semestral ou anual com pagamentos fáceis por MB WAY ou Referência Multibanco.
          </div>
</div>
</div>
</div>
</section>
{/*  Humanized WhatsApp Direct Support Banner  */}
<section className="w-full py-space-3xl bg-surface">
<div className="max-w-[1200px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="relative bg-gradient-to-r from-surface-container to-surface-container-low rounded-xl p-space-xl md:p-space-2xl overflow-hidden shadow-xl">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-xl">
{/*  Support Agent Info  */}
<div className="flex flex-col sm:flex-row items-center gap-space-lg text-center sm:text-left">
<div className="relative">
<img alt="Mariana - Apoio ao Cliente IPTV Portugal TV" className="w-24 h-24 rounded-full object-cover shadow-md" src="/logo.webp"/>
<span className="absolute bottom-1 right-1 w-5 h-5 bg-primary rounded-full ring-4 ring-surface-container flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse"></span>
</span>
</div>
<div className="space-y-space-2xs max-w-lg">
<div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                Suporte em Direto • Equipa Portuguesa
              </div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Prefere falar diretamente connosco?</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Estamos disponíveis através do WhatsApp para esclarecer qualquer questão técnica, ajudar na configuração em tempo real e disponibilizar o seu teste instantaneamente.
              </p>
</div>
</div>
{/*  Direct CTA  */}
<div className="shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-xl font-label-md text-label-md bg-primary text-on-primary font-bold shadow-lg shadow-primary/25 hover:bg-primary-fixed transition-all duration-200" href="https://wa.me/212763569826?text=Ol%C3%A1%21%20Gostaria%20de%20esclarecer%20uma%20d%C3%BAvida%20sobre%20o%20teste%20gr%C3%A1tis%20da%20IPTV Portugal TV%20TV." rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[24px]">chat</span>
<span>Falar no WhatsApp</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Inline Micro-interactions Script  */}

</div></main>

    
    
    </>
  );
}
