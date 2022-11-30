// crypt
import { crypt } from './_crypt.js';

/**
 * aes encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
export const AESEncrypt = (data, key, iv, encoding) => {
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
export const AESDecrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 32) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('de', 'aes-256-ecb', key, cipherIv, data, clearEncoding, cipherEncoding);
};
