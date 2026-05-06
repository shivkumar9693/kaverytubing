import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative flex items-start gap-6 group"
  >
    <div className="flex-shrink-0 relative">
      <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white font-black text-2xl shadow-lg border-4 border-white group-hover:scale-110 group-hover:bg-[#EF4444] transition-all z-10 relative">
        {number}
      </div>
      <div className="absolute top-16 bottom-[-40px] left-1/2 w-0.5 -translate-x-1/2 bg-gray-200 group-last:hidden" />
    </div>
    <div className="pt-3 pb-10">
      <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed max-w-2xl">{description}</p>
    </div>
  </motion.div>
);

const ManufacturingProcess = () => {
  const processes = [
    {
      title: "Raw Material Sourcing & Inspection",
      description: "We source high-grade stainless steel from certified suppliers. Every batch undergoes rigorous chemical and physical property testing to ensure it meets our baseline quality requirements before entering the facility."
    },
    {
      title: "Melting & Casting",
      description: "The approved raw materials are melted in state-of-the-art electric arc furnaces. Precise alloying additions are made, and the molten steel is continuously cast into billets or blooms with perfect consistency."
    },
    {
      title: "Hot & Cold Forming",
      description: "Depending on the final product, the steel undergoes hot extrusion or cold drawing. This process forms the seamless or welded pipes and tubes, achieving the desired dimensional tolerances and wall thickness."
    },
    {
      title: "Heat Treatment & Annealing",
      description: "To relieve internal stresses and optimize mechanical properties like tensile strength and ductility, the formed tubes are subjected to precise heat treatment cycles in controlled-atmosphere furnaces."
    },
    {
      title: "Precision Finishing",
      description: "The products are straightened, cut to length, and undergo surface treatments. This includes pickling, passivation, and high-grit polishing to achieve the required surface finish and corrosion resistance."
    },
    {
      title: "Comprehensive Quality Testing",
      description: "Every finished product undergoes a battery of tests including Hydrostatic testing, Ultrasonic Testing (UT), Eddy Current Testing (ECT), and Positive Material Identification (PMI) to guarantee zero defects."
    },
    {
      title: "Packaging & Global Dispatch",
      description: "Final products are meticulously marked with heat numbers and specifications, then packaged securely using sea-worthy wooden crates or customized packing to prevent damage during global transit."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#EF4444] font-black uppercase tracking-[0.2em] italic"
          >
            Manufacturing Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tighter"
          >
            How We Build Our Products
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#EF4444] mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {processes.map((proc, index) => (
            <ProcessStep 
              key={index}
              number={`0${index + 1}`}
              title={proc.title}
              description={proc.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
