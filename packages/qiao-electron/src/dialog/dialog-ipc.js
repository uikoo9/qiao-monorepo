'use strict';

// electron
import { ipcMain } from 'electron';

// const
import { IPC_DIALOG_OPEN_FILE, IPC_DIALOG_OPEN_FOLDER, IPC_DIALOG_OPEN_FILE_FOLDER } from './dialog-constant.js';

// main
import { dialogOpenFile, dialogOpenFolder, dialogOpenFileAndFolder } from './dialog-main/dialog-main.js';

/**
 * dialogIPCInit
 */
export const dialogIPCInit = () => {
  // ipc dialog open file
  ipcMain.handle(IPC_DIALOG_OPEN_FILE, async (event, options) => {
    return await dialogOpenFile(options);
  });

  // ipc dialog open folder
  ipcMain.handle(IPC_DIALOG_OPEN_FOLDER, async (event, options) => {
    return await dialogOpenFolder(options);
  });

  // ipc dialog open file and folder
  ipcMain.handle(IPC_DIALOG_OPEN_FILE_FOLDER, async (event, options) => {
    return await dialogOpenFileAndFolder(options);
  });
};
