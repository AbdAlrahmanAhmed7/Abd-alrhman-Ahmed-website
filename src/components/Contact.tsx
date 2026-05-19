import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../constants";
import * as Icons from "lucide-react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass p-10 md:p-20 rounded-[3rem] relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="flex flex-col lg:flex-row gap-20 relative z-10">
            <div className="flex-1">
              <h2 className="text-5xl font-display font-bold mb-6">
                Let's Build <br />
                <span className="text-gradient">Something Future</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 font-light">
                Available for freelance projects and high-impact full-time roles. 
                Have a vision? Let's bring it to life with modern code and premium design.
              </p>
              
              <div className="space-y-8">
                {SOCIAL_LINKS.map((link) => {
                  // @ts-ignore
                  const Icon = Icons[link.icon as keyof typeof Icons] || Icons.Mail;
                  return (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="flex items-center gap-6 group hover:translate-x-3 transition-transform"
                    >
                      <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-white group-hover:bg-brand-neon group-hover:text-black transition-all">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">{link.name}</p>
                        <p className="font-bold text-xl">{link.name === "Email" ? "crosboahmed@gmail.com" : link.name}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex-1">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="hello@world.com"
                      className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell me about your amazing project..."
                    className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all resize-none"
                  />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black font-extrabold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-neon transition-colors"
                >
                  Initiate Transmission <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
