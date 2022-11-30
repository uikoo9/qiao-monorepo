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
  return await openDialog(options, ['openFile']);
};

/**
 * dialogOpenFolder
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options
 * @returns
 */
export const dialogOpenFolder = async (options) => {
  return await openDialog(options, ['openDirectory']);
};

/**
 * dialogOpenFileAndFolder
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options
 * @returns
 */
export const dialogOpenFileAndFolder = async (options) => {
  return await openDialog(options, ['openFile', 'openDirectory']);
};

// openDialog
async function openDialog(options, defaultProps) {
  // opt
  let opt = options || {};

  // properties
  opt.properties = opt.properties || defaultProps;

  // win
  const win = opt.win;

  // filter
  if (opt.files) {
    opt.filters = [
      {
        name: 'files',
        extensions: opt.files,
      },
    ];
    delete opt.files;
  }

  // return
  return win ? await dialog.showOpenDialog(win, opt) : await dialog.showOpenDialog(opt);
}
