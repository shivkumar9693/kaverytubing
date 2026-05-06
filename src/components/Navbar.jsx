import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Shield = () => <span>🛡️</span>;
const Award = () => <span>🏆</span>;
const CheckCircle = () => <span>✅</span>;
const BarChart = () => <span>📊</span>;
import { motion, AnimatePresence } from 'framer-motion';
const Menu = ({ size }) => <span style={{ fontSize: size }}>☰</span>;
const X = ({ size }) => <span style={{ fontSize: size }}>✕</span>;
const WhatsAppIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Download = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

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
    { name: 'Process', id: 'process' },
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-black/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-12 h-12 rounded-full bg-white shadow-xl ring-2 ring-white/20 overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="KaveryTubing Solutions Pvt. Ltd." className="w-full h-full object-cover" />
            </div>
            <div className="ml-3 leading-tight">
              <div className="text-white text-lg sm:text-xl font-black tracking-tight">
                KAVERY<span className="text-[#EF4444]">TUBING</span>
              </div>
              <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase">
                Solutions Pvt. Ltd.
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 pr-6 border-r border-white/10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs font-black tracking-widest uppercase transition-colors duration-200 ${
                    activeSection === link.id ? 'text-[#EF4444]' : 'text-white hover:text-gray-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="/certification.pdf" // Using general certification as placeholder for catalog
                target="_blank"
                className="flex items-center gap-2 text-white hover:text-[#EF4444] transition-colors px-3 py-2 rounded-lg border border-white/10 hover:border-[#EF4444]/50"
              >
                <Download size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Catalog</span>
              </a>

              <a 
                href="https://wa.me/917984229316"
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>

              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#EF4444] text-white px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg transform hover:scale-105"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
             <a 
                href="https://wa.me/917984229316"
                target="_blank"
                className="bg-[#25D366] text-white p-2.5 rounded-full shadow-lg"
              >
                <WhatsAppIcon size={20} />
              </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#EF4444] focus:outline-none"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-4 text-sm font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                    activeSection === link.id ? 'text-[#EF4444] bg-white/5' : 'text-white active:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <div className="grid grid-cols-1 gap-3 pt-6">
                <a 
                  href="/certification.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest"
                >
                  <Download size={20} />
                  Download Catalog
                </a>
                
                <a 
                  href="https://wa.me/917984229316"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 py-5 bg-[#25D366] rounded-2xl text-white font-black uppercase tracking-widest shadow-xl"
                >
                  <WhatsAppIcon size={24} />
                  WhatsApp Inquiry
                </a>

                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-[#EF4444] text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl"
                >
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
