// colors
import colorsFn from 'colors';

// progress
import progressFn from 'progress';

// inquirer
import inquirer from 'inquirer';

// commander
import commander from 'commander';

/**
 * colors
 * 	colors, https://www.npmjs.com/package/colors
 */
export const colors = colorsFn;

/**
 * progress
 * 	progress, https://www.npmjs.com/package/progress
 */
export const progress = progressFn;

/**
 * ask
 * 	questions, https://github.com/SBoudrias/Inquirer.js
 */
export const ask = (questions) => {
  return inquirer.prompt(questions);
};

/**
 * cmd
 * 	commander, https://www.npmjs.com/package/commander
 */
export const cmd = commander;
