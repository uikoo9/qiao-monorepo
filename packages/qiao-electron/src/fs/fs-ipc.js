'use strict';

// electron
import { ipcMain } from 'electron';

// q
import { lstree, readFile } from 'qiao-file';

// const
import { IPC_FS_GET_TREE, IPC_FS_READ_FILE } from './fs-constant.js';

/**
 * fsIPCInit
 */
export const fsIPCInit = () => {
  // ipc ls get tree
  ipcMain.handle(IPC_FS_GET_TREE, (event, dir, ignore) => {
    if(!dir) return;

    return lstree(dir, ignore);
  });

  // ipc ls read file
  ipcMain.handle(IPC_FS_READ_FILE, (event, filePath) => {
    if(!filePath) return;

    return readFile(filePath);
  });
};