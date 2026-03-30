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
    },
  },
  plugins: [],
};

export default config;
