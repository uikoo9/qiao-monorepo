'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var q = require('qiao-ajax');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var q__default = /*#__PURE__*/_interopDefaultLegacy(q);

const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

// urls
const hipUrl	= 'http://icanhazip.com/';
const hipErr 	= new Error('get ip by icanhazip failed');

// not ip
const notIpErr$1	= new Error('not ip');

/**
 * getIpByIcanhazip
 * @returns 
 */
const getIpByIcanhazip = () => {
	return new Promise(function(resolve, reject){
		q__default["default"].get(hipUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(hipErr);
				}
	
				// ip
				const ip = res.data.replace(/\n/g, '');
				if(!ip) return reject(hipErr);
	
				const isIp = ipRegex.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr$1);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

// urls
const sohuUrl = 'http://txt.go.sohu.com/ip/soip';
const sohuErr = new Error('get ip by sohu failed');

// not ip
const notIpErr= new Error('not ip');

/**
 * getIpBySohu
 * @returns 
 */
const getIpBySohu = () => {
	return new Promise(function(resolve, reject){
		q__default["default"].get(sohuUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(sohuErr);
				}
	
				// ip
				const s 	= res.data.match(/\d+\.\d+\.\d+\.\d+/g);
				const ip 	= s && s.length ? s[0] : null;
				if(!ip) return reject(sohuErr);
	
				const isIp 	= ipRegex.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

/**
 * getIp
 * @returns 
 */
const getIp = async () => {
	let ip;
	
	// by sohu
	try{
		ip = await getIpBySohu();
	}catch(e1){
		// by icanhazip
		try{
			ip = await getIpByIcanhazip();
		}catch(e2){
			console.log(e1, e2);
		}
	}
	
	return ip;
};

exports.getIp = getIp;
exports.getIpByIcanhazip = getIpByIcanhazip;
exports.getIpBySohu = getIpBySohu;
