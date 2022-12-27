/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F99C1E",
        secondary: "#00AF66",
        accent: "#D3DD18",
        natural: "#00cc3a26",
      },
    },
    fontFamily: {
      sans: ["Proxima Nova"],
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
