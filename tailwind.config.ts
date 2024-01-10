import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A4D15",
        secondary: "#D2FBD0",
        tertiary: "#000000",
        accent: {
          gray: "#96A0A6",
          lightGray: "#F9F9F9",
        },
      },
      fontFamily : {
        bebas_neve: ['var(--font-bebas-neve)'],
        helvetica : ["Helvetica"]
      }
    },
  },
  plugins: [],
};
export default config;
