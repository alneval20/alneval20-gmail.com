import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | Başarı Hikayeleri ve Klinik Görselleri',
  description: 'Lumina Diş Kliniği başarı hikayelerini, öncesi-sonrası görsellerini ve modern klinik ortamımızı keşfedin.',
  openGraph: {
    title: 'Galeri | Lumina Diş Kliniği',
    description: 'Gerçek sonuçlar ve klinik ortamımızdan kareler.',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
