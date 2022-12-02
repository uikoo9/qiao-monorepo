'use strict';

var electron = require('electron');
var qiaoFile = require('qiao-file');
var path = require('path');
var qiaoLog = require('qiao-log');
var q = require('qiao-config');

/**
 * app constant
 */
const IPC_APP_GET_VERSION = 'ipc-app-get-version';

/**
 * appIPCInit
 */
const appIPCInit = (version) => {
  // ipc get app version
  electron.ipcMain.handle(IPC_APP_GET_VERSION, () => {
    return version;
  });
};

/**
 * darkmode constant
 */
const IPC_DARKMODE_CHANGE = 'ipc-darkmode-change';
const IPC_DARKMODE_GET = 'ipc-darkmode-get';

/**
 * darkModeIPCInit
 */
const darkModeIPCInit = () => {
  // native theme updated
  electron.nativeTheme.on('updated', () => {
    const wins = electron.BrowserWindow.getAllWindows();
    for (let win of wins) {
      win.webContents.send(IPC_DARKMODE_CHANGE, electron.nativeTheme.shouldUseDarkColors);
    }
  });

  // ipc darkmode get
  electron.ipcMain.handle(IPC_DARKMODE_GET, () => {
    return electron.nativeTheme.shouldUseDarkColors;
  });
};

/**
 * dialog constant
 */
const IPC_DIALOG_OPEN_FILE = 'ipc-dialog-open-file';
const IPC_DIALOG_OPEN_FOLDER = 'ipc-dialog-open-folder';
const IPC_DIALOG_OPEN_FILE_FOLDER = 'ipc-dialog-open-file-folder';

/**
 * dialogOpenFile
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options
 * @returns
 */
const dialogOpenFile = async (options) => {
  return await openDialog(options, ['openFile']);
};

/**
 * dialogOpenFolder
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options
 * @returns
 */
const dialogOpenFolder = async (options) => {
  return await openDialog(options, ['openDirectory']);
};

/**
 * dialogOpenFileAndFolder
 *  https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @param {*} options
 * @returns
 */
const dialogOpenFileAndFolder = async (options) => {
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
  return win ? await electron.dialog.showOpenDialog(win, opt) : await electron.dialog.showOpenDialog(opt);
}

/**
 * dialogIPCInit
 */
const dialogIPCInit = () => {
  // ipc dialog open file
  electron.ipcMain.handle(IPC_DIALOG_OPEN_FILE, async (event, options) => {
    return await dialogOpenFile(options);
  });

  // ipc dialog open folder
  electron.ipcMain.handle(IPC_DIALOG_OPEN_FOLDER, async (event, options) => {
    return await dialogOpenFolder(options);
  });

  // ipc dialog open file and folder
  electron.ipcMain.handle(IPC_DIALOG_OPEN_FILE_FOLDER, async (event, options) => {
    return await dialogOpenFileAndFolder(options);
  });
};

/**
 * fs constant
 */
const IPC_FS_RM = 'ipc-fs-rm';
const IPC_FS_MKDIR = 'ipc-fs-mkdir';
const IPC_FS_RENAME = 'ipc-fs-rename';
const IPC_FS_GET_TREE = 'ipc-fs-get-tree';
const IPC_FS_READ_FILE = 'ipc-fs-read-file';
const IPC_FS_WRITE_FILE = 'ipc-fs-write-file';

/**
 * fsIPCInit
 */
