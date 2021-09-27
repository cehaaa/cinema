module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeLeft: "fadeLeft 0.3s linear",
      },
      keyframes: {
        fadeLeft: {
          "0%": {
            right: "-20rem",
          },
          "100%": {
            right: "0",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      visibility: ["hover", "group-hover"],
      width: ["hover", "focus"],
      ringWidth: ["hover", "active"],
    },
  },
};
