import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/agency/Footer';
import { FloatingBackToTop } from './components/FloatingBackToTop';
import { GenoraPreloader } from './components/GenoraPreloader';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

// Automatically scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      <ScrollToTop />
      {/* 3-second Premium Organic Bubble Preloader */}
      {loading && <GenoraPreloader onComplete={() => setLoading(false)} />}

      <div className="min-h-screen bg-[#EFEFEF] text-black flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-28 select-none antialiased relative selection:bg-[#F9D601] selection:text-black">
        {/* Floating Fixed Navigation Bar */}
        <Navbar />

        {/* Dedicated Page Routes */}
        <main className="w-full flex flex-col items-center flex-1 px-3 sm:px-4 md:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Redesigned Stacked-Card Footer Container */}
        <Footer />

        {/* Dynamic Circular Scroll-Progress Back To Top Button */}
        <FloatingBackToTop />
      </div>
    </HashRouter>
  );
}

export default App;
