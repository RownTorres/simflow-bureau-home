import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-base) / <alpha-value>)",
        raised: "rgb(var(--color-raised) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        edge: "rgb(var(--color-edge) / <alpha-value>)",
        heading: "rgb(var(--color-text) / <alpha-value>)",
        body: "rgb(var(--color-text-2) / <alpha-value>)",
        muted: "rgb(var(--color-text-3) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "76rem",
      },
      borderRadius: {
        card: "1.25rem",
        panel: "1.5rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgb(255 255 255 / 0.04) inset, 0 16px 40px -20px rgb(0 0 0 / 0.6)",
        lift: "0 1px 0 0 rgb(255 255 255 / 0.06) inset, 0 24px 60px -24px rgb(0 0 0 / 0.7)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
