const services = [
  {
    title: "Bouquets",
    subtitle: "Sur mesure & de saison",
    description:
      "Des bouquets composés avec les plus belles fleurs du moment, façonnés selon vos envies, vos couleurs, vos émotions. Chaque bouquet est une création unique enveloppée de papier kraft.",
    gradient: "from-[#7C9A7E] via-[#6B8A6D] to-[#5C7A5E]",
    accent: "#7C9A7E",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="18" r="12" fill="white" opacity="0.8" />
        <circle cx="32" cy="18" r="7" fill="white" opacity="0.9" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx={32 + 12 * Math.cos((angle * Math.PI) / 180)}
            cy={18 + 12 * Math.sin((angle * Math.PI) / 180)}
            rx="5"
            ry="3"
            fill="white"
            opacity="0.6"
            transform={`rotate(${angle} ${32 + 12 * Math.cos((angle * Math.PI) / 180)} ${18 + 12 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        <path d="M32 30 L32 58" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <ellipse cx="26" cy="44" rx="10" ry="5" fill="white" opacity="0.4" transform="rotate(-20 26 44)" />
        <ellipse cx="38" cy="50" rx="9" ry="4" fill="white" opacity="0.35" transform="rotate(20 38 50)" />
      </svg>
    ),
  },
  {
    title: "Compositions",
    subtitle: "Végétal & art de vivre",
    description:
      "Coupes, terrariums, compositions en vase ou en coupe — pour habiller votre intérieur d&apos;une touche végétale délicate et durable, inspirée des jardins botaniques.",
    gradient: "from-[#8B6914] via-[#7A5C10] to-[#6B4F10]",
    accent: "#8B6914",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        {/* Vase */}
        <path d="M22 56 C20 56 18 52 18 48 L20 34 L44 34 L46 48 C46 52 44 56 42 56 Z" fill="white" opacity="0.5" />
        <path d="M24 34 C22 28 22 24 32 22 C42 24 42 28 40 34" fill="white" opacity="0.3" />
        {/* Stems */}
        <path d="M32 34 L32 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <path d="M32 28 L22 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M32 28 L42 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        {/* Flowers */}
        <circle cx="32" cy="12" r="6" fill="white" opacity="0.8" />
        <circle cx="20" cy="14" r="5" fill="white" opacity="0.7" />
        <circle cx="44" cy="14" r="5" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Événements",
    subtitle: "Mariages & occasions",
    description:
      "Décoration florale pour vos mariages, anniversaires, cérémonies et événements professionnels. Nous créons l&apos;ambiance de votre moment, des tables aux arches en passant par les boutonnières.",
    gradient: "from-[#9DB59F] via-[#85A087] to-[#7C9A7E]",
    accent: "#9DB59F",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        {/* Crown / arch */}
        <path d="M12 48 C12 30 20 20 32 18 C44 20 52 30 52 48" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Side flowers */}
        <circle cx="12" cy="48" r="7" fill="white" opacity="0.7" />
        <circle cx="52" cy="48" r="7" fill="white" opacity="0.7" />
        {/* Center flower */}
        <circle cx="32" cy="18" r="8" fill="white" opacity="0.8" />
        <circle cx="32" cy="18" r="4" fill="white" opacity="1" />
        {/* Small flowers on arch */}
        <circle cx="20" cy="28" r="5" fill="white" opacity="0.6" />
        <circle cx="44" cy="28" r="5" fill="white" opacity="0.6" />
        {/* Leaves */}
        <ellipse cx="24" cy="40" rx="8" ry="4" fill="white" opacity="0.3" transform="rotate(-15 24 40)" />
        <ellipse cx="40" cy="40" rx="8" ry="4" fill="white" opacity="0.3" transform="rotate(15 40 40)" />
        {/* Base */}
        <path d="M12 56 L52 56" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#7C9A7E]" />
            <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
              Savoir-faire
            </span>
            <div className="h-px w-10 bg-[#7C9A7E]" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight">
            Nos <em className="text-[#8B6914] not-italic">créations</em>
          </h2>
          <p className="mt-4 font-inter text-base text-[#5C5C5C] max-w-xl mx-auto">
            Du bouquet du quotidien à la décoration événementielle, chaque réalisation porte
            la signature d&apos;un geste soigné et d&apos;une matière naturelle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden"
            >
              {/* Gradient card */}
              <div
                className={`bg-gradient-to-br ${service.gradient} p-8 pt-10 pb-10 h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Text */}
                <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className="font-inter text-xs tracking-widest text-white/70 uppercase mb-5">
                  {service.subtitle}
                </p>
                <p
                  className="font-inter text-sm text-white/80 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 128 128" fill="none">
                    <circle cx="100" cy="100" r="60" fill="white" />
                    <circle cx="80" cy="80" r="40" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-1 w-full transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: service.accent }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="font-playfair text-xl italic text-[#8B6914]">
            Chaque création est unique — parlez-nous de votre projet.
          </p>
        </div>
      </div>
    </section>
  );
}
