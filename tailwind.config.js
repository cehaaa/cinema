module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      visibility: ["hover", "group-hover"],
      width: ["hover", "focus"],
    },
  },
};
