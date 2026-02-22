import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';

export const metadata: Metadata = {
  title: 'ElfeJolo – Jouets & Livres de Seconde Main à Bourges',
  description:
    "ElfeJolo, la boutique incontournable de jeux, jouets, livres et déguisements de seconde main à Bourges. Arrivages tous les jours. 4.9/5 sur Google. Venez nous rendre visite au 16 Rue Coursarlon !",
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'ElfeJolo',
  description: 'Boutique de jouets, jeux et livres de seconde main à Bourges.',
  url: 'https://elfejolo.fr',
  telephone: '+33673883226',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Rue Coursarlon',
    addressLocality: 'Bourges',
    postalCode: '18000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0804,
    longitude: 2.3964,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday'],
      opens: '10:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '4928',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/elfejolo',
    'https://www.instagram.com/elfejolo',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
