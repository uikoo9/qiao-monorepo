'use strict';

// browser window
import { BrowserWindow } from 'electron';

// get options
import { getWindowOptions } from './window-options.js';

/**
 * windowOpenByFile
 * @param {*} filePath
 * @param {*} options
 * @param {*} supportNode
 */
export function windowOpenByFile(filePath, options, supportNode) {
  // check
  if (!filePath) throw new Error('need filePath params');

  // opt
  const opt = getWindowOptions(options, supportNode);

  // win
  const win = new BrowserWindow(opt);

  // show false
  if (opt.show === false) {
    win.once('ready-to-show', function () {
      win.show();
    });
  }

  // load file
  win.loadFile(filePath);

  // return
  return win;
}
