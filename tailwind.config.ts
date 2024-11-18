import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '300px', // Small devices (phones)
      sm: '640px', // Small devices (phones)
      md: '768px', // Medium devices (tablets)
      lg: '1024px', // Large devices (small laptops/desktops)
      xl: '1280px', // Extra-large devices (large desktops)
      '2xl': '1536px', // Ultra-wide screens
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Sora: [`var(--font-sora)`, `sans-serif`],
      }
    },
  },
  plugins: [],
};
export default config;
