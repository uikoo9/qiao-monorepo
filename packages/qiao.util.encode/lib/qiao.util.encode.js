'use strict';

var crypto = require('crypto');

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