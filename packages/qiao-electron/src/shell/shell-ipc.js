'use strict';

// electron
import { ipcMain, shell } from 'electron';

// const
import { IPC_SHELL_OPEN_URL } from './shell-constant.js';

/**
 * shellIPCInit
 */
export const shellIPCInit = () => {
  // ipc shell open url
  ipcMain.on(IPC_SHELL_OPEN_URL, (event, url) => {
    if(!url) return;
  
    shell.openExternal(url, { activate:true });
  });
};