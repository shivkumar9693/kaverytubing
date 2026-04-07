import { motion } from 'framer-motion';
const Mail = () => <span>✉️</span>;
const MapPin = () => <span>📍</span>;
const Phone = () => <span>📞</span>;

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#1F2937]/5 -z-0 rounded-l-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Side: Contact details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#0A2540] text-white p-12 lg:p-16 rounded-[40px] shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Let's Discuss <br /><span className="text-[#F97316]">Your Project</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to elevate your industrial output? Reach out to us for premium quality products and world-class service. Our experts are here to assist with every technical detail.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#F97316] p-4 rounded-2xl group-hover:bg-[#1F2937] transition-colors">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Call Us Now</p>
                  <a
                    href="tel:+919876543210"
                    className="text-lg sm:text-2xl font-bold leading-tight break-words hover:text-[#F97316] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#F97316] p-4 rounded-2xl group-hover:bg-[#1F2937] transition-colors">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Email Us</p>
                  <a
                    href="mailto:info@kaverytubing.com"
                    className="text-lg sm:text-2xl font-bold leading-tight break-all hover:text-[#F97316] transition-colors"
                  >
                    info@kaverytubing.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#F97316] p-4 rounded-2xl group-hover:bg-[#1F2937] transition-colors">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Visit Factory</p>
                  <p className="text-lg sm:text-2xl font-bold leading-tight break-words">
                    GIDC Industrial Area, Metoda, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Maps & Reach */}
          <div className="flex-1 space-y-10">
            <h3 className="text-3xl font-extrabold text-[#0A2540]">Find Our <span className="text-[#F97316]">Facility</span></h3>
            
            {/* Google Maps Embed */}
            <div className="w-full h-[400px] bg-gray-100 rounded-[40px] overflow-hidden shadow-inner border border-gray-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.62512687118!2d70.6756857186008!3d22.2530114008779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c99da6899141%3A0x69608c2a9ec60a62!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712470000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>

            {/* Business Reach Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 bg-gray-100 rounded-3xl border border-gray-200">
                  <h4 className="text-[#0A2540] font-black text-lg mb-2 capitalize">Global Exports</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">Exporting premium steel products to over 30 countries globally including USA, Europe & UAE.</p>
               </div>
               <div className="p-6 bg-gray-100 rounded-3xl border border-gray-200">
                  <h4 className="text-[#F97316] font-black text-lg mb-2 capitalize">24/7 Support</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">Our logistics and technical support teams are available around the clock for global clients.</p>
               </div>
            </div>

            <motion.a 
              href="https://wa.me/919876543210"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#128C7E] text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-[#075E54] transition-all flex items-center justify-center gap-4 cursor-pointer"
            >
              <span>💬</span> Chat on WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
