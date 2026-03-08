import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Randevu | Hemen Randevunuzu Oluşturun',
  description: 'Lumina Diş Kliniği\'nden hızlı ve kolay bir şekilde online randevu alın. Size en uygun zamanı seçin.',
  openGraph: {
    title: 'Randevu Al | Lumina Diş Kliniği',
    description: 'Online randevu formumuzu kullanarak hemen yerinizi ayırtın.',
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
