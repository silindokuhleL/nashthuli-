import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), []);
  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center min-h-[260px] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
                />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-charcoal-800 leading-relaxed mb-6 max-w-2xl italic">
              "{t.review}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-charcoal-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-charcoal-700 hover:bg-wood-400 hover:text-white transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-charcoal-700 hover:bg-wood-400 hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-wood-400 w-6' : 'bg-cream-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
