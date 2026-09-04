// Defina aqui o seu número de WhatsApp com o código do país
export const WHATSAPP_NUMBER = "212763569826";

export function getWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export const WA_MESSAGES = {
  freeTest: "Olá! Gostaria de pedir o teste grátis de 24 horas para o IPTV Portugal TV.",
  support: "Olá! Preciso de suporte/ajuda com o meu serviço IPTV Portugal TV.",
  subscription: (months: number, devices: number) => 
    `Olá! Gostaria de subscrever o plano de ${months} meses para ${devices} dispositivo(s). Como posso fazer o pagamento?`
};
