import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  delay?: number;
}

export default function DoctorCard({ name, specialty, image, experience, delay = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-3">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-2">{specialty}</p>
      <p className="text-slate-500 text-sm">{experience} deneyim</p>
    </motion.div>
  );
}
