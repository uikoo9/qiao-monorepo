'use strict';

var uuid$1 = require('uuid');
var crypto = require('crypto');

// uuid

/**
 * uuid
 * 	type	1,3,4,5,default:4
 */
const uuid = (type) => {
  // type
  type = type || 4;

  // 1
  if (type == 1) {
    return uuid$1.v1();
  }

  // 3
  if (type == 3) {
    return uuid$1.v3('insistime.com', uuid$1.v3.DNS);
  }

  // 4
  if (type == 4) {
    return uuid$1.v4();
  }

  // 5
  if (type == 5) {
    return uuid$1.v5('insistime.com', uuid$1.v5.DNS);
  }
};

/**
 * random number
 * 	length
 */
const randomNumber = (length) => {
  const seed = '0123456789';

  return randomSeed(seed, length || 4);
};

/**
 * random letter lower
 * 	length
 */
const randomLetterLower = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyz';

  return randomSeed(seed, length || 4);
};

/**
 * random letter upper
 * 	length
 */
const randomLetterUpper = (length) => {
  const seed = 'ABCDEFGHLJKLMNOPQRSTUVWXYZ';

  return randomSeed(seed, length || 4);
};

/**
 * random letter all
 * 	length
 */
const randomLetterAll = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ';

  return randomSeed(seed, length || 4);
};

/**
 * random letter number
 * 	length
 */
const randomLetterNumber = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ0123456789';

  return randomSeed(seed, length || 4);
};

/**
 * random seed
 * 	length
 */
const randomSeed = (seed, len) => {
  if (!seed || seed <= 1 || len < 1) return;

  const r = [];
  for (var i = 0; i < len; i++) r.push(randomBySeed(seed));

  return r.join('');
};

/**
 * random by seed
 */
const randomBySeed = (seed) => {
  if (!seed || seed <= 1) return null;

  return seed.charAt(randomIn(0, seed.length - 1));
};

/**
 * random in
 * 	min
 * 	max
 */
const randomIn = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// crypto

/**
 * md5
 * 	data
 * 	encoding	base64 or hex
 */
const md5 = (data, encoding) => {
  return crypto
    .createHash('md5')
    .update(data)
    .digest(encoding || 'base64');
};

// crypto

// crypt
const crypt = (type, method, key, iv, data, clearEncoding, cipherEncoding) => {
  if (type == 'en') {
    // encrypt
    // cipher
    const cipher = crypto.createCipheriv(method, key, iv);
    cipher.setAutoPadding(true);

    // crypt
    const chunks = [];
    chunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    chunks.push(cipher.final(cipherEncoding));

    return chunks.join('');
  } else {
    // decrypt
    // decipher
    const decipher = crypto.createDecipheriv(method, key, iv);
    decipher.setAutoPadding(true);

    // decrypt
    const chunks = [];
    chunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    chunks.push(decipher.final(clearEncoding));

    return chunks.join('');
  }
};

// crypt

/**
 * aes encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
const AESEncrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 32) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('en', 'aes-256-ecb', key, cipherIv, data, clearEncoding, cipherEncoding);
};

/**
 * aes decrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
const AESDecrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 32) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('de', 'aes-256-ecb', key, cipherIv, data, clearEncoding, cipherEncoding);
};

// crypt

/**
 * 3des encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
const TDESEncrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 24) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('en', 'des-ede3', key, cipherIv, data, clearEncoding, cipherEncoding);
};

/**
 * 3des decrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
const TDESDecrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 24) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('de', 'des-ede3', key, cipherIv, data, clearEncoding, cipherEncoding);
};

exports.AESDecrypt = AESDecrypt;
exports.AESEncrypt = AESEncrypt;
exports.TDESDecrypt = TDESDecrypt;
exports.TDESEncrypt = TDESEncrypt;
exports.md5 = md5;
exports.randomBySeed = randomBySeed;
exports.randomIn = randomIn;
exports.randomLetterAll = randomLetterAll;
exports.randomLetterLower = randomLetterLower;
exports.randomLetterNumber = randomLetterNumber;
exports.randomLetterUpper = randomLetterUpper;
exports.randomNumber = randomNumber;
exports.randomSeed = randomSeed;
exports.uuid = uuid;
