# Site de Casamento — Giovanna & Guilherme

Next.js + Tailwind. Lista de presentes com Pix direto (sem taxa de plataforma) e opcional Stripe Payment Links.

## Editar dados
Abra `lib/config.ts` e ajuste:
- Nomes, data/hora, endereco e link do Maps
- Chave Pix e QR (troque `public/images/pix-qr.png` por um QR real)
- Presentes (titulo, descricao, preco, imagem, `paymentLink` do Stripe se quiser)
- URL do RSVP (Google Forms)

## Rodar local
npm i
npm run dev

## Publicar no Vercel
1. Importe o projeto (GitHub ou upload do ZIP).
2. Framework: Next.js. Build padrao.
3. Deploy -> subdominio .vercel.app
4. Em Settings > Domains, adicione seu dominio do Registro.br quando propagar os DNS.

## Stripe (opcional)
Crie Payment Links e cole em `paymentLink` para cada presente. Se vazio, o botao usa Pix.
