'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_FS_GET_TREE } from './fs-constant.js';

/**
 * fsGetTreeIPC
 */
export const fsGetTreeIPC = async (dir, ignore) => {
    return await ipcRenderer.invoke(IPC_FS_GET_TREE, dir, ignore);
};