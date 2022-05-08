'use strict';

// mini
var minimizer = require('./minimizer.js');

// default cache groups
var defaultCacheGroups = require('./cache-groups.js');

/**
 * optimization
 * @param {*} cacheGroups 
 * @returns 
 */
module.exports = function(isDev, cacheGroups){
  // check
  if(isDev) return {};

  // return
  return {
    runtimeChunk: 'single',
    minimizer   : minimizer,
    splitChunks : {
      cacheGroups: Object.assign(defaultCacheGroups, cacheGroups || {}),
    },
  };
};