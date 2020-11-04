'use strict';

// dishi
var _ucenter 	= require('./dishi/dishi-ucenter.js');
var _crud		= require('./dishi/dishi-crud.js');
var _operate    = require('./dishi/dishi-operate.js');
var _config     = require('./dishi/dishi-config.js');

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
exports.done    = _operate.done;
exports.move    = _operate.move;
exports.show    = _operate.show;

// config
exports.use     = _config.use;
exports.rows    = _config.rows;