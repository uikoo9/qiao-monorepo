'use strict';

// vars
var config 		= require('./config/config.json');
var staticPaths = [];
var mids 		= [];
var inits 		= [];

// qiao-server
var q = require('qiao-server');
var options = {
	config		: config,
	staticPaths	: staticPaths,
	mids		: mids,
	inits		: inits
};
q.init(options);