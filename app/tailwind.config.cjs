/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F99C1E",
        secondary: "#00AF66",
        accent: "#D3DD18",
        danger: "#E93737",
        natural: "#00cc3a26",
        base: "#2E3837",
        base_100: "#5E6665",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
