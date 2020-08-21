'use strict';

// is online
var isOnline = require('./is-online.js');

// vars
var offlineOne = false;
var offlineTwo = false;
var intervalId = null;

/**
 * offline to online
 *  callback
 *  time
 */
exports.offlineToOnline = function(calllback, time){
    // check
    if(!calllback){
        console.log('need offline to online callback');
        return;
    }

	// start timer
	if(intervalId) return;
	startTimer(calllback, time);
};

// start timer
function startTimer(intervalCallback, intervalTime){
	var time = intervalTime || 3*1000;
	intervalId = setInterval(async () => {
		var changed = await isNetworkChanged();
		if(!changed) return;

		if(intervalCallback) intervalCallback();
	}, time);
}

// is network changed
async function isNetworkChanged(){
	var online = await isOnline.isOnline();

	// offline
	if(!online){
		if(offlineOne) offlineTwo = true;

		offlineOne = true;
	}

	// online
	if(online){
		offlineOne = false;
		offlineTwo = false;
	}

	// offline to online
	if(offlineOne &&  offlineTwo && online){
		offlineOne = false;
		offlineTwo = false;

		return true;
	}

	return false;
}