'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_SHELL_OPEN_URL, IPC_SHELL_SHOW_PATH } from './shell-constant.js';

/**
 * shellOpenUrlIPC
 * @param {*} url
 */
export const shellOpenUrlIPC = (url) => {
  ipcRenderer.send(IPC_SHELL_OPEN_URL, url);
};

/**
 * shellShowPathIPC
 * @param {*} path
 */
export const shellShowPathIPC = (path) => {
  ipcRenderer.send(IPC_SHELL_SHOW_PATH, path);
};
