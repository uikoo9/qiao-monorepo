'use strict';

// dishi
var _ucenter 	= require('./dishi/dishi-ucenter.js');
var _crud		= require('./dishi/dishi-crud.js');
var _done       = require('./dishi/dishi-done.js');
var _use        = require('./dishi/dishi-use.js');

// ucenter
exports.login 		= _ucenter.login;
exports.sendCode	= _ucenter.sendCode;
exports.register	= _ucenter.register;

// crud
exports.list 	= _crud.list;
exports.add 	= _crud.add;
exports.update	= _crud.update;
exports.del 	= _crud.del;

// done
exports.done    = _done.done;

// use
exports.use     = _use.use;