import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Apple風ニュートラルパレット + アクセント1色
        accent: {
          DEFAULT: "#0A84FF", // iOS system blue
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F5F7",
        },
        ink: {
          DEFAULT: "#1D1D1F",
          muted: "#6E6E73",
        },
      },
      borderRadius: {
        card: "20px",
        sheet: "24px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Hiragino Sans",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
