'use strict';

// rule for css
var ruleForCss = require('./rule-for-css.js');

// rule for sass
var ruleForSass = require('./rule-for-sass.js');

// rule for react
var ruleForReact = require('./rule-for-react.js');

/**
 * module build
 */
module.exports = {
  rules: [
    ruleForCss.build,
    ruleForSass.build,
    ruleForReact,
  ]
};