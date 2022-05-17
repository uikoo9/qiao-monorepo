'use strict';

/**
 * parallel by IIFE
 * @param {*} funcs 
 * @param {*} values 
 * @param {*} callback 
 * @param {*} complete 
 * @returns 
 */
exports.parallelByIIFE = async function(funcs, values, callback, complete){
    // time
    console.time('qiao-parallel');

    // check funcs
    if(!funcs || !funcs.length){
        if(complete) complete(0);
        console.timeEnd('qiao-parallel');

        return;
    }

    // run
    var count=0;
    var funcsLength = funcs.length;
    for(var i=0; i<funcs.length; i++){
        var index   = i;
        var func    = funcs[i];
        var value   = (values && values.length) ? values[i] : null;

        (async function(index, func, value, funcsLength){
            var res = await func(value);
            if(callback) callback(index, res);

            count++;
            if(count == funcsLength){
                if(complete) complete(funcsLength);
                console.timeEnd('qiao-parallel');
            }
        })(index, func, value, funcsLength);
    }
}