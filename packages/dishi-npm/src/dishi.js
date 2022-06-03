'use strict';

// dishi
var _ucenter = require('./dishi/dishi-ucenter.js');
var _config = require('./dishi/dishi-config.js');
var _crud = require('./dishi/dishi-crud.js');
var _operate = require('./dishi/dishi-operate.js');
var _show = require('./dishi/dishi-show.js');

// ucenter
exports.login = _ucenter.login;
exports.sendCode = _ucenter.sendCode;
exports.register = _ucenter.register;

// config
exports.use = _config.use;
exports.rows = _config.rows;

// crud
exports.list = _crud.list;
exports.add = _crud.add;
exports.update = _crud.update;
exports.del = _crud.del;

// operate
exports.done = _operate.done;
exports.move = _operate.move;

// show
exports.show = _show.show;
