import { motion } from "motion/react";
import { User, Rocket, Palette, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Rocket size={24} />, title: "Precision", desc: "Fast & optimized performance" },
    { icon: <Palette size={24} />, title: "Visuals", desc: "Immersive high-end UI/UX" },
    { icon: <Zap size={24} />, title: "Modern", desc: "Latest tech stack expert" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-brand-purple">
                <User size={20} />
              </div>
              <span className="text-brand-purple font-bold tracking-widest uppercase text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Obsessed with <br />
              <span className="text-gradient">Digital Perfection</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="glass p-8 rounded-3xl hover:border-brand-purple/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/40">{item.desc}</p>
              </div>
            ))}
            
            <div className="glass p-8 rounded-3xl bg-gradient-to-br from-brand-purple/5 to-transparent border-brand-purple/10 flex flex-col justify-center">
              <h4 className="text-brand-neon font-display font-bold text-3xl mb-1">5+</h4>
              <p className="text-white/40 uppercase tracking-tighter text-xs">Years of Learning & Creation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
