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
exports.searchNpm = async function (req, res) {
    if(!req.body || !req.body.pkg){
        res.send(util.json.danger('need req.body.pkg'));
        return;
    }

    var pkgName = req.body.pkg;
    var res = await util.searchNpm(pkgName);
    res.send(util.json.success('suc', res));
};