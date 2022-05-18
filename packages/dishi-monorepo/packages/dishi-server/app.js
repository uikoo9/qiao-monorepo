'use strict';

// path
var path = require('path');

// config
var config = require('./config/config.json');

// statics paths
var staticPaths = [{
	name : '/files',
	path : path.resolve(__dirname, './.well-known')
},{
	name : '/.well-known',
	path : path.resolve(__dirname, './files')
}];

// mids
var mids = [];

// inits
var inits = [
	require('dishi-server-todo')
];

// qiao-server
var q = require('qiao-server');
var options = {
	config		: config,
	staticPaths	: staticPaths,
	mids		: mids,
	inits		: inits,
	checkAuth	: true,
};
q.init(options);