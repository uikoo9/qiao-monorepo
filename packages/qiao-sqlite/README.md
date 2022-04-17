# qiao-sqlite
sqlite tools

## api
### createDb
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');
console.log(db);
```

### createTable
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// table
var sql = 'CREATE TABLE t_project (project_name TEXT, project_appid TEXT, project_icon_url TEXT) if not exists';

// test
async function test(){
    try{
        await q.createTable(db, sql);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### dropTable
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// test
async function test(){
    try{
        console.log(await q.showTables(db));
        await q.dropTable(db, 't_project');
        console.log(await q.showTables(db));
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### showTables
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// test
async function test(){
    try{
        const rows = await q.showTables(db);
        console.log(rows);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### insertData
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// data
var sql = 'insert into t_project values (?, ?, ?)';

// test
async function test(){
    try{
        await q.insertData(db, sql, ['name', 'appid', 'url']);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### deleteData
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// data
var sql = 'delete from t_project where rowid=?';

// test
async function test(){
    try{
        await q.deleteData(db, sql, [1]);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### deleteData
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// data
var sql = 'update t_project set project_name=?';

// test
async function test(){
    try{
        await q.modifyData(db, sql, ['name1']);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

### selectData
```javascript
'use strict';

// q
var q = require('qiao-sqlite');

// db
var db = q.createDb('./test/test.db');

// sql
var sql = 'SELECT * FROM t_project';

// test
async function test(){
    try{
        var rows = await q.selectData(db, sql);
        console.log(rows);
    }catch(e){
        console.log(e);
    }
}

// run
test();
```

## version
### 0.0.3.20220408
1. modify data
2. show tables
3. drop table

### 0.0.2.20220407
1. promise
2. delete data

### 0.0.1.20220402
1. init project
2. create db
3. create table
4. insert data
5. select data

