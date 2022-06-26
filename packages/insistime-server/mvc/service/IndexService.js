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
 * search
 */
exports.search = function (req, res) {
    res.render('search/search.html');
};

/**
 * search npm
 */
exports.searchNpm = function (req, res) {
    res.send(util.json.success(req.body.pkg));
};