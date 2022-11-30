'use strict';

// path
const path = require('path');

// qiao-electron
const { windowOpenByUrlAndFile } = require('qiao-electron');

// const
const { LOCAL_URL, WINDOW_INDEX_WIDTH, WINDOW_INDEX_HEIGHT, WINDOW_INDEX_COLOR } = require('../_util/constant.js');

/**
 * open index window
 * @returns
 */
module.exports = () => {
  // urls
  const preloadPath = path.resolve(__dirname, './_preload.js');
  const indexUrl = `${LOCAL_URL}/index.html`;
  const indexFilePath = path.resolve(__dirname, '../../renderer/index.html');

  // options
  const options = {
    width: WINDOW_INDEX_WIDTH,
    height: WINDOW_INDEX_HEIGHT,
    center: true,
    backgroundColor: WINDOW_INDEX_COLOR,
    webPreferences: {
      preload: preloadPath,
    },
  };

  // open
  return windowOpenByUrlAndFile(indexUrl, indexFilePath, options);
};
