'use strict';

// q
const { sentryInit } = require('qiao-electron');

// electron config
const config = require('../electron.config.json');

// init
sentryInit({
  dsn: config.sentry,
});
