import { motion } from "motion/react";
import { SKILLS } from "../constants";
import * as Icons from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">The <span className="text-gradient">Arsenal</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Mastery over modern technologies to build the next generation of web applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => {
            // @ts-ignore
            const Icon = Icons[skill.icon as keyof typeof Icons] || Icons.Code2;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl glass transition-all hover:bg-white/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-brand-neon/5 rounded-3xl filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-neon group-hover:bg-brand-neon/20 transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-display font-bold text-white/20 group-hover:text-brand-neon/40 transition-all">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  
                  {/* Progress Bar */}
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-brand-purple to-brand-neon rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
