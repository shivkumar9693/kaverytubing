import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Shield = () => <span>🛡️</span>;
const Award = () => <span>🏆</span>;
const CheckCircle = () => <span>✅</span>;
const BarChart = () => <span>📊</span>;
import { motion, AnimatePresence } from 'framer-motion';
const Menu = ({ size }) => <span style={{ fontSize: size }}>☰</span>;
const X = ({ size }) => <span style={{ fontSize: size }}>✕</span>;
const PhoneCall = ({ size }) => <span style={{ fontSize: size }}>📞</span>;
const Navbar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Quality', id: 'quality' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      if (setActiveSection) setActiveSection(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-[#0A2540] shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-12 h-12 rounded-full bg-white shadow-xl ring-2 ring-white/20 overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="Kaveru Tubing Solutions Pvt. Ltd." className="w-full h-full object-cover" />
            </div>
            <div className="ml-3 leading-tight">
              <div className="text-white text-lg sm:text-xl font-black tracking-tight">
                KAVERY<span className="text-[#F97316]">TUBING</span>
              </div>
              <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase">
                Solutions Pvt. Ltd.
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  activeSection === link.id ? 'text-[#F97316]' : 'text-white hover:text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-[#F97316] text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all flex items-center gap-2 transform hover:scale-105"
            >
              <PhoneCall size={18} />
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F97316] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A2540] border-t border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-3 text-lg font-bold transition-all rounded-xl ${
                    activeSection === link.id ? 'text-[#F97316] bg-white/5' : 'text-white active:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-[#F97316] text-white py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3"
                >
                  <PhoneCall size={24} />
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
