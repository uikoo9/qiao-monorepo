// require
var path 	= require('path');
var qiao 	= {};
qiao.encode	= require('qiao.util.encode');
qiao.file	= require('qiao.util.file');
qiao.json 	= require('qiao.util.json');
qiao.mysql	= require('qiao.plugin.mysql');

// global
global.qiao			= qiao;
global.config 	= require('./config/config.json');

// vars
var root	= __dirname;
var port	= global.config.port;

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

// path
var sslPath		= path.resolve(root, './.well-known');
var filesPath	= path.resolve(root, './files');

// static
app.use('/files', express.static(filesPath, {maxAge: 0}));
app.use('/.well-known', express.static(sslPath, {maxAge: 0}));

// auth
app.use(require('./middleware/qiao.mid.js').crossDomain);
app.use(require('./middleware/qiao.mid.js').auth);

// controller
var serverFiles = qiao.file.lsdir(root + '/');
for(var i=0; i<serverFiles.files.length; i++){
	var file = serverFiles.files[i].path + serverFiles.files[i].name;
	if(/Controller\.js$/.test(file)) require(file)(app);
}

// qiao.cell.user
require('qiao.cell.user').init(app);

// port
app.listen(port);