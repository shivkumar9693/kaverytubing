import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
  const reasons = [
    { title: "Uncompromising Quality", desc: "Rigorous testing and strict adherence to international standards." },
    { title: "State-of-the-Art Facilities", desc: "Equipped with the latest manufacturing and engineering technology." },
    { title: "Global Export Network", desc: "Seamless supply chain capable of delivering worldwide." },
    { title: "Custom Specifications", desc: "Tailored dimensions, grades, and finishes to meet unique needs." },
    { title: "Timely Delivery", desc: "Optimized production timelines ensuring your projects stay on track." },
    { title: "Expert Engineering Team", desc: "Decades of collective experience driving innovation." },
    { title: "Sustainable Practices", desc: "Eco-friendly manufacturing processes and material sourcing." },
    { title: "Competitive Pricing", desc: "Premium quality stainless steel at market-leading prices." }
  ];

  return (
    <section id="about" className="bg-[#fcfcfc] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-black/5 rounded-full mb-4">
            <span className="text-black text-sm font-bold tracking-widest uppercase italic">
              Discover Kavery Tubing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            About Our <span className="text-[#EF4444]">Company</span>
          </h2>
        </div>

        <div className="space-y-24 overflow-hidden px-4">
          
          {/* Card 1: About Us - Slides in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col xl:flex-row gap-12 items-center"
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-4xl font-black text-black mb-6 flex items-center gap-4">
                <span className="w-10 h-1.5 bg-[#EF4444] rounded-full"></span>
                About Us
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-black">Kavery Tubing Solutions</span> is a premier manufacturer and exporter of high-quality stainless steel pipes, tubes, and fittings. With a legacy of excellence, we have established ourselves as a trusted partner for diverse industrial sectors globally.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
                  <h4 className="text-4xl md:text-5xl font-black text-[#EF4444]">20+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">Years Exp</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h4 className="text-4xl md:text-5xl font-black text-black">500+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">Projects</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-[#EF4444] rounded-3xl rotate-3 opacity-20"></div>
              <img src={aboutImg} alt="About Us" className="w-full h-[400px] object-cover rounded-3xl shadow-lg relative z-10" />
            </div>
          </motion.div>

          {/* Card 2: Our Vision - Slides in from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF4444] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-black text-white mb-10 flex items-center justify-center gap-4">
                <span className="w-10 h-1.5 bg-[#EF4444] rounded-full"></span>
                Our Vision
                <span className="w-10 h-1.5 bg-[#EF4444] rounded-full"></span>
              </h3>
              <div className="relative bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
                <div className="absolute -top-6 -left-2 text-8xl text-[#EF4444]/30 font-serif leading-none">"</div>
                <p className="text-white md:text-3xl text-2xl font-medium leading-relaxed italic relative z-10">
                  To be the global benchmark in stainless steel manufacturing, recognized for our relentless pursuit of quality, innovation, and sustainable industrial practices.
                </p>
                <div className="absolute -bottom-12 right-2 text-8xl text-[#EF4444]/30 font-serif leading-none rotate-180">"</div>
              </div>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
                We envision a future where our precision-engineered solutions form the backbone of critical infrastructure worldwide, driving progress and reliability.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Our History - Slides in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-inner border border-gray-200"
          >
            <h3 className="text-4xl font-black text-black mb-12 flex items-center justify-center gap-4">
              <span className="w-10 h-1.5 bg-[#EF4444] rounded-full"></span>
              Our History
              <span className="w-10 h-1.5 bg-[#EF4444] rounded-full"></span>
            </h3>
            
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/* History Timeline */}
              <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="inline-block bg-[#EF4444] text-white font-black text-xl px-4 py-1 rounded-lg mb-6 shadow-md">2005</div>
                <h4 className="text-2xl font-black text-black mb-4">Foundation</h4>
                <p className="text-gray-600 leading-relaxed">Established with a clear vision to provide premium stainless steel components to local industries, starting with a modest but highly capable facility.</p>
              </div>
              
              <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="inline-block bg-black text-white font-black text-xl px-4 py-1 rounded-lg mb-6 shadow-md">2012</div>
                <h4 className="text-2xl font-black text-black mb-4">Expansion</h4>
                <p className="text-gray-600 leading-relaxed">Opened our state-of-the-art 50,000 sq ft manufacturing plant, fully equipped with the latest automated machinery to scale our precision engineering.</p>
              </div>

              <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="inline-block bg-[#EF4444] text-white font-black text-xl px-4 py-1 rounded-lg mb-6 shadow-md">2018+</div>
                <h4 className="text-2xl font-black text-black mb-4">Global Reach</h4>
                <p className="text-gray-600 leading-relaxed">Achieved key international certifications and began exporting to over 30 countries worldwide, cementing our position in the global market.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Why Choose Us - Slides in from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">
                Why Choose <span className="text-[#EF4444]">Us</span>
              </h3>
              <div className="inline-block bg-black text-white px-8 py-3 rounded-full shadow-lg transform -rotate-1">
                <p className="text-lg md:text-xl font-bold tracking-wide">
                  8 Reasons that make us <span className="text-[#EF4444]">Industry Leaders</span>
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 group hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute -bottom-4 -right-4 text-[#EF4444] font-black text-8xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    {index + 1}
                  </div>
                  <div className="text-[#EF4444] font-black text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 origin-left">0{index + 1}.</div>
                  <h4 className="text-xl font-bold text-black group-hover:text-white mb-3 relative z-10">{reason.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed relative z-10 font-medium">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
