'use strict';

// electron
import { ipcMain } from 'electron';

// ls
import { ls } from './_ls.js';

// const
import { IPC_LS_ALL, IPC_LS_GET, IPC_LS_SET, IPC_LS_DEL } from './ls-constant.js';

/**
 * lsIPCInit
 */
export const lsIPCInit = () => {
  const _ls = ls();

  // ipc ls all
  ipcMain.handle(IPC_LS_ALL, () => {
    return _ls.all();
  });

  // ipc ls get
  ipcMain.handle(IPC_LS_GET, (event, key) => {
    return _ls.config(key);
  });

  // ipc ls set
  ipcMain.handle(IPC_LS_SET, (event, args) => {
    // check
    if (!args || !args.key || !args.value) return;

    // set
    _ls.config(args.key, args.value);

    // return
    return true;
  });

  // ipc ls del
  ipcMain.handle(IPC_LS_DEL, (event, key) => {
    // del
    _ls.config(key, null);

    //return
    return true;
  });
};
