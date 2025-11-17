import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#060608",
          800: "#0c0d12",
          700: "#12131c",
        },
        ember: {
          500: "#f25f3a",
          600: "#de4d28",
          700: "#c33c1c",
        },
        aura: {
          400: "#f5d06f",
          500: "#edbf4c",
          600: "#d69c28",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        malayalam: ["var(--font-malayalam)"],
      },
      boxShadow: {
        "aura-glow": "0 0 60px rgba(231, 178, 57, 0.45)",
        "ember-ring": "0 0 30px rgba(196, 60, 28, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "drift": "drift 18s linear infinite",
        "sparkle": "sparkle 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-6px) scale(1)" },
          "50%": { transform: "translateY(10px) scale(1.02)" },
        },
        drift: {
          "0%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(10%, 10%, 0) rotate(1deg)" },
          "100%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: 0.1, transform: "scale(1)" },
          "40%": { opacity: 0.65, transform: "scale(1.08)" },
          "70%": { opacity: 0.3, transform: "scale(0.98)" },
        },
      },
      backdropBlur: {
        mystic: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
