'use strict';

// browser window
import { BrowserWindow } from 'electron';

// get options
import { getWindowOptions } from './window-options.js';

/**
 * windowOpenByUrl
 * @param {*} url
 * @param {*} options
 * @param {*} supportNode
 * @param {*} isDev
 */
export function windowOpenByUrl(url, options, supportNode, isDev) {
  // check
  if (!url) throw new Error('need url params');

  // opt
  const opt = getWindowOptions(options, supportNode, isDev);

  // win
  const win = new BrowserWindow(opt);
  if (isDev) win.webContents.openDevTools();

  // load url
  win.loadURL(url);

  // return
  return win;
}
