#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');

// cmds
require('./qcos-upload-file.js');
require('./qcos-upload-folder.js');
require('./qcos-version.js');

// parse
qiao.cli.cmd.parse(process.argv);