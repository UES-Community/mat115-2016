import type { Metadata } from 'next';
import { Inter, Figtree, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['500', '600'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Matemática I (MAT115-2016) — UES Community',
  description: 'Plataforma interactiva de Matemática I para la UES. Simulaciones 3D, trazador 2D, calculadoras simbólicas y programa de estudios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${figtree.variable} ${ibmPlexMono.variable} dark`}>
      <body className="bg-abyss text-quartz antialiased selection:bg-aurora-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}
