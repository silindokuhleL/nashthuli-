import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nashthul_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('nashthul_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('nashthul_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-charcoal-900 border-t border-wood-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Cookie size={20} className="text-wood-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to improve your experience on our website. By continuing to browse, you agree to our{' '}
                <span className="text-wood-300 underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="text-gray-400 hover:text-white text-sm transition-colors px-3 py-1.5"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="bg-wood-400 hover:bg-wood-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Accept All
              </button>
              <button onClick={decline} className="text-gray-500 hover:text-gray-300 transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
