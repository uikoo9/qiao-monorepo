// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 为zip添加comment
zip.addZipComment('test');

// 添加comment后必须重写zip文件
zip.writeZip('d:/test.zip');
