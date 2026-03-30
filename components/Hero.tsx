export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F5F0E8] flex items-center justify-center overflow-hidden">
      {/* SVG Floral Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-96 h-96 text-[#7C9A7E]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large bloom top-right */}
          <circle cx="320" cy="80" r="60" fill="currentColor" opacity="0.3" />
          <circle cx="280" cy="100" r="40" fill="currentColor" opacity="0.2" />
          <circle cx="360" cy="120" r="35" fill="currentColor" opacity="0.2" />
          <circle cx="300" cy="50" r="30" fill="currentColor" opacity="0.25" />
          <circle cx="340" cy="150" r="25" fill="currentColor" opacity="0.15" />
          {/* Stem lines */}
          <line x1="320" y1="140" x2="320" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="280" y1="140" x2="260" y2="400" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          {/* Leaves */}
          <ellipse cx="295" cy="220" rx="25" ry="12" fill="currentColor" opacity="0.3" transform="rotate(-30 295 220)" />
          <ellipse cx="345" cy="280" rx="22" ry="10" fill="currentColor" opacity="0.25" transform="rotate(25 345 280)" />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-80 h-80 text-[#8B6914]"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Small blooms bottom-left */}
          <circle cx="60" cy="260" r="45" fill="currentColor" opacity="0.2" />
          <circle cx="100" cy="280" r="30" fill="currentColor" opacity="0.15" />
          <circle cx="30" cy="290" r="25" fill="currentColor" opacity="0.2" />
          <line x1="60" y1="215" x2="60" y2="0" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <ellipse cx="80" cy="150" rx="20" ry="10" fill="currentColor" opacity="0.2" transform="rotate(20 80 150)" />
          <ellipse cx="40" cy="100" rx="18" ry="9" fill="currentColor" opacity="0.15" transform="rotate(-20 40 100)" />
        </svg>

        {/* Scattered dots / pollen */}
        <svg className="absolute top-1/3 left-1/4 w-64 h-64 text-[#7C9A7E]" viewBox="0 0 256 256" fill="none">
          <circle cx="30" cy="40" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.2" />
          <circle cx="200" cy="60" r="5" fill="currentColor" opacity="0.25" />
          <circle cx="150" cy="200" r="4" fill="currentColor" opacity="0.2" />
          <circle cx="50" cy="180" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="220" cy="180" r="4" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
        <span className="font-playfair text-xl font-bold tracking-widest text-[#8B6914] uppercase">
          KRAFT
        </span>
        <div className="hidden md:flex items-center gap-8 font-inter text-sm tracking-wide text-[#5C5C5C]">
          <a href="#about" className="hover:text-[#7C9A7E] transition-colors duration-200">
            À propos
          </a>
          <a href="#services" className="hover:text-[#7C9A7E] transition-colors duration-200">
            Créations
          </a>
          <a href="#contact" className="hover:text-[#7C9A7E] transition-colors duration-200">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#7C9A7E]" />
          <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
            Artisan fleuriste · Bordeaux
          </span>
          <div className="h-px w-16 bg-[#7C9A7E]" />
        </div>

        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-[#2C2C2C] mb-6 leading-none tracking-tight">
          KRAFT
        </h1>

        <p className="font-playfair text-xl md:text-2xl text-[#8B6914] italic mb-4 leading-relaxed">
          Là où la nature devient art,
          <br />
          chaque fleur raconte une histoire.
        </p>

        <p className="font-inter text-base text-[#5C5C5C] mb-12 max-w-md mx-auto leading-relaxed">
          Bouquets, compositions et créations florales façonnés avec passion,
          dans le respect des saisons et des matières naturelles.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-[#7C9A7E] hover:bg-[#5C7A5E] text-white font-inter text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Nous contacter</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Rating badge */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1l1.545 3.13 3.455.502-2.5 2.438.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.632l3.455-.502L7 1z"
                  fill={i <= 4 ? "#8B6914" : "none"}
                  stroke="#8B6914"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
          <span className="font-inter text-xs text-[#8B6914] font-medium">4,8 sur Google</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="h-12 w-px bg-gradient-to-b from-[#7C9A7E] to-transparent" />
      </div>
    </section>
  );
}
