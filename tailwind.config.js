/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ['"Inter"'],
        'sans': ['"Gilmer"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: "#ffffff",
        background: "#1B262C",
        primary: "#3282B8",
        secondary: "#0F4C75",
        accent: "#BBE1FA",
        darkersecondary: "#06385a"

      },
    },
  },
  plugins: [],
};
