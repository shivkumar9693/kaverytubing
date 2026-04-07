import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pipesImg from '../assets/pipes.png';
import tubesImg from '../assets/tubes.png';
import fittingsImg from '../assets/fittings.png';

const ProductCard = ({ title, description, image, index, slug }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-[#0A2540]/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0A2540] mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <button 
          onClick={() => navigate(`/product/${slug}`)}
          className="text-[#F97316] font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer"
        >
          View Specifications 
          <span className="text-2xl">→</span>
        </button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const products = [
    {
      slug: "pipes",
      title: "Stainless Steel Pipes",
      description: "Heavy-duty seamless and welded pipes for high-pressure industrial applications. Available in various grades and sizes.",
      image: pipesImg
    },
    {
      slug: "tubes",
      title: "Precision Tubes",
      description: "High-precision tubing for heat exchangers, automotive, and instrumentation. Manufactured with tight tolerances.",
      image: tubesImg
    },
    {
      slug: "fittings",
      title: "Premium Fittings",
      description: "Complete range of stainless steel pipe fittings including elbows, tees, reducers, and caps. Precision forged for leak-proof connections.",
      image: fittingsImg
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#F97316] font-black uppercase tracking-[0.2em] italic"
          >
            Our Product Range
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A2540]"
          >
            Engineered For Excellence
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#F97316] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Download PDF button */}
          <a
            href="/kavery-catalog.pdf"
            download="Kaveru-Tubing-Solutions-Catalog.pdf"
            className="flex items-center gap-3 bg-[#0A2540] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1F2937] transition-all transform hover:scale-105 shadow-xl"
          >
            <span>📄</span> Download Full Catalog
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20request%20the%20Kaveru%20Tubing%20Solutions%20product%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#128C7E] text-white px-10 py-4 rounded-full font-bold hover:bg-[#075E54] transition-all transform hover:scale-105 shadow-xl"
          >
            <span>💬</span> Request on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
