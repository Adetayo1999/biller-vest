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
    fontFamily: {
      work: ['"Work Sans"', "sans-serif"],
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
    keyframes: {
      enterFromRight: {
        from: { opacity: 0, transform: "translateX(200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      enterFromLeft: {
        from: { opacity: 0, transform: "translateX(-200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      exitToRight: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(200px)" },
      },
      exitToLeft: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(-200px)" },
      },
      scaleIn: {
        from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
        to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
      },
      scaleOut: {
        from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [],
};
