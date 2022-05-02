'use strict';

// q
const { setApplicationMenu, setAboutVersion } = require('qiao-electron');

// version
const { version } = require('../../package.json');

// set application menu
setApplicationMenu();

// set about version
setAboutVersion(version);