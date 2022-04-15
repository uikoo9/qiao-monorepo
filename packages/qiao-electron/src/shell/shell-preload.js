'use strict';

// electron
import { ipcRenderer } from 'electron';

// const
import { IPC_SHELL_OPEN_URL } from './shell-constant.js';

/**
 * shellOpenUrlIPC
 * @param {*} url 
 */
export const shellOpenUrlIPC = (url) => {
    ipcRenderer.send(IPC_SHELL_OPEN_URL, url);
};