// q
const { getLogger } = require('../index.js');

// config
const config = {
  appenders: ['datefileLog'],
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
