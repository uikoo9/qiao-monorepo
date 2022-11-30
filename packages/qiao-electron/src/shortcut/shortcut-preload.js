'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_SHORTCUT_GLOBAL } from './shortcut-constant.js';

/**
 * shortcutGlobalIPC
 * @returns res
 */
export const shortcutGlobalIPC = async (shortcutKey, shortcutCallbackName) => {
  return await ipcRenderer.invoke(IPC_SHORTCUT_GLOBAL, shortcutKey, shortcutCallbackName);
};
