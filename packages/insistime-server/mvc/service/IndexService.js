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
