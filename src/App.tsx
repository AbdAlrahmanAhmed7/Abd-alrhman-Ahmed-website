/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-neon z-[60] origin-left shadow-[0_2px_15px_rgba(0,242,255,0.6),_0_4px_25px_rgba(157,80,187,0.4)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-brand-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-brand-blue/20 rounded-full blur-[120px]" />
      </div>

      {/* Modern Vignette */}
      <div className="fixed inset-0 z-[55] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

