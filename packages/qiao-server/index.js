'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qencode = require('qiao-encode');
var qfile = require('qiao-file');
var qjson = require('qiao-json');
var quser = require('qiao-server-user');
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
  const acmePath = path.resolve(process.cwd(), "./.well-known");
  app.use("/.well-known", express.static(acmePath, { maxAge: 0 }));

  // static
  if(options.isDev){
    const staticPath = path.resolve(process.cwd(), "./web/static");
    app.use("/static", express.static(staticPath, { maxAge: 0 }));
  }

  // options
  if (options.staticPaths) {
    options.staticPaths.forEach((spath) => {
      app.use(spath.name, express.static(spath.path, { maxAge: 0 }));
    });
  }
};

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
 * auth
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const auth = async (req, res, next) => {
    // path
    const path = req.path;

    // auth - normal visit
    let normalVisit = false;
    const normalVisitPath = global.config.paths;
    for (let i = 0; i < normalVisitPath.length; i++) {
        if (path == normalVisitPath[i]) normalVisit = true;
    }
    if (normalVisit) {
        next();
        return;
    }

    // auth - has token
    const userid = req.headers.userid || req.cookies.insistime_userid;
    const usertoken = req.headers.usertoken || req.cookies.insistime_usertoken;
    if (!userid || !usertoken) {
        res.send(qjson.danger('缺少token！'));
        return;
    }

    // auth - check token
    try {
        // get user
        const rows = await quser.ucenterUserModel.ucenterUserGetById(userid);
        if (!rows || rows.length != 1) {
            res.send(qjson.danger('缺少用户信息！'));
            return;
        }

        // check token
        const user = rows[0];
        const username = user['ucenter_user_name'];
        const password = user['ucenter_user_password'];
        const rUsertoken = qencode.AESEncrypt(username + password, global.config.encryptKey);

        // send
        if (usertoken != rUsertoken) {
            res.send(qjson.danger('非法token！'));
            return;
        }

        // set userinfo
        req.body['express_userid'] = userid;
        req.body['express_username'] = username;

        next();
    } catch (e) {
        res.send(qjson.danger('校验token失败！', { errName: e.name, errMsg: e.message }));
    }
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

    // auth
    if(options.checkAuth){
        app.use(auth);
    }

    // mids
    if(options.mids){
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }
};

// require

/**
 * init modules
 * @param {*} app 
 * @param {*} options 
 */
var initModules = (app, options) => {
    // qiao-server-user
    quser.init(app);

    // others
    if(options.modules){
        options.modules.forEach((m) => {
            m.init(app);
        });
    }
};

// qiao

/**
 * init controller
 * @param {*} app 
 */
var initController = (app) => {
    const serverFiles = qfile.lsdir(process.cwd() + '/');
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        if(!/node_modules/.test(file) && /Controller\.js$/.test(file)) require(file)(app);
    });
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
    initModules(app, options);
    initController(app);
    initView(app);
	app.listen(global.config.port);

	// return 
	return app;
};

exports.encode = qencode;
exports.file = qfile;
exports.json = qjson;
exports.user = quser;
exports.init = init;
