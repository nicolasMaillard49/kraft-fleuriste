export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-playfair text-2xl font-bold tracking-widest text-white uppercase mb-1">
              KRAFT
            </p>
            <p className="font-inter text-xs tracking-[0.25em] text-white/50 uppercase">
              Artisan fleuriste · Bordeaux
            </p>
          </div>

          {/* Divider (mobile: horizontal, desktop: vertical) */}
          <div className="hidden md:block h-12 w-px bg-white/20" />

          {/* Nav links */}
          <nav className="flex items-center gap-6 font-inter text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors duration-200">
              À propos
            </a>
            <span className="text-white/20">·</span>
            <a href="#services" className="hover:text-white transition-colors duration-200">
              Créations
            </a>
            <span className="text-white/20">·</span>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-white/20" />

          {/* Address */}
          <div className="text-center md:text-right">
            <p className="font-inter text-xs text-white/50 leading-relaxed">
              278 Cours de la Somme
              <br />
              33000 Bordeaux
              <br />
              <a href="tel:+33557673259" className="hover:text-white/80 transition-colors duration-200">
                05 57 67 32 59
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/30">
            © {year} KRAFT artisan fleuriste. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7C9A7E]" />
            <p className="font-inter text-xs text-white/30">
              Fait avec soin à Bordeaux
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
