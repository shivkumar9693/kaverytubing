import { motion } from 'framer-motion';

const Partnership = () => {
  const partners = [
    'Tata Projects',
    'L&T Construction',
    'Reliance Industries',
    'Adani Ports',
    'JSW Steel',
    'Bharat Petroleum',
    'Indian Oil Corporation',
    'Hindustan Unilever',
    'Mahindra & Mahindra',
    'Cipla',
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
            className="text-[#F97316] font-black uppercase tracking-[0.2em] italic"
          >
            Partnerships
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[#0A2540]"
          >
            Working With Brands That Build India
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee border-y border-gray-100 bg-gray-50">
          <div className="marquee__track">
            {row.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-4 my-6 px-8 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-[#0A2540] font-black tracking-tight whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .marquee { overflow: hidden; }
          .marquee__track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 22s linear infinite;
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

