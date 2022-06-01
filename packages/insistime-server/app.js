'use strict';

// vars
var config 		= require('./config/config.json');
var staticPaths = [];
var mids 		= [];
var modules 	= [
	require('dishi-server-todo')
];

// qiao-server
var q = require('qiao-server');
var options = {
	config		: config,
	staticPaths	: staticPaths,
	mids		: mids,
	modules		: modules,
	checkAuth	: true,
	isDev		: config.isDev
};
q.init(options);