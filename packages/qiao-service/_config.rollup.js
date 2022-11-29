"use strict";

// json
const json = require("@rollup/plugin-json");

/**
 * rollup.config.js
 */
module.exports = {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  external: ["qiao-ajax", "qiao-json"],
  plugins: [json()],
};
