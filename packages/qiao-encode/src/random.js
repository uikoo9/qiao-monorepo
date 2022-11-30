/**
 * random number
 * 	length
 */
export const randomNumber = (length) => {
  const seed = '0123456789';

  return randomSeed(seed, length || 4);
};

/**
 * random letter lower
 * 	length
 */
export const randomLetterLower = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyz';

  return randomSeed(seed, length || 4);
};

/**
 * random letter upper
 * 	length
 */
export const randomLetterUpper = (length) => {
  const seed = 'ABCDEFGHLJKLMNOPQRSTUVWXYZ';

  return randomSeed(seed, length || 4);
};

/**
 * random letter all
 * 	length
 */
export const randomLetterAll = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ';

  return randomSeed(seed, length || 4);
};

/**
 * random letter number
 * 	length
 */
export const randomLetterNumber = (length) => {
  const seed = 'abcdefghljklmnopqrstuvwxyzABCDEFGHLJKLMNOPQRSTUVWXYZ0123456789';

  return randomSeed(seed, length || 4);
};

/**
 * random seed
 * 	length
 */
export const randomSeed = (seed, len) => {
  if (!seed || seed <= 1 || len < 1) return;

  const r = [];
  for (var i = 0; i < len; i++) r.push(randomBySeed(seed));

  return r.join('');
};

/**
 * random by seed
 */
export const randomBySeed = (seed) => {
  if (!seed || seed <= 1) return null;

  return seed.charAt(randomIn(0, seed.length - 1));
};

/**
 * random in
 * 	min
 * 	max
 */
export const randomIn = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
