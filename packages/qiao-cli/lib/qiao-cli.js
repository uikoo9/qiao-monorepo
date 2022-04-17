'use strict';

var colors		= require('colors');
var progress	= require('progress');
var inquirer 	= require('inquirer');
var commander	= require('commander');

/**
 * colors
 * 	colors, https://www.npmjs.com/package/colors
 */
exports.colors = colors;

/**
 * progress
 * 	progress, https://www.npmjs.com/package/progress
 */
exports.progress = progress;

/**
 * ask
 * 	questions, https://github.com/SBoudrias/Inquirer.js
 */
exports.ask = function(questions){
	return inquirer.prompt(questions);
};

/**
 * cmd
 * 	commander, https://www.npmjs.com/package/commander
 */
exports.cmd = commander;