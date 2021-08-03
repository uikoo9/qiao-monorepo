'use strict';

// vars
var root	= __dirname;
var port	= require('./config/config.json').port;

// express
var express 		= require('express');
var bodyParser 		= require('body-parser');
var cookieParser	= require('cookie-parser');

// app
var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text({type:'text/xml'}));

// controller
var serverFiles = require('qiao.util.file').lsdir(root + '/');
for(var i=0; i<serverFiles.files.length; i++){
	var file = serverFiles.files[i].path + serverFiles.files[i].name;
	if(/Controller\.js$/.test(file)) require(file)(app);
}

// port
app.listen(port);