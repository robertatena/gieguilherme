// app/layout.tsx
export const metadata = {
  title: 'Site de Casamento — Giovanna & Guilherme',
  description: 'Nosso site de casamento',
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
