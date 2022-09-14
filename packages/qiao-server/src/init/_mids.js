// qiao
import { danger } from 'qiao-json';

/**
 * cross domain
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const crossDomain = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', '*');

    next();
};

/**
 * check path
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const checkPath = async (req, res, next) => {
    // path
    const path = req.path;

    // normal visit
    let normalVisit = false;
    const normalVisitPath = global.config.paths;
    for (let i = 0; i < normalVisitPath.length; i++) {
        if (path == normalVisitPath[i]) normalVisit = true;
        if (checkRegularPath(path, normalVisitPath[i])) normalVisit = true;
    }
    if (normalVisit) req.checkPath = true;

    // return
    next();
};

// check regular path
const checkRegularPath = (reqPath, configPath) => {
    // not regular path
    if (!reqPath || !configPath || configPath.indexOf('*') < 0) return;
    
    // check
    const configFinalPath = configPath.split('*')[0];
    return reqPath.indexOf(configFinalPath) > -1;
};

/**
 * check final
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const checkFinal = (req, res, next) => {
    if (req.checkPath) {
        next();
        return;
    }

    res.send(danger('非法路径！'));
};