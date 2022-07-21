// qiao
import { 
    file as qfile,
    user as quser,
} from '../_qiao.js';

/**
 * init controller
 * @param {*} app 
 */
export default (app) => {
    // qiao-server-user
    quser.init(app);

    // other controller
    const serverFiles = qfile.lsdir(process.cwd() + '/');
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        if(/Controller\.js$/.test(file)) require(file)(app);
    });
};