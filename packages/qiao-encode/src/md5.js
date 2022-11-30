// crypto
import crypto from 'crypto';

/**
 * md5
 * 	data
 * 	encoding	base64 or hex
 */
export const md5 = (data, encoding) => {
  return crypto
    .createHash('md5')
    .update(data)
    .digest(encoding || 'base64');
};
