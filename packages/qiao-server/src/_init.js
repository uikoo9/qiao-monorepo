'use strict';

// express
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// require
import { 
    file as qfile,
    user as quser,
} from './_qiao.js';
import {
    auth as qauth,
    crossDomain,
} from './_mids.js';

/**
 * init
 * @param {*} options 
 * @returns 
 */
export const init = (options) => {
    // check
    if(!options) return;

    // config
    if(options.config){
        global.config = options.config;
    }
	
	// app
	const app = express();
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.text({type:'text/xml'}));
	
	// static paths
    if(options.staticPaths){
        options.staticPaths.forEach((staticPath) => {
            app.use(staticPath.name, express.static(staticPath.path, {maxAge: 0}));
        });
    }

	// auth
    app.use(crossDomain);
    if(options.checkAuth){
        app.use(qauth);
    }

    // mids
    if(options.mids){
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }
	
	// controller
    const serverFiles = qfile.lsdir(process.cwd() + '/');
	for(let i=0; i<serverFiles.files.length; i++){
		const file = serverFiles.files[i].path + serverFiles.files[i].name;
		if(!/node_modules/.test(file) && /Controller\.js$/.test(file)) require(file)(app);
	}
	
	// inits
    quser.init(app);
    if(options.inits){
        options.inits.forEach((init) => {
            init.init(app);
        });
    }
	
	// port
	app.listen(global.config.port);

	// return 
	return app;
};