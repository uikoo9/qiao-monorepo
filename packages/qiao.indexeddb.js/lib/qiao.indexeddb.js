'use strict';

var _db		= require('./_db.js');
var _table	= require('./_table.js');
var _data 	= require('./_data.js');

// db
exports.openDB 	= _db.openDB;
exports.listDB 	= _db.listDB;
exports.delDB 	= _db.delDB;

// table
exports.createTable = _table.createTable;
exports.delTable 	= _table.delTable;

// data
exports.save 	= _data.save;
exports.get		= _data.get;
exports.del 	= _data.del;
exports.clear	= _data.clear;