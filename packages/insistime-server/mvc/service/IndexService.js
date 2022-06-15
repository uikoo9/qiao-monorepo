'use strict';

// home service
var homeService = require('./HomeService.js');

/**
 * index
 */
exports.index = function (req, res) {
    homeService.blackWhite(req, res);
};

/**
 * login
 */
exports.login = function (req, res) {
    homeService.blackWhiteLogin(req, res);
};

/**
 * logout
 */
exports.logout = function (req, res) {
    res.clearCookie('userid');
    res.clearCookie('usertoken');
    res.redirect('/');
};

/**
 * manage
 */
exports.manage = function (req, res) {
    res.render('manage.html');
};
