module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FCE72D",
        "grey-light": "#F7F7FB",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      ibm: ["IBM Plex Mono", "sans-serif"],
      "source-sans": ["Source Sans Pro", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
