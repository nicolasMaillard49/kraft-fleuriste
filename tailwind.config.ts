import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        sage: "#7C9A7E",
        kraft: "#8B6914",
        offwhite: "#FAFAF7",
        "sage-dark": "#5C7A5E",
        "kraft-dark": "#6B4F10",
        "cream-dark": "#E8E0D0",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "floral-gradient":
          "linear-gradient(135deg, #7C9A7E 0%, #5C7A5E 50%, #4a6b4c 100%)",
        "kraft-gradient":
          "linear-gradient(135deg, #8B6914 0%, #6B4F10 50%, #5a3f0d 100%)",
        "bloom-gradient":
          "linear-gradient(135deg, #9DB59F 0%, #7C9A7E 50%, #6B8A6D 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-rotate": "float-rotate 10s ease-in-out infinite",
        "breathe": "breathe 6s ease-in-out infinite",
        "hero-title": "hero-title-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "hero-line": "hero-line-draw 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "hero-fade-up": "hero-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "hero-fade-in": "hero-fade-in 1s ease-out forwards",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "nav-slide": "nav-slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 30s linear infinite",
        "dot-pulse": "dot-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
