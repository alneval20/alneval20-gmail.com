'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Stethoscope, Star } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/DoctorCard';

const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    specialty: 'Estetik Diş Hekimi',
    image: 'https://images.pexels.com/photos/6812557/pexels-photo-6812557.jpeg',
    experience: '12 Yıl',
    bio: 'Gülüş tasarımı ve minimal invaziv estetik prosedürler konusunda uzmanlaşmıştır.',
    education: 'Hacettepe Üniversitesi Diş Hekimliği Fakültesi',
    certifications: ['Türk Dişhekimleri Birliği', 'Dijital Gülüş Tasarımı Sertifikalı']
  },
  {
    name: 'Dr. Mehmet Demir',
    specialty: 'İmplant Uzmanı',
    image: 'https://images.pexels.com/photos/6627836/pexels-photo-6627836.jpeg',
    experience: '15 Yıl',
    bio: 'Karmaşık tam ağız rekonstrüksiyonları ve dental implant cerrahisinde uzmandır.',
    education: 'Ankara Üniversitesi Diş Hekimliği Fakültesi',
    certifications: ['Uluslararası Oral İmplantologlar Kongresi', 'Kurul Onaylı Ağız Cerrahı']
  },
  {
    name: 'Dr. Elif Kaya',
    specialty: 'Ortodontist',
    image: 'https://i.pinimg.com/736x/8c/91/d8/8c91d8d70fe3efa1126588f4366a2bb4.jpg',
    experience: '10 Yıl',
    bio: 'Her yaştan hasta için sağlıklı ve güzel gülümsemeler yaratma konusunda tutkuludur.',
    education: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi',
    certifications: ['Türk Ortodonti Derneği', 'Invisalign Diamond Sağlayıcısı']
  },
  {
    name: 'Dr. Caner Özkan',
    specialty: 'Ağız Cerrahı',
    image: 'https://i.pinimg.com/736x/0c/1e/6c/0c1e6cf97317d1c47b38fdb0e803d2ca.jpg',
    experience: '18 Yıl',
    bio: 'Gelişmiş cerrahi teknikler ve hasta konforuna odaklanmıştır.',
    education: 'Ege Üniversitesi Diş Hekimliği Fakültesi',
    certifications: ['Türk Ağız ve Maksillofasiyal Cerrahi Derneği']
  }
];

export default function DoctorsPage() {
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
            Uzman <span className="text-blue-600">Ekibimiz</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Her hastaya uzmanlık, şefkat ve en yeni diş inovasyonlarını getiren özel profesyonellerimizle tanışın.
          </p>
        </div>
      </section>

      {/* Detailed Profiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {doctors.map((doctor, index) => (
              <motion.div 
                key={doctor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start`}
              >
                <div className="lg:col-span-4">
                  <DoctorCard {...doctor} />
                </div>
                <div className="lg:col-span-8 pt-4">
                  <div className="flex items-center space-x-2 text-blue-600 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold uppercase tracking-wider text-xs">Uzman Profili</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{doctor.name}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {doctor.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-slate-900">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <h4 className="font-bold">Eğitim</h4>
                      </div>
                      <p className="text-slate-600 pl-9">{doctor.education}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-slate-900">
                        <Award className="w-6 h-6 text-blue-600" />
                        <h4 className="font-bold">Sertifikalar</h4>
                      </div>
                      <ul className="pl-9 space-y-2">
                        {doctor.certifications.map((cert) => (
                          <li key={cert} className="text-sm text-slate-600 flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span>{doctor.experience} Deneyim</span>
                    </div>
                  </div>
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
