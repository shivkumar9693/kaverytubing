import { motion } from 'framer-motion';

const Partnership = () => {
  const partners = [
    'Dilip Pipes & Tubes',
    'M P Jain & Co',
    'JAIN TUBING SOLUTIONS LLP',
    'Chaudhary Engineering Solutions',
    'A Squared Tubes',
    'Dilip Pipes & Tubes',
    'M P Jain & Co',
    'JAIN TUBING SOLUTIONS LLP',
    'Chaudhary Engineering Solutions',
    'A Squared Tubes',
  ];

  // Duplicate list for seamless infinite loop
  const row = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#EF4444] font-black uppercase tracking-[0.2em] italic"
          >
            Partnerships
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tighter"
          >
            Working With Brands That Build India
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee border-y border-red-900/20 bg-[#050505] relative">
          {/* Industrial Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
          
          <div className="marquee__track py-10">
            {row.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 px-12 py-8 rounded-lg bg-black border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-white font-black tracking-tighter whitespace-nowrap uppercase text-2xl group relative overflow-hidden transition-all duration-500 hover:border-[#EF4444]/40"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EF4444]/0 via-[#EF4444]/5 to-[#EF4444]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <span className="relative z-10 group-hover:text-[#EF4444] transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .marquee { overflow: hidden; position: relative; }
          .marquee__track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 30s linear infinite;
          }
          .marquee:hover .marquee__track {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee__track { animation: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partnership;

