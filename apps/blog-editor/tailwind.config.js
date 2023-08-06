import { nextui } from "@nextui-org/react";

const colors = {
  "theme-dark-sm": "#3F3F46",
  // "theme-dark-sm": "#3D4144",
  "theme-dark-md": "#2F3336",
  "theme-dark-lg": "#22272A",
  "theme-dark-xl": "#161A1D",
  "theme-darker": "#121212",
  "theme-light-sm": "#F0F0F0",
  "theme-light-md": "#E8E8E8",
  "theme-light-lg": "#D7D7D7",
  "theme-lighter": "#FFFFFF",
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
