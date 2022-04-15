'use strict';

/**
 * webpack support css by css-loader
 *  npm i -D css-loader style-loader
 */
 module.exports = {
  test: /\.css$/i,
  use: [
    "style-loader",
    "css-loader",
  ],
};