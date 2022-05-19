// qiao
import { file as qfile } from '../_qiao.js';

/**
 * init controller
 * @param {*} app 
 */
export default (app) => {
    const serverFiles = qfile.lsdir(process.cwd() + '/');
    serverFiles.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        if(!/node_modules/.test(file) && /Controller\.js$/.test(file)) require(file)(app);
    });
};