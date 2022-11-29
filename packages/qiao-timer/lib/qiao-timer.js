"use strict";

/**
 * cron
 */
exports.cron = require("cron");

/**
 * job
 * 	time
 * 	tick
 */
exports.job = function (time, tick) {
  // check
  if (!time) {
    console.log("need time params!");
    return;
  }
  if (!tick) {
    console.log("need tick params!");
    return;
  }

  // return
  return new exports.cron.CronJob(time, tick);
};

/**
 * run
 * 	time
 * 	tick
 */
exports.run = function (time, tick) {
  // check
  if (!time) {
    console.log("need time params!");
    return;
  }
  if (!tick) {
    console.log("need tick params!");
    return;
  }

  // run
  var job = exports.job(time, tick);
  job.start();

  // return
  return job;
};

/**
 * run and init
 * 	time
 * 	tick
 */
exports.runAndInit = function (time, tick) {
  // check
  if (!time) {
    console.log("need time params!");
    return;
  }
  if (!tick) {
    console.log("need tick params!");
    return;
  }

  // init
  tick();

  // return
  return exports.run(time, tick);
};
