/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    additionalBreakpoint: true,
    applyComplexClasses: true,
  },
  purge: {
    // content: ['./src/**/*.html'],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: ["dark"],
    },
  },
  theme: {
    darkSelector: ".dark",
    colors: {
      primary: {
        200: "#b8cdea", //18%
        500: "#3666b2", //55%
        600: "#3e61a5", //45%
        700: "#0c43a5", //35%
        900: "#011332", //96%
      },
      gray: {
        100: "#f2f2f2", //95%
        200: "#e6e6e6", //90%
        300: "#b9b9b9", //73%
        400: "#a5a5a5", //65%
        500: "#919191", //57%
        600: "#676767", //40%
        700: "#434343", //26%
        800: "#262626", //15%
        900: "#1a1a1a", //10%
      },
      black: "#080808",
      white: "#f7f7f7",
      transparent: "transparent",
    },
    extend: {
      spacing: {
        7: "1.75rem",
        14: "3.5rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
      },
    },
  },
  variants: {
    scale: ({ after }) => after(["active"]),
    boxShadow: ({ after }) => after(["active"]),
    backgroundColor: ({ before }) => before(["dark"]),
    textColor: ({ before }) => before(["dark"]),
  },
  plugins: [require("tailwindcss-dark-mode")()],
}
