'use strict';

// electron
import { ipcMain } from 'electron';

// q
import { lstree } from 'qiao-file';

// const
import { IPC_FS_GET_TREE } from './fs-constant.js';

/**
 * fsIPCInit
 */
export const fsIPCInit = () => {
  // ipc ls get tree
  ipcMain.handle(IPC_FS_GET_TREE, (event, dir, ignore) => {
    if(!dir) return;

    return lstree(dir, ignore);
  });
};