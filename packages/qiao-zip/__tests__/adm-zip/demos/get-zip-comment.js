// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取zip的comment
var comment = zip.getZipComment();
console.log(comment);
