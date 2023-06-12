module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: "#d3dce6",
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
        light: "#d3d3d3",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
