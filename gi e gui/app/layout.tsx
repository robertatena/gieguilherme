import "./globals.css";
import React from "react";
export const metadata = {
  title: "Giovanna & Guilherme — Nosso casamento",
  description: "Site oficial do casamento de Giovanna Massaro e Guilherme Naufal."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body>{children}</body></html>);
}
