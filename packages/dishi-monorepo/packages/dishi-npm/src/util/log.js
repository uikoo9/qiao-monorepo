// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');

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