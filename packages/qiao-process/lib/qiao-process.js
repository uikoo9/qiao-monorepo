'use strict';

var child_process = require('child_process');

/**
 * fork
 *  js path
 *  args
 *  on msg
 *  on exit
 */
exports.fork = function (jsPath, args, onMsg, onExit) {
  if (!jsPath) {
    console.log('need fork js path');
    return;
  }

  var cp = child_process.fork(jsPath, args || []);
  cp.on('message', function (msg) {
    if (onMsg) onMsg(msg);
  });
  cp.on('exit', function (code) {
    if (onExit) onExit(code);
  });

  return cp;
};

/**
 * send
 *  msg
 */
exports.send = function (msg) {
  process.send(msg);
};

/**
 * on msg
 *  on msg
 */
exports.onMsg = function (onMsg) {
  process.on('message', function (msg) {
    if (onMsg) onMsg(msg);
  });
};

/**
 * kill
 *  pid
 */
exports.kill = function (pid) {
  process.kill(pid);
};
