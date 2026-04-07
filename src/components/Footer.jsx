import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── SVG Icons ──
const Twitter = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Instagram = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Globe = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const ArrowUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
);

const SHAPES = ['circle', 'square', 'diamond', 'triangle'];
const COLORS = ['#F97316', '#FB923C', '#FED7AA', '#ffffff', '#f97316aa'];

// ── Footer ──
const Footer = () => {
  const footerRef = useRef(null);
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animFrameRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothScale = useSpring(0.5, springConfig);

  // ── Canvas resize ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ── Animation loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.life > 0);

      for (const p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.life * 0.95;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#F97316';
        ctx.shadowBlur = 14;

        const s = p.size;
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'square') {
          ctx.fillRect(-s / 2, -s / 2, s, s);
        } else if (p.shape === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -s / 2);
          ctx.lineTo(s / 2, 0);
          ctx.lineTo(0, s / 2);
          ctx.lineTo(-s / 2, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -s / 2);
          ctx.lineTo(s / 2, s / 2);
          ctx.lineTo(-s / 2, s / 2);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.04;
        p.rotation += p.rotSpeed;
        p.life -= 0.016;
      }
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // ── Spawn particles & update ambient orb — fires on entire footer ──
  const handleFooterMouseMove = useCallback((e) => {
    if (!footerRef.current || !canvasRef.current) return;
    const footerRect = footerRef.current.getBoundingClientRect();
    const canvasRect = canvasRef.current.getBoundingClientRect();

    // Update ambient orb position (relative to footer)
    mouseX.set(e.clientX - footerRect.left);
    mouseY.set(e.clientY - footerRect.top);
    smoothScale.set(1.5);

    // Spawn particles (relative to canvas)
    const cx = e.clientX - canvasRect.left;
    const cy = e.clientY - canvasRect.top;
    for (let i = 0; i < 3; i++) {
      particles.current.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 3,
        vy: -(Math.random() * 2.5 + 1),
        size: Math.random() * 12 + 4,
        alpha: 1,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
      });
    }
  }, []);

  const handleFooterMouseLeave = useCallback(() => {
    smoothScale.set(0.5);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleFooterMouseMove}
      onMouseLeave={handleFooterMouseLeave}
      className="bg-[#1F2937] text-white py-20 relative overflow-hidden"
    >
      {/* ── Particle Canvas — pointer-events-none so links/buttons still work ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* ── Ambient glow orb follows mouse ── */}
      <motion.div
        className="absolute w-[420px] h-[420px] bg-[#F97316] rounded-full blur-[130px] opacity-10 pointer-events-none z-0"
        style={{ x: smoothX, y: smoothY, scale: smoothScale, translateX: '-50%', translateY: '-50%' }}
      />

      {/* ── Static decorative blobs ── */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#0A2540] rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F97316] rounded-full blur-[130px] opacity-5 pointer-events-none" />

      {/* ── Footer content — z-10 stays above canvas ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">

          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-xl ring-2 ring-white/10 overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Kaveru Tubing Solutions Pvt. Ltd." className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-black italic tracking-tighter cursor-pointer">
                  KAVERY<span className="text-[#F97316]">TUBING</span>
                </div>
                <div className="text-[10px] text-white/70 font-bold tracking-[0.22em] uppercase">
                  Solutions Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              A global leader in high-performance stainless steel products delivering precision and quality for critical industrial applications worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Globe size={18} />, href: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ y: -8, backgroundColor: '#F97316', scale: 1.1, rotate: 5 }}
                  className="bg-gray-800 p-2.5 rounded-2xl w-11 h-11 flex items-center justify-center text-white border border-white/5 shadow-lg"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:ml-10">
            <h4 className="text-lg font-bold text-white border-b-2 border-[#F97316] inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
              {['home','about','products','quality','contact'].map(id => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-[#F97316] transition-colors flex items-center gap-2">
                    <span>→</span> {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-b-2 border-[#F97316] inline-block pb-1 italic uppercase tracking-wider">Our Specialties</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              {['High-Pressure Pipes','Seamless Tubes','Precision Elbows','Stainless Steel Flanges','Custom Metal Fabrication'].map(s => (
                <li key={s} className="hover:text-white transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-white border-b-2 border-[#F97316] inline-block pb-1 italic uppercase tracking-widest">Reach Us</h4>
            <div className="text-gray-400 text-sm space-y-5 font-bold">
              {[
                { emoji: '📍', text: 'GIDC Metoda, Gujarat' },
                { emoji: '📞', text: '+91 98765 43210' },
                { emoji: '✉️', text: 'info@kaverytubing.com' },
              ].map(({ emoji, text }) => (
                <p key={text} className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">{emoji}</span>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Kaveru Tubing Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">
            <Link to="/privacy-policy" className="hover:text-[#F97316] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#F97316] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-[#F97316] p-5 rounded-2xl shadow-2xl hover:bg-[#0A2540] hover:scale-110 active:scale-95 transition-all duration-300 group z-50 text-white border border-orange-400/20"
      >
        <ArrowUp size={28} className="group-hover:-translate-y-2 transition-transform duration-500" />
      </button>
    </footer>
  );
};

export default Footer;
