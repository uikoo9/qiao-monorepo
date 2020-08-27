/**
 * server
 */
exports.server = function(options){
	// vars
	var root	= options.root;
	var port	= options.port
	
	// require
	var path 	= require('path');
	var qiao 	= require('qiao.util.all');
	
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
	app.use(require('./qiao.mid.js').crossDomain);
	app.use(require('./qiao.mid.js').auth);
	
	// controller
	var serverFiles = qiao.file.lsdir(root + '/');
	for(var i=0; i<serverFiles.files.length; i++){
		var file = serverFiles.files[i].path + serverFiles.files[i].name;
		if(/Controller\.js$/.test(file)) require(file)(app);
	}
	
	// port
	app.listen(port);
};