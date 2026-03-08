import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Lumina Diş Kliniği Hikayesi ve Vizyonu',
  description: 'Lumina Diş Kliniği\'nin kuruluş hikayesi, misyonu ve vizyonu hakkında bilgi edinin. Neden bizi tercih etmelisiniz?',
  openGraph: {
    title: 'Hakkımızda | Lumina Diş Kliniği',
    description: 'Klinik hikayemiz, değerlerimiz ve hasta odaklı yaklaşımımız.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
