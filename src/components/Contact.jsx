import { motion } from 'framer-motion';
const Mail = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPin = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Phone = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gray-50 -z-0 rounded-l-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Side: Contact details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-black text-white p-12 lg:p-16 rounded-[40px] shadow-2xl border border-red-900/20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">Let's Discuss <br /><span className="text-[#EF4444]">Your Project</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to elevate your industrial output? Reach out to us for premium quality products and world-class service. Our experts are here to assist with every technical detail.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#EF4444] p-4 rounded-2xl group-hover:bg-red-700 transition-colors">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Call Us Now</p>
                  <a
                    href="tel:+917984229316"
                    className="text-lg sm:text-2xl font-bold leading-tight break-words hover:text-[#EF4444] transition-colors"
                  >
                    +91 79842 29316
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#EF4444] p-4 rounded-2xl group-hover:bg-red-700 transition-colors">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Email Us</p>
                  <a
                    href="mailto:info@kaverytubing.com"
                    className="text-lg sm:text-2xl font-bold leading-tight break-all hover:text-[#EF4444] transition-colors"
                  >
                    info@kaverytubing.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform">
                <div className="bg-[#EF4444] p-4 rounded-2xl group-hover:bg-red-700 transition-colors">
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
            <h3 className="text-3xl font-extrabold text-black">Find Our <span className="text-[#EF4444]">Facility</span></h3>
            
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
               <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-black font-black text-lg mb-2 capitalize">Global Exports</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">Exporting premium steel products to over 30 countries globally including USA, Europe & UAE.</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-[#EF4444] font-black text-lg mb-2 capitalize">24/7 Support</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">Our logistics and technical support teams are available around the clock for global clients.</p>
               </div>
            </div>

            <motion.a 
              href="https://wa.me/917984229316"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#EF4444] text-white py-5 rounded-3xl font-black text-xl shadow-[0_20px_40px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-all flex items-center justify-center gap-4 cursor-pointer uppercase tracking-widest border-b-4 border-red-800 active:border-b-0"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg> Chat on WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
