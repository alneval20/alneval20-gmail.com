'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ['Tümü', 'Tedaviler', 'Klinik İç Mekan', 'Ekipmanlar'];

const galleryItems = [
  { id: 1, title: 'Gülüş Dönüşümü', category: 'Tedaviler', image: 'https://images.pexels.com/photos/6812532/pexels-photo-6812532.jpeg' },
  { id: 2, title: 'Modern Resepsiyon', category: 'Klinik İç Mekan', image: 'https://images.pexels.com/photos/6809645/pexels-photo-6809645.jpeg' },
  { id: 3, title: 'Gelişmiş 3D Görüntüleme', category: 'Ekipmanlar', image: 'https://images.pexels.com/photos/6627450/pexels-photo-6627450.jpeg' },
  { id: 4, title: 'Diş İmplant Sonucu', category: 'Tedaviler', image: 'https://images.pexels.com/photos/4269700/pexels-photo-4269700.jpeg' },
  { id: 5, title: 'Hasta Bekleme Alanı', category: 'Klinik İç Mekan', image: 'https://i.pinimg.com/1200x/02/ad/57/02ad5758625cb4ed451b980f5d92a7e2.jpg' },
  { id: 6, title: 'Sterilizasyon Odası', category: 'Ekipmanlar', image: 'https://i.pinimg.com/736x/1e/b3/b4/1eb3b46770ee5693664abd0e4de0d442.jpg' },
  { id: 7, title: 'Diş Beyazlatma', category: 'Tedaviler', image: 'https://i.pinimg.com/1200x/c5/a9/90/c5a990bb0814e4a8795e7b7de3b8ba84.jpg' },
  { id: 8, title: 'Tedavi Odası', category: 'Klinik İç Mekan', image: 'https://images.pexels.com/photos/4687346/pexels-photo-4687346.jpeg' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'Tümü' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            Galerimiz
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Modern tesislerimize ve hastalarımız için elde ettiğimiz hayat değiştiren sonuçlara göz atın.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="w-10 h-10 text-white mb-3" />
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-blue-300 text-sm">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
