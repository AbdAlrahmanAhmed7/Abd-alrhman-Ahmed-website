export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-black tracking-tighter text-brand-neon">
          AA.
        </div>
        <p className="text-white/30 text-sm font-light">
          © 2026 <span className="text-white/60 font-medium">Abdelrahman Ahmed</span>. Crafted with precision & neon.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Cookies"].map(item => (
            <a key={item} href="#" className="text-xs uppercase tracking-[0.2em] text-white/20 hover:text-brand-neon transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
