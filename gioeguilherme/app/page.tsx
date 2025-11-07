"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-05-23T16:30:00-03:00"); // ajuste a data real

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft("É hoje! 💍");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(`${days} dias • ${hours}h • ${minutes}min`);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function Home() {
  const countdown = useCountdown(weddingDate);

  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-12 text-center">
        <p className="tracking-[0.25em] uppercase text-xs text-slate-400">
          Gio & Guilherme
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-light font-display">
          Nosso grande dia está chegando.
        </h1>
        <p className="mt-4 text-slate-300">
          23 de maio de 2026 • São Paulo, SP
        </p>
        <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 border border-slate-600/80 rounded-full text-xs text-slate-200">
          <span>Contagem regressiva</span>
          <span className="font-semibold text-emerald-300">
            {countdown}
          </span>
        </div>
      </section>

      {/* Cards principais */}
      <section className="w-full max-w-5xl px-6 grid md:grid-cols-2 gap-6 pb-10">
        <div className="card-soft p-6">
          <h2 className="text-base font-semibold mb-2">
            Cerimônia & Recepção
          </h2>
          <p className="text-sm text-slate-300">
            Local do casamento (atualize aqui com o espaço real),
            horário de início da cerimônia e informações de acesso.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="mt-4 inline-block text-[11px] underline text-emerald-300"
          >
            Ver no mapa
          </a>
        </div>

        <div className="card-soft p-6">
          <h2 className="text-base font-semibold mb-2">
            Dress Code
          </h2>
          <p className="text-sm text-slate-300">
            Sugestão de traje (ex.: passeio completo / gala / etc).
          </p>
        </div>
      </section>

      {/* História / texto carinhoso */}
      <section className="w-full max-w-5xl px-6 pb-10">
        <div className="card-soft p-6">
          <h2 className="text-base font-semibold mb-3">
            Nossa história
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Aqui entra um texto curto e leve contando como Gio e
            Guilherme se conheceram, os momentos marcantes e por que
            esse dia é tão especial. Nada muito longo: 2 a 3
            parágrafos já criam conexão com os convidados.
          </p>
        </div>
      </section>

      {/* Presentes */}
      <section id="presentes" className="w-full max-w-5xl px-6 pb-10">
        <div className="card-soft p-6">
          <h2 className="text-base font-semibold mb-3">
            Presentes
          </h2>
          <p className="text-sm text-slate-300 mb-2">
            Sua presença é o mais importante ❤️ Mas, se desejar nos
            presentear, você pode escolher uma das opções abaixo:
          </p>
          <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
            <li>
              Lista em loja X:{" "}
              <a
                href="#"
                className="underline text-emerald-300"
              >
                link da lista
              </a>
            </li>
            <li>
              Pix (cotinha da lua de mel):{" "}
              <span className="font-mono">
                chave@exemplo.com
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="w-full max-w-5xl px-6 pb-16">
        <div className="card-soft p-6">
          <h2 className="text-base font-semibold mb-3">
            Confirme sua presença (RSVP)
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            Para nos ajudar na organização, confirme sua presença
            até <strong>01/05/2026</strong>.
          </p>
          <form
            className="grid md:grid-cols-[2fr,1fr,1fr] gap-3"
            action="https://formspree.io/f/SEU_ENDPOINT"
            method="POST"
          >
            <input
              name="nome"
              required
              placeholder="Seu nome completo"
              className="px-3 py-2 rounded-xl bg-slate-950/90 border border-slate-700 text-xs outline-none"
            />
            <select
              name="presenca"
              className="px-3 py-2 rounded-xl bg-slate-950/90 border border-slate-700 text-xs"
            >
              <option value="Sim">Confirmo presença</option>
              <option value="Nao">Não poderei ir</option>
            </select>
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-semibold"
            >
              Enviar
            </button>
          </form>
          <p className="mt-2 text-[10px] text-slate-500">
            O formulário é enviado via Formspree. Depois criamos o
            link certinho para os noivos.
          </p>
        </div>
      </section>

      <footer className="w-full max-w-5xl px-6 pb-6 text-[9px] text-slate-500 text-center">
        Feito com carinho para Gio & Guilherme.
      </footer>
    </main>
  );
}
