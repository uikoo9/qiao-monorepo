"use strict";

/**
 * webpack performance
 *  https://webpack.docschina.org/configuration/performance/
 */
module.exports = {
  hints: "warning",
  maxAssetSize: 250000,
  maxEntrypointSize: 250000,
  assetFilter: function (assetFilename) {
    return !/\.map$/.test(assetFilename);
  },
};
