const q = require('../index.js');

const options = {
  intervalTime: 100,
  log4jsConfig: {
    appenders: {
      out: { type: 'stdout' },
    },
    categories: {
      default: { appenders: ['out'], level: 'debug' },
    },
  },
};

const logger = q(options);
for (let i = 0; i < 100; i++) {
  logger.debug('1', '2', '3');
}

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    logger.debug('4', '5', '6');
  }
}, 1000);
