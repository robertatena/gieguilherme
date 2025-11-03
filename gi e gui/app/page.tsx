"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Gift, Clock, Phone, Mail } from "lucide-react";

import { WEDDING, currency } from "../lib/config";
import { Card } from "../components/Card";
import { Copyable } from "../components/Copyable";

function useCountdown(targetISO: string) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(targetISO).getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Page() {
  const c = WEDDING;
  const { days, hours, minutes, seconds } = useCountdown(c.date);
  const d = new Date(c.date);
  const [pixOpen, setPixOpen] = React.useState(false);
  const [gift, setGift] = React.useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-gray-800">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-rose-100/70 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-serif text-xl tracking-wide">
            {c.couple.bride} & {c.couple.groom}
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-80">Sobre</a>
            <a href="#detalhes" className="hover:opacity-80">Detalhes</a>
            <a href="#presentes" className="hover:opacity-80">Lista de Presentes</a>
            {c.rsvp.enabled && <a href="#rsvp" className="hover:opacity-80">RSVP</a>}
            <a href="#contato" className="hover:opacity-80">Contato</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 py-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-serif tracking-wide">
              {c.couple.bride} <span className="text-rose-500">&</span> {c.couple.groom}
            </h1>
            <p className="mt-3 text-lg text-gray-600">Vamos celebrar o amor com você!</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2 bg-white/70 border rounded-xl px-3 py-2">
                <Calendar className="h-4 w-4" />{" "}
                {d.toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                às{" "}
                {d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </div>
              <a href={c.venue.mapsLink} target="_blank" className="inline-flex items-center gap-2 bg-white/70 border rounded-xl px-3 py-2 hover:shadow">
                <MapPin className="h-4 w-4" /> {c.venue.name}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-center">
              {[{ label: "dias", value: days }, { label: "h", value: hours }, { label: "min", value: minutes }, { label: "s", value: seconds }].map((x) => (
                <div key={x.label} className="w-20 rounded-2xl border bg-white/70 py-3">
                  <div className="text-2xl font-semibold">{String(x.value).padStart(2, "0")}</div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">{x.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-3">
            {c.heroPhotos.map((src, i) => (
              <img key={i} src={src} alt="Gi & Gui" className={`rounded-3xl object-cover h-72 w-full shadow ${i % 2 ? "mt-8" : ""}`} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6">Nossa história</h2>
          <p className="text-gray-700 leading-relaxed">
            Começou com risadas, trilhou viagens e se firmou nos pequenos gestos do dia a dia. Agora queremos celebrar com quem
            fez parte desse caminho. Vista seu melhor sorriso e venha brindar!
          </p>
        </div>
      </section>

      <section id="detalhes" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Card title="Cerimônia & Festa" icon={<Calendar />}>
            <p><strong>{c.venue.name}</strong></p>
            <p>{c.venue.address}</p>
            <p className="mt-2 text-sm text-gray-600">Chegue 30 minutos antes :)</p>
          </Card>
          <Card title="Como chegar" icon={<MapPin />}>
            <a className="underline" href={c.venue.mapsLink} target="_blank">Abrir no Google Maps</a>
            <p className="text-sm text-gray-600 mt-2">Há serviço de valet no local.</p>
          </Card>
          <Card title="Traje" icon={<Clock />}>
            <p>Esporte fino. Cores claras são bem-vindas.</p>
            <p className="text-sm text-gray-600 mt-2">Dica: salto bloco funciona melhor no deck.</p>
          </Card>
        </div>
      </section>

      <section id="presentes" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="h-6 w-6" />
            <h2 className="text-3xl font-serif">Lista de presentes</h2>
          </div>
          <p className="text-gray-700 mb-8">
            Sua presença é nosso maior presente. Se quiser nos presentear, você pode usar <strong>PIX direto</strong> ou, se preferir,
            efetuar o pagamento pelo <strong>Stripe</strong> (cartão/Pix) sem plataformas intermediárias.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.gifts.map((g) => (
              <div key={g.id} className="rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
                <img src={g.image} alt={g.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <div className="font-medium text-lg">{g.title}</div>
                  <div className="text-sm text-gray-600">{g.description}</div>
                  <div className="mt-3 text-rose-600 font-semibold">{currency(g.price)}</div>
                  <div className="mt-4 flex gap-2">
                    {g.paymentLink ? (
                      <a href={g.paymentLink} target="_blank" className="flex-1 text-center rounded-xl bg-rose-500 text-white px-4 py-2 hover:bg-rose-600">
                        Presentear via Stripe
                      </a>
                    ) : (
                      <button onClick={() => { setGift(g); setPixOpen(true); }} className="flex-1 rounded-xl bg-rose-500 text-white px-4 py-2 hover:bg-rose-600">
                        Presentear via Pix
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-white p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-medium mb-2">Pix direto (sem taxas da plataforma)</h3>
              <p className="text-gray-700 mb-3">
                Use a chave Pix abaixo para transferir qualquer valor. Se desejar, identifique o presente no comprovante.
              </p>
              <div className="font-mono text-lg bg-gray-50 border rounded-xl px-4 py-3 inline-block">{c.pix.chave}</div>
              <div className="mt-3"><Copyable text={c.pix.chave} /></div>
              <p className="text-sm text-gray-500 mt-3">
                Recebedor: {c.pix.nomeRecebedor} • {c.pix.cidade}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={c.pix.qrImageUrl} alt="QR Pix" className="w-48 h-48 rounded-2xl border" />
              <span className="text-xs text-gray-500 mt-2">Aponte a câmera do app do seu banco</span>
            </div>
          </div>
        </div>
      </section>

      {c.rsvp.enabled && (
        <section id="rsvp" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-4">Confirme sua presença</h2>
            <p className="text-gray-700 mb-6">Sua resposta nos ajuda na organização com carinho</p>
            <a href={c.rsvp.formUrl} target="_blank" className="inline-block rounded-2xl bg-rose-500 text-white px-6 py-3 hover:bg-rose-600">
              Preencher RSVP
            </a>
          </div>
        </section>
      )}

      <section id="contato" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6">Informações & Contato</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Telefone" icon={<Phone />}><p>{c.contact.phone}</p></Card>
            <Card title="E-mail" icon={<Mail />}><p>{c.contact.email}</p></Card>
            <Card title="Hashtag do dia" icon={<Heart />}><p>#GiEGuiDizemSim</p></Card>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        Feito com amor para {c.couple.bride} & {c.couple.groom}
      </footer>

      {pixOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setPixOpen(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-3">
              <Gift className="h-5 w-5" />
              <div className="text-lg font-medium">Presentear via Pix</div>
            </div>
            {gift && (
              <div className="mb-3">
                <div className="font-semibold">{gift.title}</div>
                <div className="text-rose-600">Valor sugerido: {currency(gift.price)}</div>
              </div>
            )}
            <p className="text-sm text-gray-700 mb-3">{c.pix.mensagem}</p>
            <div className="font-mono bg-gray-50 border rounded-xl px-4 py-3 flex items-center justify-between">
              <span>{c.pix.chave}</span>
              <Copyable text={c.pix.chave} />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img src={c.pix.qrImageUrl} className="w-28 h-28 rounded-xl border" />
              <div className="text-xs text-gray-500">Dica: no app do banco, adicione a mensagem do presente.</div>
            </div>
            <div className="mt-6 text-right">
              <button className="rounded-xl px-4 py-2 border hover:bg-gray-50" onClick={() => setPixOpen(false)}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
