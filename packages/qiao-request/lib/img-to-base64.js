"use strict";

var req = require("./req.js");
var path = require("path");

/**
 * img to base64
 */
exports.imgToBase64 = function (url, cb) {
  var res = {};
  res.url = url;

  if (!url) {
    res.type = "fail";
    res.msg = "need url";

    cb(res);
    return;
  }

  var type;
  var ext = path.extname(url).toLowerCase();
  if (ext == ".gif") type = "gif";
  if (ext == ".png") type = "png";
  if (ext == ".jpg" || ext == ".jpeg") type = "jpeg";
  if (!type) {
    res.type = "fail";
    res.msg = "only gif,png,jpg";

    cb(res);
    return;
  }

  req.get(
    {
      url: url,
      encoding: null,
    },
    function (err, rs, body) {
      if (err) {
        res.type = "fail";
        res.msg = err;

        cb(res);
        return;
      }
      if (rs.statusCode != 200) {
        res.type = "fail";
        res.msg = "status code not 200";

        cb(res);
        return;
      }

      var base64 = body.toString("base64");
      res.type = "suc";
      res.msg = `data:image/${type};base64,${base64}`;

      cb(res);
      return;
    }
  );
};

/**
 * img to base64 sync
 */
exports.imgToBase64Sync = function (url) {
  return new Promise(function (resolve, reject) {
    exports.imgToBase64(url, function (res) {
      return resolve(res);
    });
  });
};
