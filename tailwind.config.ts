import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          deep: "#0a0a0a",
          panel: "#1a1a1a",
          border: "#2a2a2a"
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59, 130, 246, 0.35), 0 12px 28px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.28), transparent 42%), radial-gradient(circle at 100% 100%, rgba(139,92,246,0.2), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
