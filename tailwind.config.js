/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: {
          dark: "#0B0B0B",
          DEFAULT: "#121212",
          light: "#1A1A1A",
        },
        green: {
          dark: "#064E3B",
          DEFAULT: "#10B981",
          light: "#6EE7B7",
        },
        beige: {
          dark: "#B8A57A",
          DEFAULT: "#D6C59A",
          light: "#F3EED9",
        },
        orange: {
          dark: "#9A3412",
          DEFAULT: "#F97316",
          light: "#FDBA74",
        },
      },
    },
  },
  plugins: [],
};
