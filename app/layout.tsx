import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ElfeJolo – Jouets & Livres de Seconde Main à Bourges',
  description:
    "ElfeJolo, la boutique incontournable de jeux, jouets, livres et déguisements de seconde main à Bourges. Arrivages tous les jours. 4.9/5 sur Google. Venez nous rendre visite au 71 rue d'Auron !",
  keywords:
    'jouets seconde main Bourges, jeux occasion Bourges, livres enfants Bourges, ElfeJolo, boutique jouets Bourges, déguisements enfants',
  authors: [{ name: 'ElfeJolo' }],
  openGraph: {
    title: 'ElfeJolo – Jouets & Livres de Seconde Main à Bourges',
    description:
      "La caverne d'Ali Baba des jouets a Bourges ! Jeux, jouets, puzzles, livres et deguisements de seconde main. Arrivages quotidiens.",
    url: 'https://elfejolo.fr',
    siteName: 'ElfeJolo',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElfeJolo – Jouets de Seconde Main à Bourges',
    description: 'La boutique incontournable de jouets, jeux et livres de seconde main à Bourges.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://elfejolo.fr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
