'use strict';

// piing
var q = require('qiao-ping');

// domains
var domains = [
	'tmall.com',
	'baidu.com',
	'qq.com',
	'taobao.com'
];

/**
 * is online
 * 	strictMode, default is false
 */
exports.isOnline = async function(strictMode){
	var res = await pingDomains(domains);
	if(!res || res.length != domains.length) throw new Error('no res');

	var tmallRes 	= res[0];
	var baiduRes 	= res[1];
	var qqRes 		= res[2];
	var taobaoRes	= res[3];
	if(strictMode){
		if(tmallRes.alive && baiduRes.alive && qqRes.alive && taobaoRes.alive){
			return 'online';
		}else{
			return 'offline';
		}
	}else{
		if(tmallRes.alive || baiduRes.alive || qqRes.alive || taobaoRes.alive){
			return 'online';
		}else{
			return 'offline';
		}
	}
};

// ping domains
async function pingDomains(hosts){
	var res = [];
	if(!hosts || !hosts.length) return res;

	for(var i=0; i<hosts.length; i++){
		var r = await q.ping(hosts[i]);
		res.push({
			host	: r.host,
			alive	: r.alive,
			time	: r.time
		});
	}

	return res;
}

// offline to online
var o = require('offline-to-online');

/**
 * offline to online
 *  callback
 *  time
 */
exports.offlineToOnline = function(callback, time){
    o.offlineToOnline(exports.isOnline, callback, time);
};