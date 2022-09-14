'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoFile = require('qiao-file');
var qiaoJson = require('qiao-json');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var artTemplate = require('art-template');
var expressArtTemplate = require('express-art-template');

// express

/**
 * init app
 * @returns 
 */
var initApp = () => {
    const app = express();
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.text({type:'text/xml'}));

    return app;
};

// path

/**
 * init static
 * @param {*} app
 * @param {*} options
 */
var initStatic = (app, options) => {
    // acme
    const acmePath = path.resolve(process.cwd(), './.well-known');
    app.use('/.well-known', express.static(acmePath, { maxAge: 0 }));

    // static
    if(options.isDev){
        const staticPath = path.resolve(process.cwd(), './web/static');
        app.use('/static', express.static(staticPath, { maxAge: 0 }));
    }

    // options
    if (options.staticPaths) {
        options.staticPaths.forEach((spath) => {
            app.use(spath.name, express.static(spath.path, { maxAge: 0 }));
        });
    }
};

// qiao

/**
 * cross domain
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const crossDomain = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', '*');

    next();
};

/**
 * check path
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const checkPath = async (req, res, next) => {
    // path
    const path = req.path;

    // normal visit
    let normalVisit = false;
    const normalVisitPath = global.config.paths;
    for (let i = 0; i < normalVisitPath.length; i++) {
        if (path == normalVisitPath[i]) normalVisit = true;
        if (checkRegularPath(path, normalVisitPath[i])) normalVisit = true;
    }
    if (normalVisit) req.checkPath = true;

    // return
    next();
};

// check regular path
const checkRegularPath = (reqPath, configPath) => {
    // not regular path
    if (!reqPath || !configPath || configPath.indexOf('*') < 0) return;
    
    // check
    const configFinalPath = configPath.split('*')[0];
    return reqPath.indexOf(configFinalPath) > -1;
};

/**
 * check final
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkFinal = (req, res, next) => {
    if (req.checkPath) {
        next();
        return;
    }

    res.send(qiaoJson.danger('非法路径！'));
};

// mids

/**
 * init mids
 * @param {*} app 
 * @param {*} options 
 * @returns 
 */
var initMids = (app, options) => {
    // cross domain
    app.use(crossDomain);

    // check path
    app.use(checkPath);

    // mids
    if (options.mids) {
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }

    // final
    app.use(checkFinal);
};

// qiao

/**
 * init controller
 */
var initController = (app, options) => {
    // app controller
    const serverFiles = qiaoFile.lsdir(process.cwd() + '/');
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        if(/Controller\.js$/.test(file)) require(file)(app);
    });

    // other controller
    if(options.modules){
        options.modules.forEach((init) => {
            init(app);
        });
    }
};

// path

/**
 * init view
 * @param {*} app 
 */
var initView = (app) => {
    // view path
    const viewPath = path.resolve(process.cwd(), './views');

    // set
    artTemplate.defaults.cache = false;
    artTemplate.defaults.extname = '.html';
    app.set('view engine', 'html');
    app.set('views', viewPath);
    app.engine('html', expressArtTemplate);
};

// init

/**
 * init
 * @param {*} options 
 * @returns 
 */
const init = (options) => {
    // check
    if(!options) return;

    // config
    if(options.config) global.config = options.config;

    // init app
    const app = initApp();
    initStatic(app, options);
    initMids(app, options);
    initController(app, options);
    initView(app);
    app.listen(global.config.port);

    // return 
    return app;
};

exports.file = qiaoFile;
exports.json = qiaoJson;
exports.init = init;
