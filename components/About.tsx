export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#7C9A7E]" />
              <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
                Notre histoire
              </span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">
              L&apos;art floral
              <br />
              <em className="text-[#8B6914] not-italic">au naturel</em>
            </h2>

            <div className="space-y-5 font-inter text-base text-[#5C5C5C] leading-relaxed">
              <p>
                Née d&apos;une passion profonde pour la botanique et le travail
                manuel, KRAFT est une adresse bordelaise où chaque création
                florale est pensée comme une œuvre unique.
              </p>
              <p>
                Nous travaillons en priorité avec des fleurs de saison, sourcées
                auprès de producteurs locaux et de marchés aux fleurs régionaux,
                pour offrir des bouquets vivants, généreux et authentiques.
              </p>
              <p>
                Le nom KRAFT évoque la matière brute, le papier naturel, les
                attaches de raphia — un retour à l&apos;essentiel, à la texture,
                à la sincérité du geste artisanal.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-[#E8E0D0]">
              {[
                { label: "Saison", desc: "Fleurs de saison uniquement" },
                { label: "Local", desc: "Producteurs régionaux" },
                { label: "Sur mesure", desc: "Chaque bouquet est unique" },
              ].map((v) => (
                <div key={v.label}>
                  <p className="font-playfair text-lg font-bold text-[#8B6914]">{v.label}</p>
                  <p className="font-inter text-xs text-[#5C5C5C] mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Illustration side */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E8E0D0] rounded-none" />
            
            {/* Main visual — gradient with SVG botanical illustration */}
            <div className="relative bg-gradient-to-br from-[#7C9A7E] via-[#5C7A5E] to-[#4a6b4c] aspect-[4/5] flex items-center justify-center overflow-hidden">
              {/* Botanical SVG */}
              <svg
                viewBox="0 0 300 375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4/5 h-4/5 opacity-40"
              >
                {/* Main stem */}
                <path d="M150 370 C150 370 148 200 150 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Large flower top */}
                <circle cx="150" cy="60" r="35" fill="white" opacity="0.6" />
                <circle cx="150" cy="60" r="22" fill="white" opacity="0.8" />
                <circle cx="150" cy="60" r="10" fill="white" opacity="1" />
                {/* Petals */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx={150 + 35 * Math.cos((angle * Math.PI) / 180)}
                    cy={60 + 35 * Math.sin((angle * Math.PI) / 180)}
                    rx="12"
                    ry="8"
                    fill="white"
                    opacity="0.5"
                    transform={`rotate(${angle} ${150 + 35 * Math.cos((angle * Math.PI) / 180)} ${60 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                  />
                ))}

                {/* Branch left */}
                <path d="M150 180 C130 170 100 160 75 150" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="70" cy="148" r="20" fill="white" opacity="0.4" />
                <circle cx="70" cy="148" r="12" fill="white" opacity="0.5" />
                {/* Leaf */}
                <ellipse cx="115" cy="163" rx="18" ry="8" fill="white" opacity="0.4" transform="rotate(-15 115 163)" />

                {/* Branch right */}
                <path d="M150 240 C170 230 200 220 225 210" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="230" cy="208" r="18" fill="white" opacity="0.4" />
                <circle cx="230" cy="208" r="11" fill="white" opacity="0.5" />
                {/* Leaf */}
                <ellipse cx="190" cy="222" rx="16" ry="7" fill="white" opacity="0.35" transform="rotate(15 190 222)" />

                {/* Small flower lower */}
                <path d="M150 300 C140 285 125 275 110 270" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="106" cy="268" r="14" fill="white" opacity="0.35" />
                <circle cx="106" cy="268" r="8" fill="white" opacity="0.5" />

                {/* Grass/stems base */}
                <path d="M140 370 C135 350 132 330 130 310" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M160 370 C165 345 168 320 165 300" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M145 370 C138 355 130 345 125 335" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
              </svg>

              {/* Quote overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-playfair text-white text-lg italic opacity-90 leading-snug">
                  &ldquo;La fleur est la poésie de la nature.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
