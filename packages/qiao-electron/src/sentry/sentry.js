// sentry
import { init } from '@sentry/electron';

/**
 * sentry init
 * @param {*} options 
 */
export const sentryInit = (options) => {
  // check
  if(!options || !options.dsn) return;

  // init
  init(options);
};