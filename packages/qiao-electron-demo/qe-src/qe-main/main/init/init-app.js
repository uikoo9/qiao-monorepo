'use strict';

// electron
const { app } = require('electron');

// window all closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});