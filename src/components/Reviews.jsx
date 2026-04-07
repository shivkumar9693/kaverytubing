import { motion } from 'framer-motion';

const StarRow = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const isFull = i < fullStars;
    const isHalf = i === fullStars && hasHalf;
    return (
      <span key={i} className={isFull || isHalf ? 'text-[#F97316]' : 'text-gray-200'}>
        ★
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
  ];

  return (
    <section id="reviews" className="py-24 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[#0A2540] font-black text-lg">{r.name}</div>
                  <div className="text-gray-500 text-sm font-semibold">{r.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#0A2540] font-black text-sm">{r.rating.toFixed(1)}/5</div>
                  <StarRow value={r.rating} />
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed font-medium">“{r.comment}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

