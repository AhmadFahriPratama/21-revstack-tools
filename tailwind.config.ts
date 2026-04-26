import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d7c0f",
        secondary: "#65a30d",
        accent: "#f7fee7",
        background: "#1c1917",
        foreground: "#f5f5f4",
      },
    },
  },
  plugins: [],
};

export default config;
