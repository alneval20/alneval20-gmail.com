import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Diş İmplantı, Beyazlatma ve Estetik Diş Hekimliği',
  description: 'Lumina Diş Kliniği tarafından sunulan kapsamlı diş hizmetlerini keşfedin. İmplant, beyazlatma, ortodonti ve daha fazlası.',
  openGraph: {
    title: 'Hizmetlerimiz | Lumina Diş Kliniği',
    description: 'Kapsamlı diş çözümleri ve uzman tedavi yöntemlerimiz hakkında bilgi alın.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
