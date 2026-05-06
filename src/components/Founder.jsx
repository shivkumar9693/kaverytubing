import { motion } from 'framer-motion';
import founderImg from '../assets/founder.png';

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-[#EF4444] rounded-3xl opacity-10 -z-10 rotate-6" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-black rounded-3xl opacity-10 -z-10 -rotate-6" />
            <div className="overflow-hidden rounded-[32px] border border-gray-100 shadow-2xl">
              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/5 border border-black/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="text-black text-xs font-black tracking-[0.25em] uppercase italic">
                Message from the Founder
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight uppercase tracking-tighter">
              Building trust with <span className="text-[#EF4444]">precision</span>, quality, and long-term partnerships.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Kavery Tubing Solutions Pvt. Ltd., our focus is simple: deliver stainless steel products that perform reliably in real industrial conditions.
              Every order is handled with strict quality control, on-time commitments, and transparent technical support.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <p className="text-black font-bold leading-relaxed">
                “We don’t just supply pipes and tubes — we support your projects with consistent specifications, dependable finishes, and responsive service.”
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-black font-black">Founder</div>
                  <div className="text-gray-500 text-sm font-semibold"> Kavery Tubing Solutions Pvt. Ltd.</div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#EF4444] text-white font-black hover:bg-red-700 transition-colors"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

