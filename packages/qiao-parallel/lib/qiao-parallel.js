'use strict';

/**
 * parallel by IIFE
 * @param {*} func 
 * @param {*} values 
 * @param {*} callback 
 * @param {*} complete 
 * @returns 
 */
exports.parallelByIIFE = async function(func, values, callback, complete){
    // time
    console.time('qiao-parallel');

    // check func
    if(!func || !values || !values.length){
        if(complete) complete(0);
        console.timeEnd('qiao-parallel');

        return;
    }

    // run
    var count=0;
    var valuesLength = values.length;
    for(var i=0; i<valuesLength; i++){
        (async function(index, func, value, valuesLength){
            var res = await func(value);
            if(callback) callback(index, res);

            count++;
            if(count == valuesLength){
                if(complete) complete(valuesLength);
                console.timeEnd('qiao-parallel');
            }
        })(i, func, values[i], valuesLength);
    }
}