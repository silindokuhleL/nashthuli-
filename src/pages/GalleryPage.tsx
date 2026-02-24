import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { allImages } from '../data/images';

const categoryLabels: Record<string, string> = {
  Couches: 'Couch',
  Beds: 'Bed',
  Headboards: 'Headboard',
  Tables: 'Table & Bedroom',
  'TV Stands': 'TV Stand',
  'Kitchen Units': 'Kitchen Unit',
  Portfolio: 'Installed Project',
};

const galleryItems = allImages.map((img, i) => ({
  id: i + 1,
  src: img.src,
  alt: `${categoryLabels[img.category] ?? 'Furniture'} — Nashthul Living Design`,
  category: img.category,
}));

const categories = ['All', 'Couches', 'Beds', 'Headboards', 'Tables', 'TV Stands', 'Kitchen Units'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="bg-charcoal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-3">Our Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Gallery & Portfolio</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A showcase of completed projects — each piece a testament to the quality and artistry of Nashthul Living Design.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-charcoal-900 text-white shadow'
                  : 'bg-white text-charcoal-700 border border-cream-200 hover:border-wood-400 hover:text-wood-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry gallery */}
        <div className="masonry-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <ZoomIn size={20} className="text-charcoal-900" />
                  </div>
                  <p className="text-white text-sm font-semibold text-shadow">{item.alt}</p>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-white rounded-3xl p-10 shadow-md">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 mb-3">
            Love what you see?
          </h3>
          <p className="text-gray-500 mb-7 max-w-md mx-auto">
            Every piece in our gallery was crafted to order. Let us create something equally stunning for your home.
          </p>
          <a
            href="https://wa.me/27614300608?text=Hi%20Nashthul!%20I%20saw%20your%20gallery%20and%20I%27d%20love%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.96 0-3.791-.528-5.368-1.449l-.385-.229-3.985.944.999-3.878-.251-.398A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Start Your Project
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center lightbox-overlay"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={e => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-4xl max-h-[85vh] px-16" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src.replace('w=800', 'w=1200')}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-serif text-lg">{filtered[lightboxIndex].alt}</p>
              <p className="text-white/50 text-sm">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={e => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
