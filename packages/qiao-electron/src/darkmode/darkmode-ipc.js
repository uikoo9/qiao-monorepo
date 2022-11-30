'use strict';

// electron
import { BrowserWindow, nativeTheme, ipcMain } from 'electron';

// const
import { IPC_DARKMODE_CHANGE, IPC_DARKMODE_GET } from './darkmode-constant.js';

/**
 * darkModeIPCInit
 */
export const darkModeIPCInit = () => {
  // native theme updated
  nativeTheme.on('updated', () => {
    const wins = BrowserWindow.getAllWindows();
    for (let win of wins) {
      win.webContents.send(IPC_DARKMODE_CHANGE, nativeTheme.shouldUseDarkColors);
    }
  });

  // ipc darkmode get
  ipcMain.handle(IPC_DARKMODE_GET, () => {
    return nativeTheme.shouldUseDarkColors;
  });
};
