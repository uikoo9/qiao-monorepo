'use strict';

/**
 * rule for react
 *  npm i -D babel-loader @babel/core @babel/preset-react
 */
module.exports = {
  test: /\.jsx$/,
  loader: 'babel-loader',
  // exclude : /node_modules/,
  options: {
    presets: ['@babel/preset-react'],
  },
};
