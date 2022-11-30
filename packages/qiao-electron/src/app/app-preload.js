'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_APP_GET_VERSION } from './app-constant.js';

/**
 * appGetVersionIPC
 * @returns version
 */
export const appGetVersionIPC = async () => {
  return await ipcRenderer.invoke(IPC_APP_GET_VERSION);
};
