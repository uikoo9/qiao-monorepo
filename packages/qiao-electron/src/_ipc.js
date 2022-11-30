'use strict';

// app
import { appIPCInit } from './app/app-ipc.js';

// darkmode
import { darkModeIPCInit } from './darkmode/darkmode-ipc.js';

// dialog
import { dialogIPCInit } from './dialog/dialog-ipc.js';

// fs
import { fsIPCInit } from './fs/fs-ipc.js';

// log
import { logIPCInit } from './log/log-ipc.js';

// ls
import { lsIPCInit } from './ls/ls-ipc.js';

// shell
import { shellIPCInit } from './shell/shell-ipc.js';

// shortcut
import { shortcutInit } from './shortcut/shortcut-quit.js';

// window
import { windowIPCInit } from './window/window-ipc.js';

/**
 * ipcInit
 * @param {*} version
 */
export const ipcInit = (version) => {
  // app
  if (version) appIPCInit(version);

  // others
  darkModeIPCInit();
  dialogIPCInit();
  fsIPCInit();
  logIPCInit();
  lsIPCInit();
  shellIPCInit();
  windowIPCInit();

  // shortcut quit init
  shortcutInit();
};
