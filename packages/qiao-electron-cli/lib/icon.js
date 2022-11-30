'use strict';

// path
var path = require('path');

// cp
var child_process = require('child_process');

/**
 * icon
 */
module.exports = function (iconPath) {
  var options = {
    cwd: path.dirname(iconPath),
  };
  var callback = function (error, stdout) {
    if (error) throw error;

    console.log(stdout);
  };

  // sips
  sips(options, callback);

  // icns
  icns(options, callback);
};

// sips
function sips(options, callback) {
  var cmds = [
    'sips -z 16 16      pic.png --out tmp.iconset/icon_16x16.png',
    'sips -z 32 32      pic.png --out tmp.iconset/icon_16x16@2x.png',
    'sips -z 32 32      pic.png --out tmp.iconset/icon_32x32.png',
    'sips -z 64 64      pic.png --out tmp.iconset/icon_32x32@2x.png',
    'sips -z 128 128    pic.png --out tmp.iconset/icon_128x128.png',
    'sips -z 256 256    pic.png --out tmp.iconset/icon_128x128@2x.png',
    'sips -z 256 256    pic.png --out tmp.iconset/icon_256x256.png',
    'sips -z 512 512    pic.png --out tmp.iconset/icon_256x256@2x.png',
    'sips -z 512 512    pic.png --out tmp.iconset/icon_512x512.png',
    'sips -z 1024 1024  pic.png --out tmp.iconset/icon_512x512@2x.png',
  ];
  for (var i = 0; i < cmds.length; i++) {
    var cmd = cmds[i];
    child_process.exec(cmd, options, callback);
  }
}

// icns
function icns(options, callback) {
  var cmd = 'iconutil -c icns tmp.iconset -o icon.icns';
  child_process.exec(cmd, options, callback);
}
