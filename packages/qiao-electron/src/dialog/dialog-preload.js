'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_DIALOG_OPEN_FOLDER } from './dialog-constant.js';

/**
 * dialogOpenFolderIPC
 * @param {*} options 
 */
export const dialogOpenFolderIPC = async (options) => {
    return await ipcRenderer.invoke(IPC_DIALOG_OPEN_FOLDER, options);
};