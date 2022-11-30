var fs = require('fs');
var path = require('path');
var archiver = require('archiver');

/**
 * zip file
 *   sourceFile，待压缩的文件
 *   destZip，压缩后的zip文件
 *   cb，callback
 */
function zipFile(sourceFile, destZip, cb) {
  // init
  var output = fs.createWriteStream(destZip);
  var archive = archiver('zip', {
    zlib: { level: 9 },
  });

  // on
  output.on('close', function () {
    cb(null, 'zip file success!');
  });
  archive.on('error', function (err) {
    cb(err);
  });

  // zip
  archive.pipe(output);
  archive.file(sourceFile, {
    name: path.basename(sourceFile),
  });
  archive.finalize();
}

/**
 * zip folder
 * 	sourceFolder，待压缩的文件夹
 * 	destZip，压缩后的zip文件
 * 	cb，回调函数
 * 	subdir，是否需要包一层
 */
function zipFolder(sourceFolder, destZip, cb, subdir) {
  // init
  var output = fs.createWriteStream(destZip);
  var archive = archiver('zip', {
    zlib: { level: 9 },
  });

  // on
  output.on('close', function () {
    cb(null, 'zip folder success!');
  });
  archive.on('error', function (err) {
    cb(err);
  });

  // zip
  archive.pipe(output);
  archive.directory(sourceFolder, subdir ? sourceFolder.substr(path.dirname(sourceFolder).length + 1) : false);
  archive.finalize();
}
