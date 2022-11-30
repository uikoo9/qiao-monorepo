'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { getPreloads } = require('qiao-electron');

// get all preloads
const getAllPreloads = () => {
  const customPreloads = {};

  return getPreloads(customPreloads);
};

// preload
const allPreloads = getAllPreloads();
contextBridge.exposeInMainWorld('electron', allPreloads);
