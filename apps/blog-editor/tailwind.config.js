import { nextui } from "@nextui-org/react";

const colors = {
  "theme-dark-sm": "#666677",
  "theme-dark-md": "#4C4C60",
  "theme-dark-lg": "#333349",
  "theme-dark-xl": "#1A1A33",
  "theme-darker": "#00001C",
  "theme-lighter": "#FFFFFF",
  "theme-light-sm": "#F0F0F0",
  "theme-light-md": "#E8E8E8",
  "theme-light-lg": "#D7D7D7",
  "theme-light-xl": "#80808E",
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
