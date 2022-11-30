'use strict';

// vars
var datefile = require('./appender-datefile.js');
var stdout = require('./appender-stdout.js');

/**
 * log config
 * @param {*} filename
 * @param {*} pattern
 * @returns
 */
module.exports = function (filename, pattern) {
  // debug options
  var options = {
    appenders: {
      stdoutLog: stdout(),
    },
    categories: {
      default: {
        level: 'debug',
        appenders: ['stdoutLog'],
      },
    },
  };

  // product options
  if (filename) {
    options = {
      appenders: {
        datefileLog: datefile(filename, pattern),
      },
      categories: {
        default: {
          level: 'info',
          appenders: ['datefileLog'],
        },
      },
    };
  }

  return options;
};
