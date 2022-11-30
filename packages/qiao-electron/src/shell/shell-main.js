'use strict';

// electron
import { shell } from 'electron';

// q
import { fs } from 'qiao-file';

/**
 * shellOpenURL
 */
export const shellOpenURL = (url) => {
  shell.openExternal(url, { activate: true });
};

/**
 *
 * @param {*} path
 */
export const shellShowPath = (path) => {
  try {
    const stat = fs.statSync(path);
    if (stat.isDirectory()) {
      shell.openPath(path);
    } else {
      shell.showItemInFolder(path);
    }
  } catch (e) {
    console.log(e);
  }
};
