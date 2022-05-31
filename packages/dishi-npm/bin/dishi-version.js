#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');

// package
var pkg = require('../package.json'); 

// cmd for version
qiao.cli.cmd
	.version(pkg.version, '-v, --version')
	.usage('<command> [options]');