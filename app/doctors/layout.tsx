import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uzman Doktorlarımız | Deneyimli Diş Hekimi Kadrosu',
  description: 'Lumina Diş Kliniği\'nin uzman diş hekimleri ile tanışın. Alanında uzman, deneyimli ve şefkatli doktorlarımızla hizmetinizdeyiz.',
  openGraph: {
    title: 'Doktorlarımız | Lumina Diş Kliniği',
    description: 'Uzman diş hekimi kadromuz ve uzmanlık alanları hakkında detaylı bilgi.',
  },
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
