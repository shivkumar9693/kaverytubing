import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Import images for use in details
import pipesImg from '../assets/pipes.png';
import tubesImg from '../assets/tubes.png';
import fittingsImg from '../assets/fittings.png';

// Product Data with images
const PRODUCT_DETAILS = {
  "pipes": {
    title: "Stainless Steel Welded Pipes & Tubes",
    description: "Our stainless steel welded pipes and tubes are manufactured using premium quality raw materials and advanced technology to ensure high strength and corrosion resistance.",
    images: [pipesImg, pipesImg, pipesImg, pipesImg], // You can add different angle paths here
    specifications: [
      { label: "Range", value: "6.00 mm OD to 219.08 mm OD" },
      { label: "Thickness", value: "0.3 mm to 6.00 mm" },
      { label: "Grade", value: "304, 304L, 316, 316L, 321, 310S, etc." },
      { label: "Standard", value: "ASTM A312, A213, A269, A270, A554" },
      { label: "Finish", value: "Pickled, Bright Annealed, Polished (Mirror/Satin)" }
    ],
    features: [
      "High Dimensional Accuracy",
      "Superior Surface Finish",
      "Excellent Corrosion Resistance",
      "Uniform Wall Thickness"
    ],
    applications: [
      "Process Industry",
      "Oil & Gas",
      "Pharmaceutical",
      "Food & Beverage",
      "Construction"
    ]
  },
  "tubes": {
    title: "Precision Stainless Steel Tubes",
    description: "Manufactured for high-precision applications requiring tight tolerances and superior mechanical properties.",
    images: [tubesImg, tubesImg, tubesImg, tubesImg],
    specifications: [
      { label: "Outer Diameter", value: "4.00 mm to 101.60 mm" },
      { label: "Wall Thickness", value: "0.2 mm to 3.5 mm" },
      { label: "Tolerance", value: "± 0.05 mm" }
    ],
    features: ["Mirror Finish", "Heat Resistance", "Pressure Tested"],
    applications: ["Automotive", "Medical", "Aerospace"]
  },
  "fittings": {
    title: "Stainless Steel Pipe Fittings",
    description: "Comprehensive range of forged and butt-weld fittings for seamless fluid flow management.",
    images: [fittingsImg, fittingsImg, fittingsImg, fittingsImg],
    specifications: [
      { label: "Type", value: "Elbow, Tee, Reducer, Cap, Stub End" },
      { label: "Method", value: "Forged / Fabricated" }
    ],
    features: ["Leak Proof", "High Pressure Rating"],
    applications: ["Water Treatment", "Chemical Plants"]
  }
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = PRODUCT_DETAILS[productId] || PRODUCT_DETAILS["pipes"];
  const [activeImg, setActiveImg] = useState(0);

  const handleQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="bg-white">
      <div className="pt-24 min-h-screen">
        {/* Product Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-lg">
                 <motion.img 
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={product.images[activeImg]} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden transition-all ${
                      activeImg === i ? 'border-[#F97316] scale-95' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="Angle" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight text-balance">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#F97316] rounded-full" />
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  {product.specifications?.map((spec, i) => (
                    <div key={i} className="flex border-b border-gray-200 pb-2">
                      <span className="w-1/3 font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">{spec.label}</span>
                      <span className="w-2/3 font-medium text-[#0A2540] text-sm md:text-base">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleQuoteClick}
                className="w-full lg:w-max bg-[#F97316] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-600 transition-all cursor-pointer transform hover:scale-105"
              >
                Request Instant Quote
              </button>
            </div>
          </div>
        </section>

        {/* Extra Details */}
        <section className="py-16 bg-[#0A2540] text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
             <div>
                <h3 className="text-2xl font-bold text-[#F97316] mb-6 italic">Key Features</h3>
                <ul className="space-y-4">
                  {product.features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                       <span className="text-[#F97316] text-xl">✔</span>
                       {f}
                    </li>
                  ))}
                </ul>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-[#F97316] mb-6 italic">Typical Applications</h3>
                <div className="flex flex-wrap gap-3">
                  {product.applications?.map((a, i) => (
                    <span key={i} className="px-6 py-2.5 bg-white/10 rounded-full text-sm font-bold border border-white/5 hover:bg-[#F97316] transition-colors cursor-default">
                      {a}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
