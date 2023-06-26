/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#230251",
      "primary-main": "#19013A",
      "primary-main2": "#048FF9",
      white: "#fff",
      "blue-text": "#00FBFF",
      "black-btn": "#1A1A1A",
      "blue-btn": "#048FF9",
    },
    fontFamily:{
      "work": ['"Work Sans"', 'sans-serif']
    },
    extend: {
      spacing: {
        "75px": "4.6875rem",
        "16px": "1rem",
        "32px": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
