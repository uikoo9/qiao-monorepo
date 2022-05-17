'use strict';

// qprocess
var qprocess = require('qiao-process');

// count
var count = 0;

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

// parallel
async function parallel(func, values, callback, complete, jsPath){
    // time
    console.time('qiao-parallel');

    // check values
    if(!values || !values.length){
        if(complete) complete(0);
        console.timeEnd('qiao-parallel');

        return;
    }

    // run
    var valuesLength = values.length;
    for(var i=0; i<valuesLength; i++){
        (async function(index, func, value, valuesLength){
            if(jsPath){
                handlerByFork(index, jsPath, value, valuesLength, callback, complete);
            }else{
                handlerByIIFE(index, func, value, valuesLength, callback, complete);
            }
        })(i, func, values[i], valuesLength);
    }
};

// handler by IIFE
async function handlerByIIFE(index, func, value, valuesLength, callback, complete){
    var res = await func(value);
    if(callback) callback(index, res);

    count++;
    if(count == valuesLength){
        if(complete) complete(valuesLength);
        console.timeEnd('qiao-parallel');
    }
}

// handler by fork
function handlerByFork(index, jsPath, value, valuesLength, callback, complete){
	var args = [value];
	qprocess.fork(jsPath, args, function(res){
        if(callback) callback(index, res);
	}, function(){
		count++;
        if(count == valuesLength){
            if(complete) complete(valuesLength);
            console.timeEnd('qiao-parallel');
        }
	});
}