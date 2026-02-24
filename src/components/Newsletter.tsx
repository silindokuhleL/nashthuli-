import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-charcoal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mail className="text-wood-400" size={24} />
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold">Stay Inspired</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3">
          Design Updates & Exclusive Offers
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Be the first to see new collections, styling tips, and special promotions from our workshop.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-400">
            <CheckCircle size={22} />
            <span className="font-medium">Thank you! You're on the list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-charcoal-800 border border-charcoal-700 text-white placeholder-gray-500 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-wood-400 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-wood-400 hover:bg-wood-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm flex-shrink-0"
            >
              <Send size={15} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
