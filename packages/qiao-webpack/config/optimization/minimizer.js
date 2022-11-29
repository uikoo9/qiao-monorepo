"use strict";

// css mini
var CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// terser
var TerserPlugin = require("terser-webpack-plugin");

/**
 * minimizer
 */
module.exports = [
  new CssMinimizerPlugin(),
  new TerserPlugin({
    parallel: true,
    extractComments: false,
    terserOptions: {
      format: {
        comments: false,
      },
    },
  }),
];
