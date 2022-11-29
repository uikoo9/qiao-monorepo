"use strict";

// webpack bundle analyzer
var BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/**
 * webpack bundle analyzer
 * @returns
 */
module.exports = function () {
  return new BundleAnalyzerPlugin();
};
