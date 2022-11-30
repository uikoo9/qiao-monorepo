'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_WINDOW_RESIZE_TO } from './window-constant.js';

/**
 * windowResizeIPC
 * @param {*} width
 * @param {*} height
 */
export const windowResizeIPC = (width, height) => {
  ipcRenderer.send(IPC_WINDOW_RESIZE_TO, width, height);
};
