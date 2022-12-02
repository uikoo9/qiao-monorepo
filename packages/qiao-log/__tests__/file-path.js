// q
const { getLogger } = require('../index.js');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
  fileName: '../test.log',
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
