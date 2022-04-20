'use strict';

// electron
import { ipcMain } from 'electron';

// q
import { mv, lstree, readFile } from 'qiao-file';

// const
import { IPC_FS_RENAME, IPC_FS_GET_TREE, IPC_FS_READ_FILE } from './fs-constant.js';

/**
 * fsIPCInit
 */
export const fsIPCInit = () => {
  // ipc fs rename
  ipcMain.handle(IPC_FS_RENAME, (event, oldPath, newPath) => {
    if(!oldPath || !newPath) return;

    return mv(oldPath, newPath);
  });
  
  // ipc fs get tree
  ipcMain.handle(IPC_FS_GET_TREE, (event, dir, ignores) => {
    if(!dir) return;

    return lstree(dir, ignores);
  });

  // ipc fs read file
  ipcMain.handle(IPC_FS_READ_FILE, (event, filePath) => {
    if(!filePath) return;

    return readFile(filePath);
  });
};