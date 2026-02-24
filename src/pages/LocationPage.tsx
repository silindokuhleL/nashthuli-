import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
  { day: 'Saturday', time: '9:00 AM – 3:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

export default function LocationPage() {
  const today = new Date().getDay();
  const isOpen = today >= 1 && today <= 5
    ? true
    : today === 6
    ? true
    : false;

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="bg-charcoal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-3">Find Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Visit Our Showroom</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Come see our work in person. We welcome walk-ins and appointments at our Soweto showroom.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wood-400/15 rounded-xl flex items-center justify-center text-wood-400 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">Our Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    1 Cavendish Street<br />
                    Soweto, Gauteng<br />
                    1811, South Africa
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=1+Cavendish+Street,+Soweto,+Gauteng,+1811,+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-charcoal-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-charcoal-700 transition-colors"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wood-400/15 rounded-xl flex items-center justify-center text-wood-400 flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">Contact Us</h3>
                  <p className="text-gray-500 text-sm mb-3">Nkosinathi is available to assist you.</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+27614300608"
                      className="inline-flex items-center gap-2 bg-charcoal-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-charcoal-700 transition-colors w-fit"
                    >
                      <Phone size={14} />
                      061 430 0608
                    </a>
                    <a
                      href="https://wa.me/27614300608?text=Hi%20Nashthul!%20I%27d%20like%20to%20visit%20your%20showroom."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition-colors w-fit"
                    >
                      <MessageCircle size={14} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wood-400/15 rounded-xl flex items-center justify-center text-wood-400 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">Business Hours</h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                      {isOpen ? 'Open Now' : 'Closed'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {hours.map(h => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{h.day}</span>
                        <span className={`font-medium ${h.open ? 'text-charcoal-900' : 'text-red-500'}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full min-h-[400px]">
              <iframe
                title="Nashthul Living Design Location"
                src="https://maps.google.com/maps?q=1+Cavendish+Street,+Soweto,+Gauteng,+1811,+South+Africa&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[
            { icon: '🚗', title: 'Free Parking', desc: 'Ample free parking available directly outside our showroom.' },
            { icon: '📐', title: 'Measuring Service', desc: 'Bring your space dimensions and we can help plan your perfect layout.' },
            { icon: '🎨', title: 'Sample Materials', desc: 'View fabric swatches, wood finishes and colour options in person.' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-4xl mb-3">{item.icon}</p>
              <h4 className="font-serif text-lg font-bold text-charcoal-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
