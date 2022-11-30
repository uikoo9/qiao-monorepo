'use strict';

var q = require('../index.js');

var test = async function () {
  var appId = require('./config.json').AppID;
  var appSecret = require('./config.json').AppSecret;

  var accessToken = await q.accessToken(appId, appSecret);
  console.log(accessToken);
};

test();
