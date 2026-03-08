import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating?: number;
}

export default function TestimonialCard({ name, role, content, image, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
      <div className="absolute top-8 right-8 text-blue-100">
        <Quote className="w-12 h-12 fill-current" />
      </div>
      <div className="flex text-yellow-400 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-slate-600 leading-relaxed mb-8 italic">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-display font-bold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
