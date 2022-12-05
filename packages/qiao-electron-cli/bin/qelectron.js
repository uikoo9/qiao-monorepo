#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');

// cmds
require('./qelectron-init.js');
require('./qelectron-icns.js');
require('./qelectron-dist.js');
require('./qelectron-pack.js');
require('./qelectron-pack-dmg.js');
require('./qelectron-upload-dmg.js');
require('./qelectron-version.js');

// parse
qiao.cli.cmd.parse(process.argv);
