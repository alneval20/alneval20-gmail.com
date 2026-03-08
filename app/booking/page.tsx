'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Clock, Phone } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
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
            Randevu <span className="text-blue-600">Alın</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hayalinizdeki gülüşe doğru ilk adımı atın. Aşağıdaki formu doldurun, ekibimiz ziyaretinizi onaylamak için sizinle iletişime geçecektir.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-blue-100/20">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Randevu Bilgileri</h2>
                <BookingForm />
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
                <h3 className="text-xl font-display font-bold mb-6">Neden Bizi Seçmelisiniz?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Uzman Bakım</p>
                      <p className="text-sm text-blue-100">Yılların deneyimine sahip kurul onaylı uzmanlar.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Esnek Saatler</p>
                      <p className="text-sm text-blue-100">Size kolaylık sağlamak için akşam ve hafta sonu randevuları sunuyoruz.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">7/24 Destek</p>
                      <p className="text-sm text-blue-100">Kayıtlı hastalarımız için acil diş desteği mevcuttur.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Yardıma mı İhtiyacınız Var?</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Herhangi bir sorunuz varsa veya telefon üzerinden randevu almak isterseniz, lütfen resepsiyonumuzu arayın.
                </p>
                <a 
                  href="tel:+902121234567" 
                  className="text-blue-600 font-bold text-lg flex items-center gap-2 hover:text-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +90 (212) 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
