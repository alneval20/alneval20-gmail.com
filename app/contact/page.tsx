'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
            Bize <span className="text-blue-600">Ulaşın</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sorularınız mı var? Yardımcı olmak için buradayız. Bize telefon, e-posta yoluyla ulaşın veya kliniğimizi şahsen ziyaret edin.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">İletişim Bilgileri</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Konumumuz</h4>
                      <p className="text-slate-600">123 Tıp Meydanı, Sağlık Bölgesi, Şişli, İstanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Telefon Numarası</h4>
                      <p className="text-slate-600">+90 (212) 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">E-posta Adresi</h4>
                      <p className="text-slate-600">merhaba@luminadis.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Çalışma Saatleri</h3>
                <div className="space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pzt - Cum</span>
                    <span className="font-bold text-slate-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Cumartesi</span>
                    <span className="font-bold text-slate-900">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pazar</span>
                    <span className="font-bold text-red-500">Kapalı</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/902121234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-100"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a 
                  href="tel:+902121234567"
                  className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-blue-100/20">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Bize Mesaj Gönderin</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Adınız</label>
                      <input type="text" placeholder="Adınız" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">E-posta</label>
                      <input type="email" placeholder="E-posta Adresiniz" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Konu</label>
                    <input type="text" placeholder="Size nasıl yardımcı olabiliriz?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mesajınız</label>
                    <textarea rows={5} placeholder="Mesajınız..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019297157254!2d-122.407162223461!3d37.78193291131011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580863385794d%3A0x6715f07f4337225c!2s123%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1709890000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-125 opacity-80"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-3">
            <MapPin className="w-6 h-6" />
            <span className="font-bold">Lumina Diş Kliniği</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
