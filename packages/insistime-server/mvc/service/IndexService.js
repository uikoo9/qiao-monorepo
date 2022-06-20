'use strict';

// util
var util = require('../util.js');

/**
 * index
 */
exports.index = function (req, res) {
    var vendor = util.vendor(req.headers['user-agent']);
    if (vendor.mobile || vendor.android) {
        res.render('index/index-mobile.html');
    } else {
        res.render('index/index-pc.html');
    }
};

/**
 * login
 */
exports.login = function (req, res) {
    res.render('index/login.html');
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
    res.render('manage/manage.html');
};
