'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_LOG } from './log-constant.js';

/**
 * logIPC
 * @param {*} msg
 * @param {*} type info,warn,error
 */
export const logIPC = (msg, type) => {
  ipcRenderer.send(IPC_LOG, { msg, type });
};
