'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_DARKMODE_CHANGE, IPC_DARKMODE_GET } from './darkmode-constant.js';

/**
 * darkModeChangeIPC
 */
export const darkModeChangeIPC = (callback) => {
  ipcRenderer.on(IPC_DARKMODE_CHANGE, (e, msg) => {
    if (callback) callback(msg);
  });
};

/**
 * darkModeGetIPC
 * @returns
 */
export const darkModeGetIPC = async () => {
  return await ipcRenderer.invoke(IPC_DARKMODE_GET);
};
