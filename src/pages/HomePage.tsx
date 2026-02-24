import { MessageCircle, Phone, MapPin, Star, ArrowRight, Sparkles, Shield, Heart, Users } from 'lucide-react';
import Hero from '../components/Hero';
import TestimonialSlider from '../components/TestimonialSlider';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '../context/NavigationContext';
import { products } from '../data/products';
import { couches, beds, headboards, pedestals, tvStands } from '../data/images';

const categories = [
  { name: 'Couches', icon: '🛋️', image: couches.emeraldSuite },
  { name: 'Beds', icon: '🛏️', image: beds.greyWingbackInstalled },
  { name: 'Tables', icon: '🪑', image: pedestals.dressingTableSet },
  { name: 'TV Stands', icon: '📺', image: tvStands.floatingWallUnit },
  { name: 'Headboards', icon: '🏡', image: headboards.greyFanShell },
  { name: 'Kitchen Units', icon: '🍳', image: pedestals.goldFramePair },
];

const whyUs = [
  { icon: <Sparkles className="w-6 h-6" />, title: 'Custom Designs', desc: 'Every piece is tailored to your exact taste, space, and vision.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Quality Craftsmanship', desc: 'We use premium materials and time-tested techniques for lasting furniture.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Affordable Pricing', desc: 'Luxury furniture at prices that make sense. No hidden costs.' },
  { icon: <Users className="w-6 h-6" />, title: 'Local Expertise', desc: "Born and bred in Soweto. We understand our community's style." },
];

const featured = products.filter(p => p.badge).slice(0, 4);

export default function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Stats strip */}
      <div className="bg-charcoal-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '6', label: 'Product Categories' },
              { number: '5★', label: 'Average Rating' },
              { number: '8+', label: 'Years of Experience' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-wood-300">{stat.number}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What We Craft</p>
            <h2 className="section-title">Explore Our Collections</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">From cosy couches to complete kitchen units — every piece handcrafted to transform your living space.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => navigate('shop')}
                className="group relative rounded-2xl overflow-hidden h-40 md:h-48 cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-lg mr-1 inline">{cat.icon}</p>
                  <p className="font-serif text-lg font-bold text-white inline">{cat.name}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-wood-400 rounded-full flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate('shop')} className="btn-primary">
              View All Products <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Handpicked for You</p>
            <h2 className="section-title">Featured Pieces</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate('shop')} className="btn-secondary">
              See Full Catalogue <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Why Nashthul?</p>
              <h2 className="section-title mb-6">
                Furniture Built<br />
                <span className="text-wood-400">With Purpose</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Nashthul Living Design, we believe your home should reflect who you are. Every piece we craft is a collaboration between your vision and our expertise — resulting in furniture that's uniquely yours.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-wood-400/15 rounded-xl flex items-center justify-center text-wood-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => navigate('about')} className="btn-primary">
                  Our Story <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={couches.beigeChannelSuite}
                alt="Our showroom"
                className="rounded-3xl w-full object-cover h-[500px] shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['bg-amber-500', 'bg-wood-400', 'bg-emerald-600'].map((c, i) => (
                      <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                        {['T', 'S', 'N'][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">500+ happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Quick Contact Strip */}
      <section className="py-16 bg-wood-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Ready to transform your home?</h3>
              <p className="text-white/80">Get in touch today and let's design something beautiful together.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/27614300608?text=Hi!%20I%27d%20like%20to%20discuss%20a%20furniture%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-wood-500 hover:bg-cream-100 font-bold px-6 py-3 rounded-full transition-colors shadow"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="tel:+27614300608"
                className="flex items-center gap-2 bg-wood-500 hover:bg-wood-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <Phone size={18} />
                Call Nkosinathi
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 flex flex-col sm:flex-row gap-4 justify-center text-white/80 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <MapPin size={14} className="flex-shrink-0" />
              <span>1 Cavendish Street, Soweto, Gauteng</span>
            </div>
            <span className="hidden sm:block">·</span>
            <div className="flex items-center gap-2 justify-center">
              <Phone size={14} className="flex-shrink-0" />
              <span>061 430 0608</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
