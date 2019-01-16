'use strict';

var crypto = require('crypto');

/**
 * md5
 * 	data
 * 	encoding	base64 or hex
 */
exports.md5 = function(data, encoding){
	return crypto.createHash('md5').update(data).digest(encoding || 'base64');
};

/**
 * uuid
 * 	type	1,3,4,5,default:4
 */
exports.uuid = function(type){
	// type
	type = type || 4;
	
	// 1
	if(type == 1){
		var uuidv1 = require('uuid/v1');
		return uuidv1();
	}
	
	// 3
	if(type == 3){
		var uuidv3 = require('uuid/v3');
		return uuidv3('insistime.com', uuidv3.DNS);
	}
	
	// 4
	if(type == 4){
		var uuidv4 = require('uuid/v4');
		return uuidv4();
	}
	
	// 5
	if(type == 5){
		var uuidv5 = require('uuid/v5');
		return uuidv5('insistime.com', uuidv5.DNS);
	}
};

/**
 * random
 * 	type	default: 0
 * 		0 : number
 * 		1 : lower letter
 * 		2 : upper letter
 * 		3 : all letter
 * 		4 : all letter and number
 * 	length	default: 4
 */
exports.random = function(type, length){
	type 	= type || 0;
	length	= length || 4;
	
	if(type == 0) return exports.randomNumber(length);
	if(type == 1) return exports.randomLetterLower(length);
	if(type == 2) return exports.randomLetterUpper(length);
	if(type == 3) return exports.randomLetterAll(length);
	if(type == 4) return exports.randomLetterNumber(length);
};

/**
 * random number
 * 	length
 */
exports.randomNumber = function(length){
	var seed = '0123456789';

	return exports.randomSeed(seed, length || 4);
};

/**
 * random letter lower
 * 	length
 */
exports.randomLetterLower = function(length){
	var seed = 'abcdefghljklmnopqrstuvwxyz';

	return exports.randomSeed(seed, length || 4);
};

/**
 * random letter upper
 * 	length
 */
exports.randomLetterUpper = function(length){
	var seed = 'ABCDEFGHLJKLMNOPQRSTUVWXYZ';
	
	return exports.randomSeed(seed, length || 4);
};

/**
 * random letter all
 * 	length
 */
exports.randomLetterAll = function(length){
	var seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ';
	
	return exports.randomSeed(seed, length || 4);
};

/**
 * random letter number
 * 	length
 */
exports.randomLetterNumber = function(length){
	var seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ0123456789';
	
	return exports.randomSeed(seed, length || 4);
};

/**
 * random seed
 * 	length
 */
exports.randomSeed = function(seed, len){
	if(!seed || seed <= 1 || len < 1) return;
	
	var r = [];
	for(var i=0; i<len; i++) r.push(exports.randomBySeed(seed));
	
	return r.join('');
};

/**
 * random by seed
 */
exports.randomBySeed = function(seed){
	if(!seed || seed <= 1) return null;
	
	return seed.charAt(exports.randomIn(0, seed.length - 1));
};

/**
 * random in
 * 	min
 * 	max
 */
exports.randomIn = function(min, max){
	return Math.floor( Math.random() * ( max - min + 1 ) + min );
};

/**
 * aes encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
exports.AESEncrypt = function(data, key, iv, encoding){
	// check
	if(!data || !key || key.length != 32) return;
	
	// vars
	var cipherIv		= iv || '';
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	
	return crypt('en', 'aes-256-ecb', key, cipherIv, data, clearEncoding, cipherEncoding);
};

/**
 * aes decrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
exports.AESDecrypt = function(data, key, iv, encoding){
	// check
	if(!data || !key || key.length != 32) return;
	
	// vars
	var cipherIv		= iv || '';
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	
	return crypt('de', 'aes-256-ecb', key, cipherIv, data, clearEncoding, cipherEncoding);
};

/**
 * 3des encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
exports.TDESEncrypt = function(data, key, iv, encoding){
	// check
	if(!data || !key || key.length != 24) return;
	
	// vars
	var cipherIv		= iv || '';
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	
	return crypt('en', 'des-ede3', key, cipherIv, data, clearEncoding, cipherEncoding);
};

/**
 * 3des decrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
exports.TDESDecrypt = function(data, key, iv, encoding){
	// check
	if(!data || !key || key.length != 24) return;
	
	// vars
	var cipherIv		= iv || '';
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	
	return crypt('de', 'des-ede3', key, cipherIv, data, clearEncoding, cipherEncoding);
};

// crypt
function crypt(type, method, key, iv, data, clearEncoding, cipherEncoding){
	if(type == 'en'){// encrypt
		// cipher
		var cipher = crypto.createCipheriv(method, key, iv);
		cipher.setAutoPadding(true);
		
		// crypt
		var chunks 	= [];
		chunks.push(cipher.update(data, clearEncoding, cipherEncoding));
		chunks.push(cipher.final(cipherEncoding));
		
		return chunks.join('');
	}else{// decrypt
		// decipher
		var decipher = crypto.createDecipheriv(method, key, iv);
		decipher.setAutoPadding(true);
		
		// decrypt
		var chunks 	= [];
		chunks.push(decipher.update(data, cipherEncoding, clearEncoding));
		chunks.push(decipher.final(clearEncoding));
		
		return chunks.join('');
	}
}