import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanna & Guilherme - Nosso Casamento",
  description:
    "Site oficial do casamento de Giovanna Massaro & Guilherme Naufal - 23 de Maio de 2026 no Iate Clube de Santos",
  keywords:
    "casamento, Giovanna Massaro, Guilherme Naufal, Iate Clube Santos, noivos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
