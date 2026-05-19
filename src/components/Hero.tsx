import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-neon text-xs font-bold tracking-[0.2em] uppercase mb-6 neon-glow-blue">
              Frontend Web Developer
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-6">
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
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Ambient Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-neon rounded-full blur-3xl opacity-20 animate-pulse" />
            
            {/* Avatar Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass p-1">
              <img 
                src="/src/assets/images/futuristic_avatar_1779204351637.png" 
                alt="Abdelrahman Ahmed Avatar" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-2xl z-20"
            >
              <div className="w-10 h-10 bg-brand-neon/10 rounded-lg flex items-center justify-center text-brand-neon">
                <code className="text-lg font-bold">{"{/}"}</code>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-2xl z-20"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-brand-blue text-[10px] flex items-center justify-center font-bold">
                    JS
                  </div>
                ))}
              </div>
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
