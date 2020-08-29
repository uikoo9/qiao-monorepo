'use strict';

// dishi
var _ucenter 	= require('./dishi-ucenter.js');
var _crud		= require('./dishi-crud.js');

// ucenter
exports.login 		= _ucenter.login;
exports.sendCode	= _ucenter.sendCode;
exports.register	= _ucenter.register;

// crud
exports.list 	= _crud.list;
exports.add 	= _crud.add;
exports.update	= _crud.update;
exports.del 	= _crud.del;