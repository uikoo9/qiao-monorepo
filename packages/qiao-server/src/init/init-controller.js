// qiao
import { lsdir } from 'qiao-file';

/**
 * init controller
 */
export default (app, options) => {
    // app controller
    const serverFiles = lsdir(process.cwd() + '/');
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        if(/Controller\.js$/.test(file)) require(file)(app);
    });

    // other controller
    if(options.modules){
        options.modules.forEach((init) => {
            init(app);
        });
    }
};