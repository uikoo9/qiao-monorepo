'use strict';

// electron
import { globalShortcut } from 'electron';

/**
 * shortcutReg
 * @param {*} shortcutKey
 * @param {*} shortcutCallback
 */
export const shortcutReg = (shortcutKey, shortcutCallback) => {
  if (!shortcutKey || !shortcutCallback) return;

  return globalShortcut.register(shortcutKey, shortcutCallback);
};

/**
 * shortcutUnReg
 * @param {*} shortcutKey
 */
export const shortcutUnReg = (shortcutKey) => {
  if (!shortcutKey) return;

  return globalShortcut.unregister(shortcutKey);
};
