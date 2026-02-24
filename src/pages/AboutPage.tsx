import { Sparkles, Shield, Heart, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { couches, beds, headboards, pedestals } from '../data/images';

const values = [
  { icon: <Sparkles className="w-7 h-7" />, title: 'Custom Designs', desc: 'No two pieces are the same. Every item is crafted to your exact specifications and vision.' },
  { icon: <Shield className="w-7 h-7" />, title: 'Quality Craftsmanship', desc: 'Premium materials, skilled artisans, and rigorous quality checks on every single piece.' },
  { icon: <Heart className="w-7 h-7" />, title: 'Affordable Pricing', desc: 'Luxury furniture that fits real budgets. We believe beautiful homes should be accessible to all.' },
  { icon: <Users className="w-7 h-7" />, title: 'Local Expertise', desc: 'Proudly South African. We understand local tastes, climates, and living spaces better than anyone.' },
];

const team = [
  {
    name: 'Nkosinathi',
    role: 'Founder & Master Craftsman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&face',
    bio: 'With over 8 years of experience crafting bespoke furniture, Nkosinathi founded Nashthul Living Design with a simple mission: transform ordinary homes into extraordinary spaces.',
  },
];

export default function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="relative bg-charcoal-900 py-20 overflow-hidden">
        <img
          src={couches.greyFabricSet}
          alt="Our furniture collection"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Crafting Dreams into Beautiful Furniture
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Born in Soweto, built with passion. We transform your vision into handcrafted furniture pieces that stand the test of time.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title mb-6">
                A Passion for Beautiful <span className="text-wood-400">Living Spaces</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nashthul Living Design was born from a simple belief: every home deserves furniture that reflects its owner's unique personality and style. Founded by Nkosinathi in the heart of Soweto, we started as a one-man workshop with big dreams and skilled hands.
                </p>
                <p>
                  Today, we are proud to have transformed over 500 homes across Gauteng with our bespoke furniture pieces. From cosy family couches to elegant bedroom sets, each item is crafted with meticulous attention to detail and a deep respect for our craft.
                </p>
                <p>
                  We source the finest materials, work closely with every client to understand their vision, and deliver furniture that exceeds expectations — every single time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27614300608?text=Hi!%20I%27d%20like%20to%20discuss%20a%20furniture%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Chat With Us
                </a>
                <button onClick={() => navigate('shop')} className="btn-secondary">
                  View Our Work <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={couches.emeraldSuite}
                alt="Emerald velvet suite"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src={headboards.greyFanShell}
                alt="Fan shell headboard"
                className="rounded-2xl w-full h-52 object-cover shadow-lg mt-8"
                loading="lazy"
              />
              <img
                src={beds.greyWingbackInstalled}
                alt="Wingback bed installed"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src={pedestals.dressingTableSet}
                alt="Dressing table set"
                className="rounded-2xl w-full h-52 object-cover shadow-lg mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-wood-400/10 group-hover:bg-wood-400 rounded-2xl flex items-center justify-center text-wood-400 group-hover:text-white mx-auto mb-5 transition-all duration-300">
                  {v.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-charcoal-900 mb-3">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">The People Behind the Craft</p>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="flex justify-center">
            {team.map(member => (
              <div key={member.name} className="bg-cream-50 rounded-3xl overflow-hidden shadow-lg max-w-sm w-full">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">{member.name}</h3>
                  <p className="text-wood-400 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  <a
                    href="tel:+27614300608"
                    className="inline-flex items-center gap-2 mt-5 bg-charcoal-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-charcoal-700 transition-colors"
                  >
                    Contact Nkosinathi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-wood-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Homes Transformed' },
              { number: '8+', label: 'Years Experience' },
              { number: '100%', label: 'Custom-Made' },
              { number: '5★', label: 'Average Rating' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold text-white">{s.number}</p>
                <p className="text-white/70 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
