import { motion } from 'framer-motion';
const Shield = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Award = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
const CheckCircle = ({ className, size = 40 }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const BarChart = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;

const Quality = () => {
  const certifications = [
    { name: "ISO 9001:2015", icon: <Shield /> },
    { name: "PED 2014/68/EU", icon: <Award /> },
    { name: "AD 2000-W0", icon: <BarChart /> },
    { name: "IBR Certified", icon: <CheckCircle /> },
    { name: "View Certifications (PDF)", icon: <Award />, href: "/certification.pdf" }
  ];

  return (
    <section id="quality" className="relative py-24 bg-[#0A2540] overflow-hidden">
      {/* Decorative metal texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-white"
          >
            <span className="text-[#F97316] font-black uppercase tracking-widest italic mb-4 block">
              Quality Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Uncompromising Quality <br /> In Every Component
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              Our quality assurance process follows rigorous international benchmarks. We conduct extensive testing including chemical analysis, mechanical testing, and non-destructive examinations (NDT) to ensure absolute precision.
            </p>
            <ul className="space-y-6">
              {[
                "100% Raw Material Inspection",
                "Advanced Dimensional Verification",
                "Positive Material Identification (PMI)",
                "Corrosion Resistance Testing"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-white font-medium"
                >
                  <div className="bg-[#F97316] rounded-full p-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl flex flex-col items-center justify-center text-center group transition-colors"
              >
                <div className="text-[#F97316] mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="text-white font-bold text-xl">{cert.name}</h4>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#F97316] text-white font-black hover:bg-orange-600 transition-colors"
                  >
                    Open PDF
                  </a>
                ) : (
                  <p className="text-gray-500 text-sm mt-2 font-medium">Compliance Guaranteed</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
