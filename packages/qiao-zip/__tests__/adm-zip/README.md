# adm-zip-0.4.13-中文文档

- adm-zip.js
  - constructor(filePath)
  - getEntries()
  - getEntry(name)
  - readFile(entry)
  - readFileAsync(entry, callback)
  - readAsText(entry, encoding)
  - readAsTextAsync(entry, callback, encoding)
  - deleteFile(entry)
  - addZipComment(comment)
  - getZipComment( )
  - addZipEntryComment(entry, comment)
  - getZipEntryComment(entry)
  - updateFile(entry, content)
  - addLocalFile(localPath, zipPath)
  - addLocalFolder(localPath, zipPath)
  - addFile(entryName, content, comment, attr)
  - extractEntryTo(entry, targetPath, maintainEntryPath, overwrite)
  - extractAllTo(targetPath, overwrite)
  - writeZip(targetFileName)
  - toBuffer(onSuccess, onFail, onItemStart,onItemEnd)

### adm-zip

```javascript
// 引入adm-zip
var admZip = require('adm-zip');
console.log(admZip);
```

### constructor(filePath)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的test.zip文件
var localZip = new admZip('d:/test.zip');
console.log(localZip);

// 在内存中创建新的zip文件
var newZip = new admZip();
console.log(newZip);
```

### getEntries()

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的test.zip文件
var zip = new admZip('d:/test.zip');

// 获取所有zip中entry并遍历
zip.getEntries().forEach(function (entry) {
  var entryName = entry.entryName;
  console.log(entryName);

  var decompressedData = zip.readFile(entry);
  console.log(decompressedData);

  console.log(zip.readAsText(entry));
});
```

### getEntry(name)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');
console.log(entry);
```

### readFile(entry)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取entry对应的buffer
var buffer = zip.readFile(entry);
console.log(buffer);
```

### readFileAsync(entry, callback)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取entry对应的buffer
zip.readFileAsync(entry, function (buffer, err) {
  console.log(buffer, err);
});
```

### readAsText(entry, encoding)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取entry对应的text
var data = zip.readAsText(entry, 'utf8');
console.log(data);
```

### readAsTextAsync(entry, callback, encoding)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取entry对应的text
zip.readAsTextAsync(
  entry,
  function (data, err) {
    console.log(data, err);
  },
  'utf8',
);
```

### deleteFile(entry)

```javascript
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
```

### addZipComment(comment)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 为zip添加comment
zip.addZipComment('test');

// 添加comment后必须重写zip文件
zip.writeZip('d:/test.zip');
```

### getZipComment()

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取zip的comment
var comment = zip.getZipComment();
console.log(comment);
```

### addZipEntryComment(entry, comment)

```javascript
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
```

### getZipEntryComment(entry)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取zip中的test.js这个entry的comment
var comment = zip.getZipEntryComment(entry);
console.log(comment);
```

### updateFile(entry, content)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 为zip中的test.js这个entry更新内容为文字'test'
zip.updateFile(entry, 'test');

// update file后必须重写zip文件
zip.writeZip('d:/test.zip');
```

### addLocalFile(localPath, zipPath)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 在内存中创建新的zip文件
var zip = new admZip();

// 为zip添加本地文件
zip.addLocalFile('d:/test.js');

// 生成zip文件
zip.writeZip('d:/test.zip');
```

### addLocalFolder(localPath, zipPath)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 在内存中创建新的zip文件
var zip = new admZip();

// 为zip添加本地文件夹
zip.addLocalFolder('d:/test');

// 生成zip文件
zip.writeZip('d:/test.zip');
```

### addFile(entryName, content, comment, attr)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 为zip添加文件，文件名为entry.js，内容为content，备注为comment
zip.addFile('entry.js', 'content', 'comment', null);

// 生成zip文件
zip.writeZip('d:/test.zip');
```

### extractEntryTo(entry, targetPath, maintainEntryPath, overwrite)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的entry.js这个entry
var entry = zip.getEntry('entry.js');

// 将test.js这个entry解压缩到d:/
// 第一个true，如果有父文件夹则创建父文件夹
// 第二个true，是否覆盖
zip.extractEntryTo(entry, 'd:/', true, true);
```

### extractAllTo(targetPath, overwrite)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 将d:/test.zip这个zip文件解压缩到d:/test11文件夹下
// 第一个true，是否覆盖
zip.extractAllTo('d:/test11', true);
```

### writeZip(targetFileName, callback)

```javascript
// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 操作zip，例如删除entry，更新file等
// handle zip

// 写入到d:/test.zip中，也可以是其他path
zip.writeZip('d:/test.zip', function (err, msg) {
  console.log(err, msg);
});

// 如果只传callback，就会写入到打开的zip文件中
zip.writeZip(function (err, msg) {
  console.log(err, msg);
});
```
