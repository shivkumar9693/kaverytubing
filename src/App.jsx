import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import About from './components/About';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Partnership from './components/Partnership';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { useEffect } from 'react';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ activeSection, setActiveSection }) => (
  <main>
    <Hero />
    <Founder />
    <About />
    <Products />
    <Reviews />
    <Partnership />
    <Quality />
    <Contact />
  </main>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-white selection:bg-[#F97316] selection:text-white">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <Routes>
          <Route path="/" element={<HomePage activeSection={activeSection} setActiveSection={setActiveSection} />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
