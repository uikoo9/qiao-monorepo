'use strict';

// electron
import { ipcMain } from 'electron';

// const
import { IPC_DIALOG_OPEN_FOLDER } from './dialog-constant.js';

// main
import { dialogOpenFolder } from './dialog-main/dialog-main.js';

/**
 * dialogIPCInit
 */
export const dialogIPCInit = () => {
  // ipc dialog open folder
  ipcMain.handle(IPC_DIALOG_OPEN_FOLDER, async (event, options) => {
    return await dialogOpenFolder(options);
  });
};