'use strict';

var crypto = require('crypto');

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

exports.random = function(){
	
};

/**
 * random number
 * 	length
 */
exports.randomNumber = function(length){
	length = length || 4;
	
	return Math.floor(Math.random()*Math.pow(10, length));
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