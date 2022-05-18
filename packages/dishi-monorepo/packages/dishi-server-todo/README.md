# dishi-server-todo

## api
### init
```javascript
// app
var app = express();

// ...

// dishi-server-todo
require('dishi-server-todo').init(app);
```

### use
```javascript
var q = require('dishi-server-todo');

q.todoGroupController
q.todoGroupService
q.todoGroupModel

q.todoItemController
q.todoItemService
q.todoItemModel

q.todoController
q.todoService
```

## version
### 0.0.5.20220518
1. ncu

### 0.0.4.20210831
1. add sql

### 0.0.3.20210830
1. todo group add userid
2. todo item add userid

### 0.0.2.20210823
1. todo group get by id add userid
2. todo item get by id add userid

### 0.0.1.20210818
1. init project
2. add postman
3. add fore
4. md

