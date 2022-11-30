'use strict';

// electron
import { ipcMain } from 'electron';

// q
import { mv, rm, mkdir, lstree, readFile, writeFile } from 'qiao-file';

// const
import {
  IPC_FS_RM,
  IPC_FS_MKDIR,
  IPC_FS_RENAME,
  IPC_FS_GET_TREE,
  IPC_FS_READ_FILE,
  IPC_FS_WRITE_FILE,
} from './fs-constant.js';

/**
 * fsIPCInit
 */
export const fsIPCInit = () => {
  // ipc fs rm
  ipcMain.handle(IPC_FS_RM, (event, rmPath) => {
    if (!rmPath) return;

    return rm(rmPath);
  });

  // ipc fs mkdir
  ipcMain.handle(IPC_FS_MKDIR, (event, dir) => {
    if (!dir) return;

    return mkdir(dir);
  });

  // ipc fs rename
  ipcMain.handle(IPC_FS_RENAME, (event, oldPath, newPath) => {
    if (!oldPath || !newPath) return;

    return mv(oldPath, newPath);
  });

  // ipc fs get tree
  ipcMain.handle(IPC_FS_GET_TREE, (event, dir, ignores) => {
    if (!dir) return;

    return lstree(dir, ignores);
  });

  // ipc fs read file
  ipcMain.handle(IPC_FS_READ_FILE, (event, filePath) => {
    if (!filePath) return;

    return readFile(filePath);
  });

  // ipc fs write file
  ipcMain.handle(IPC_FS_WRITE_FILE, (event, filePath, fileData) => {
    if (!filePath) return;

    return writeFile(filePath, fileData);
  });
};
