// q
const { cp } = require('../index.js');

// test
test('get extname', async () => {
  const folderPath = './src/';
  const cpFolderRes = await cp(folderPath, './__tests__/1/src');
  expect(cpFolderRes).toBeTruthy();

  const filePath = './index.js';
  const cpFileRes = await cp(filePath, './__tests__/1/index.js');
  expect(cpFileRes).toBeTruthy();
});
