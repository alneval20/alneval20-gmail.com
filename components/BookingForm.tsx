'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, Stethoscope } from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
}

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    alert('Teşekkürler! Randevu talebiniz gönderildi. Sizinle en kısa sürede iletişime geçeceğiz.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <User className="w-4 h-4 text-blue-600" />
            Ad Soyad
          </label>
          <input
            {...register('name', { required: 'İsim gereklidir' })}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            E-posta Adresi
          </label>
          <input
            {...register('email', { required: 'E-posta gereklidir' })}
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            Telefon Numarası
          </label>
          <input
            {...register('phone', { required: 'Telefon gereklidir' })}
            type="tel"
            placeholder="+90 (555) 000 00 00"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        {/* Treatment */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-blue-600" />
            Tedavi Türü
          </label>
          <select
            {...register('treatment', { required: 'Tedavi seçimi gereklidir' })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
          >
            <option value="">Tedavi Seçin</option>
            <option value="checkup">Genel Kontrol</option>
            <option value="whitening">Diş Beyazlatma</option>
            <option value="implants">Diş İmplantları</option>
            <option value="orthodontics">Ortodonti</option>
            <option value="cosmetic">Estetik Diş Hekimliği</option>
          </select>
          {errors.treatment && <p className="text-red-500 text-xs">{errors.treatment.message}</p>}
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            Tercih Edilen Tarih
          </label>
          <input
            {...register('date', { required: 'Tarih gereklidir' })}
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            Tercih Edilen Saat
          </label>
          <select
            {...register('time', { required: 'Saat gereklidir' })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
          >
            <option value="">Saat Seçin</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
          {errors.time && <p className="text-red-500 text-xs">{errors.time.message}</p>}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
      >
        Randevuyu Onayla
      </motion.button>
    </form>
  );
}
