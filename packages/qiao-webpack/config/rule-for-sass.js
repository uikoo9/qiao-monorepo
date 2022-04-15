'use strict';

/**
 * webpack support sass by sass-loader
 *  npm i -D sass-loader css-loader style-loader sass
 */
 module.exports = {
  test: /\.scss$/i,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
};