import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-neon text-xs font-bold tracking-[0.2em] uppercase mb-6 neon-glow-blue">
              Web Developer
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-6 leading-[1.1] sm:leading-none">
              Abdelrahman <br />
              <span className="text-gradient">Ahmed</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 mb-10 leading-relaxed font-light">
              Crafting high-performance, visually stunning interactive experiences. 
              Specialized in modern tech stacks and premium UI/UX design.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-brand-blue rounded-full font-bold flex items-center gap-2 hover:bg-brand-blue/80 transition-all shadow-lg shadow-brand-blue/20"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 glass border-white/20 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Contact Me <Download size={20} className="rotate-[-90deg]" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-52 h-52 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto -mt-6 sm:mt-0">
            {/* Ambient Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-neon rounded-full blur-3xl opacity-20 animate-pulse" />
            
            {/* Interactive Dynamic Cybernetic HUD Portal Orb */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-neon/10 rounded-full blur-2xl opacity-50" />
              
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9d50bb" />
                    <stop offset="50%" stopColor="#6e7ff3" />
                    <stop offset="100%" stopColor="#00f2ff" />
                  </linearGradient>
                  <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#6e7ff3" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#9d50bb" stopOpacity="0" />
                  </radialGradient>
                  <filter id="neonFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Rotating HUD Ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="origin-center"
                >
                  <circle cx="200" cy="200" r="170" stroke="url(#coreGlow)" strokeWidth="1.5" strokeDasharray="12 24 36 12" strokeOpacity="0.4" />
                  <circle cx="200" cy="200" r="160" stroke="#00f2ff" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.2" />
                </motion.g>

                {/* Intermediary Counter-Rotating Tech Ring */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="origin-center"
                >
                  <circle cx="200" cy="200" r="140" stroke="#6e7ff3" strokeWidth="2" strokeDasharray="100 20 40 10" strokeOpacity="0.5" filter="url(#neonFilter)" />
                  <path d="M 120 200 A 80 80 0 0 1 280 200" stroke="#9d50bb" strokeWidth="3" strokeDasharray="10 15" strokeOpacity="0.6" />
                </motion.g>

                {/* Cyber Bracket Accents */}
                <motion.g
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="origin-center"
                >
                  <path d="M 60 160 L 60 100 L 120 100" stroke="#00f2ff" strokeWidth="3" strokeOpacity="0.7" />
                  <path d="M 340 160 L 340 100 L 280 100" stroke="#00f2ff" strokeWidth="3" strokeOpacity="0.7" />
                  <path d="M 60 240 L 60 300 L 120 300" stroke="#00f2ff" strokeWidth="3" strokeOpacity="0.7" />
                  <path d="M 340 240 L 340 300 L 280 300" stroke="#00f2ff" strokeWidth="3" strokeOpacity="0.7" />
                </motion.g>

                {/* Core Morphing Fluid Energy Sphere */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="85"
                  fill="url(#centerCore)"
                  animate={{
                    r: [80, 95, 80],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  filter="url(#neonFilter)"
                />

                <motion.path
                  d="M200,120 Q240,160 200,200 T200,280"
                  stroke="url(#coreGlow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M200,120 Q240,160 200,200 T200,280",
                      "M200,120 Q160,180 240,210 T200,280",
                      "M200,120 Q240,160 200,200 T200,280"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  filter="url(#neonFilter)"
                />

                {/* Animated Inner Core Nodes representing code data streams */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="origin-center"
                >
                  <circle cx="200" cy="120" r="4" fill="#00f2ff" filter="url(#neonFilter)" />
                  <circle cx="200" cy="280" r="4" fill="#9d50bb" filter="url(#neonFilter)" />
                  <circle cx="120" cy="200" r="4" fill="#6e7ff3" filter="url(#neonFilter)" />
                  <circle cx="280" cy="200" r="4" fill="#00f2ff" filter="url(#neonFilter)" />
                </motion.g>
              </svg>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-2 sm:-top-6 sm:-right-6 glass p-2 sm:p-4 rounded-xl shadow-2xl z-20"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-neon/10 rounded-lg flex items-center justify-center text-brand-neon">
                <code className="text-sm sm:text-lg font-bold">{"{/}"}</code>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 glass px-3.5 py-2 sm:px-5 sm:py-3 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-1.5 sm:gap-2.5 backdrop-blur-xl"
            >
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-neon animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-white/80 whitespace-nowrap">REACT / TSX</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
