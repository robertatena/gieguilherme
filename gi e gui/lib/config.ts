export const WEDDING = {
  couple: { bride: "Giovanna Massaro", groom: "Guilherme Naufal" },
  date: "2026-02-14T16:00:00-03:00",
  venue: {
    name: "IACH - Yacht Club (salao principal)",
    address: "Av. Exemplo, 123 - Bairro, Cidade/SP",
    mapsLink: "https://maps.google.com"
  },
  contact: { phone: "+55 (11) 9 9999-9999", email: "contato@gi-e-gui.com" },
  heroPhotos: ["/images/hero1.jpg","/images/hero2.jpg"],
  pix: {
    chave: "gi.e.gui@pix.com.br",
    nomeRecebedor: "Giovanna Massaro e Guilherme Naufal",
    cidade: "Sao Paulo",
    qrImageUrl: "/images/pix-qr.png",
    mensagem: "Obrigado por nos presentear! Voce pode copiar a chave Pix abaixo e, se preferir, anexar uma mensagem carinhosa no comprovante :)"
  },
  gifts: [
    { id:"g1", title:"Noite romantica na lua de mel", description:"Jantar + espumante", price:400, image:"/images/gift1.jpg", paymentLink:"" },
    { id:"g2", title:"Passeio de barco", description:"Dia em mar de aguas claras", price:650, image:"/images/gift2.jpg", paymentLink:"" },
    { id:"g3", title:"Cota da viagem", description:"Ajude-nos a realizar a viagem dos sonhos", price:300, image:"/images/gift3.jpg", paymentLink:"" }
  ],
  rsvp: { enabled: true, formUrl: "https://forms.gle/SEU_FORMULARIO_AQUI" }
} as const;

export const currency = (v: number) => v.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
