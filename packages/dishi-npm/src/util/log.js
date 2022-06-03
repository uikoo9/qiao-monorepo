'use strict';

// qiao
var qiao = require('qiao-cli');

/**
 * log
 */
exports.log = function (json) {
    if (!json) return;

    if (json.type == 'danger') exports.danger(json.msg);
};

/**
 * normal
 */
exports.normal = function (...msg) {
    console.log(...msg);
};

/**
 * info
 */
exports.info = function (...msg) {
    console.log(qiao.colors.blue(...msg));
};

/**
 * suc
 */
exports.suc = function (...msg) {
    console.log(qiao.colors.green(...msg));
};

/**
 * danger
 */
exports.danger = function (...msg) {
    console.log(qiao.colors.red(...msg));
};