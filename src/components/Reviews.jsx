import { motion } from 'framer-motion';

const StarRow = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const isFull = i < fullStars;
    const isHalf = i === fullStars && hasHalf;
    return (
      <span key={i} className={isFull || isHalf ? 'text-[#F97316]' : 'text-gray-200'}>
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
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#F97316] font-black uppercase tracking-[0.2em] italic"
          >
            Customer Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A2540]"
          >
            Trusted By Indian Industries
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#F97316] mx-auto rounded-full" />
        </div>

      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="marquee-reviews py-4">
          <div className="marquee-reviews__track">
            {reviewMarquee.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="mx-4 w-[350px] sm:w-[400px] shrink-0 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow whitespace-normal"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[#0A2540] font-black text-lg">{r.name}</div>
                    <div className="text-gray-500 text-sm font-semibold">{r.company}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[#0A2540] font-black text-sm">{r.rating.toFixed(1)}/5</div>
                    <StarRow value={r.rating} />
                  </div>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed font-medium">“{r.comment}”</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .marquee-reviews { overflow: hidden; }
          .marquee-reviews__track {
            display: flex;
            width: max-content;
            animation: marquee-reviews-scroll 45s linear infinite;
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

