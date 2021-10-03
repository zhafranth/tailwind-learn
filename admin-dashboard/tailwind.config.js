module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#503E9D",
        "primary-light": "#503E9D",
        gray: "#878787",
        black: "#182135",
        red: "#FF1E1E",
        orange: "#FB6D3A",
        yellow: "#FACD5D",
        "white-1": "#F8F8F8",
      },
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
