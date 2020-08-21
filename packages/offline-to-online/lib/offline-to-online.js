'use strict';

// vars
var offlineOne = false;
var offlineTwo = false;
var intervalId = null;

/**
 * offline to online
 *  callback
 *  time
 */
exports.offlineToOnline = function(isOnlineFunction, calllback, time){
	// check
	if(!isOnlineFunction){
        console.log('need is online function');
        return;
    }
    if(!calllback){
        console.log('need offline to online callback');
        return;
    }

	// start timer
	if(intervalId) return;
	startTimer(isOnlineFunction, calllback, time);
};

// start timer
function startTimer(isOnlineFunction, intervalCallback, intervalTime){
	var time = intervalTime || 3*1000;
	intervalId = setInterval(async () => {
		var changed = await isNetworkChanged(isOnlineFunction);
		if(!changed) return;

		if(intervalCallback) intervalCallback();
	}, time);
}

// is network changed
async function isNetworkChanged(isOnlineFunction){
	var online = await isOnlineFunction();

	// offline
	if(!online){
		if(offlineOne) offlineTwo = true;

		offlineOne = true;
	}

	// offline to online
	if(offlineOne &&  offlineTwo && online){
		offlineOne = false;
		offlineTwo = false;

		return true;
	}

	// online
	if(online){
		offlineOne = false;
		offlineTwo = false;
	}

	return false;
}