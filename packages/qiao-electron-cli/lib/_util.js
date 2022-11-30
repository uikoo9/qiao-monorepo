// os
var os = require('os');

/**
 * get icon
 * @param {*} iconPath
 * @returns
 */
exports.getIcon = function (iconPath) {
  if (!iconPath) return;

  var icon;
  if (os.platform() == 'darwin') icon = `${iconPath}.icns`;
  if (os.platform() == 'win32') icon = `${iconPath}.ico`;

  return icon;
};
