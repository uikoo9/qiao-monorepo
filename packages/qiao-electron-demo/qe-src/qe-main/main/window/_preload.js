'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { getPreloads } = require('qiao-electron');

// preload
const { 
    shortcutSetIPC,
    shortcutDelIPC,
    shortcutResetIPC,
} = require('../core/shortcut/shortcut-preload.js');
const { 
    windowOpenIndex, 
} = require('../core/window/window-preload.js');

// get all preloads
const getAllPreloads = () => {
    const customPreloads = {
        shortcutSetIPC,
        shortcutDelIPC,
        shortcutResetIPC,
        windowOpenIndex,
    };

    return getPreloads(customPreloads);
};

// preload
const allPreloads = getAllPreloads();
contextBridge.exposeInMainWorld('electron', allPreloads);