// path
import path from 'path';

// db
import db from './db.js';

/**
 * qiao config
 */
export default (filePath) => {
  // path
  const defaultPath = path.resolve(__dirname, './config.json');
  const finalPath = !filePath ? defaultPath : path.resolve(process.cwd(), filePath);

  // db
  return db(finalPath);
};
