import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-[#0A2540]/10 rounded-full">
              <span className="text-[#0A2540] text-sm font-bold tracking-widest uppercase italic">
                About Our Company
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight">
              Crafting Quality <span className="text-[#F97316]">Stainless Steel</span> For Global Industries
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a leading manufacturer and exporter of premium stainless steel pipes, tubes, and fittings. Our state-of-the-art facilities and cutting-edge technology ensure every product meets the highest international standards of quality and durability.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a legacy of excellence spanning over two decades, we've served diverse industrial sectors, from oil and gas to pharmaceutical and food processing, delivering precision-engineered solutions that last a lifetime.
            </p>
            <div className="grid grid-cols-2 gap-8 py-4">
              <div>
                <h3 className="text-4xl font-black text-[#0A2540]">20+</h3>
                <p className="text-gray-500 font-medium">Years Of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-[#F97316]">500+</h3>
                <p className="text-gray-500 font-medium">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image with Accents */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100">
              <img 
                src={aboutImg} 
                alt="Stainless Steel Factory" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F97316] rounded-2xl -z-0 opacity-20 transform rotate-12" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0A2540] rounded-2xl -z-0 opacity-10 transform -rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
