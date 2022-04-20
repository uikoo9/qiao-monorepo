'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_FS_RM, IPC_FS_RENAME, IPC_FS_GET_TREE, IPC_FS_READ_FILE } from './fs-constant.js';

/**
 * fsRmIPC
 */
export const fsRmIPC = async (rmPath) => {
    return await ipcRenderer.invoke(IPC_FS_RM, rmPath);
};

/**
 * fsRenameIPC
 */
 export const fsRenameIPC = async (oldPath, newPath) => {
    return await ipcRenderer.invoke(IPC_FS_RENAME, oldPath, newPath);
};

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