// crypto
import crypto from 'crypto';

// crypt
export const crypt = (type, method, key, iv, data, clearEncoding, cipherEncoding) => {
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
