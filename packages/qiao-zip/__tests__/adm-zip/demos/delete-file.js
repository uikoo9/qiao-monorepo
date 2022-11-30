// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 删除entry
zip.deleteFile(entry);

// 删除entry后必须重写zip一次
zip.writeZip('d:/test.zip');
