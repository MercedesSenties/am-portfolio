import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-lilac": {
          "50": "#f7f8fc",
          "100": "#e5e7f4",
          "200": "#d0d6ed",
          "300": "#b0bce0",
          "400": "#8a98d0",
          "500": "#6e7ac3",
          "600": "#5b62b5",
          "700": "#5052a5",
          "800": "#464687",
          "900": "#3b3c6d",
          "950": "#282843",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
