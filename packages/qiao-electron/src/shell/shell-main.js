'use strict';

// electron
import { shell } from 'electron';

/**
 * shellOpenURL
 */
export const shellOpenURL = (url) => {
  // shell open url
  shell.openExternal(url, { activate:true });
};