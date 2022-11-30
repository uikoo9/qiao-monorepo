'use strict';

var colorsFn = require('colors');
var progressFn = require('progress');
var inquirer = require('inquirer');
var commander = require('commander');

// colors

/**
 * colors
 * 	colors, https://www.npmjs.com/package/colors
 */
const colors = colorsFn;

/**
 * progress
 * 	progress, https://www.npmjs.com/package/progress
 */
const progress = progressFn;

/**
 * ask
 * 	questions, https://github.com/SBoudrias/Inquirer.js
 */
const ask = (questions) => {
  return inquirer.prompt(questions);
};

/**
 * cmd
 * 	commander, https://www.npmjs.com/package/commander
 */
const cmd = commander;

exports.ask = ask;
exports.cmd = cmd;
exports.colors = colors;
exports.progress = progress;
