'use strict';

// mini css extract plugin
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * mini css extract plugin
 * @param {*} plugin
 * @returns
 */
module.exports = function (plugin) {
  return new MiniCssExtractPlugin(plugin);
};
