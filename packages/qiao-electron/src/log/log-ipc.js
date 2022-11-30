'use strict';

// electron
import { ipcMain } from 'electron';

// log
import { logInit } from './_log.js';

// const
import { IPC_LOG } from './log-constant.js';

/**
 * logIPCInit
 */
export const logIPCInit = () => {
  // Logger
  const Logger = logInit();

  // ipc log
  ipcMain.on(IPC_LOG, (event, arg) => {
    // check
    if (!arg || !arg.msg) return;

    // log
    let type = arg.type || 'info';
    if (type == 'info') Logger.info(arg.msg);
    if (type == 'warn') Logger.warn(arg.msg);
    if (type == 'error') Logger.error(arg.msg);
  });
};
