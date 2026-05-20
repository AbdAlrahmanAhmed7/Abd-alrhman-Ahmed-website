import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "../constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Call handler on mount to ensure initial correct state
    handleScroll();

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div className="glass-dark px-5 sm:px-8 py-3 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-8 pointer-events-auto shadow-2xl w-56 sm:w-64 md:w-auto relative">
          <a 
            href="#home" 
            onClick={handleLinkClick}
            className="text-xl font-display font-bold tracking-tighter text-brand-neon hover:opacity-80 transition-opacity pl-2 sm:pl-0"
          >
            AA.
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-4 items-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors uppercase tracking-widest relative px-4 py-1.5 rounded-full ${
                    isActive 
                      ? "text-brand-neon font-bold" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-neon/50 rounded-full transition-colors pr-2 sm:pr-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} className="text-brand-neon" /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden p-6 rounded-3xl glass-dark border border-white/10 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-sm font-semibold py-3 px-5 rounded-2xl tracking-widest uppercase transition-all flex items-center justify-between ${
                      isActive 
                        ? "text-brand-neon bg-white/5 border-l-2 border-brand-neon" 
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] opacity-30 font-mono">0{NAV_LINKS.indexOf(link) + 1}</span>
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full text-center py-4 rounded-2xl bg-brand-neon text-black font-extrabold uppercase tracking-widest text-xs hover:bg-brand-neon/90 transition-colors shadow-lg shadow-brand-neon/10"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