const fsIPCInit = () => {
  // ipc fs rm
  electron.ipcMain.handle(IPC_FS_RM, (event, rmPath) => {
    if (!rmPath) return;

    return qiaoFile.rm(rmPath);
  });

  // ipc fs mkdir
  electron.ipcMain.handle(IPC_FS_MKDIR, (event, dir) => {
    if (!dir) return;

    return qiaoFile.mkdir(dir);
  });

  // ipc fs rename
  electron.ipcMain.handle(IPC_FS_RENAME, (event, oldPath, newPath) => {
    if (!oldPath || !newPath) return;

    return qiaoFile.mv(oldPath, newPath);
  });

  // ipc fs get tree
  electron.ipcMain.handle(IPC_FS_GET_TREE, (event, dir, ignores) => {
    if (!dir) return;

    return qiaoFile.lstree(dir, ignores);
  });

  // ipc fs read file
  electron.ipcMain.handle(IPC_FS_READ_FILE, (event, filePath) => {
    if (!filePath) return;

    return qiaoFile.readFile(filePath);
  });

  // ipc fs write file
  electron.ipcMain.handle(IPC_FS_WRITE_FILE, (event, filePath, fileData) => {
    if (!filePath) return;

    return qiaoFile.writeFile(filePath, fileData);
  });
};

// path

/**
 * logInit
 * @returns
 */
const logInit = () => {
  const logsPath = electron.app.getPath('logs');
  const logPath = path.resolve(logsPath, './electron.log');

  // config
  const config = {
    appenders: ['stdoutLog', 'datefileLog'],
    fileName: logPath,
  };

  return qiaoLog.getLogger(config);
};

/**
 * log constant
 */
const IPC_LOG = 'ipc-log';

/**
 * logIPCInit
 */
const logIPCInit = () => {
  // Logger
  const Logger = logInit();

  // ipc log
  electron.ipcMain.on(IPC_LOG, (event, arg) => {
    // check
    if (!arg || !arg.msg) return;

    // log
    let type = arg.type || 'info';
    if (type == 'info') Logger.info(arg.msg);
    if (type == 'warn') Logger.warn(arg.msg);
    if (type == 'error') Logger.error(arg.msg);
  });
};

/**
 * ls
 * @returns
 */
const ls = () => {
  const userDataPath = electron.app.getPath('userData');
  const configPath = path.resolve(userDataPath, './electron.config');
  const config = q(configPath);

  return config;
};

/**
 * ls constant
 */
const IPC_LS_ALL = 'ipc-ls-all';
const IPC_LS_GET = 'ipc-ls-get';
const IPC_LS_SET = 'ipc-ls-set';
const IPC_LS_DEL = 'ipc-ls-del';

/**
 * lsIPCInit
 */
const lsIPCInit = () => {
  const _ls = ls();

  // ipc ls all
  electron.ipcMain.handle(IPC_LS_ALL, () => {
    return _ls.all();
  });

  // ipc ls get
  electron.ipcMain.handle(IPC_LS_GET, (event, key) => {
    return _ls.config(key);
  });

  // ipc ls set
  electron.ipcMain.handle(IPC_LS_SET, (event, args) => {
    // check
    if (!args || !args.key || !args.value) return;

    // set
    _ls.config(args.key, args.value);

    // return
    return true;
  });

  // ipc ls del
  electron.ipcMain.handle(IPC_LS_DEL, (event, key) => {
    // del
    _ls.config(key, null);

    //return
    return true;
  });
};

/**
 * shell constant
 */
const IPC_SHELL_OPEN_URL = 'ipc-shell-open-url';
const IPC_SHELL_SHOW_PATH = 'ipc-shell-show-path';

/**
 * shellOpenURL
 */
const shellOpenURL = (url) => {
  electron.shell.openExternal(url, { activate: true });
};

/**
 *
 * @param {*} path
 */
const shellShowPath = (path) => {
  try {
    const stat = qiaoFile.fs.statSync(path);
    if (stat.isDirectory()) {
      electron.shell.openPath(path);
    } else {
      electron.shell.showItemInFolder(path);
    }
  } catch (e) {
    console.log(e);
  }
};

/**
 * shellIPCInit
 */
const shellIPCInit = () => {
  // ipc shell open url
  electron.ipcMain.on(IPC_SHELL_OPEN_URL, (event, url) => {
    if (!url) return;

    shellOpenURL(url);
  });

  // ipc shell show path
  electron.ipcMain.on(IPC_SHELL_SHOW_PATH, (event, path) => {
    if (!path) return;

    shellShowPath(path);
  });
};

