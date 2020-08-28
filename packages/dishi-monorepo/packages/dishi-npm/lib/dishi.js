'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('./fetch.js');
qiao.config	= require('qiao-config');
qiao.log	= require('./log.js');

// config
var config 	= require('./config.json');

/**
 * login
 */
exports.login = async function(mobile, password){
	if(!mobile || !password){
		qiao.log.danger('need mobile and password');
		return;
	}

	var url 	= config.host + config.login;
	var data	= {
		username: mobile,
		password: password
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;

	var userinfo 	= json.obj;
	userinfo.mobile = mobile;
	qiao.config.set('userinfo', userinfo);
	qiao.log.suc(`${json.time}ms | login success`);
};

/**
 * sendCode
 */
exports.sendCode = async function(mobile){
	if(!mobile){
		qiao.log.danger('need mobile');
		return;
	}

	var url = config.host + config.sendCode;
	var data	= {
		type	: 'reg',
		sign	: '济元祥',
		mobile	: mobile
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;
	
	qiao.log.suc(`${json.time}ms | send code success`);
	return true;
};

/**
 * register
 */
exports.register = async function(mobile, password, repassword, code){
	if(!mobile || !password || !repassword || !code){
		qiao.log.danger('need mobile, code, password');
		return;
	}
	if(password != repassword){
		qiao.log.danger('the two password do not match');
		return;
	}

	var url = config.host + config.register;
	var data	= {
		username : mobile,
		password : password,
		usercode : code
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;
	
	qiao.log.suc(`${json.time}ms | register success`);
};

/**
 * list
 */
exports.list = async function(rows, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGrouplist;
		var data	= {};
		if(rows) data.rows = rows;

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | list group success`);
		listGroups(json.obj.rows);
	}
};

/**
 * add
 */
exports.add = async function(name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGroupSave;
		var data	= {
			todoGroupName : name,
			todoGroupOrder: '1'
		};

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | add group success`);
	}
};

/**
 * update
 */
exports.update = async function(id, name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGroupSave;
		var data	= {
			id				: id,
			todoGroupName 	: name,
			todoGroupOrder	: '1'
		};

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | update group success`);
	}
};

// get group id
function getGroupId(group){
	var groupId;
	if(group){
		if(typeof group == 'string') groupId = group;
	}else{
		groupId = '1';
	}

	return groupId;
}

// list groups
function listGroups(rows){
	for(var i=0; i<rows.length; i++){
		var item = rows[i];
		qiao.log.log(`${item.id}	${item.todo_group_name}`);
	}
}