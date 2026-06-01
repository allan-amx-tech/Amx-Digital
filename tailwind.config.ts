import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        void:    "#030304",
        surface: "#0F1115",
        blue:    "#02b2fe",
        dark:    "#012c7a",
        gold:    "#00e5ff",
        muted:   "#94A3B8",
      },
      animation: {
        "spin-slow":    "spin 10s linear infinite",
        "spin-reverse": "spin 15s linear infinite reverse",
        float:          "float 8s ease-in-out infinite",
        "ping-blue":    "ping-blue 1.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-18px)" },
        },
        "ping-blue": {
          "0%":        { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}

export default config
