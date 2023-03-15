'use strict';

var admZip = require('adm-zip');
var iconv = require('iconv-lite');
var qiaoFile = require('qiao-file');
var archiver = require('archiver');

// adm

/**
 * unzip
 * @param {*} zipFile
 * @param {*} destFolder
 */
const unzip = async (zipFile, destFolder) => {
  console.log();
  console.log('qiao-zip / unzip');
  console.log('qiao-zip / unzip / src', zipFile);
  console.log('qiao-zip / unzip / dest', destFolder);

  // check
  const zipFileExists = await qiaoFile.isExists(zipFile);
  if (!zipFileExists) {
    console.log('qiao-zip / unzip / error: zip file not exists');
    return;
  }

  // zip
  const zip = new admZip(zipFile);

  // iconv
  const zipEntries = zip.getEntries();
  for (let i = 0; i < zipEntries.length; i++) {
    const entry = zipEntries[i];
    entry.entryName = iconv.decode(entry.rawEntryName, 'gbk');
  }

  // e
  zip.extractAllTo(destFolder, true);

  // r
  console.log('qiao-zip / unzip / success');
  console.log();
  return true;
};

// archiver

/**
 * zip
 * @param {*} src
 * @param {*} dest
 * @param {*} subdir
 * @returns
 */
const zip = async (src, dest, subdir) => {
  // check ext
  const ext = qiaoFile.extname(dest);
  if (ext !== '.zip') throw new Error('dest zip not end with .zip');

  // mkdir
  await qiaoFile.mkdir(qiaoFile.path.dirname(dest));

  // isdir
  const srcIsDir = await qiaoFile.isDir(src);

  // return
  return new Promise((resolve, reject) => {
    // init
    const output = qiaoFile.fs.createWriteStream(dest);
    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

    // on
    output.on('close', () => {
      resolve(true);
    });
    archive.on('error', (err) => {
      reject(err);
    });

    // zip
    archive.pipe(output);
    if (srcIsDir) {
      archive.directory(src, !!subdir);
    } else {
      archive.file(src, { name: qiaoFile.path.basename(src) });
    }
    archive.finalize();
  });
};

exports.unzip = unzip;
exports.zip = zip;
