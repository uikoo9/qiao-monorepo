// search
import search from 'libnpmsearch';

/**
 * searchPackages
 * @param {*} packageName
 * @param {*} options
 */
export const searchPackages = async (packageName, options) => {
  // check
  if (!packageName) return;

  // default options
  const defaultOptions = {
    limit: 3,
    sortBy: 'popularity',
  };

  // search
  return await search(packageName, options || defaultOptions);
};
