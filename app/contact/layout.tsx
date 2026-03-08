import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Bize Ulaşın ve Randevu Alın',
  description: 'Lumina Diş Kliniği iletişim bilgileri, adres ve harita konumu. Sorularınız için bize ulaşın veya randevunuzu planlayın.',
  openGraph: {
    title: 'İletişim | Lumina Diş Kliniği',
    description: 'Bize ulaşın, konumumuzu görün ve randevu alın.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
