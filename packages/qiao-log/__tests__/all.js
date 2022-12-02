// q
const { getLogger } = require('../index.js');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
