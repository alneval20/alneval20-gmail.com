'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Shield, 
  Sparkles, 
  Smile, 
  Stethoscope, 
  Activity, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'implants',
    title: 'Diş İmplantları',
    icon: Shield,
    description: 'Eksik dişlerin yerine konması için altın standart. İmplantlarımız tıpkı doğal dişler gibi görünür, hissettirir ve işlev görür.',
    benefits: [
      'Çene kemiği kaybını önler',
      'Doğal dişlerinizle mükemmel uyum sağlar',
      'Tam çiğneme gücünü geri kazandırır',
      'Uygun bakımla ömür boyu dayanır'
    ],
    process: 'İlk konsültasyon, implant yerleşimi, iyileşme süreci (osseointegrasyon) ve son olarak özel kron yerleşimi.',
    image: 'https://images.pexels.com/photos/6627324/pexels-photo-6627324.jpeg'
  },
  {
    id: 'whitening',
    title: 'Diş Beyazlatma',
    icon: Sparkles,
    description: 'Dramatik sonuçları güvenli ve hızlı bir şekilde sunan profesyonel düzeyde beyazlatma.',
    benefits: [
      'Yerleşmiş lekeleri çıkarır',
      'Diş minesi için güvenlidir',
      'Uzun ömürlü sonuçlar',
      'Özgüveni artırır'
    ],
    process: 'Profesyonel beyazlatma jelinin uygulanması ve ardından 60 dakika boyunca özel ışık aktivasyonu.',
    image: 'https://i.pinimg.com/736x/88/42/e6/8842e692fe133c26d8eb2b82661432c2.jpg'
  },
  {
    id: 'orthodontics',
    title: 'Ortodonti',
    icon: Smile,
    description: 'Modern ortodontik çözümlerimizle dişlerinizi düzeltin ve ısırığınızı iyileştirin.',
    benefits: [
      'Ağız sağlığını ve hijyenini iyileştirir',
      'Isırık sorunlarını düzeltir',
      'Şeffaf plak seçenekleri mevcut',
      'Her yaş için uygundur'
    ],
    process: 'Dijital tarama, özel tedavi planı, düzenli ayarlamalar ve final pekiştirme aşaması.',
    image: 'https://i.pinimg.com/1200x/21/1f/6c/211f6cf44a86cad1c7d890f2b6ad294e.jpg'
  },
  {
    id: 'root-canal',
    title: 'Kanal Tedavisi',
    icon: Activity,
    description: 'Hassas ve ağrısız endodontik terapi ile doğal dişlerinizi kurtarıyoruz.',
    benefits: [
      'Şiddetli diş ağrısını dindirir',
      'Diş çekimini önler',
      'Enfeksiyonun yayılmasını durdurur',
      'Normal ısırma kuvvetini geri kazandırır'
    ],
    process: 'Enfekte pulpanın çıkarılması, kanalın temizlenmesi ve şekillendirilmesi, doldurulması ve bir kron ile kapatılması.',
    image: 'https://images.pexels.com/photos/6627416/pexels-photo-6627416.jpeg'
  },
  {
    id: 'cosmetic',
    title: 'Estetik Diş Hekimliği',
    icon: Stethoscope,
    description: 'Estetik tedavi yelpazemizle gülüşünüzün estetiğini artırın.',
    benefits: [
      'Kırık veya çatlak dişleri düzeltir',
      'Dişler arasındaki boşlukları kapatır',
      'Diş şeklini ve boyutunu iyileştirir',
      'Tam gülüş dönüşümü'
    ],
    process: 'Gülüş analizi, dijital modeller ve lamine veya bonding uygulaması.',
    image: 'https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Hizmetlerimiz
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mevcut en ileri teknolojiyi kullanarak, benzersiz ihtiyaçlarınıza göre uyarlanmış kapsamlı diş çözümleri.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4">Temel Avantajlar:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2 text-slate-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Tedavi Süreci:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.process}</p>
                  </div>

                  <Link 
                    href="/booking"
                    className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                  >
                    Bu Hizmet İçin Randevu Al
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className={`relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
