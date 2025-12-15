/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#135bec",
          accent: "#50E3C2",
          "background-light": "#f6f6f8",
          "background-dark": "#101622",
          "card-light": "#ffffff",
          "card-dark": "#111722",
          "text-light": "#2C3E50",
          "text-dark": "#FFFFFF",
          "text-secondary-dark": "#92a4c9",
          "border-light": "#EAEFF4",
          "border-dark": "#324467"
        },
        fontFamily: {
          display: ["Lexend", "sans-serif"],
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };