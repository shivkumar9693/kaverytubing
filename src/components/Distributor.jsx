import { motion } from 'framer-motion';
import distributorCard from '../assets/distributor_card.png';

const Distributor = () => {
  return (
    <section id="distributor" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-[#0A2540]/10 rounded-full">
              <span className="text-[#0A2540] text-sm font-bold tracking-widest uppercase italic">
                Our Distribution Network
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight">
              Authorized <span className="text-[#F97316]">Distributor</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We partner with trusted distributors to bring our high-quality stainless steel products closer to your industrial operations. Connect with our authorized distributors for quick access, reliable service, and technical support.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm mt-6 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Siddhi Vinayak Tubing Solutions</h3>
              <p className="text-[#F97316] font-bold mb-4 uppercase tracking-wider text-sm">Authorized Distribution Partner</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  <span className="text-gray-700 font-semibold">Immediate Stock Availability in Gujarat</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  <span className="text-gray-700 font-semibold">Expert Technical Consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  <span className="text-gray-700 font-semibold">Fast Logistics and Quick Delivery</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Digital Business Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full flex justify-center perspective-1000"
          >
            <div className="relative z-10 w-full max-w-md transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(10,37,64,0.3)]">
              <div className="bg-[#111827] rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden relative group">
                
                {/* Metallic shine texture effect */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                
                {/* Top Industrial Orange Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F97316] via-orange-400 to-[#F97316]"></div>
                
                <div className="p-8 sm:p-10 flex flex-col items-center text-center border-b border-gray-800/60 relative bg-[#0A2540]/80 backdrop-blur-md">
                  <div className="w-20 h-20 mb-5 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-inner border border-gray-600 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <svg className="w-10 h-10 text-gray-300 relative z-10 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-widest uppercase text-shadow-sm">Siddhi Vinayak</h3>
                  <p className="text-xs text-gray-400 tracking-[0.3em] uppercase font-bold mt-2">Tubing Solutions</p>
                  
                  <div className="mt-8 pt-8 border-t border-gray-700 w-full relative">
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#F97316]"></div>
                    <h4 className="text-xl font-bold text-white tracking-wide">Mahi Patel</h4>
                    <p className="text-sm text-[#F97316] font-medium mt-1 uppercase tracking-[0.15em]">Sales Manager</p>
                  </div>
                </div>

                <div className="p-8 sm:p-10 bg-[#111827]/90 backdrop-blur-sm space-y-6 relative">
                  <div className="flex items-center gap-5 text-gray-300 group/item">
                    <span className="w-11 h-11 rounded-lg bg-gray-800/80 border border-gray-700 flex items-center justify-center text-gray-400 group-hover/item:bg-[#F97316] group-hover/item:border-[#F97316] group-hover/item:text-white transition-all shadow-inner">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <p className="font-bold text-sm tracking-widest text-gray-200">+91 79842 29316</p>
                  </div>
                  <div className="flex items-center gap-5 text-gray-300 group/item">
                    <span className="w-11 h-11 rounded-lg bg-gray-800/80 border border-gray-700 flex items-center justify-center text-gray-400 group-hover/item:bg-[#F97316] group-hover/item:border-[#F97316] group-hover/item:text-white transition-all shadow-inner">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </span>
                    <p className="font-bold text-sm tracking-wide text-gray-200 break-all">Siddhivinayaktubing@gmail.com</p>
                  </div>
                  <div className="flex items-start gap-5 text-gray-300 group/item">
                    <span className="w-11 h-11 rounded-lg bg-gray-800/80 border border-gray-700 flex flex-shrink-0 items-center justify-center text-gray-400 group-hover/item:bg-[#F97316] group-hover/item:border-[#F97316] group-hover/item:text-white transition-all shadow-inner mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    <p className="text-[11px] font-semibold leading-relaxed text-gray-400 uppercase tracking-widest">
                      103, SHYAMAL APRT, 132 Feet Circular Road, Vadaj Metro Station, Nava Wadaj, Ahmedabad, Gujarat, 380013
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">GST Number</span>
                    <span className="text-xs font-bold text-[#F97316] tracking-widest bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 shadow-inner">24CJTPC8052NIZO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0A2540]/10 to-transparent rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#F97316]/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Distributor;
