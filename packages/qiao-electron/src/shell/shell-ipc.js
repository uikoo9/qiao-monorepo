'use strict';

// electron
import { ipcMain } from 'electron';

// const
import { IPC_SHELL_OPEN_URL, IPC_SHELL_SHOW_PATH } from './shell-constant.js';

// main
import { shellOpenURL, shellShowPath } from './shell-main.js';

/**
 * shellIPCInit
 */
export const shellIPCInit = () => {
  // ipc shell open url
  ipcMain.on(IPC_SHELL_OPEN_URL, (event, url) => {
    if (!url) return;

    shellOpenURL(url);
  });

  // ipc shell show path
  ipcMain.on(IPC_SHELL_SHOW_PATH, (event, path) => {
    if (!path) return;

    shellShowPath(path);
  });
};
