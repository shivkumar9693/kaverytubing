import { Link } from 'react-router-dom';

// ── SVG Icons ──
const Twitter = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Instagram = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const Youtube = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const ArrowUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);

const socialLinks = [
  {
    icon: <Instagram size={18} />,
    href: 'https://www.instagram.com/kaverytubing/',
    label: 'Instagram',
    color: '#E1306C',
    bg: '#3d1a28',
  },
  {
    icon: <Twitter size={18} />,
    href: 'https://x.com/kaverytubing',
    label: 'X (Twitter)',
    color: '#e7e7e7',
    bg: '#1a1a1a',
  },
  {
    icon: <Linkedin size={18} />,
    href: 'https://www.linkedin.com/in/kaverytubingsolutions/',
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: '#0d1f35',
  },
  {
    icon: <Youtube size={18} />,
    href: 'https://www.youtube.com/@Kaverytubingsolutions',
    label: 'YouTube',
    color: '#FF0000',
    bg: '#2d0a0a',
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle static decorative blobs */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#0A2540] rounded-full blur-[90px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-56 h-56 bg-[#F97316] rounded-full blur-[120px] opacity-5 pointer-events-none" />

      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-xl ring-2 ring-white/10 overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Kavery Tubing Solutions Pvt. Ltd." className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-black italic tracking-tighter">
                  KAVERY<span className="text-[#F97316]">TUBING</span>
                </div>
                <div className="text-[10px] text-white/60 font-bold tracking-[0.22em] uppercase">
                  Solutions Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A trusted leader in high-performance stainless steel products — delivering precision and quality for critical industrial applications worldwide.
            </p>

            {/* Social Icons — brand-colored */}
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  style={{ color: item.color, backgroundColor: item.bg, border: `1px solid ${item.color}22` }}
                  className="p-2.5 rounded-xl w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:ml-8">
            <h4 className="text-sm font-bold text-white border-b-2 border-[#F97316] inline-block pb-1 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium uppercase tracking-widest">
              {['home', 'about', 'products', 'process', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-[#F97316] opacity-60 group-hover:opacity-100 transition-opacity">›</span>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white border-b-2 border-[#F97316] inline-block pb-1 uppercase tracking-widest">
              Our Specialties
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                'High-Pressure Pipes',
                'Seamless Tubes',
                'Precision Elbows',
                'Stainless Steel Flanges',
                'Custom Metal Fabrication',
              ].map((s) => (
                <li key={s} className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-70 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white border-b-2 border-[#F97316] inline-block pb-1 uppercase tracking-widest">
              Reach Us
            </h4>
            <div className="text-gray-400 text-sm space-y-4">
              {[
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, 
                  text: 'GIDC Metoda, Gujarat, India' 
                },
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, 
                  text: '+91 98765 43210' 
                },
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, 
                  text: 'info@kaverytubing.com' 
                },
              ].map(({ icon, text }, idx) => (
                <p key={idx} className="flex items-start gap-3 hover:text-white transition-colors duration-200 cursor-pointer group">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                    {icon}
                  </span>
                  <span className="pt-1.5">{text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-[0.25em]">
              © {new Date().getFullYear()} Kavery Tubing Solutions Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[11px] text-gray-500 font-semibold uppercase tracking-widest">
              <Link to="/privacy-policy" className="hover:text-[#F97316] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-[#F97316] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        className="fixed bottom-8 right-8 bg-[#F97316] text-white p-4 rounded-xl shadow-2xl hover:bg-[#ea6b10] active:scale-95 transition-all duration-200 z-50 border border-orange-400/20"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
};

export default Footer;
