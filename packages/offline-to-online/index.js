"use strict";

// vars
let offlineOne = false;
let offlineTwo = false;
let intervalId = null;

/**
 * @param {string} isOnlineImgSrc is online img src
 * @param {function} isOnlineFunction is online function
 * @param {function} calllback callback function
 * @param {number} time interval time(ms), default is 3 * 1000ms
 */
const offlineToOnlineWithSrc = (isOnlineImgSrc, isOnlineFunction, calllback, time) => {
  // check
  if (!isOnlineImgSrc) {
    console.log("need is online img src");
    return;
  }

  // is online
  offlineToOnline(isOnlineImgSrc, isOnlineFunction, calllback, time);
};

/**
 * @param {string} isOnlineImgSrc is online img src
 * @param {function} isOnlineFunction is online function
 * @param {function} calllback callback function
 * @param {number} time interval time(ms), default is 3 * 1000ms
 */
const offlineToOnline = (isOnlineImgSrc, isOnlineFunction, calllback, time) => {
  // check
  if (!isOnlineFunction) {
    console.log("need is online function");
    return;
  }
  if (!calllback) {
    console.log("need offline to online callback");
    return;
  }

  // start timer
  if (intervalId) return;
  startTimer(isOnlineImgSrc, isOnlineFunction, calllback, time);
};

// start timer
const startTimer = (isOnlineImgSrc, isOnlineFunction, intervalCallback, intervalTime) => {
  const time = intervalTime || 3 * 1000;
  intervalId = setInterval(async () => {
    const changed = await isNetworkChanged(isOnlineImgSrc, isOnlineFunction);
    if (!changed) return;

    if (intervalCallback) intervalCallback();
  }, time);
};

// is network changed
const isNetworkChanged = async (isOnlineImgSrc, isOnlineFunction) => {
  const online = await isOnlineFunction(isOnlineImgSrc);

  // offline
  if (online == "offline") {
    if (offlineOne) offlineTwo = true;

    offlineOne = true;
  }

  // offline to online
  if (offlineOne && offlineTwo && online == "online") {
    offlineOne = false;
    offlineTwo = false;

    return true;
  }

  // online
  if (online == "online") {
    offlineOne = false;
    offlineTwo = false;
  }

  return false;
};

exports.offlineToOnline = offlineToOnline;
exports.offlineToOnlineWithSrc = offlineToOnlineWithSrc;
