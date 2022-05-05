'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { 
    IPC_DIALOG_OPEN_FILE,
    IPC_DIALOG_OPEN_FOLDER,
} from './dialog-constant.js';

/**
 * dialogOpenFileIPC
 * @param {*} options 
 */
 export const dialogOpenFileIPC = async (options) => {
    return await ipcRenderer.invoke(IPC_DIALOG_OPEN_FILE, options);
};

/**
 * dialogOpenFolderIPC
 * @param {*} options 
 */
export const dialogOpenFolderIPC = async (options) => {
    return await ipcRenderer.invoke(IPC_DIALOG_OPEN_FOLDER, options);
};