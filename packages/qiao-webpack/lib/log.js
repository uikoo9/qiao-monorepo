// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');

// stats options
var statsOptions = require('../config/webpack-stats.js');

/**
 * log
 */
exports.log = function(...msg){
    console.log(...msg);
};

/**
 * info
 */
exports.info = function(...msg){
    console.log(qiao.cli.colors.blue(...msg));
};

/**
 * suc
 */
exports.suc = function(...msg){
    console.log(qiao.cli.colors.green(...msg));
};

/**
 * danger
 */
exports.danger = function(...msg){
    console.log(qiao.cli.colors.red(...msg));
};

/**
 * showStats
 */
 exports.showStats = function(stats){
    if (!stats) return;

    console.log(stats.toString(statsOptions));
};

/**
 * showErr
 */
exports.showErr = function (err, stats) {
    if (err) {
        console.error(err.stack || err);
        if (err.details) console.error(err.details);
        
        return true;
    }
    
    var errorOrWarn = false;
    
    var info = stats.toJson();
    if (stats.hasErrors() && info.errors){
        errorOrWarn = true;
        for(var i=0; i<info.errorsCount; i++) exports.danger(info.errors[i].message);
    }
    if (stats.hasWarnings() && info.warnings){
        errorOrWarn = true;
        for(var i=0; i<info.warningsCount; i++) exports.danger(info.warnings[i].message);
    }

    return errorOrWarn;
};