'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_LS_ALL, IPC_LS_GET, IPC_LS_SET, IPC_LS_DEL } from './ls-constant.js';

/**
 * lsAllIPC
 */
export const lsAllIPC = async () => {
  return await ipcRenderer.invoke(IPC_LS_ALL);
};

/**
 * lsGetIPC
 */
export const lsGetIPC = async (key) => {
  return await ipcRenderer.invoke(IPC_LS_GET, key);
};

/**
 * lsSetIPC
 */
export const lsSetIPC = async (key, value) => {
  return await ipcRenderer.invoke(IPC_LS_SET, { key, value });
};

/**
 * lsDelIPC
 */
export const lsDelIPC = async (key) => {
  return await ipcRenderer.invoke(IPC_LS_DEL, key);
};
