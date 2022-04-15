'use strict';

// path
import path from 'path';

// electron
import { app } from 'electron';

// qiao-log
import { getLogger } from 'qiao-log';

/**
 * logInit
 * @returns 
 */
export const logInit = () => {
    const logsPath = app.getPath('logs');
    const logPath = path.resolve(logsPath, './electron.log');

    return getLogger(logPath);
};