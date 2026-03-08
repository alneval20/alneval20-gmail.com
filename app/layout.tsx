import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Lumina Diş Kliniği | Premium Diş Bakımı ve Estetik Gülüşler',
    template: '%s | Lumina Diş Kliniği'
  },
  description: 'Lumina Diş Kliniği\'nde dünya standartlarında diş bakımını deneyimleyin. İmplant, estetik diş hekimliği, ortodonti ve aile diş sağlığı konularında uzman kadromuzla hizmetinizdeyiz.',
  keywords: ['diş kliniği', 'diş hekimi', 'implant', 'diş beyazlatma', 'estetik diş hekimliği', 'gülüş tasarımı', 'ortodonti', 'İstanbul diş kliniği'],
  authors: [{ name: 'Lumina Diş Kliniği' }],
  creator: 'Lumina Diş Kliniği',
  publisher: 'Lumina Diş Kliniği',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ais-dev-coqgkbgkxkwvtu65zum73l-495551996573.europe-west2.run.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumina Diş Kliniği | Premium Diş Bakımı',
    description: 'Daha parlak ve sağlıklı bir gülümseme için premium diş bakımı. İmplant, estetik diş hekimliği ve ortodonti uzmanlığı.',
    url: 'https://ais-dev-coqgkbgkxkwvtu65zum73l-495551996573.europe-west2.run.app',
    siteName: 'Lumina Diş Kliniği',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
        alt: 'Lumina Diş Kliniği',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Diş Kliniği | Premium Diş Bakımı',
    description: 'Daha parlak ve sağlıklı bir gülümseme için premium diş bakımı.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
