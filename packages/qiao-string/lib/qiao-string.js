"use strict";

/**
 * firstLetterUpper
 * 	str : word
 */
exports.firstLetterUpper = function (str) {
  // check empty
  if (!str) {
    console.log("need str");
    return null;
  }

  // check string
  if (typeof str != "string") {
    console.log("need string");
    return null;
  }

  var firstLetter = str.charAt(0).toUpperCase();
  var strLength = str.length;

  return strLength == 1 ? firstLetter : firstLetter + str.substr(1, strLength);
};

/**
 * firstLetterLower
 * 	str : word
 */
exports.firstLetterLower = function (str) {
  // check empty
  if (!str) {
    console.log("need str");
    return null;
  }

  // check string
  if (typeof str != "string") {
    console.log("need string");
    return null;
  }

  var firstLetter = str.charAt(0).toLowerCase();
  var strLength = str.length;

  return strLength == 1 ? firstLetter : firstLetter + str.substr(1, strLength);
};

/**
 * underScoreCaseToCamelCase
 * 	underScoreCaseName : under score case name
 */
exports.underScoreCaseToCamelCase = function (underScoreCaseName) {
  if (!underScoreCaseName) {
    console.log("need under score case name!");
    return;
  }

  var res = [];
  var strs = underScoreCaseName.split("_");
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var strLower = str.toLowerCase();

    res.push(exports.firstLetterUpper(strLower));
  }

  return res.join("");
};
