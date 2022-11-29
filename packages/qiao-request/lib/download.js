"use strict";

var fs = require("fs");
var req = require("./req.js");

/**
 * download
 * 	url
 * 	path
 */
exports.download = function (url, path) {
  return new Promise(function (resolve, reject) {
    req.request.head(url, function (err, rs, body) {
      if (err) {
        reject(err);
        return;
      }
      if (rs.statusCode != 200) {
        reject("status code not 200");
        return;
      }

      req.request(url).pipe(
        fs.createWriteStream(path).on("finish", function () {
          resolve();
        })
      );
    });
  });
};
