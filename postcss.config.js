/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require("postcss-preset-env")
module.exports = {
  plugins: [
    require("autoprefixer"),
    postcssPresetEnv({
      stage: 1,
    }),
    require("tailwindcss"),
  ],
}