/**
 * shortcutInit
 */
const shortcutInit = () => {
  electron.app.on('will-quit', () => {
    electron.globalShortcut.unregisterAll();
  });
};

/**
 * window constant
 */
const IPC_WINDOW_RESIZE_TO = 'ipc-window-resize-to';

/**
 * windowIPCInit
 */
const windowIPCInit = () => {
  // ipc window resize to
  electron.ipcMain.on(IPC_WINDOW_RESIZE_TO, (event, width, height) => {
    if (!event || !event.sender || !width || !height) return;

    const win = electron.BrowserWindow.fromWebContents(event.sender);
    win.setSize(width, height);
  });
};

/**
 * ipcInit
 * @param {*} version
 */
const ipcInit = (version) => {
  // app
  if (version) appIPCInit(version);

  // others
  darkModeIPCInit();
  dialogIPCInit();
  fsIPCInit();
  logIPCInit();
  lsIPCInit();
  shellIPCInit();
  windowIPCInit();

  // shortcut quit init
  shortcutInit();
};

/**
 * appGetVersionIPC
 * @returns version
 */
const appGetVersionIPC = async () => {
  return await electron.ipcRenderer.invoke(IPC_APP_GET_VERSION);
};

/**
 * darkModeChangeIPC
 */
const darkModeChangeIPC = (callback) => {
  electron.ipcRenderer.on(IPC_DARKMODE_CHANGE, (e, msg) => {
    if (callback) callback(msg);
  });
};

/**
 * darkModeGetIPC
 * @returns
 */
const darkModeGetIPC = async () => {
  return await electron.ipcRenderer.invoke(IPC_DARKMODE_GET);
};

/**
 * dialogOpenFolderIPC
 * @param {*} options
 */
const dialogOpenFolderIPC = async (options) => {
  return await electron.ipcRenderer.invoke(IPC_DIALOG_OPEN_FOLDER, options);
};

/**
 * fsRmIPC
 */
const fsRmIPC = async (rmPath) => {
  return await electron.ipcRenderer.invoke(IPC_FS_RM, rmPath);
};

/**
 * fsMkdirIPC
 */
const fsMkdirIPC = async (dir) => {
  return await electron.ipcRenderer.invoke(IPC_FS_MKDIR, dir);
};

/**
 * fsRenameIPC
 */
const fsRenameIPC = async (oldPath, newPath) => {
  return await electron.ipcRenderer.invoke(IPC_FS_RENAME, oldPath, newPath);
};

/**
 * fsGetTreeIPC
 */
const fsGetTreeIPC = async (dir, ignores) => {
  return await electron.ipcRenderer.invoke(IPC_FS_GET_TREE, dir, ignores);
};

/**
 * fsReadFileIPC
 */
const fsReadFileIPC = async (filePath) => {
  return await electron.ipcRenderer.invoke(IPC_FS_READ_FILE, filePath);
};

/**
 * fsWriteFileIPC
 */
const fsWriteFileIPC = async (filePath, fileData) => {
  return await electron.ipcRenderer.invoke(IPC_FS_WRITE_FILE, filePath, fileData);
};

/**
 * logIPC
 * @param {*} msg
 * @param {*} type info,warn,error
 */
const logIPC = (msg, type) => {
  electron.ipcRenderer.send(IPC_LOG, { msg, type });
};

/**
 * lsAllIPC
 */
const lsAllIPC = async () => {
  return await electron.ipcRenderer.invoke(IPC_LS_ALL);
};

/**
 * lsGetIPC
 */
const lsGetIPC = async (key) => {
  return await electron.ipcRenderer.invoke(IPC_LS_GET, key);
};

/**
 * lsSetIPC
 */
