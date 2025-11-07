"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-05-23T15:00:00-03:00");

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
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function Home() {
  const countdown = useCountdown(weddingDate);

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-display font-semibold text-blue-900">
            G & G
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#local" className="hover:text-blue-600">
              Local
            </a>
            <a href="#historia" className="hover:text-blue-600">
              Nossa História
            </a>
            <a href="#presentes" className="hover:text-blue-600">
              Presentes
            </a>
            <a href="#rsvp" className="hover:text-blue-600">
              Confirmação
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden">
        <div className="text-center space-y-6">
          <p className="text-blue-600 text-sm tracking-[0.25em]">
            ESTAMOS NOS CASANDO
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-light text-blue-900 text-shadow leading-tight">
            Giovanna & Guilherme
          </h1>
          <p className="text-lg text-blue-700">
            23 de Maio de 2026 • Iate Clube de Santos
          </p>
          <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full text-sm text-blue-900">
            <span>Falta</span>
            <span className="font-semibold">{countdown}</span>
          </div>
        </div>
      </section>

      {/* Local */}
      <section id="local" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="card-elegant p-8">
            <h2 className="text-3xl font-display text-blue-900 mb-2">
              Local do Casamento
            </h2>
            <p className="text-blue-600 mb-6">
              Iate Clube de Santos — Av. Bartolomeu de Gusmão, 344 - Embaré.
            </p>
            <ul className="space-y-3 text-sm text-blue-700">
              <li>
                <strong>Cerimônia:</strong> 15h00
              </li>
              <li>
                <strong>Recepção:</strong> no mesmo local, logo após a
                cerimônia.
              </li>
              <li>
                <strong>Dress code:</strong> Traje Passeio Completo.
              </li>
              <li>Estacionamento disponível no local.</li>
            </ul>
            <a
              href="https://maps.google.com/?q=Iate+Clube+de+Santos,+Santos"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm"
            >
              Ver no Google Maps
            </a>
          </div>
          <div className="card-elegant p-8 flex items-center justify-center">
            <p className="text-blue-700 text-sm text-center">
              Aqui você pode adicionar uma foto do Iate Clube de Santos em
              <code className="mx-1">public/iate-clube-santos.jpg</code> e
              substituir este bloco por uma imagem.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 card-elegant p-10">
          <h2 className="text-3xl font-display text-blue-900 mb-6 text-center">
            Nossa História
          </h2>
          <p className="text-blue-700 text-lg leading-relaxed mb-4">
            Nosso amor começou como uma doce surpresa do destino. Dois
            corações que se encontraram no momento certo, criando uma conexão
            que só cresceu com o tempo.
          </p>
          <p className="text-blue-700 text-lg leading-relaxed mb-4">
            Dos encontros cheios de expectativa às conversas longas e cheias de
            planos, cada capítulo nos trouxe até aqui.
          </p>
          <p className="text-blue-700 text-lg leading-relaxed">
            Agora queremos celebrar esse novo passo ao lado de vocês, família
            e amigos que fazem parte da nossa caminhada.
          </p>
        </div>
      </section>

      {/* Presentes */}
      <section id="presentes" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 card-elegant p-10">
          <h2 className="text-3xl font-display text-blue-900 mb-4 text-center">
            Lista de Presentes
          </h2>
          <p className="text-center text-blue-600 mb-8">
            Sua presença é o nosso maior presente! Mas, se desejar nos
            presentear, deixamos opções com muito carinho.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-blue-700">
            <div className="bg-blue-50/70 rounded-2xl p-6">
              <h3 className="font-display text-xl text-blue-900 mb-2">
                Lista tradicional
              </h3>
              <p>Link da loja de presentes dos noivos.</p>
            </div>
            <div className="bg-cyan-50/70 rounded-2xl p-6">
              <h3 className="font-display text-xl text-blue-900 mb-2">
                Cotinha Lua de Mel
              </h3>
              <p>
                PIX: <span className="font-mono">noivos@gioeguilherme.com.br</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display mb-4 text-center">
            Confirme sua Presença
          </h2>
          <p className="text-center mb-8 text-blue-100">
            Para nos ajudar na organização, confirme até 01/05/2026.
          </p>
          <form
            className="card-elegant bg-white/10 border-white/20 p-8 space-y-4"
            action="https://formspree.io/f/SEU_FORM_ID_AQUI"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-4 text-blue-900">
              <div>
                <label className="text-xs font-semibold">Nome completo *</label>
                <input
                  name="nome"
                  required
                  className="w-full mt-1 px-3 py-2 rounded-xl text-sm border border-blue-200"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-xs font-semibold">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 px-3 py-2 rounded-xl text-sm border border-blue-200"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="text-blue-900">
              <label className="text-xs font-semibold">
                Confirmo presença *
              </label>
              <select
                name="presenca"
                required
                className="w-full mt-1 px-3 py-2 rounded-xl text-sm border border-blue-200"
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim, com muita alegria!</option>
                <option value="Nao">Infelizmente não poderei ir</option>
              </select>
            </div>
            <div className="text-blue-900">
              <label className="text-xs font-semibold">
                Número de acompanhantes
              </label>
              <input
                type="number"
                name="acompanhantes"
                min="0"
                max="5"
                className="w-full mt-1 px-3 py-2 rounded-xl text-sm border border-blue-200"
                placeholder="0"
              />
            </div>
            <div className="text-blue-900">
              <label className="text-xs font-semibold">
                Mensagem para os noivos (opcional)
              </label>
              <textarea
                name="mensagem"
                rows={3}
                className="w-full mt-1 px-3 py-2 rounded-xl text-sm border border-blue-200"
                placeholder="Deixe um recado especial..."
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm"
            >
              Enviar confirmação
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-950 text-blue-200 text-xs text-center py-6">
        Giovanna & Guilherme • 23 de Maio de 2026 • Iate Clube de Santos
      </footer>
    </main>
  );
}
