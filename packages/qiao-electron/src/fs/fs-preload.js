'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_FS_GET_TREE, IPC_FS_READ_FILE } from './fs-constant.js';

/**
 * fsGetTreeIPC
 */
export const fsGetTreeIPC = async (dir, ignores) => {
    return await ipcRenderer.invoke(IPC_FS_GET_TREE, dir, ignores);
};

/**
 * fsReadFileIPC
 */
 export const fsReadFileIPC = async (filePath) => {
    return await ipcRenderer.invoke(IPC_FS_READ_FILE, filePath);
};