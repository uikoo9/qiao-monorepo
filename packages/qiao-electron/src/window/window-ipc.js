'use strict';

// electron
import { BrowserWindow, ipcMain } from 'electron';

// const
import { IPC_WINDOW_RESIZE_TO } from './window-constant.js';

/**
 * windowIPCInit
 */
export const windowIPCInit = () => {
  // ipc window resize to
  ipcMain.on(IPC_WINDOW_RESIZE_TO, (event, width, height) => {
    if (!event || !event.sender || !width || !height) return;

    const win = BrowserWindow.fromWebContents(event.sender);
    win.setSize(width, height);
  });
};
