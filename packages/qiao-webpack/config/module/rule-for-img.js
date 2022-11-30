'use strict';

/**
 * https://webpack.docschina.org/guides/asset-modules/
 */
module.exports = {
  test: /\.(png|jpg|gif)$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 4 * 1024,
    },
  },
};
