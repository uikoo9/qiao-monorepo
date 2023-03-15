// archiver
import archiver from 'archiver';

// fs
import { fs, path, extname, mkdir, isDir } from 'qiao-file';

/**
 * zip
 * @param {*} src 
 * @param {*} dest 
 * @param {*} subdir 
 * @returns 
 */
export const zip = async (src, dest, subdir) => {
  // check ext
  const ext = extname(dest);
  if (ext !== '.zip') throw new Error('dest zip not end with .zip');

  // mkdir
  await mkdir(path.dirname(dest));

  // isdir
  const srcIsDir = await isDir(src);

  // return
  return new Promise((resolve, reject) => {
    // init
    const output = fs.createWriteStream(dest);
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
      archive.file(src, { name: path.basename(src) });
    }
    archive.finalize();
  });
};
