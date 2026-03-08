import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">L</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Lumina<span className="text-blue-400">Diş</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              En son teknoloji ve hasta odaklı yaklaşımla premium diş bakımı sağlıyoruz. Gülüşünüz bizim önceliğimizdir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              {[
                { name: 'Hakkımızda', href: '/about' },
                { name: 'Hizmetlerimiz', href: '/services' },
                { name: 'Doktorlarımızla Tanışın', href: '/doctors' },
                { name: 'Hasta Galerisi', href: '/gallery' },
                { name: 'Bize Ulaşın', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Hizmetler</h4>
            <ul className="space-y-4">
              {['Diş İmplantları', 'Diş Beyazlatma', 'Ortodonti', 'Kanal Tedavisi', 'Estetik Diş Hekimliği'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">İletişim Bilgileri</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span>123 Tıp Meydanı, Sağlık Bölgesi, Şişli, İstanbul</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>merhaba@luminadis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lumina Diş Kliniği. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
