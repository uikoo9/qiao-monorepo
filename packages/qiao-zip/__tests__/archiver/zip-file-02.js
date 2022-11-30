var fs = require('fs');
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
  archive.file(sourceFile);

  // 这行代码，没有传入name属性
  archive.file(sourceFile);

  // 应该像这样
  archive.file(sourceFile, {
    name: 'test.js',
  });

  archive.finalize();
}

/**
 * test
 */
function test() {
  var sourceFile = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/__tests__/archiver/archiver.js';
  var destZip = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/__tests__/archiver/archiver.zip';

  zipFile(sourceFile, destZip, function (err, msg) {
    console.log(err, msg);
  });
}
test();
