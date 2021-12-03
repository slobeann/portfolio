const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      head: ["Bodoni Moda", "serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
      },
      spacing: {
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        36: "9rem",
        128: "32rem",
        256: "64rem",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "5.5xl": "3.2rem",
        "7.5xl": "5.15rem",
        "8.5xl": "7rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fefefe",
        black: {
          light: "#272727",
          DEFAULT: colors.gray["900"],
        },
        gray: {
          light: colors.gray["300"],
          dark: colors.gray["400"],
          number: "#8D8D8D"
        },
        greenBG: "#E3FEC2",
        blueBG: "#DEF7FF",
        link: "#0779FE",
        primary: {
          light: "#FBF7FF",
          stripe: "#F1E0FF",
          DEFAULT: "#F1E0FF",
          dark: colors.blue["700"],
        },
        accent: "#D1FAE5",
      },
      borderRadius: {
        xs: "0.08rem",
      },
      scale: {
        flip: "-1",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
      borderStyle: ["first", "last"],
      margin: ["first", "last"],
    },
  },
  plugins: [],
}
