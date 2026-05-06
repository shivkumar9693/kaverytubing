import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const distributors = [
  {
    id: 1,
    name: "Siddhi Vinayak Tubing Solutions",
    phone: "+91 79842 29316",
    email: "Siddhivinayaktubing@gmail.com",
    contactPerson: "Mahi Patel",
    designation: "Sales Manager",
    address: "103, SHYAMAL APRT, 132 Feet Circular Road, Vadaj Metro Station, Nava Wadaj, Ahmedabad, Gujarat, 380013",
    gst: "24CJTPC8052NIZO",
    description: "Authorized Distribution Partner. We provide immediate stock availability in Gujarat, expert technical consultation, and fast logistics with quick delivery for all your stainless steel needs."
  },
  {
    id: 2,
    name: "Kaveri Impex",
    phone: "+91 98765 43210",
    email: "info@kaveriimpex.com",
    contactPerson: "Sales Executive",
    designation: "Distribution Manager",
    address: "Mumbai, Maharashtra, India",
    gst: "27ABCDE1234F1Z5",
    description: "Leading exporters and distributors of high-quality stainless steel seamless pipes and tubes. Connecting Kavery Tubing's premium products to global markets."
  }
];

const Distributor = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="distributor" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Refined Industrial Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#EF4444_0%,transparent_25%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#EF4444_0%,transparent_25%)] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EF4444]/10 border border-[#EF4444]/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
              <span className="text-[#EF4444] text-[10px] font-black uppercase tracking-[0.3em]">
                Partner Network
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              Authorized <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Distributors</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm max-w-sm font-medium border-l border-red-900/30 pl-6"
          >
            Connecting our precision-engineered products to local markets through a network of certified logistics and technical partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {distributors.map((dist, index) => (
            <motion.div
              key={dist.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedId(selectedId === dist.id ? null : dist.id)}
              className={`group relative cursor-pointer ${
                selectedId === dist.id ? 'lg:col-span-2 row-span-1' : ''
              }`}
            >
              <div className={`h-full min-h-[280px] rounded-2xl transition-all duration-500 border overflow-hidden flex flex-col
                ${selectedId === dist.id 
                  ? 'bg-white border-[#EF4444] shadow-[0_20px_50px_rgba(239,68,68,0.15)]' 
                  : 'bg-[#0A0A0A] border-white/5 hover:border-[#EF4444]/30 shadow-2xl'}`}
              >
                {/* Header Area */}
                <div className={`p-8 flex-1 flex flex-col justify-between transition-colors duration-500
                  ${selectedId === dist.id ? 'text-black' : 'text-white'}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border
                        ${selectedId === dist.id ? 'border-black/10 text-black/40' : 'border-white/10 text-white/20'}`}
                      >
                        ID: 00{dist.id}
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                        ${selectedId === dist.id ? 'border-black/10' : 'border-white/10 group-hover:border-[#EF4444] group-hover:bg-[#EF4444]'}`}
                      >
                        <svg className={`w-4 h-4 transition-transform duration-500 ${selectedId === dist.id ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black leading-none uppercase tracking-tighter mb-2">
                      {dist.name.split(' ').slice(0, 2).join(' ')}<br />
                      <span className={`${selectedId === dist.id ? 'text-[#EF4444]' : 'text-white/40'}`}>
                        {dist.name.split(' ').slice(2).join(' ')}
                      </span>
                    </h3>
                    
                    {!selectedId && (
                      <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-4 group-hover:text-[#EF4444] transition-colors">
                        Click to view details
                      </p>
                    )}
                  </div>

                  <AnimatePresence>
                    {selectedId === dist.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 space-y-6"
                      >
                        <p className="text-xs font-medium text-gray-500 leading-relaxed border-l-2 border-[#EF4444] pl-4 italic">
                          {dist.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Phone Contact</span>
                            <p className="text-sm font-black">{dist.phone}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Official Email</span>
                            <p className="text-sm font-black truncate">{dist.email}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Bar */}
                <div className={`p-6 border-t transition-colors duration-500
                  ${selectedId === dist.id ? 'bg-black text-white border-transparent' : 'bg-white/5 text-gray-400 border-white/5'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-tight">{dist.contactPerson}</h4>
                      <p className={`text-[9px] font-bold uppercase tracking-widest ${selectedId === dist.id ? 'text-[#EF4444]' : 'text-gray-600'}`}>
                        {dist.designation}
                      </p>
                    </div>
                    {selectedId === dist.id && (
                      <div className="text-right">
                         <span className="text-[8px] font-black text-gray-500 uppercase block mb-1">GST Registration</span>
                         <span className="text-[10px] font-black tracking-widest">{dist.gst}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Distributor;
