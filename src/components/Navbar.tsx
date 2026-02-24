import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Page } from '../types';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Shop', page: 'shop' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'About', page: 'about' },
  { label: 'Location', page: 'location' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className={`font-serif text-xl font-bold transition-colors ${scrolled ? 'text-charcoal-900' : 'text-white'}`}
        >
          Nashthul <span className="text-wood-400">Living</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === page
                  ? 'bg-wood-400 text-white'
                  : scrolled
                  ? 'text-charcoal-700 hover:text-wood-400 hover:bg-cream-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0614300608"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-charcoal-700 hover:text-wood-400' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone size={15} />
            061 430 0608
          </a>
          <a
            href="https://wa.me/27614300608"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2 px-4"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(o => !o)}
          className={`md:hidden transition-colors ${scrolled ? 'text-charcoal-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 animate-slide-down">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-wood-400 text-white'
                    : 'text-charcoal-700 hover:bg-cream-100 hover:text-wood-400'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="pt-2 pb-1 border-t border-cream-200 flex flex-col gap-2">
              <a href="tel:0614300608" className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal-700">
                <Phone size={15} className="text-wood-400" /> 061 430 0608
              </a>
              <a
                href="https://wa.me/27614300608"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm mx-4"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
