// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 为zip添加文件，文件名为entry.js，内容为content，备注为comment
zip.addFile('entry.js', 'content', 'comment', null);

// 生成zip文件
zip.writeZip('d:/test.zip');
