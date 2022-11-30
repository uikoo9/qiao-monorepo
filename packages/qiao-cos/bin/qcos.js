#!/usr/bin/env node

// qiao
const cli = require('qiao-cli');

// cmds
require('./qcos-upload-file.js');
require('./qcos-upload-folder.js');
require('./qcos-version.js');

// parse
cli.cmd.parse(process.argv);
