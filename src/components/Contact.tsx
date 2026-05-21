import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../constants";
import * as Icons from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[3rem] relative overflow-hidden">
          {/* Background decoration shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-neon/5 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-neon mb-3 inline-block">
              Connection Pipeline
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Let's Build <span className="text-gradient">Something Future</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed">
              Available for freelance projects, open-source collaboration, and high-impact roles. 
              Have an idea or opportunity? Get in touch directly through any of the secure channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SOCIAL_LINKS.map((link, idx) => {
              // @ts-ignore
              const Icon = Icons[link.icon as keyof typeof Icons] || Icons.Mail;
              
              // Custom label values for aesthetic layout
              let displayValue = link.name;
              if (link.name === "Email") displayValue = "abdelrahman.hmed77@gmail.com";
              else if (link.name === "WhatsApp") displayValue = "+20 1277466029";
              else if (link.name === "GitHub") displayValue = "AbdAlrahmanAhmed7";
              else if (link.name === "LinkedIn") displayValue = "Abdelrahman Ahmed";

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-dark border border-white/5 hover:border-brand-neon/30 active:border-brand-neon/45 hover:shadow-[0_0_50px_rgba(0,255,163,0.06)] min-h-[220px] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/80 group-hover:bg-brand-neon group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] transition-all duration-300">
                      <Icon size={26} />
                    </div>
                    <Icons.ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 mb-2 block">
                      {link.name}
                    </span>
                    <h3 className="font-bold text-lg text-white/90 group-hover:text-white transition-colors break-all">
                      {displayValue}
                    </h3>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
