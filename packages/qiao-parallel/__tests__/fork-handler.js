'use strict';

// handler
function handler(timeout){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            return resolve(timeout);
        }, timeout);
    });
}

// cp
async function cp(){
	// check
	if(!process || !process.argv) return;
	
	// value
	var value = parseInt(process.argv[2]);
	
	// msg
	var msg = await handler(value);
	process.send(msg);
}

cp();