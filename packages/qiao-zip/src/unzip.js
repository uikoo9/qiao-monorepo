// adm
import admZip from 'adm-zip';

// iconv
import iconv from 'iconv-lite';

// fs
import { isExists } from 'qiao-file';

/**
 * unzip
 * @param {*} zipFile
 * @param {*} destFolder
 */
export const unzip = async (zipFile, destFolder) => {
  console.log();
  console.log('qiao-zip / unzip');
  console.log('qiao-zip / unzip / src', zipFile);
  console.log('qiao-zip / unzip / dest', destFolder);

  // check
  const zipFileExists = await isExists(zipFile);
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
