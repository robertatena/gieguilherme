import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gio & Guilherme",
  description: "Site oficial do casamento Gio & Guilherme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
