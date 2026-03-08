'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Building2 } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/DoctorCard';

const stats = [
  { label: 'Yıllık Deneyim', value: '15+', icon: Award },
  { label: 'Mutlu Hasta', value: '10b+', icon: Users },
  { label: 'Modern Klinik', value: '3', icon: Building2 },
  { label: 'Uzman Hekim', value: '12', icon: Heart },
];

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Estetik Diş Hekimi',
    image: 'https://images.pexels.com/photos/5355703/pexels-photo-5355703.jpeg',
    experience: '12 Yıl'
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'İmplant Uzmanı',
    image: 'https://images.pexels.com/photos/6627836/pexels-photo-6627836.jpeg',
    experience: '15 Yıl'
  },
  {
    name: 'Dr. Elena Rodriguez',
    specialty: 'Ortodontist',
    image: 'https://images.pexels.com/photos/4269372/pexels-photo-4269372.jpeg',
    experience: '10 Yıl'
  },
  {
    name: 'Dr. David Park',
    specialty: 'Ağız Cerrahı',
    image: 'https://images.pexels.com/photos/6812554/pexels-photo-6812554.jpeg',
    experience: '18 Yıl'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Lumina <span className="text-blue-600">Diş Hakkında</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hasta konforuna ve klinik mükemmelliğe odaklanarak dünya standartlarında diş bakımı sağlamaya adanmıştır.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/6627927/pexels-photo-6627927.jpeg"
                  alt="Klinik Hikayemiz"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Hikayemiz</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                2010 yılında kurulan Lumina Diş, basit bir vizyonla yola çıktı: yüksek kaliteli diş bakımını erişilebilir ve stressiz hale getirmek. Küçük bir aile muayenehanesi olarak başlayan yolculuğumuz, bugün İstanbul&apos;un önde gelen diş merkezlerinden biri haline geldi.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Yıllar içinde, en yeni diş teknolojilerine sürekli yatırım yaptık ve mükemmellik tutkumuzu paylaşan bir uzman ekibi bir araya getirdik. Bugün, binlerce aile için güvenilir bir isim olmaktan gurur duyuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-display font-bold text-slate-900 mb-2">Misyonumuz</h4>
                  <p className="text-sm text-slate-600">Her seferinde bir gülümseme ile hayatları iyileştiren şefkatli, kişiselleştirilmiş diş bakımı sağlamak.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <Eye className="w-8 h-8 text-slate-900 mb-4" />
                  <h4 className="font-display font-bold text-slate-900 mb-2">Vizyonumuz</h4>
                  <p className="text-sm text-slate-600">Modern diş hekimliği standartlarını belirleyen, en hasta odaklı diş pratiği olmak.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <p className="text-4xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Uzmanlarımızla Tanışın</h2>
            <p className="text-lg text-slate-600">Ağız sağlığınıza adanmış bir uzman ekibi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.name} {...doctor} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
