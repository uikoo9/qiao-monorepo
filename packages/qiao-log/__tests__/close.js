// q
const { getLogger, close } = require('../index.js');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
  fileName: '../test.log',
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');

// close
close(() => {
  console.log('logger close');
});
