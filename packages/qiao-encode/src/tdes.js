// crypt
import { crypt } from './_crypt.js';

/**
 * 3des encrypt
 * 	data
 * 	key
 * 	iv
 * 	encoding
 */
export const TDESEncrypt = (data, key, iv, encoding) => {
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
export const TDESDecrypt = (data, key, iv, encoding) => {
  // check
  if (!data || !key || key.length != 24) return;

  // vars
  const cipherIv = iv || '';
  const clearEncoding = 'utf8';
  const cipherEncoding = encoding || 'base64';

  return crypt('de', 'des-ede3', key, cipherIv, data, clearEncoding, cipherEncoding);
};
