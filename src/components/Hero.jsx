import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Hero Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Leading <span className="text-[#F97316]">Stainless Steel</span> Products 
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, size: 0.8 }}
            animate={{ opacity: 1, size: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10 font-medium"
          >
            Premium export-quality pipes, tubes, and fittings for global industrial needs. Manufactured with precision and durability.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-2xl"
            >
              Enquire Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('products')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A2540] transition-all flex items-center justify-center gap-2"
            >
              Our Products
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute right-0 bottom-0 p-8 z-20 hidden lg:block opacity-30">
        <span className="text-white text-[150px] font-black leading-none pointer-events-none select-none">
          STEEL
        </span>
      </div>
    </section>
  );
};

export default Hero;
