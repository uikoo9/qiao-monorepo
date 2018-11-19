# urls
## homepage
[https://code.insistime.com/qiao.plugin.coder](https://code.insistime.com/qiao.plugin.coder)

## github
[https://github.com/insistime/qiao.plugin.coder](https://github.com/insistime/qiao.plugin.coder)

## npm
[https://www.npmjs.com/package/qiao.plugin.coder](https://www.npmjs.com/package/qiao.plugin.coder)

# started
## install
npm install -g qiao.plugin.coder

## use
qiao-plugin-coder

# code list
## 01
1. [node.js](https://nodejs.org/en/) server code by [express.js](http://www.expressjs.com.cn/) 
2. file tree :
```shell
|--server
	|--config
		|--config.json
	|--manage-db
		|--ucenter
			|--controller
				|--UcenterUserController.js
				...
			|--model
				|--UcenterUserModel.js
				|--ucenter-user-sql.json
				...
			|--service
				|--UcenterUserService.js
				...
	|--middleware
		|--qiao.mid.js
	|--app.js
	|--package.json
```

## 02
1. [jquery](http://jquery.com/) and [easyui](http://www.jeasyui.com/) on [coolie](https://coolie.ydr.me/) browser code

# version
## 0.0.8.20181119
1. add webroot edit template
2. add webroot js template
3. modify service and model
4. add qiao.util.all
5. modify md
6. manage-db
7. config folder

## 0.0.7.20181108
1. update qiao.plugin.mysql
2. coder 01 ok
3. modify coder cli
4. update template

## 0.0.6.20181107
1. server edit method
2. server pagination params
3. uninstall inquirer
4. qiao.util.string

## 0.0.5.20181023
1. front code 1
2. front code ok 

## 0.0.4.20181019
1. modify sql template

## 0.0.3.20181017
1. qiao.util.file
2. add sql template
3. modify md
4. modify gen server code
5. add bin
6. fix bin

## 0.0.2.20181015
1. add art-template
2. gen file by data
3. gen file by file
4. qiao.util.string.js
5. add template
6. controller model service template ok
7. del bin

## 0.0.1.20181012
1. init