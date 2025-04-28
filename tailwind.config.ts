import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "400px",
      },
      colors: {
        primary: "var(--color--primary--100)",
        "primary-5": "var(--color--primary--5)",
        "primary-15": "var(--color--primary--15)",
        "primary-33": "var(--color--primary--33)",
        background: "var(--background)",
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
