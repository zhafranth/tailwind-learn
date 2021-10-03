module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "traffico-red": "#EE4D47",
        "traffico-red-1": "#FCDDD4",
        "traffico-black": "#402B2B",
        "traffico-white": "#FFFFFF",
        "traffico-blue": "#0F264C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