const lsSetIPC = async (key, value) => {
  return await electron.ipcRenderer.invoke(IPC_LS_SET, { key, value });
};

/**
 * lsDelIPC
 */
const lsDelIPC = async (key) => {
  return await electron.ipcRenderer.invoke(IPC_LS_DEL, key);
};

/**
 * shellOpenUrlIPC
 * @param {*} url
 */
const shellOpenUrlIPC = (url) => {
  electron.ipcRenderer.send(IPC_SHELL_OPEN_URL, url);
};

/**
 * shellShowPathIPC
 * @param {*} path
 */
const shellShowPathIPC = (path) => {
  electron.ipcRenderer.send(IPC_SHELL_SHOW_PATH, path);
};

/**
 * shortcut constant
 */
const IPC_SHORTCUT_GLOBAL = 'ipc-shortcut-global';

/**
 * shortcutGlobalIPC
 * @returns res
 */
const shortcutGlobalIPC = async (shortcutKey, shortcutCallbackName) => {
  return await electron.ipcRenderer.invoke(IPC_SHORTCUT_GLOBAL, shortcutKey, shortcutCallbackName);
};

/**
 * windowResizeIPC
 * @param {*} width
 * @param {*} height
 */
const windowResizeIPC = (width, height) => {
  electron.ipcRenderer.send(IPC_WINDOW_RESIZE_TO, width, height);
};

/**
 * getPreloads
 * @param {*} customPreloads
 * @returns
 */
const getPreloads = (customPreloads) => {
  const defaultPreloads = {
    appGetVersionIPC,
    darkModeChangeIPC,
    darkModeGetIPC,
    dialogOpenFolderIPC,
    fsRmIPC,
    fsMkdirIPC,
    fsRenameIPC,
    fsGetTreeIPC,
    fsReadFileIPC,
    fsWriteFileIPC,
    logIPC,
    lsAllIPC,
    lsGetIPC,
    lsSetIPC,
    lsDelIPC,
    shellOpenUrlIPC,
    shellShowPathIPC,
    shortcutGlobalIPC,
    windowResizeIPC,
  };

  return { ...defaultPreloads, ...customPreloads };
};

/**
 * setAboutVersion
 * @param {*} version
 */
const setAboutVersion = (version) => {
  let v = version || '0.0.1';
  electron.app.setAboutPanelOptions({
    applicationVersion: v,
    version: v,
  });
};

/**
 * setApplicationMenu
 * @param {*} menus 菜单数组
 */
const setApplicationMenu = (menus) => {
  const defaultMenus = [
    {
      label: 'app',
      submenu: [
        {
          label: '关于',
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          label: '隐藏',
          role: 'hide',
        },
        {
          label: '隐藏其他',
          role: 'hideOthers',
        },
        {
          type: 'separator',
        },
        {
          label: '退出',
          role: 'quit',
        },
      ],
    },
    {
      label: '编辑',
      submenu: [
        {
          label: '撤销',
          role: 'undo',
        },
        {
          label: '重做',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: '剪切',
          role: 'cut',
        },
        {
          label: '复制',
          role: 'copy',
        },
        {
          label: '粘贴',
          role: 'paste',
        },
        {
          label: '删除',
          role: 'delete',
        },
        {
          label: '选中所有',
          role: 'selectAll',
        },
      ],
    },
    {
      label: '窗口',
      submenu: [
        {
          label: '最小化',
          role: 'minimize',
        },
        {
          label: '关闭',
          role: 'close',
        },
        {
          label: '自动全屏',
          role: 'togglefullscreen',
        },
      ],
    },
    {
      label: '调试',
      submenu: [
        {
          label: '调试',
          role: 'toggleDevTools',
        },
      ],
    },
  ];

  // final menus
  let finalMenus = menus && menus.length ? menus : defaultMenus;

  // set menus
  electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate(finalMenus));
};

