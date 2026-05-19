import { motion } from "motion/react";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="glass-dark px-8 py-3 rounded-full flex items-center gap-8 pointer-events-auto shadow-2xl">
        <a href="#home" className="text-xl font-display font-bold tracking-tighter text-brand-neon hover:opacity-80 transition-opacity">
          AA.
        </a>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="md:hidden text-xs bg-brand-neon/20 border border-brand-neon/30 text-brand-neon px-4 py-1.5 rounded-full font-bold uppercase tracking-wider"
        >
          Work
        </a>
      </div>
    </motion.nav>
  );
}
