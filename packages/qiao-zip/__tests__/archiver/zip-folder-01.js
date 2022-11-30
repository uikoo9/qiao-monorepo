var fs = require('fs');
var archiver = require('archiver');

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
  archive.directory(sourceFolder, subdir || false);
  archive.finalize();
}

/**
 * test
 */
function test() {
  var sourceFolder = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/__tests__/archiver';
  var destZip = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/__tests__/archiver/archiver.zip';

  zipFolder(sourceFolder, destZip, function (err, msg) {
    console.log(err, msg);
  });
}
test();
