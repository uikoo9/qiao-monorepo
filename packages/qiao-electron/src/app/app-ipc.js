'use strict';

// electron
import { ipcMain } from 'electron';

// const
import { IPC_APP_GET_VERSION } from './app-constant.js';

/**
 * appIPCInit
 */
export const appIPCInit = (version) => {
  // ipc get app version
  ipcMain.handle(IPC_APP_GET_VERSION, () => {
    return version;
  });
};
