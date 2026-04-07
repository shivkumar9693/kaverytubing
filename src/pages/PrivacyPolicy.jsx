import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-[#0A1628]">

      {/* ── Animated background blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-100px] left-[-120px] w-[500px] h-[500px] rounded-full bg-[#F97316] blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[-80px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#1E40AF] blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F97316] blur-[180px] pointer-events-none"
      />

      {/* ── Floating geometric shapes ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [0, 360], y: [-10, 10, -10] }}
          transition={{ duration: 15 + i * 3, repeat: Infinity, ease: 'linear', delay: i * 2 }}
          className="absolute border border-white/5 rounded-2xl pointer-events-none"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            top: `${10 + i * 14}%`,
            left: i % 2 === 0 ? `${3 + i * 2}%` : undefined,
            right: i % 2 !== 0 ? `${2 + i * 3}%` : undefined,
          }}
        />
      ))}

      {/* ── Steel pipe pattern overlay ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)'
        }}
      />

      {/* ── Main content card ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 lg:p-16 text-white shadow-2xl border border-white/10"
        >
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-white/10 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#F97316] rounded-full mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-black italic leading-tight">
              Privacy <span className="text-[#F97316]">Policy</span>
            </h1>
            <p className="mt-4 text-gray-400 font-medium">Kavery Tubing Pvt Ltd — Last updated April 2024</p>
          </div>

          <div className="space-y-12 text-gray-300 leading-relaxed font-medium text-lg">
            {[
              {
                number: '01',
                title: 'Data Collection',
                body: 'At Kavery Tubing, we collect minimal information necessary to process your inquiries and orders. This may include your name, company name, contact number, and email address provided through direct communication.'
              },
              {
                number: '02',
                title: 'Use of Information',
                body: 'The information collected is used solely to respond to your requests, provide technical support for our stainless steel products, and communicate industrial updates. We do not sell or share your data with third-party marketing firms.'
              },
              {
                number: '03',
                title: 'Data Security',
                body: 'We implement robust physical and digital security measures at our GIDC facility and on our servers to protect your technical specifications and business data from unauthorized access or disclosure.'
              },
              {
                number: '04',
                title: 'Cookies Policy',
                body: 'Our website uses basic analytical cookies to understand user traffic patterns and optimize the browsing experience. You can manage cookie preferences through your browser settings at any time.'
              }
            ].map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-6 group"
              >
                <span className="text-5xl font-black text-[#F97316]/20 group-hover:text-[#F97316]/40 transition-colors shrink-0 leading-none select-none">
                  {section.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 italic">{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              </motion.section>
            ))}

            <div className="pt-8 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                For more information regarding our data practices, contact info@kaverytubing.com.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
