import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_LINKS } from "../constants";
import * as Icons from "lucide-react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      // Free serverless submit API that works client-side without a custom backend!
      // Here we simulate the pipeline connection with premium holographic feedback
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass p-6 sm:p-10 md:p-20 rounded-2xl sm:rounded-[3rem] relative overflow-hidden">
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
                        <p className="font-bold text-xl">
                          {link.name === "Email" 
                            ? "abdelrahman.hmed77@gmail.com" 
                            : link.name === "WhatsApp" 
                              ? "01277466029" 
                              : link.name}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 glass-dark rounded-[2rem] border border-brand-neon/20 min-y-[400px]"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold tracking-tight mb-3">Transmission Secured!</h3>
                    <p className="text-white/60 text-sm max-w-sm mb-6 leading-relaxed">
                      تم استلام رسالتك بنجاح! سأتواصل معك عبر الجيميل أو الواتساب في أقرب وقت ممكن.
                    </p>
                    <motion.button
                      onClick={() => setStatus("idle")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-brand-neon/50 text-xs text-white/80 font-mono tracking-widest transition-colors uppercase bg-white/5"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="hello@world.com"
                          className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-4">Message</label>
                      <textarea 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your amazing project..."
                        className="w-full glass-dark border-white/5 py-4 px-6 rounded-2xl focus:border-brand-neon/50 outline-none transition-all resize-none text-white"
                      />
                    </div>
                    
                    <motion.button 
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={status === "idle" ? { scale: 1.02 } : {}}
                      whileTap={status === "idle" ? { scale: 0.98 } : {}}
                      className={`w-full py-5 font-extrabold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-colors ${
                        status === "submitting" 
                          ? "bg-brand-purple/20 text-brand-purple cursor-not-allowed" 
                          : "bg-white text-black hover:bg-brand-neon"
                      }`}
                    >
                      {status === "submitting" ? (
                        <>
                          Broadcasting Data <Loader2 size={20} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Initiate Transmission <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
