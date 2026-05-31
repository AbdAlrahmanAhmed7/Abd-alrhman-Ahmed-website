import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past approximately one screen height
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          aria-label="Back to Top"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 25px rgba(0, 242, 255, 0.4)",
            borderColor: "rgba(0, 242, 255, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass border border-white/10 text-white flex items-center justify-center cursor-pointer transition-colors hover:text-brand-neon hover:bg-black/50 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle light pulse effect */}
          <span className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-neon/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <ArrowUp size={20} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