/**
 * shortcutReg
 * @param {*} shortcutKey
 * @param {*} shortcutCallback
 */
const shortcutReg = (shortcutKey, shortcutCallback) => {
  if (!shortcutKey || !shortcutCallback) return;

  return electron.globalShortcut.register(shortcutKey, shortcutCallback);
};

/**
 * shortcutUnReg
 * @param {*} shortcutKey
 */
const shortcutUnReg = (shortcutKey) => {
  if (!shortcutKey) return;

  return electron.globalShortcut.unregister(shortcutKey);
};

/**
 * get window options
 * @param {*} options
 * @param {*} supportNode
 * @param {*} isDev
 * @returns
 */
const getWindowOptions = (options, supportNode, isDev) => {
  // opt
  let opt = options || {};

  // support node
  if (supportNode) {
    let webPreferences = opt.webPreferences || {};
    webPreferences.nodeIntegration = true;
    webPreferences.contextIsolation = false;

    opt.webPreferences = webPreferences;
  }

  // is dev
  if (isDev) {
    let webPreferences = opt.webPreferences || {};
    webPreferences.webSecurity = false;

    opt.webPreferences = webPreferences;
  }

  // return
  return opt;
};

/**
 * windowOpenByFile
 * @param {*} filePath
 * @param {*} options
 * @param {*} supportNode
 */
function windowOpenByFile(filePath, options, supportNode) {
  // check
  if (!filePath) throw new Error('need filePath params');

  // opt
  const opt = getWindowOptions(options, supportNode);

  // win
  const win = new electron.BrowserWindow(opt);

  // show false
  if (opt.show === false) {
    win.once('ready-to-show', function () {
      win.show();
    });
  }

  // load file
  win.loadFile(filePath);

  // return
  return win;
}

/**
 * windowOpenByUrl
 * @param {*} url
 * @param {*} options
 * @param {*} supportNode
 * @param {*} isDev
 */
function windowOpenByUrl(url, options, supportNode, isDev) {
  // check
  if (!url) throw new Error('need url params');

  // opt
  const opt = getWindowOptions(options, supportNode, isDev);

  // win
  const win = new electron.BrowserWindow(opt);
  if (isDev) win.webContents.openDevTools();

  // load url
  win.loadURL(url);

  // return
  return win;
}

/**
 * windowOpenByUrlAndFile
 * @param {*} urlPath
 * @param {*} filePath
 * @param {*} options
 * @returns
 */
function windowOpenByUrlAndFile(urlPath, filePath, options) {
  // opt
  let opt = options || {};

  // dev
  const env = process.argv && process.argv.length > 2 ? process.argv[2] : null;
  if (env == 'dev') return windowOpenByUrl(urlPath, opt, false, true);

  // file
  opt.show = false;
  return windowOpenByFile(filePath, opt);
}

/**
 * windowGetByEvent
 * @param {*} event
 * @returns
 */
function windowGetByEvent(event) {
  // check
  if (!event || !event.sender) return;

  // return
  return electron.BrowserWindow.fromWebContents(event.sender);
}

exports.dialogOpenFile = dialogOpenFile;
exports.dialogOpenFileAndFolder = dialogOpenFileAndFolder;
exports.dialogOpenFolder = dialogOpenFolder;
exports.getPreloads = getPreloads;
exports.ipcInit = ipcInit;
exports.logInit = logInit;
exports.ls = ls;
exports.setAboutVersion = setAboutVersion;
exports.setApplicationMenu = setApplicationMenu;
exports.shellOpenURL = shellOpenURL;
exports.shellShowPath = shellShowPath;
exports.shortcutReg = shortcutReg;
exports.shortcutUnReg = shortcutUnReg;
exports.windowGetByEvent = windowGetByEvent;
exports.windowOpenByFile = windowOpenByFile;
exports.windowOpenByUrl = windowOpenByUrl;
exports.windowOpenByUrlAndFile = windowOpenByUrlAndFile;
