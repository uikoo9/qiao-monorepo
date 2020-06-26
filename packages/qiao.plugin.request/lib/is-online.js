var ip      = require('./ip.js');
var ping    = require('./ping.js');

// is online
async function isOnline(){
	var hosts = ['baidu.com', 'qq.com', 'taobao.com'];
	var res = await pingDomains(hosts);

	var baiduping = res[0];
	var qqping = res[1];
	var taobaoping = res[2];

	if(!baiduping.alive && !qqping.alive && !taobaoping.alive){
		var hasIp = await ip.getIp();
		if(!hasIp) return 'offline';
	}

	if(baiduping.alive && qqping.alive && taobaoping.alive){
		var hasIp = await ip.getIp();
		if(hasIp) return 'online';
	}

	return null;
}

// ping domains
async function pingDomains(hosts){
	var res = [];
	if(!hosts || !hosts.length) return res;

	for(var i=0; i<hosts.length; i++){
		var r = await ping.ping(hosts[i]);
		res.push({
			host	: r.host,
			alive	: r.alive,
			time	: r.time
		});
	}

	return res;
}

exports.isOnline = isOnline;