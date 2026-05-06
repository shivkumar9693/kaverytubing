import { motion } from 'framer-motion';

const Certifications = () => {
  // You can easily add more certificates here by adding to this array
  // Just provide the name, description, and the path to your PDF file
  const certificates = [
    {
      id: 1,
      name: "ISO Certification",
      description: "Quality Management System",
      pdfUrl: "/ISO -KAVERY.pdf"
    },
    {
      id: 2,
      name: "BIS Testing",
      description: "Bureau of Indian Standards Testing",
      pdfUrl: "/BIS_TESTING_KAVERY_TUBING.pdf"
    },
    {
      id: 3,
      name: "IEC Certificate",
      description: "Import Export Code",
      pdfUrl: "/IEC certificate (Updated).pdf"
    },
    {
      id: 4,
      name: "UDYAM Certificate",
      description: "MSME Registration",
      pdfUrl: "/KTS- UDYAM CERTIFICATE.pdf"
    },
    {
      id: 5,
      name: "TradeMark Registration",
      description: "Official Trademark Registry",
      pdfUrl: "/TradeMark Reg..pdf"
    },
    {
      id: 6,
      name: "General Certification",
      description: "Company Quality Assurance",
      pdfUrl: "/certification.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EF4444]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#EF4444] font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Compliance & Standards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Official <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Certifications</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#EF4444] mx-auto rounded-full mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-[#111111] rounded-[2.5rem] p-8 border border-white/5 group-hover:border-[#EF4444]/50 transition-all duration-500 shadow-2xl flex flex-col h-full relative overflow-hidden">
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444]/5 rounded-bl-full pointer-events-none" />
                
                {/* PDF Preview Plaque - Shorter Box */}
                <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-white/5 bg-black group-hover:border-[#EF4444]/30 transition-all duration-500 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  <iframe 
                    src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-[200%] h-[200%] origin-top-left scale-50 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    title={cert.name}
                  ></iframe>
                  
                  {/* Floating Icon - Scaled for shorter box */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative z-20">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{cert.name}</h3>
                  <p className="text-gray-500 font-medium text-sm mb-8 leading-relaxed italic">{cert.description}</p>
                </div>
                
                <div className="mt-auto relative z-20">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-[#EF4444] rounded-2xl text-white font-black text-xs uppercase tracking-widest transition-all duration-300 group/btn"
                  >
                    <span>Inspect Document</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Badge Number */}
                <div className="absolute top-8 right-8 text-[40px] font-black text-white/[0.03] select-none group-hover:text-[#EF4444]/10 transition-colors duration-500 leading-none">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
