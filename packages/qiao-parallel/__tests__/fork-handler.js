'use strict';

// handler
var handler = require('./_handler.js');

// fork handler
async function forkHandler() {
  // check
  if (!process || !process.argv) return;

  // value
  var value = parseInt(process.argv[2]);

  // msg
  var msg = await handler(value);
  process.send(msg);
}

forkHandler();
