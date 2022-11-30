// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 为zip中的test.js这个entry添加comment
zip.addZipEntryComment(entry, 'test');

// 添加comment后必须重写zip文件
zip.writeZip('d:/test.zip');
