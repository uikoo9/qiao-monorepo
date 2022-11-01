'use strict';

var ucenterUserController = require('./src/ucenter/controller/UcenterUserController.js');
var ucenterMenuController = require('./src/ucenter/controller/UcenterMenuController.js');
var ucenterRoleController = require('./src/ucenter/controller/UcenterRoleController.js');
var ucenterRoleRMenuController = require('./src/ucenter/controller/UcenterRoleRMenuController.js');
var ucenterRoleRUserController = require('./src/ucenter/controller/UcenterRoleRUserController.js');

/**
 * check user
 */
exports.checkUser = require('./src/_check.js');

/**
 * init
 * @param {*} app express app
 */
exports.init = function (app, config) {
    // check app and config
    if (!app || !config) {
        console.log('need app and config');
        return;
    }

    // config
    global.QIAO_USER_CONFIG = config;

    // init controller
    ucenterUserController(app);
    ucenterMenuController(app);
    ucenterRoleController(app);
    ucenterRoleRMenuController(app);
    ucenterRoleRUserController(app);
};