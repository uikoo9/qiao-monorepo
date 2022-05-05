'use strict';

// electron
import { dialog } from 'electron';

/**
 * dialogOpenFile
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options 
 * @returns 
 */
export const dialogOpenFile = async (options) => {
    // opt
    let opt = options || {};

    // properties
    opt.properties = opt.properties || ['openFile'];

    // win
    const win = opt.win;

    // return
    return win ? await dialog.showOpenDialog(win, opt) : await dialog.showOpenDialog(opt);
};

/**
 * dialogOpenFolder
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options 
 * @returns 
 */
export const dialogOpenFolder = async (options) => {
    // opt
    let opt = options || {};

    // properties
    opt.properties = opt.properties || ['openDirectory'];

    // win
    const win = opt.win;

    // return
    return win ? await dialog.showOpenDialog(win, opt) : await dialog.showOpenDialog(opt);
};