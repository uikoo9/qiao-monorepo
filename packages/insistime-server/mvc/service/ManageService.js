'use strict';

/**
 * login
 */
exports.login = function (req, res) {
    res.render('login/login.html');
};

/**
 * logout
 */
exports.logout = function (req, res) {
    res.clearCookie('insistime_userid');
    res.clearCookie('insistime_usertoken');
    res.redirect('/');
};

/**
 * manage
 */
exports.manage = function (req, res) {
    res.render('manage/manage.html');
};
