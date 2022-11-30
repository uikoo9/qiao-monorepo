'use strict';

/**
 * get window options
 * @param {*} options
 * @param {*} supportNode
 * @param {*} isDev
 * @returns
 */
export const getWindowOptions = (options, supportNode, isDev) => {
  // opt
  let opt = options || {};

  // support node
  if (supportNode) {
    let webPreferences = opt.webPreferences || {};
    webPreferences.nodeIntegration = true;
    webPreferences.contextIsolation = false;

    opt.webPreferences = webPreferences;
  }

  // is dev
  if (isDev) {
    let webPreferences = opt.webPreferences || {};
    webPreferences.webSecurity = false;

    opt.webPreferences = webPreferences;
  }

  // return
  return opt;
};
