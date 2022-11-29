// config
const config = require("./config.json");

// qiao-cos
const qcos = require("../index.js")(config);

/**
 * upload folder
 * upload /your/folder folder's files to your bucket's test folder
 */
const test = () => {
  const destPath = "test";
  const sourceFolder = "/your/folder";

  qcos.uploadFolder(destPath, sourceFolder, (rs) => {
    console.log(rs);
  });
};

test();
