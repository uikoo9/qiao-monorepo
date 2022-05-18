'use strict';

// express
var express 		= require('express');
var bodyParser 		= require('body-parser');
var cookieParser	= require('cookie-parser');

// require
var qiao = require('./_qiao.js');
var mids = require('./mids.js');

/**
 * init
 * @param {*} options 
 * @returns 
 */
exports.init = function(options){
    // check
    if(!options) return;

    // config
    if(options.config){
        global.config = options.config;
    }
	
	// app
	var app = express();
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.text({type:'text/xml'}));
	
	// static paths
    if(options.staticPaths){
        options.staticPaths.forEach(function(staticPath){
            app.use(staticPath.name, express.static(staticPath.path, {maxAge: 0}));
        });
    }

	// auth
    app.use(mids.crossDomain);
    if(options.checkAuth){
        app.use(mids.auth);
    }

    // mids
    if(options.mids){
        options.mids.forEach(function(mid){
            app.use(mid);
        });
    }
	
	// controller
	var serverFiles = qiao.file.lsdir(__dirname + '/');
	for(var i=0; i<serverFiles.files.length; i++){
		var file = serverFiles.files[i].path + serverFiles.files[i].name;
		if(/Controller\.js$/.test(file)) require(file)(app);
	}
	
	// inits
    qiao.user.init(app);
    if(options.inits){
        options.inits.forEach(function(init){
            init.init(app);
        });
    }
	
	// port
	app.listen(global.config.port);

	// return 
	return app;
};