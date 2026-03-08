'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Sparkles, 
  Shield, 
  Smile, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import TestimonialCard from '@/components/TestimonialCard';

const services = [
  {
    title: 'Diş İmplantları',
    description: 'Gelişmiş titanyum teknolojisi kullanarak eksik dişler için kalıcı ve doğal görünümlü çözümler.',
    icon: Shield,
    href: '/services'
  },
  {
    title: 'Diş Beyazlatma',
    description: 'Profesyonel beyazlatma sistemimizle tek bir ziyarette gülüşünüzü 8 tona kadar açın.',
    icon: Sparkles,
    href: '/services'
  },
  {
    title: 'Ortodonti',
    description: 'Şeffaf plaklar ve geleneksel diş telleri dahil modern diş düzeltme çözümleri.',
    icon: Smile,
    href: '/services'
  },
  {
    title: 'Estetik Diş Hekimliği',
    description: 'Size özel tasarlanmış lamine, bonding ve tam gülüş tasarımlarıyla gülüşünüzü dönüştürün.',
    icon: Stethoscope,
    href: '/services'
  }
];

const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    specialty: 'Estetik Diş Hekimi',
    image: 'https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg',
    experience: '12 Yıl'
  },
  {
    name: 'Dr. Mehmet Demir',
    specialty: 'İmplant Uzmanı',
    image: 'https://images.pexels.com/photos/6627836/pexels-photo-6627836.jpeg',
    experience: '15 Yıl'
  },
  {
    name: 'Dr. Elif Kaya',
    specialty: 'Ortodontist',
    image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg',
    experience: '10 Yıl'
  }
];

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Pazarlama Yöneticisi',
    content: 'Şimdiye kadar yaşadığım en iyi diş deneyimi. Personel çok profesyonel ve beyazlatma tedavimin sonuçları inanılmaz!',
    image: 'https://picsum.photos/seed/patient-woman-1/100/100'
  },
  {
    name: 'Can Demir',
    role: 'Yazılım Mühendisi',
    content: 'Dr. Demir implant sürecini çok net açıkladı. Kendimi çok rahat hissettim ve iyileşme beklediğimden çok daha hızlı oldu.',
    image: 'https://picsum.photos/seed/patient-man-1/100/100'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="https://i.pinimg.com/736x/2f/2a/18/2f2a186c40c1f0e631f0d7f5dd13902a.jpg"
                  alt="Modern Klinik İç Mekan"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-3xl -z-10 hidden lg:block" />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Diş Deneyimini <span className="text-blue-600">Bakım ve Teknoloji</span> ile Yeniden Tanımlıyoruz.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Lumina Diş olarak, diş hekimi ziyaretinin konforlu, şeffaf ve etkili olması gerektiğine inanıyoruz. Modern tesisimiz, en yüksek klinik bakım standartlarını sunarken sizi rahatlatmak için tasarlanmıştır.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Gelişmiş 3D Dijital Görüntüleme',
                  'Ağrısız Tedavi Seçenekleri',
                  'Kişiselleştirilmiş Bakım Planları',
                  'Acil Diş Destek Hizmeti'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 group"
              >
                Kliniğimiz hakkında daha fazla bilgi edinin
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Uzmanlık Alanlarımız</h2>
            <p className="text-lg text-slate-600">
              Hastalarımız için en iyi sonuçları sağlamak amacıyla en yeni teknikleri kullanarak kapsamlı bir diş tedavisi yelpazesi sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Uzman Diş Hekimlerimizle Tanışın</h2>
              <p className="text-lg text-slate-600">
                Ekibimiz, size mümkün olan en iyi diş bakımını sağlamaya kendini adamış yüksek nitelikli uzmanlardan oluşmaktadır.
              </p>
            </div>
            <Link
              href="/doctors"
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
            >
              Tüm Doktorları Görüntüle
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.name} {...doctor} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Gerçek Sonuçlar, <span className="text-blue-400">Gerçek Gülüşler</span>.</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Hastalarımız için elde ettiğimiz dönüşümleri görün. Basit beyazlatmadan karmaşık rekonstrüksiyonlara kadar galerimiz her şeyi anlatıyor.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Tüm Galeriyi Görüntüle
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                  <Image src="https://i.pinimg.com/1200x/34/b9/68/34b968e4da7651c6350876ddf7668ec5.jpg" alt="Sonuç 1" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image src="https://i.pinimg.com/736x/7f/e3/b2/7fe3b20b72a228a1c5b0743cde26490c.jpg" alt="Sonuç 2" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image src="https://i.pinimg.com/1200x/f7/f0/92/f7f0927186ba034f6c413a5909e404ac.jpg" alt="Sonuç 3" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                  <Image src="https://i.pinimg.com/1200x/66/db/53/66db53cfc7aed34935c269a620098490.jpg" alt="Sonuç 4" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Hastalarımız Ne Diyor?</h2>
            <p className="text-lg text-slate-600">Lumina Diş&apos;e güvenen binlerce mutlu hastaya katılın.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact / CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -ml-32 -mb-32" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Yeni gülüşünüz için hazır mısınız?</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Bugün konsültasyon randevunuzu alın ve daha sağlıklı, daha parlak bir gülümsemeye doğru ilk adımı atın.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Bizi Doğrudan Arayın</p>
                      <p className="text-lg font-display font-bold text-blue-600">+90 (212) 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Kliniğimizi Ziyaret Edin</p>
                      <p className="text-slate-600">123 Tıp Meydanı, Şişli, İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Hızlı Randevu</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Adınız" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none" />
                  <input type="tel" placeholder="Telefon Numarası" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none" />
                  <Link
                    href="/booking"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-center block hover:bg-blue-700 transition-all"
                  >
                    Randevu İşlemine Devam Et
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
