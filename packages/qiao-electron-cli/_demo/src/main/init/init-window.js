'use strict';

// electron
const { app, BrowserWindow } = require('electron');

// win
const win = require('../window/window.js');

// open window
const openWindow = () => {
  win.windowOpenIndex();
};

// open window
openWindow();

// activate
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) openWindow();
});
