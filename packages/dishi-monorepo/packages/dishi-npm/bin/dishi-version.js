#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');

// package
var pkg = require('../package.json'); 

// cmd for common
qiao.cli.cmd
	.version(pkg.version, '-v, --version')
	.usage('<command> [options]');