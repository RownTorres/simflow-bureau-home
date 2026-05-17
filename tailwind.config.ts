import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "oklch(98% 0.008 85)",
        ink: {
          DEFAULT: "oklch(15% 0.008 80)",
          900: "oklch(15% 0.008 80)",
          700: "oklch(35% 0.008 80)",
          500: "oklch(55% 0.008 80)",
          300: "oklch(75% 0.008 80)",
          100: "oklch(92% 0.008 80)",
        },
        gold: {
          DEFAULT: "oklch(72% 0.10 85)",
          dark: "oklch(58% 0.11 78)",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "78rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "reveal-line": "reveal-line 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
