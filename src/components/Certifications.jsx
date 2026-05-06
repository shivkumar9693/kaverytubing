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
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#F97316] font-black uppercase tracking-[0.2em] italic"
          >
            Compliance & Standards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A2540]"
          >
            Our Certifications
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#F97316] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col items-center text-center"
            >
              {/* PDF Preview Container */}
              <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden border border-gray-200 relative bg-white shadow-inner">
                <div className="absolute inset-0 bg-transparent z-10"></div> {/* Prevents scrolling inside iframe */}
                <iframe 
                  src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                  title={cert.name}
                ></iframe>
              </div>
              
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">{cert.name}</h3>
              <p className="text-gray-500 font-medium mb-6 flex-grow">{cert.description}</p>
              
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-bold rounded-xl hover:bg-[#F97316] transition-colors w-full justify-center z-20"
              >
                <span>View Full PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
