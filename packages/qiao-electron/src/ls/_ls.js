'use strict';

// path
import path from 'path';

// electron
import { app } from 'electron';

// c
import { c } from 'qiao-config';

/**
 * ls
 * @returns 
 */
export const ls = () => {
    const userDataPath = app.getPath('userData');
    const configPath = path.resolve(userDataPath, './electron.config');
    const config = c(configPath);

    return config;
};