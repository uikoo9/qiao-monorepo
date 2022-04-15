// rules
var ruleForCss = require('./rule-for-css.js');
var ruleForSass = require('./rule-for-sass.js');
var ruleForReact = require('./rule-for-react.js');

/**
 * webpack common options
 */
module.exports = {
  module: {
    rules: [
      ruleForCss,
      ruleForSass,
      ruleForReact,
    ]
  }
};