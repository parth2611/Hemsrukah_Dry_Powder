/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Deep Forest Green (Primary) ── */
        forest: {
          950: "#0B2018",
          900: "#1A3C34",
          800: "#1F4D42",
          700: "#2D6A4F",
          600: "#3A8A65",
          500: "#52B788",
          400: "#74C69D",
          300: "#95D5B2",
          200: "#B7E4C7",
          100: "#D8F3DC",
          50: "#F0FAF3",
        },
        /* ── Antique Gold (Accent) ── */
        gold: {
          900: "#5C3D00",
          800: "#7A5200",
          700: "#9A6800",
          600: "#B88000",
          500: "#D4A017",
          400: "#E2B840",
          300: "#EDD080",
          200: "#F5E4B0",
          100: "#FAF0D7",
          50: "#FDFAF0",
        },
        /* ── Warm Ivory (Backgrounds) ── */
        ivory: {
          950: "#2C2520",
          900: "#4A3F38",
          800: "#6B5D54",
          700: "#8C7B70",
          600: "#A89990",
          500: "#C4B8B0",
          400: "#D8D0C8",
          300: "#E8E2DA",
          200: "#F0EBE1",
          100: "#F7F3EE",
          50: "#FDF6EC",
        },
        /* ── Sage Green (Secondary) ── */
        sage: {
          700: "#3D6B58",
          600: "#4E8A70",
          500: "#6AAD8C",
          400: "#88C4A8",
          300: "#A8D5BA",
          200: "#C8E8D6",
          100: "#E4F4EC",
          50: "#F2FAF6",
        },
        /* ── Charcoal (Text) ── */
        charcoal: {
          900: "#1A1A18",
          800: "#2C2C2A",
          700: "#3F3F3C",
          600: "#5A5A56",
          500: "#757570",
          400: "#9A9A94",
          300: "#BFBFBA",
          200: "#DDDDD8",
          100: "#F0F0EC",
        },
      },

      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        ui: ["'DM Sans'", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        /* Main hero & dark sections */
        "hero-gradient":
          "linear-gradient(155deg, #0B2018 0%, #1A3C34 40%, #2D6A4F 70%, #1F4D42 100%)",
        "dark-gradient": "linear-gradient(135deg, #0B2018 0%, #1A3C34 100%)",
        /* Card & section surfaces */
        "card-gradient":
          "linear-gradient(145deg, rgba(253,246,236,0.95), rgba(240,235,225,0.80))",
        "section-warm": "linear-gradient(180deg, #FDF6EC 0%, #F0EBE1 100%)",
        "section-sage": "linear-gradient(180deg, #F2FAF6 0%, #E4F4EC 100%)",
        /* Button gradients */
        "btn-forest": "linear-gradient(135deg, #2D6A4F 0%, #1A3C34 100%)",
        "btn-gold": "linear-gradient(135deg, #E2B840 0%, #B88000 100%)",
        "btn-sage": "linear-gradient(135deg, #52B788 0%, #2D6A4F 100%)",
      },

      boxShadow: {
        glass: "0 8px 32px rgba(26,60,52,0.12), 0 2px 8px rgba(0,0,0,0.05)",
        card: "0 4px 24px rgba(26,60,52,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover":
          "0 20px 60px rgba(26,60,52,0.16), 0 8px 20px rgba(0,0,0,0.08)",
        "glow-forest": "0 0 40px rgba(52,138,101,0.30)",
        "glow-gold": "0 0 30px rgba(212,160,23,0.28)",
        "glow-sage": "0 0 24px rgba(82,183,136,0.25)",
        btn: "0 4px 16px rgba(26,60,52,0.28)",
        "btn-hover": "0 8px 32px rgba(26,60,52,0.38)",
        "inner-warm": "inset 0 1px 0 rgba(255,255,255,0.15)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 22s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
