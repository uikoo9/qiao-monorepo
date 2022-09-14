# qiao-server

## init database
1. create database db_xxx character set utf8 collate utf8_general_ci;
2. source node_modules/qiao-server-user/_sql/*.sql;

## tencent cloud sms
1. modify config/config.json
2. add sms 

## options
```javascript
{
	// config
    isDev: false,
	mids : [
        require('qiao-server-user').checkUser
    ],
	modules : [
        require('qiao-server-user').init
    ],
	staticPaths : [{
        name : '/files',
		path : path.resolve(__dirname, './files')
	}],
    config : {
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
        "sms"           : {
            "appid"     : "xxx",
            "appkey"    : "xxx"
        },
        "paths" : [
            "/ucenter/user/reg",
            "/ucenter/user/login",
            "/ucenter/user/check",
            "/ucenter/user/forget",
            "/ucenter/code/send"
        ]
    },
}
```

## use
```javascript
    // qiao-server
    var q = require('qiao-server');
    q.init({
        config		: config,
        staticPaths	: staticPaths,
        mids		: mids,
    });
```