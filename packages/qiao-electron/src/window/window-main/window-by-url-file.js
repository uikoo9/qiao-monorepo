'use strict';

// window
import { windowOpenByUrl } from './window-by-url.js';
import { windowOpenByFile } from './window-by-file.js';

/**
 * windowOpenByUrlAndFile
 * @param {*} urlPath
 * @param {*} filePath
 * @param {*} options
 * @returns
 */
export function windowOpenByUrlAndFile(urlPath, filePath, options) {
  // opt
  let opt = options || {};

  // dev
  const env = process.argv && process.argv.length > 2 ? process.argv[2] : null;
  if (env == 'dev') return windowOpenByUrl(urlPath, opt, false, true);

  // file
  opt.show = false;
  return windowOpenByFile(filePath, opt);
}
