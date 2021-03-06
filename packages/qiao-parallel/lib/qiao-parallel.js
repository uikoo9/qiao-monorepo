'use strict';

// parallel
var parallel = require('./parallel.js');

/**
 * parallel by IIFE
 * @param {*} func 
 * @param {*} values 
 * @param {*} callback 
 * @param {*} complete 
 * @returns 
 */
exports.parallelByIIFE = async function(func, values, callback, complete){
    parallel(func, values, callback, complete);
};

/**
 * parallel by fork
 * @param {*} jsPath 
 * @param {*} values 
 * @param {*} callback 
 * @param {*} complete 
 */
exports.parallelByFork = async function(jsPath, values, callback, complete){
    parallel(null, values, callback, complete, jsPath);
};