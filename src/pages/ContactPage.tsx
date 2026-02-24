import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Mail } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);

    const msg = encodeURIComponent(
      `Hi Nashthul Living Design!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/27614300608?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="bg-charcoal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-3">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to start your project? We would love to hear from you. Send us a message or chat directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">Let's Build Something Beautiful</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a specific piece in mind or need help designing your dream space, our team is here to guide you every step of the way.
              </p>
            </div>

            {/* Quick actions */}
            <div className="space-y-3">
              <a
                href="https://wa.me/27614300608?text=Hi%20Nashthul!%20I%27d%20like%20to%20discuss%20a%20furniture%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-4 hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900">Chat on WhatsApp</p>
                  <p className="text-sm text-gray-500">Fastest way to reach us</p>
                </div>
                <div className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </a>

              <a
                href="tel:+27614300608"
                className="flex items-center gap-4 bg-cream-50 border border-cream-200 rounded-2xl p-4 hover:bg-cream-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-charcoal-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900">Call Nkosinathi</p>
                  <p className="text-sm text-gray-500">061 430 0608</p>
                </div>
                <div className="ml-auto text-charcoal-500 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </a>

              <div className="flex items-center gap-4 bg-cream-50 border border-cream-200 rounded-2xl p-4">
                <div className="w-12 h-12 bg-wood-400 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900">Visit Our Showroom</p>
                  <p className="text-sm text-gray-500">1 Cavendish Street, Soweto</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-cream-50 border border-cream-200 rounded-2xl p-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900">Email Us</p>
                  <p className="text-sm text-gray-500">info@nashthullivingdesign.co.za</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-3">Message Received!</h3>
                  <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. We have opened WhatsApp so you can chat with us directly. We will get back to you shortly!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-5">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-cream-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-wood-400 transition-colors bg-cream-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-cream-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-wood-400 transition-colors bg-cream-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 082 000 0000"
                        className="w-full border border-cream-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-wood-400 transition-colors bg-cream-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        I'm Interested In
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-cream-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-wood-400 transition-colors bg-cream-50 focus:bg-white"
                      >
                        <option value="">Select a category</option>
                        <option>Couches & Sofas</option>
                        <option>Beds & Storage Bases</option>
                        <option>Dining Tables</option>
                        <option>TV Stands</option>
                        <option>Headboards</option>
                        <option>Kitchen Units</option>
                        <option>Custom Order</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, desired dimensions, colours, budget, or any questions you have..."
                      className="w-full border border-cream-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-wood-400 transition-colors bg-cream-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-wood-400 hover:bg-wood-500 disabled:bg-wood-400/60 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message & Open WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, your message will be sent via WhatsApp for the quickest response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
