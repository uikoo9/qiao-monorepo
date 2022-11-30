'use strict';

// rule for css
var ruleForCss = require('./rule-for-css.js');

// rule for less
var ruleForLess = require('./rule-for-less.js');

// rule for sass
var ruleForSass = require('./rule-for-sass.js');

// rule for img
var ruleForImg = require('./rule-for-img.js');

// rule for react
var ruleForReact = require('./rule-for-react.js');

/**
 * module
 * @param {*} isDev
 * @param {*} cssIncludes
 * @param {*} postCssConfig
 */
module.exports = function (isDev, cssIncludes, postCssConfig) {
  return {
    rules: [
      ruleForCss(isDev, cssIncludes),
      ruleForLess(isDev),
      ruleForSass(isDev, postCssConfig),
      ruleForImg,
      ruleForReact,
    ],
  };
};
