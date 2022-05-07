'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for css dev
 *  style-loader,
 *  css-loader,
 */
exports.dev = {
  test: /\.sass$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
};

/**
 * rule for css build
 *  MiniCssExtractPlugin
 *  css-loader,
 */
exports.build = {
  test: /\.sass$/,
  use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
  ],
};