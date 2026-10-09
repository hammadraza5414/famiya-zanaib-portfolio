import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0a", panel: "#111111", line: "#262626", fog: "#a3a3a3", accent: "#d7ff68" },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }
    }
  },
  plugins: []
};
export default config;
