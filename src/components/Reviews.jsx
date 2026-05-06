import { motion } from 'framer-motion';

const StarRow = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const isFull = i < fullStars;
    const isHalf = i === fullStars && hasHalf;
    return (
      <span key={i} className={isFull || isHalf ? 'text-[#EF4444]' : 'text-gray-200'}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill={isFull || isHalf ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </span>
    );
  });
  return <div className="text-lg leading-none">{stars}</div>;
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Amit Sharma',
      company: 'Mumbai, Maharashtra',
      rating: 5,
      comment:
        'Excellent finish and dimensional accuracy. Delivery was on time and the team helped us finalize grade selection quickly.',
    },
    {
      name: 'Priya Iyer',
      company: 'Chennai, Tamil Nadu',
      rating: 4.5,
      comment:
        'Quality is consistent across batches. Packaging was strong and documentation was clear for inspection and dispatch.',
    },
    {
      name: 'Rahul Verma',
      company: 'Pune, Maharashtra',
      rating: 5,
      comment:
        'Great support and quick response on specifications. The tubes performed perfectly in our heat exchanger project.',
    },
    {
      name: 'Vikram Singh',
      company: 'Delhi, NCR',
      rating: 5,
      comment:
        'Outstanding durability. The seamless stainless steel pipes we ordered handled high pressure effortlessly.',
    },
    {
      name: 'Neha Gupta',
      company: 'Bangalore, Karnataka',
      rating: 4.5,
      comment:
        'Highly recommended for industrial needs. Their customer service team is very knowledgeable and responsive.',
    },
    {
      name: 'Suresh Patel',
      company: 'Ahmedabad, Gujarat',
      rating: 5,
      comment:
        'We have been sourcing from them for over 5 years. Consistently best-in-class pricing and impeccable quality.',
    },
    {
      name: 'Anjali Desai',
      company: 'Surat, Gujarat',
      rating: 5,
      comment:
        'Perfect precision engineered fittings. Really satisfied with the overall buying experience and technical support.',
    },
    {
      name: 'Rajesh Kumar',
      company: 'Hyderabad, Telangana',
      rating: 4.5,
      comment:
        'Reliable partner for large scale projects. The deliveries are well-coordinated and the products meet all ISO standards.',
    }
  ];

  // Duplicate for seamless marquee loop
  const reviewMarquee = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#050505] overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#EF4444] font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Client Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Global Industries</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#EF4444] mx-auto rounded-full mt-8" />
        </div>
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="marquee-reviews py-10">
          <div className="marquee-reviews__track">
            {reviewMarquee.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="mx-6 w-[380px] sm:w-[450px] shrink-0 bg-black rounded-2xl p-10 border border-white/5 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-[#EF4444]/30"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-8 text-[120px] font-black text-[#EF4444]/[0.03] select-none leading-none pointer-events-none group-hover:text-[#EF4444]/[0.08] transition-colors">
                  “
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <div className="text-white font-black text-xl uppercase tracking-tighter">{r.name}</div>
                      <div className="text-[#EF4444] text-[10px] font-bold uppercase tracking-widest mt-1 italic">{r.company}</div>
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded-md border border-white/10">
                       <div className="text-white font-black text-[10px] text-center mb-1 uppercase tracking-widest opacity-40">Rating</div>
                       <StarRow value={r.rating} />
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-medium text-lg italic border-l-2 border-[#EF4444]/30 pl-6 group-hover:border-[#EF4444] transition-colors">
                    "{r.comment}"
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#EF4444] group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .marquee-reviews { overflow: hidden; position: relative; }
          .marquee-reviews__track {
            display: flex;
            width: max-content;
            animation: marquee-reviews-scroll 60s linear infinite;
          }
          .marquee-reviews__track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-reviews-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-reviews__track { animation: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Reviews;

