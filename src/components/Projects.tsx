import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-[4px] sm:tracking-[10px] uppercase opacity-20 absolute -top-12 left-0 pointer-events-none select-none whitespace-nowrap">
              Selected Work
            </h2>
            <h3 className="text-4xl font-display font-bold relative z-10">
              Future <span className="text-gradient">Projects</span>
            </h3>
          </motion.div>
          <p className="text-white/40 max-w-sm text-sm">
            A small collection of interactive masterpieces designed for performance and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden glass mb-8 group-hover:neon-glow-blue group-hover:ring-2 group-hover:ring-brand-neon/30 transition-all duration-500 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[112%] object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative scanning line animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-neon/5 to-transparent h-[10%] w-full top-[-10%] group-hover:animate-[scan_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-brand-neon text-black flex items-center justify-center shadow-xl"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-neon bg-brand-neon/10 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-neon transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/40 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
