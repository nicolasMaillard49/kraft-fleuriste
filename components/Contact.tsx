const PLACE_ID = "ChIJwevfna8nVQ0R5xlM2qqf-H4";

const hours = [
  { day: "Lundi", time: "Fermé" },
  { day: "Mardi", time: "10h–13h / 16h–19h" },
  { day: "Mercredi", time: "10h–13h / 16h–19h" },
  { day: "Jeudi", time: "10h–13h / 16h–19h" },
  { day: "Vendredi", time: "10h–13h / 16h–19h" },
  { day: "Samedi", time: "10h–13h / 15h–19h" },
  { day: "Dimanche", time: "9h30–12h30" },
];

export default function Contact() {
  const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

  return (
    <section id="contact" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#7C9A7E]" />
            <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
              Venir nous voir
            </span>
            <div className="h-px w-10 bg-[#7C9A7E]" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight">
            Nous <em className="text-[#8B6914] not-italic">trouver</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Infos */}
          <div className="space-y-10">
            {/* Address */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1C5.686 1 3 3.686 3 7c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6z"
                    fill="#7C9A7E"
                  />
                  <circle cx="9" cy="7" r="2" fill="white" />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">
                  Adresse
                </p>
                <p className="font-playfair text-xl text-[#2C2C2C]">
                  278 Cours de la Somme
                </p>
                <p className="font-inter text-base text-[#5C5C5C]">
                  33000 Bordeaux, France
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 font-inter text-sm text-[#8B6914] hover:text-[#6B4F10] underline underline-offset-4 transition-colors duration-200"
                >
                  Voir sur Google Maps
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M14.5 11.5c-.8-.8-2-.8-2.8 0l-.6.6C9.5 11 7 8.5 5.9 6.9l.6-.6c.8-.8.8-2 0-2.8L5 2c-.8-.8-2-.8-2.8 0L1.5 2.7C.7 3.5.7 4.7 1.1 5.7c2.2 5 6.2 9 11.2 11.2 1 .4 2.2.4 3-.4l.7-.7c.8-.8.8-2 0-2.8l-1.5-1.5z"
                    fill="#7C9A7E"
                  />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">
                  Téléphone
                </p>
                <a
                  href="tel:+33557673259"
                  className="font-playfair text-xl text-[#2C2C2C] hover:text-[#8B6914] transition-colors duration-200"
                >
                  05 57 67 32 59
                </a>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1.5l2.06 4.18 4.61.67-3.34 3.25.79 4.59L9 12.12l-4.12 2.07.79-4.59L2.33 6.35l4.61-.67L9 1.5z"
                    fill="#8B6914"
                    stroke="#8B6914"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">
                  Avis Google
                </p>
                <p className="font-playfair text-xl text-[#2C2C2C]">
                  4,8 / 5
                </p>
                <p className="font-inter text-sm text-[#5C5C5C]">Excellente réputation</p>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <div className="mb-6">
              <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-2">
                Horaires d&apos;ouverture
              </p>
              <h3 className="font-playfair text-2xl text-[#2C2C2C]">
                Quand nous rendre visite
              </h3>
            </div>

            <div className="divide-y divide-[#E8E0D0]">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className={`flex justify-between items-center py-3.5 ${
                    time === "Fermé" ? "opacity-50" : ""
                  }`}
                >
                  <span className="font-inter text-sm text-[#2C2C2C] font-medium">
                    {day}
                  </span>
                  <span
                    className={`font-inter text-sm ${
                      time === "Fermé" ? "text-[#aaa]" : "text-[#8B6914]"
                    }`}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-[#F5F0E8] border-l-4 border-[#7C9A7E]">
              <p className="font-playfair text-lg text-[#2C2C2C] mb-1">
                Un projet particulier ?
              </p>
              <p className="font-inter text-sm text-[#5C5C5C] mb-4">
                N&apos;hésitez pas à nous appeler pour discuter de vos créations
                sur mesure.
              </p>
              <a
                href="tel:+33557673259"
                className="inline-flex items-center gap-2 bg-[#7C9A7E] hover:bg-[#5C7A5E] text-white font-inter text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
