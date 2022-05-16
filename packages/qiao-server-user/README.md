# qiao-server-user

## config
```json
{
	"port"			: 9001,
	"encryptKey" 	: "",
	"db" 			: {
		"connectionLimit" : 50,
		"host"		: "127.0.0.1", 
	    "port"		: 3306,
	    "database"	: "",
	    "user"		: "root",
	    "password"	: ""
	},
	"sms"               : {
		"appid"         : "",
		"appkey"        : ""
	}
}
```

## api
### init
```javascript
// app
var app = express();

// ...

// qiao-server-user
require('qiao-server-user').init(app);
```

### use
```javascript
var q = require('qiao-server-user');

q.ucenterUserModel
```

## version
### 0.0.8.20210929
1. save return id
2. postman ucenter menu
3. postman ucenter role
4. postman role-r-user
5. postman role-r-menu

### 0.0.7.20210831
1. add rbac
2. add sql

### 0.0.6.20210823
1. del qiao-server-user.js

### 0.0.5.20210818
1. md
2. add postman

### 0.0.4.20210817
1. global.qiao --> _qiao

### 0.0.3.20210806
1. cell_config --> config

### 0.0.2.20210805
1. qiao-server-user
2. add qiao.util.all
3. del qiao.util.all

### 0.0.1.20210801
1. init project