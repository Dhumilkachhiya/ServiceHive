/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "petal-rose": "#FF8E9C",
        "petal-leaf": "#3A5A40",
        "petal-moss": "#1B2620",
        "petal-light": "#FDFBFB",
        "petal-clay": "#4A4E4D",
        "petal-dark": "#0B0F0D",
        "petal-muted": "#161E1A",
        "deep-moss": "#0B0F0D",
        "soft-petal": "#FDFBFB",
        "bee-yellow": "#FFD700",
        "bee-accent": "#1B2620",
        "bee-dark": "#080B09",
        "bee-muted": "#121815",
        "bee-light": "#FDFBFB",
        "premium-dark": "#050706",
        "glass-dark": "rgba(22, 30, 26, 0.7)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

