'use strict';

// electron
const { app } = require('electron');

// q
const { ipcInit } = require('qiao-electron');

// init ipc
ipcInit(require('../../package.json').version);

// init sentry
// require('./init-sentry.js');

// init app
require('./init-app.js');

// init menu
require('./init-menu.js');

// app init
app.whenReady().then(async () => {
  require('./init-window.js');
});
