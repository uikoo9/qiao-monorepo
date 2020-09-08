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
exports.offlineToOnlineWithSrc = function(isOnlineImgSrc, isOnlineFunction, calllback, time){
	// check
	if(!isOnlineImgSrc){
        console.log('need is online img src');
        return;
    }

	// is online
	exports.offlineToOnline(isOnlineImgSrc, isOnlineFunction, calllback, time);
};

/**
 * offline to online
 *  callback
 *  time
 */
exports.offlineToOnline = function(isOnlineImgSrc, isOnlineFunction, calllback, time){
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
	startTimer(isOnlineImgSrc, isOnlineFunction, calllback, time);
};

// start timer
function startTimer(isOnlineImgSrc, isOnlineFunction, intervalCallback, intervalTime){
	var time = intervalTime || 3*1000;
	intervalId = setInterval(async () => {
		var changed = await isNetworkChanged(isOnlineImgSrc, isOnlineFunction);
		if(!changed) return;

		if(intervalCallback) intervalCallback();
	}, time);
}

// is network changed
async function isNetworkChanged(isOnlineImgSrc, isOnlineFunction){
	var online = await isOnlineFunction(isOnlineImgSrc);

	// offline
	if(online == 'offline'){
		if(offlineOne) offlineTwo = true;

		offlineOne = true;
	}

	// offline to online
	if(offlineOne &&  offlineTwo && online == 'online'){
		offlineOne = false;
		offlineTwo = false;

		return true;
	}

	// online
	if(online == 'online'){
		offlineOne = false;
		offlineTwo = false;
	}

	return false;
}