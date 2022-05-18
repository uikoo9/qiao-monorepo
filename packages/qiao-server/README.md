# qiao-server

## options
### options.config
```json
{
	"port"			: 9001,
	"encryptKey" 	: "xxx",
	"db" 			: {
		"connectionLimit" : 50,
		"host"		: "127.0.0.1", 
	    "port"		: 3306,
	    "database"	: "xxx",
	    "user"		: "root",
	    "password"	: "xxx"
	},
	"sms"               : {
		"appid"         : "xxx",
		"appkey"        : "xxx"
	},
	"paths" : [
		"/ucenter/user/reg",
		"/ucenter/user/login",
		"/ucenter/user/check",
		"/ucenter/user/forget",
		"/ucenter/code/send"
	]
}
```

### staticPaths
```js
[{
	name : '/files',
	path : path.resolve(__dirname, './.well-known')
},{
	name : '/.well-known',
	path : path.resolve(__dirname, './files')
}]
```

### mids

### inits

## use
```js
    // qiao-server
    var q = require('qiao-server');
    q.init({
        config		: config,
        staticPaths	: staticPaths,
        mids		: mids,
        inits		: inits,
        checkAuth	: true,
    });
```

## version
### 0.0.1.20220518
1. init