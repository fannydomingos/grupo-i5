import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grupo i5 — A inteligência transforma vidas.',
  description:
    '19 anos buscando uma maneira melhor de fazer. Incorp, Imob, Hotel, Stay e Cowork: cinco negócios, uma mesma forma de pensar.',
  openGraph: {
    title: 'Grupo i5 — A inteligência transforma vidas.',
    description:
      'Cinco empresas. Uma experiência completa. Projetamos, construímos, vendemos, operamos e cuidamos.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
