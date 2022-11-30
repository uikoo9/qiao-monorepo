'use strict';

// path
import path from 'path';

// electron
import { app } from 'electron';

// c
import q from 'qiao-config';

/**
 * ls
 * @returns
 */
export const ls = () => {
  const userDataPath = app.getPath('userData');
  const configPath = path.resolve(userDataPath, './electron.config');
  const config = q(configPath);

  return config;
};
