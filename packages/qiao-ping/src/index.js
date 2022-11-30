// ping
import p from 'ping';

/**
 * ping
 * 	host
 * 	config, https://www.npmjs.com/package/ping#support-configuration
 * 	return res, https://www.npmjs.com/package/ping#output-specification
 */
export const ping = (host, config) => {
  return p.promise.probe(host, config || {});
};
