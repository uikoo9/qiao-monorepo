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
	
	// iv
	iv = iv || '';
	
	// cipher
	var cipher 	= crypto.createCipheriv('aes-256-ecb', key, iv);
	cipher.setAutoPadding(true);
	
	// crypt
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	var cipherChunks 	= [];
	cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
	cipherChunks.push(cipher.final(cipherEncoding));
	
	return cipherChunks.join('');
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

	// iv
	iv = iv || '';
	
	// decipher
	var decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
	decipher.setAutoPadding(true);

	// decrypt
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	var cipherChunks 	= [];
	cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
	cipherChunks.push(decipher.final(clearEncoding));
	
	return cipherChunks.join('');
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
	
	// iv
	iv = iv || '';
	
	// cipher
	var cipher 	= crypto.createCipheriv('des-ede3', key, iv);
	cipher.setAutoPadding(true);
	
	// crypt
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	var cipherChunks 	= [];
	cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
	cipherChunks.push(cipher.final(cipherEncoding));
	
	return cipherChunks.join('');
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
	
	// iv
	iv = iv || '';
	
	// decipher
	var decipher = crypto.createDecipheriv('des-ede3', key, iv);
	decipher.setAutoPadding(true);

	// decrypt
	var clearEncoding 	= 'utf8';
	var cipherEncoding 	= encoding || 'base64';
	var cipherChunks 	= [];
	cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
	cipherChunks.push(decipher.final(clearEncoding));
	
	return cipherChunks.join('');
};