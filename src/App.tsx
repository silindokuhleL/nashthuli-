import { useState, useEffect } from 'react';
import { NavigationContext } from './context/NavigationContext';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WhatsAppPopup from './components/WhatsAppPopup';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <div className="min-h-screen bg-cream-50 font-sans">
        <Navbar />

        <main>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'shop' && <ShopPage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'location' && <LocationPage />}
          {currentPage === 'gallery' && <GalleryPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        <Footer />
        <WhatsAppButton />

        {showPopup && (
          <WhatsAppPopup onClose={() => setShowPopup(false)} />
        )}

        <CookieConsent />
      </div>
    </NavigationContext.Provider>
  );
};
