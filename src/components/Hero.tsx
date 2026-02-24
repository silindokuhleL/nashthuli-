import { useState, useEffect, useCallback } from 'react';
import { MessageCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { couches, beds, headboards } from '../data/images';

const slides = [
  {
    image: couches.emeraldSuite,
    headline: 'Transform Your Space',
    sub: 'with Bespoke Furniture Crafted for You',
  },
  {
    image: beds.greyWingbackInstalled,
    headline: 'Dream Bedrooms Start Here',
    sub: 'Quality craftsmanship from the heart of Soweto',
  },
  {
    image: headboards.greyFanShell,
    headline: 'Elegance in Every Detail',
    sub: 'Custom designs that reflect your unique style',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { navigate } = useNavigation();

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-4 animate-fade-in">
          Nashthul Living Design
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 max-w-4xl leading-tight animate-slide-up text-shadow-lg">
          {slide.headline}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl animate-slide-up">
          {slide.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a
            href="https://wa.me/27614300608?text=Hi%20Nashthul!%20I%27d%20like%20to%20explore%20your%20furniture%20designs."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <button
            onClick={() => navigate('shop')}
            className="btn-secondary bg-white/10 border-white/40 text-white hover:bg-white hover:text-charcoal-900"
          >
            Explore Designs
          </button>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/40 w-4'}`}
          />
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white animate-float transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
